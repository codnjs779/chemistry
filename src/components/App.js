import Rootrouter from "../routers/Rootrouter";
import { GlobalStyle } from "../styleComponent/GlobalStyle";

function App() {
    return (
        <>
            <GlobalStyle>
                <Rootrouter />
            </GlobalStyle>
        </>
    );
}

export default App;
