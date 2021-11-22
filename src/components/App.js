import styled from "styled-components";
import Rootrouter from "../routers/Rootrouter";

function App() {
    return (
        <>
            <BasicStyle>
                <Rootrouter />
            </BasicStyle>
        </>
    );
}

export const BasicStyle = styled.div`
    width: 280pt;
    height: 700pt;
`;

export default App;
