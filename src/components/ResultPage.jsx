import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonDesign } from "./InitialScreen";
import backImg from "../img/0001.PNG";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const ResultPage = () => {
    const state = useSelector((state) => state);

    const [result, setResult] = useState();

    useEffect(() => {
        axios
            .post("https://dlsrksrndgkq.link/judgment", {
                me: state.data.meData[0],
                you: state.data.youData[0],
            })
            .then((res) => {
                setResult(res.data.result);
            })
            .catch((err) => {
                console.log(err);
            }, []);

        return <></>;
    }, []);
    console.log(result);
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
                                <img src={result.img.constellationImg} width="70px" alt="images"></img>

                                <div className="imgSetTitle">별자리</div>
                                <div className="imgSetScore">{result.individuallyScore.constellationScore}점</div>
                            </div>

                            <div className="imgSet">
                                <img src={result.img.zodiacSignImg} width="70px" alt="images"></img>
                                <div className="imgSetTitle">12지신</div>
                                <div className="imgSetScore">{result.individuallyScore.zodiacSignScore}점</div>
                            </div>

                            <div className="imgSet">
                                <img src={result.img.bloodImg} width="70px" alt="images"></img>
                                <div className="imgSetTitle">혈액형</div>
                                <div className="imgSetScore">{result.individuallyScore.bloodScore}점</div>
                            </div>

                            <div className="imgSet">
                                <img src={result.img.mbtiImg} width="70px" alt="images"></img>
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

                    <ResultButtonDesign>
                        <Link to="">
                            <button type="submit" className="blackBtn">
                                다시하기
                            </button>
                        </Link>

                        <button
                            className="yellowBtn"
                            onClick={() => {
                                alert("링크 복사가 완료되었습니다!");
                            }}
                        >
                            결과 링크 공유하기
                        </button>
                    </ResultButtonDesign>
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
    width: 375pt;
    height: 1800pt;
    margin: auto;

    background-image: url(${backImg});
    progress {
        position: relative;
        top: 40pt;
        height: 20pt;
        width: 280pt;
        left: 24pt;
    }
    .scoreBox {
        width: 341pt;
        height: 350pt;
        background-color: rgb(255 255 255);
        border-radius: 13pt;
        box-shadow: 2px 2px 10px 2px #e2e0e0;
        position: relative;
        left: 17pt;
        top: 24pt;
    }
    .scoreBox h3,
    h1 {
        position: relative;
        top: 37pt;
        left: 25pt;
    }

    .contentsBox {
        width: 341pt;
        height: 900pt;
        background-color: rgb(255 255 255);
        border-radius: 13pt;
        box-shadow: 2px 2px 10px 2px #e2e0e0;
        position: relative;
        top: 40pt;
        left: 17pt;
    }
    .contentsBox h3 {
        position: relative;
        left: 25pt;
        top: 33pt;
    }

    .contentsBoxContents {
        width: 300pt;
        position: relative;
        left: 25pt;
        top: 30pt;
    }
    .iconImgAndContent {
        display: flex;
        justify-content: space-around;
        margin-top: 130pt;
    }
    .iconImgAndContent img {
        margin-left: 10pt;
    }
    .imgSetTitle,
    .imgSetScore {
        left: 5pt;
        font-weight: bold;
        margin-left: 10pt;
        text-align: center;
    }
    .imgSetScore {
        font-weight: 500;
    }
`;

const ResultButtonDesign = styled.div`
    position: relative;
    top: 100pt;
    left: 17pt;

    .blackBtn,
    .yellowBtn {
        width: 341pt;
        height: 53pt;
        font-size: 18px;
        text-align: center;
        line-height: 22pt;
        font-weight: bold;
        border-radius: 13pt;
        border: none;
        cursor: pointer;
    }

    .blackBtn {
        background-color: rgb(34 34 34);
        color: rgb(255 255 255);
    }
    .yellowBtn {
        margin-top: 20px;
        background-color: rgb(255 234 70);
        color: rgb(51 51 51);
    }
`;

export default ResultPage;
