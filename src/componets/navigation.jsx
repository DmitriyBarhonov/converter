import {NavLink } from "react-router-dom";
import style from "./style.module.css"
import { useTranslation } from "react-i18next";


export const Navigate = () => {
    const { t } = useTranslation();

    return (
        <div className={style.nav}>
            <div>
                <NavLink to='/converter'>{t("linkConverter")}</NavLink>
            </div>
            <div>
                <NavLink to='/exchange-rates'>{t("linkRates")}</NavLink>
            </div>
        </div>
    )
}