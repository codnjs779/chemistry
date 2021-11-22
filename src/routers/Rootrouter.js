import { Routes, Route } from "react-router-dom";

import MeinputPage from "../components/MeinputPage";
import YouinputPage from "../components/YouinputPage";
import ResultPage from "../components/ResultPage";
import InitialScreen from "../components/InitialScreen";

const Rootrouter = () => {
    return (
        <Routes>
            <Route path="/" element={<InitialScreen />} />
            <Route path="/mepage" element={<MeinputPage />} />
            <Route path="/youpage" element={<YouinputPage />} />
            <Route path="/result" element={<ResultPage />} />
        </Routes>
    );
};

export default Rootrouter;
