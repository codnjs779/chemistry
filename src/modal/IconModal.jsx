import React from "react";
import styled from "styled-components";

let IconModal = (props) => {
    const onClick = () => {
        props.setInfoIconModal(false);
    };
    return (
        <IconModalStyle>
            <div className="IconModal">
                <div className="IconModalInfo">
                    <div className="question">
                        <strong>문의:</strong> codnjs779@naver.com
                    </div>

                    <div className="source">
                        <strong>출처:</strong>
                        <div>- MBTI 유형별 궁합</div>
                        <div>- 네이버 지식백과</div>
                        <div>- 별자리 궁합표</div>
                    </div>
                </div>
            </div>
            <ModalBack>
                <div onClick={onClick}></div>
            </ModalBack>
        </IconModalStyle>
    );
};

const IconModalStyle = styled.div`
    .IconModal {
        background-color: rgb(255 255 255);
        position: absolute;
        z-index: 2;
        width: 230pt;
        height: 150pt;
        border-radius: 15pt;
        opacity: 1;
        margin-left: 10pt;
        top: 87pt;
    }

    .IconModalInfo {
        padding: 15pt;
        font-size: 15pt;
    }
    .source {
        padding-top: 20pt;
    }
`;

export const ModalBack = styled.div`
    div {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: #202020;
        opacity: 0.5;
    }
`;

export default IconModal;
