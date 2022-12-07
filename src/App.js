import './App.css';
import ExchangeRates from './componets/exchangeRates'
import Converter from "./componets/converter"
import style from "./componets/style.module.css"
import { Route, Routes } from "react-router-dom";
import { Navigate } from "./componets/navigation"
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className={style.lang_btn}>
        <div>
          <Button type="primary" onClick={() => changeLanguage("en")}>EN</Button>
        </div>
        <div>
          <Button type="primary" onClick={() => changeLanguage("ru")}>RU</Button>
        </div>
      </div>


      <h1 className={style.title}>{t("title")}</h1>
      <Navigate />
      <Routes>
        <Route path="/exchange-rates/*" element={<ExchangeRates />} />
        <Route path="/converter/*" element={<Converter />} />
      </Routes>
    </>
  )
}

export default App

