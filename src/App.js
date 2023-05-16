import "./App.css";
import { useDispatch } from "react-redux";
import { setKlineData } from "./modules";
import { fetchKline } from "./api";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Trading_CHART } from "./charting_library";
function App() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchKline().then((data) => {
      dispatch(setKlineData(data.slice(0, 10)));
    });
  }, [dispatch, fetchKline]);
  return (
    <div className="app">
      <Trading_CHART />
    </div>
  );
}

export default App;
