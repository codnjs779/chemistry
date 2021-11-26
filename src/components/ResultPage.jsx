import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";

import axios from "axios";

import styled from "styled-components";
import { ButtonDesign } from "./InitialScreen";
import { InputBtnStyle } from "./MeinputPage";

const ResultPage = () => {
    const state = useSelector((state) => state);
    const shareUrl = "https://www.chemistry-test.co.kr/result";
    const [result, setResult] = useState();
    console.log(state);
    useEffect(() => {
        axios
            .post("https://dlsrksrndgkq.link/judgment", {
                me: state.data.meData[0],
                you: state.data.youData[0],
            })
            .then((res) => {
                setResult(res.data.result);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            }, []);

        return <></>;
    }, []);

    const resultContentsBox = () => {
        if (result !== undefined) {
            const mbtiContentResult = result.content.mbti;
            let resultChange = mbtiContentResult.replaceAll("me", result.name.meName);
            resultChange = resultChange.replaceAll("you", result.name.youName);

            const bloodContentResult = result.content.blood;
            let bloodChange = bloodContentResult.replaceAll("me", result.name.meName);
            bloodChange = bloodChange.replaceAll("you", result.name.youName);
            return (
                <>
                    <div className="scoreBox">
                        <div>
                            <h3>나와 상대의 궁합은?</h3>
                            <progress value={Math.ceil(result.score)} max="100"></progress>
                            <h1> {Math.ceil(result.score)}점</h1>
                        </div>

                        <div className="iconImgAndContent">
                            <div className="imgSet">
                                <img src={result.img.constellationImg} width="55px" alt="images"></img>

                                <div className="imgSetTitle">별자리</div>
                                <div className="imgSetScore">{result.individuallyScore.constellationScore}점</div>
                            </div>

                            <div className="imgSet">
                                <img src={result.img.zodiacSignImg} width="55px" alt="images"></img>
                                <div className="imgSetTitle">12지신</div>
                                <div className="imgSetScore">{result.individuallyScore.zodiacSignScore}점</div>
                            </div>

                            <div className="imgSet">
                                <img src={result.img.bloodImg} width="55px" alt="images"></img>
                                <div className="imgSetTitle">혈액형</div>
                                <div className="imgSetScore">{result.individuallyScore.bloodScore}점</div>
                            </div>

                            <div className="imgSet">
                                <img src={result.img.mbtiImg} width="55px" alt="images"></img>
                                <div className="imgSetTitle">MBTI</div>
                                <div className="imgSetScore">{result.individuallyScore.mbtiScore}점</div>
                            </div>
                        </div>
                    </div>

                    <div className="contentsBox">
                        <div>
                            <h3>결과해석</h3>
                            <div className="contentsBoxContents">
                                <div>{resultChange}</div>

                                <br />
                                <div>{result.content.zodiacSign}</div>

                                <br />
                                <div>{result.content.constellation}</div>

                                <br />
                                <div>{bloodChange}</div>
                            </div>
                        </div>
                    </div>
                    <InputBtnStyle>
                        <ButtonDesign>
                            <Link to="/">
                                <button type="submit" className="blackBtn">
                                    다시하기
                                </button>
                            </Link>
                            <CopyToClipboard text={shareUrl}>
                                <button
                                    className="yellowBtn"
                                    onClick={() => {
                                        alert("링크 복사가 완료되었습니다!");
                                    }}
                                >
                                    결과 링크 공유하기
                                </button>
                            </CopyToClipboard>
                        </ButtonDesign>
                    </InputBtnStyle>
                </>
            );
        }
    };

    return (
        <>
            <ResultStyle>{resultContentsBox()}</ResultStyle>
        </>
    );
};

const ResultStyle = styled.div`
    progress {
        position: relative;
        top: 40pt;
        height: 20pt;
        width: 200pt;
        left: 24pt;
        background-color: #2e8080;
    }

    progress[value]::-webkit-progress-value {
        background-image: -webkit-linear-gradient(-45deg, transparent 33%, rgba(0, 0, 0, 0.1) 33%, rgba(0, 0, 0, 0.1) 66%, transparent 66%),
            -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)), -webkit-linear-gradient(left, #09c, #f44);

        border-radius: 2px;
        background-size: 35px 20px, 100% 100%, 100% 100%;
    }

    .scoreBox {
        width: 350px;
        height: 230pt;
        background-color: rgb(255 255 255);
        border-radius: 13pt;
        box-shadow: 2px 2px 10px 2px #e2e0e0;
        position: relative;
        margin: auto;

        top: 24pt;
    }
    .scoreBox h3,
    h1 {
        font-weight: 600;
        left: 40px;
    }

    .scoreBox h3 {
        position: relative;
        left: 40px;
        top: 30px;
        font-size: 1.2rem;
    }
    .scoreBox h1 {
        position: relative;
        font-size: 2rem;
        top: 70px;
    }
    .contentsBox {
        width: 350px;
        height: 100%;
        padding-bottom: 100%;
        background-color: rgb(255 255 255);
        border-radius: 13pt;
        box-shadow: 2px 2px 10px 2px #e2e0e0;
        position: relative;
        top: 40pt;
        margin: auto;
    }
    .contentsBox h3 {
        position: relative;
        left: 25pt;
        top: 25pt;
        font-weight: 800;
    }

    .contentsBoxContents {
        width: 220pt;
        height: auto;
        position: relative;
        left: 25pt;
        top: 40pt;
        line-height: 20px;
    }
    .iconImgAndContent {
        display: flex;
        justify-content: space-around;
        margin-top: 80pt;
    }
    .iconImgAndContent img {
        margin-left: 7pt;
    }
    .imgSetTitle,
    .imgSetScore {
        left: 5pt;
        font-weight: bold;
        margin-left: 10pt;
        text-align: center;

        font-size: 10pt;
    }
    .imgSetScore {
        font-weight: 500;
    }
`;

export default ResultPage;
