import styled from "styled-components";
import backImg from "../img/0001.PNG";

import Rootrouter from "../routers/Rootrouter";

function App() {
    return (
        <div>
            <BasicStyle>
                <Rootrouter />
            </BasicStyle>
        </div>
    );
}

export const BasicStyle = styled.div`
    position: absolute;
    width: 375pt;
    height: 812pt;
    top: 50%;
    left: 50%;
    margin: -50px 0 0 -50px;

    background-image: url(${backImg});
    input:focus {
        outline: none;
    }
`;

export default App;
