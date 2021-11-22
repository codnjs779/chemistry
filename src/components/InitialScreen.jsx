import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

//img
import heart from "../img/heart.png";

//style
import styled from "styled-components";
import IconModal from "../modal/IconModal";

const InitialScreen = () => {
    const [infoIconModal, setInfoIconModal] = useState(false);
    const [data, setData] = useState();

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
        <div>
            {infoIconModal === true ? <IconModal setInfoIconModal={setInfoIconModal} /> : null}
            <Icon>
                <FontAwesomeIcon icon={faInfoCircle} className="infoIcon" onClick={onClick} />
            </Icon>

            <TitleAndcontentsDesign>
                <h1 className="title">우리의 모든 것</h1>
                <div className="contents">mbti 별자리 띠 혈액형 모든 궁합을 한번에 확인해보세요!</div>
                <div className="heartIcon">
                    <img src={heart} alt="img" />
                </div>
                <div className="countNumber">
                    현재까지 <strong>{data}명</strong>이 참여했어요
                </div>
            </TitleAndcontentsDesign>

            <div className="buttonSet">
                <ButtonDesign>
                    <Link to="mepage">
                        <button className="blackBtn">시작하기</button>
                    </Link>
                    <button
                        className="yellowBtn"
                        onClick={() => {
                            alert("링크 복사가 완료되었습니다!");
                        }}
                    >
                        테스트 공유
                    </button>
                </ButtonDesign>
            </div>
        </div>
    );
};

const Icon = styled.div`
    position: relative;
    font-size: 19.9pt;
    width: 25pt;
    height: 25pt;
    top: 46.5pt;
    left: 325.2pt;
    cursor: pointer;
`;

const TitleAndcontentsDesign = styled.div`
    position: relative;
    left: 103.5pt;
    right: 103.5pt;
    top: 111pt;

    .title {
        width: 168pt;
        height: 48pt;
        left: 40.5pt;
        right: 41.5pt;
        bottom: 99pt;
        font-size: 25pt;
    }

    .contents {
        position: relative;
        width: 190pt;
        height: 41pt;
        font-size: 14pt;
        color: rgb(153 153 153);
    }
    .heartIcon {
        position: relative;
        width: 250pt;
        height: 250pt;
        right: 45pt;
        top: 25pt;
    }

    .countNumber {
        position: relative;
        top: 26pt;
        width: 193pt;
        height: 19pt;
        font-size: 13pt;
    }
`;

export const ButtonDesign = styled.div`
    position: relative;
    top: 200pt;
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
export default InitialScreen;
