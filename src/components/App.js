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
    background-image: url(${backImg});
    width: 280pt;
    height: 700pt;
`;

export default App;
