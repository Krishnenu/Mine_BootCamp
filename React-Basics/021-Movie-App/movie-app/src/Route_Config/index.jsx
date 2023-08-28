import { Routes, Route } from "react-router-dom";
import SearchPage from "../Pages/Search/Search";
import DetailsPage from "../Pages/Details/Details";
import ReviewPage from "../Pages/Review/Review";
import NoMatch from "../Pages/NoMatch/NoMatch";
const Route_Config = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/Details/:id" element={<DetailsPage />} />
        <Route path="/Review/:id" element={<ReviewPage />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default Route_Config;
