import React from "react";
import styled from "styled-components";
import { ModalBack } from "./IconModal";

let BloodModal = (props) => {
    const onClick = () => {
        props.setBloodModal(false);
    };
    return (
        <ModalStyle>
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
            <ModalBack>
                <div onClick={onClick}></div>
            </ModalBack>
        </ModalStyle>
    );
};

const ModalStyle = styled.div`
    .BloodModal {
        width: 375pt;
        height: 337pt;
        background-color: rgb(255 255 255);
        border-radius: 35px;
        position: absolute;
        z-index: 2;
        top: 550pt;
        margin-right: 100pt;
    }

    .bloodTitle {
        font-size: 19pt;
        font-weight: 700;
        position: relative;
        left: 30pt;
        top: 41pt;
    }

    .bloodType {
        font-size: 16pt;
        position: relative;
        top: 64pt;
        left: 30pt;
        padding-top: 20pt;
        cursor: pointer;
    }
`;

export default BloodModal;
