import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

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

    const onClick = () => {
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
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = () => console.log("htll");

    return (
        <>
            {bloodModal === true ? <BloodModal setBloodModal={setBloodModal} setBlood={setBlood} /> : null}
            {mbtiModal === true ? <MbtiModal setMbtiModal={setMbtiModal} setMbti={setMbti} /> : null}

            <TitleStyle>
                <h2>나의 정보를 입력해주세요</h2>
            </TitleStyle>

            <InputBoxStyle>
                <div className="inputBox">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="내이름">내 이름</label>
                            <input type="text" {...register("name", { required: true })} placeholder="이름을 입력해주세요" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        {errors.message && alert("이름을 입력하지 않았습니다")}
                        <div className="line" />

                        <div className="genderType">
                            <label htmlFor="성별" className="genderTitle">
                                성별
                            </label>
                            <input type="radio" className="radioInput" value="male" name="gener" onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="남" className="labelGender">
                                <span>남</span>
                            </label>
                            <input type="radio" className="radioInput" value="female" name="gener" onChange={(e) => setGender(e.target.value)} />
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
        </>
    );
};

export const InputBoxStyle = styled.div`
    .inputBox {
        width: 360px;
        height: 450px;
        background-color: rgb(255 255 255);
        position: relative;
        top: 120px;
        margin: auto;
        box-shadow: 2px 2px 10px 2px #e2e0e0;
    }

    .genderType {
        .radioInput {
            margin-left: 35px;
        }

        .labelGender {
            position: relative;
            display: inline-block;
            width: 40px;
        }
        .labelGender span {
        }
    }

    input {
        position: relative;
        border: none;
        font-size: 1.1rem;
        margin: 30px 10px 10px 10px;
        width: auto;
        text-align: center;
    }

    input:focus {
        outline: none;
    }
    .line {
        width: 180pt;
        height: 1pt;
        position: relative;
        margin: auto;
        left: 30px;
        background-color: rgb(228 228 228);
    }

    .mbtiLink {
        cursor: pointer;
        background-color: rgb(238 238 238);
        border-radius: 5pt;
        font-size: 1.3rem;
        position: relative;
        font-weight: 500;
        color: rgb(51 51 51);
        width: 180px;
        height: 45px;
        margin: auto;
        text-align: center;
    }

    .mbtiLink span {
        position: relative;
        top: 12px;
    }

    label {
        font-weight: bold;
        font-size: 1rem;
        color: rgb(51 51 51);
        margin-left: 15px;
        display: inline-block;
        width: 66px;
    }
`;

export const TitleStyle = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    position: relative;
    left: 30px;
    top: 90px;
`;

export const InputBtnStyle = styled.div`
    margin: 0 auto;
`;

export default MeinputPage;
