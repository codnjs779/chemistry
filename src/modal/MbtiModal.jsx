import React from "react";
import styled from "styled-components";
import { ModalBack } from "./IconModal";
const MbtiModal = (props) => {
    const onClick = () => {
        props.setMbtiModal(false);
    };
    return (
        <MbtiModalStyle>
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
            <ModalBack>
                <div onClick={onClick}></div>
            </ModalBack>
        </MbtiModalStyle>
    );
};

const MbtiModalStyle = styled.div`
    .MbtiModal {
        width: 280pt;
        height: 500pt;
        background-color: rgb(255 255 255);
        border-radius: 35px;
        position: absolute;
        z-index: 2;
        top: 550pt;
        margin-right: 100pt;

        .MbtiTitle {
            font-size: 19pt;
            font-weight: 700;
            position: relative;
            left: 30pt;
            top: 41pt;
        }

        .MbtiType {
            font-size: 16pt;
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
    }
`;

export default MbtiModal;
