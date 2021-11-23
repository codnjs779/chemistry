import Rootrouter from "../routers/Rootrouter";
import { GlobalStyle } from "../styleComponent/GlobalStyle";
import "../App.css";
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
