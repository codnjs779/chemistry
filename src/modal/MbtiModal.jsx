import React from "react";
import styled from "styled-components";
import { ModalBack } from "./IconModal";
const MbtiModal = (props) => {
    const onClick = () => {
        props.setMbtiModal(false);
    };
    return (
        <MbtiModalStyle>
            <ModalBack>
                <div className="MbtiModal">
                    <div className="MbtiTitle">MBTI</div>
                    <div className="all">
                        <div className="MbtiSet">
                            <div
                                className="MbtiType"
                                onClick={() => {
                                    props.setMbti("INTJ");
                                    props.setMbtiModal(false);
                                }}
                            >
                                INTJ
                            </div>

                            <div
                                className="MbtiType"
                                onClick={() => {
                                    props.setMbti("INTP");
                                    props.setMbtiModal(false);
                                }}
                            >
                                INTP
                            </div>

                            <div
                                className="MbtiType"
                                onClick={() => {
                                    props.setMbti("INFJ");
                                    props.setMbtiModal(false);
                                }}
                            >
                                INFJ
                            </div>

                            <div
                                className="MbtiType"
                                onClick={() => {
                                    props.setMbti("INFP");
                                    props.setMbtiModal(false);
                                }}
                            >
                                INFP
                            </div>

                            <div
                                className="MbtiType"
                                onClick={() => {
                                    props.setMbti("ISTJ");
                                    props.setMbtiModal(false);
                                }}
                            >
                                ISTJ
                            </div>

                            <div
                                className="MbtiType"
                                onClick={() => {
                                    props.setMbti("ISFJ");
                                    props.setMbtiModal(false);
                                }}
                            >
                                ISFJ
                            </div>

                            <div
                                className="MbtiType"
                                onClick={() => {
                                    props.setMbti("ISTP");
                                    props.setMbtiModal(false);
                                }}
                            >
                                ISTP
                            </div>

                            <div
                                className="MbtiType"
                                onClick={() => {
                                    props.setMbti("ISFP");
                                    props.setMbtiModal(false);
                                }}
                            >
                                ISFP
                            </div>
                        </div>

                        <div className="MbtiSet">
                            <div
                                className="MbtiType"
                                onClick={() => {
                                    props.setMbti("ENTJ");
                                    props.setMbtiModal(false);
                                }}
                            >
                                ENTJ
                            </div>
                            <div
                                className="MbtiType"
                                onClick={() => {
                                    props.setMbti("ENTP");
                                    props.setMbtiModal(false);
                                }}
                            >
                                ENTP
                            </div>
                            <div
                                className="MbtiType"
                                onClick={() => {
                                    props.setMbti("ENFJ");
                                    props.setMbtiModal(false);
                                }}
                            >
                                ENFJ
                            </div>
                            <div
                                className="MbtiType"
                                onClick={() => {
                                    props.setMbti("ENFP");
                                    props.setMbtiModal(false);
                                }}
                            >
                                ENFP
                            </div>
                            <div
                                className="MbtiType"
                                onClick={() => {
                                    props.setMbti("ESTJ");
                                    props.setMbtiModal(false);
                                }}
                            >
                                ESTJ
                            </div>
                            <div
                                className="MbtiType"
                                onClick={() => {
                                    props.setMbti("ESFJ");
                                    props.setMbtiModal(false);
                                }}
                            >
                                ESFJ
                            </div>
                            <div
                                className="MbtiType"
                                onClick={() => {
                                    props.setMbti("ESTP");
                                    props.setMbtiModal(false);
                                }}
                            >
                                ESTP
                            </div>
                            <div
                                className="MbtiType"
                                onClick={() => {
                                    props.setMbti("ESFP");
                                    props.setMbtiModal(false);
                                }}
                            >
                                ESFP
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modalBack" onClick={onClick}></div>
            </ModalBack>
        </MbtiModalStyle>
    );
};

const MbtiModalStyle = styled.div`
    .MbtiModal {
        width: 400px;
        height: 100%;
        background-color: rgb(255 255 255);
        border-radius: 35px;
        position: absolute;
        z-index: 2;
        top: 250pt;
        margin-right: 100pt;
    }
    .MbtiTitle {
        font-size: 1.4rem;
        font-weight: 700;
        position: relative;
        left: 30pt;
        top: 41pt;
    }

    .MbtiType {
        font-size: 1.2rem;
        position: relative;
        top: 64pt;
        left: 30pt;
        padding-top: 20pt;
        cursor: pointer;
    }
    .MbtiSet {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .MbtiModal {
        -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }

    @-webkit-keyframes slide-top {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
        }
    }
    @keyframes slide-top {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
        }
    }
`;

export default MbtiModal;
