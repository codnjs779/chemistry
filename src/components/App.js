import styled from "styled-components";
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
    width: 280pt;
    height: 700pt;
`;

export default App;
