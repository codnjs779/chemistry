import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import BloodModal from "../modal/BloodModal";
import MbtiModal from "../modal/MbtiModal";

import styled from "styled-components";
import { ButtonDesign } from "./InitialScreen";

const MeinputPage = () => {
    const dispatch = useDispatch();

    const [bloodModal, setBloodModal] = useState(false);
    const [mbtiModal, setMbtiModal] = useState(false);

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [born, setBorn] = useState("");
    const [blood, setBlood] = useState("");
    const [mbti, setMbti] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onClick = () =>
        dispatch({
            type: "ADD_ME_DATA",
            payload: {
                name,
                gender,
                born,
                blood,
                mbti,
            },
        });

    return (
        <>
            {bloodModal === true ? <BloodModal setBloodModal={setBloodModal} setBlood={setBlood} /> : null}
            {mbtiModal === true ? <MbtiModal setMbtiModal={setMbtiModal} setMbti={setMbti} /> : null}

            <TitleStyle>
                <h2>나의 정보를 입력해주세요</h2>
            </TitleStyle>

            <InputBoxStyle>
                <div className="inputBox">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="내이름">내 이름</label>
                            <input type="text" placeholder="이름을 입력해주세요" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="line" />
                        <div className="genderType">
                            <label htmlFor="성별" className="genderTitle">
                                성별
                            </label>
                            <input type="radio" className="radioInput" value="male" onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="남" className="labelGender">
                                <span>남</span>
                            </label>
                            <input type="radio" className="radioInput" value="female" onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="여" className="labelGender">
                                <span>여</span>
                            </label>
                        </div>
                        <div className="line" />
                        <div>
                            <label htmlFor="생년월일">생년월일</label>
                            <input type="text" placeholder="8자리를 입력해주세요" value={born} maxLength="8" onChange={(e) => setBorn(e.target.value)} />
                        </div>
                        <div className="line" />
                        <div>
                            <label htmlFor="혈액형">혈액형</label>
                            <input
                                type="text"
                                placeholder="혈액형을 입력해주세요"
                                value={blood}
                                onChange={(e) => setBlood(e.target.value)}
                                onClick={() => {
                                    setBloodModal(!bloodModal);
                                }}
                                readOnly
                            />
                        </div>
                        <div className="line" />
                        <div>
                            <label htmlFor="mbti">MBTI</label>
                            <input
                                type="text"
                                placeholder="MBTI를 입력해주세요"
                                value={mbti}
                                onChange={(e) => setMbti(e.target.value)}
                                onClick={() => {
                                    setMbtiModal(!mbtiModal);
                                }}
                                readOnly
                            />
                        </div>
                        <div className="line" />
                    </form>
                    <div
                        className="mbtiLink"
                        onClick={() => {
                            window.open("https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC", "_blank");
                        }}
                    >
                        <span>MBTI 검사하기</span>
                    </div>
                </div>
            </InputBoxStyle>

            <div className="buttonSet">
                <InputBtnStyle>
                    <ButtonDesign>
                        <Link to="/youpage">
                            <button type="submit" className="blackBtn" onClick={onClick}>
                                다음으로
                            </button>
                        </Link>
                    </ButtonDesign>
                </InputBtnStyle>
            </div>
        </>
    );
};

export const InputBoxStyle = styled.div`
    .inputBox {
        width: 230pt;
        height: 450pt;
        background-color: rgb(255 255 255);
        position: relative;
        left: 23pt;
        top: 50pt;
        box-shadow: 2px 2px 10px 2px #e2e0e0;
    }
    div {
        position: relative;
        top: 30pt;
        left: 26pt;
    }

    label {
        font-weight: bold;
        width: 40pt;
        font-size: 13pt;
        color: rgb(51 51 51);
    }

    .genderType {
        margin-top: 10pt;
        .genderTitle {
            position: relative;
            margin-right: 20pt;
        }

        .radioInput {
            width: 10pt;
            height: 10pt;
        }

        .labelGender {
            margin-right: 2pt;
        }
        .labelGender span {
            margin-right: 10pt;
            font-size: 13pt;
        }
    }

    input {
        position: relative;
        border: none;
        font-size: 10pt;
        width: 130pt;
        height: 20pt;
        margin-top: 40pt;
        margin-left: 20pt;
    }
    input:focus {
        outline: none;
    }
    .line {
        width: 180pt;
        height: 1pt;
        position: relative;

        background-color: rgb(228 228 228);
    }

    .mbtiLink {
        cursor: pointer;
        background-color: rgb(238 238 238);
        width: 129pt;
        height: 38pt;
        border-radius: 5pt;
        font-size: 13pt;
        position: relative;
        left: 53pt;
        top: 65pt;
        font-weight: 500;
        color: rgb(51 51 51);
    }

    .mbtiLink span {
        position: relative;
        left: 21pt;
        top: 10pt;
    }
`;

export const TitleStyle = styled.div`
    position: relative;
    top: 40pt;
    left: 17pt;
    font-size: 13pt;
`;

export const InputBtnStyle = styled.div`
    position: relative;
    bottom: 430pt;
    right: 8pt;
`;

export default MeinputPage;
