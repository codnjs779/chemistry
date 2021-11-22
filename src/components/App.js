import styled from "styled-components";
import { Helmet } from "react-helmet";
import Rootrouter from "../routers/Rootrouter";
import editHeart from "../img/editheart.png";

function App() {
    const currentUrl = "https://chemistry-test.co.kr";
    return (
        <>
            <Helmet>
                <meta property="og:url" content={currentUrl} />
                <meta property="og:title" content="우리의 모든 것" />
                <meta property="og:description" content="mbti 별자리 띠 혈액형 모든 궁합을 한번에 확인해보세요!" />
                <meta property="og:image" content={editHeart} />
            </Helmet>
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
