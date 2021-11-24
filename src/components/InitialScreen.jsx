import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import axios from "axios";

//img
import heart from "../images/inheart.png";

//style
import styled from "styled-components";
import IconModal from "../modal/IconModal";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const InitialScreen = () => {
    const [infoIconModal, setInfoIconModal] = useState(false);
    const [data, setData] = useState();

    const url = "https://chemistry-test.co.kr ";
    const onClick = () => {
        setInfoIconModal(!infoIconModal);
    };

    useEffect(() => {
        axios
            .get("https://dlsrksrndgkq.link/count")
            .then((response) => {
                setData(response.data.result.count);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <InitialContentsBoxStyle>
            <div className="initialContentsBox">
                {infoIconModal === true ? <IconModal setInfoIconModal={setInfoIconModal} /> : null}
                <div className="infoIcon">
                    <FontAwesomeIcon icon={faInfoCircle} onClick={onClick} />
                </div>
                <TitleAndcontentsDesign>
                    <h1 className="title">우리의 모든 것</h1>
                    <div className="contents">mbti 별자리 띠 혈액형 모든 궁합을 한번에 확인해보세요!</div>
                    <div className="heartIcon">
                        <img src={heart} alt="img" />
                    </div>
                    <div className="countNumber">
                        현재까지 <span>{data}</span>명이 참여했어요
                    </div>
                </TitleAndcontentsDesign>

                <div className="buttonSet">
                    <ButtonDesign>
                        <Link to="mepage">
                            <button className="blackBtn">시작하기</button>
                        </Link>

                        <CopyToClipboard text={url}>
                            <button
                                className="yellowBtn"
                                onClick={() => {
                                    alert("링크 복사가 완료되었습니다!");
                                }}
                            >
                                테스트 공유
                            </button>
                        </CopyToClipboard>
                    </ButtonDesign>
                </div>
            </div>
        </InitialContentsBoxStyle>
    );
};

const InitialContentsBoxStyle = styled.div`
    .initialContentsBox {
        width: 400px;
        height: 100%;
        margin: auto;
    }

    .infoIcon {
        width: 18pt;
        height: 18pt;
        cursor: pointer;
        margin: 0 auto;
        position: relative;
        left: 160px;
        top: 20px;
    }
`;

const TitleAndcontentsDesign = styled.div`
    .title {
        text-align: center;
        font-size: 2.1rem;
        width: 230px;
        margin: 0 auto;
        position: relative;
        top: 100px;
    }

    .contents {
        text-align: center;
        font-size: 1.1rem;
        width: 250px;
        margin: 0 auto;
        color: rgb(153 153 153);
        position: relative;
        top: 120px;
    }
    .heartIcon {
        text-align: center;
    }
    .heartIcon img {
        width: 250px;
        margin: 0 auto;
        position: relative;
        top: 160px;
    }

    .countNumber {
        text-align: center;
        margin: 0 auto;
        position: relative;
        top: 170px;
    }

    span {
        font-weight: 800;
    }
`;

export const ButtonDesign = styled.div`
    text-align: center;
    display: flex;
    position: relative;
    top: 230px;
    flex-direction: column;
    .blackBtn,
    .yellowBtn {
        width: 330px;
        height: 70px;
        font-size: 1.3rem;
        text-align: center;
        line-height: 22pt;
        font-weight: bold;
        border-radius: 13pt;
        border: none;
        cursor: pointer;
        margin: 0 auto;
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
export default InitialScreen;
