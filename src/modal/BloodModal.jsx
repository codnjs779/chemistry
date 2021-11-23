import React from "react";
import styled from "styled-components";
import { ModalBack } from "./IconModal";

let BloodModal = (props) => {
    const onClick = () => {
        props.setBloodModal(false);
    };
    return (
        <ModalStyle>
            <ModalBack>
                <div className="BloodModal">
                    <div className="bloodTitle">혈액형</div>
                    <div
                        className="bloodType"
                        id="A"
                        onClick={() => {
                            props.setBlood("A");
                            props.setBloodModal(false);
                        }}
                    >
                        A형
                    </div>
                    <div
                        className="bloodType"
                        id="B"
                        onClick={() => {
                            props.setBlood("B");
                            props.setBloodModal(false);
                        }}
                    >
                        B형
                    </div>
                    <div
                        className="bloodType"
                        id="O"
                        onClick={() => {
                            props.setBlood("O");
                            props.setBloodModal(false);
                        }}
                    >
                        O형
                    </div>
                    <div
                        className="bloodType"
                        id="AB"
                        onClick={() => {
                            props.setBlood("AB");
                            props.setBloodModal(false);
                        }}
                    >
                        AB형
                    </div>
                </div>

                <div className="modalBack" onClick={onClick}></div>
            </ModalBack>
        </ModalStyle>
    );
};

const ModalStyle = styled.div`
    .BloodModal {
        width: 380px;
        height: 100%;
        background-color: rgb(255 255 255);
        border-radius: 25px;
        position: absolute;
        z-index: 2;
        top: 380pt;
        margin-right: 100pt;
    }

    .BloodModal {
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
    .bloodTitle {
        font-size: 1.4rem;
        font-weight: 700;
        position: relative;
        left: 30pt;
        top: 41pt;
    }

    .bloodType {
        font-size: 1.2rem;
        position: relative;
        top: 64pt;
        left: 30pt;
        padding-top: 20pt;
        cursor: pointer;
    }
`;

export default BloodModal;
