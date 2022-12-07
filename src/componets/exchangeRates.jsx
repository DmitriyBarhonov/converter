import React, { useState } from "react"
import { connect } from 'react-redux'
import { getCurrencyThunkCreator } from "../redux/exchangeRatesReducer"
import { Loader } from "../Loader/loader"
import { Input } from 'antd';
import style from "./style.module.css"
import { useTranslation } from "react-i18next";
const { Search } = Input;

const ExchangeRates = (props) => {

     // TRANSLATE
     const {t} = useTranslation();
     const error =  t("specifyCurrency")

    // HOOKS
    let [baseCurrency, setbaseCurrency] = useState(props.exchangeRates.baseCurrency)
    // LISTENER
    const baseCurrencyChange = (e) => {
        setbaseCurrency(e.currentTarget.value.replace(/[^a-zа-яё]/gi, '').toUpperCase())
    }

    const getClickCurrency = () => {
        if (baseCurrency.length === 3) {
            props.getCurrencyThunkCreator(baseCurrency, error)
        } else {
            alert(t("specifyCurrency"))
        }
    }
   
 
    return (
        <div className={style.main_page}>
            <div>{t("currentExchangeRate")}</div>
            <Search
                className={style.input}
                placeholder={t("baseCurrency")}
                enterButton={t("buttonSearch")}
                size="large"
                autoFocus={true} onChange={baseCurrencyChange} value={baseCurrency}
                onSearch={getClickCurrency}
            />

            <div>
                {props.exchangeRates.loaderStatus ? <div><Loader /></div> : null}
            </div>

            <div className={style.grid}>
                {Object.keys(props.exchangeRates.listOfCurrencies).map(nubmer => (
                    <div key={nubmer}>
                        {`${nubmer}  ${props.exchangeRates.listOfCurrencies[nubmer].toFixed(2)}`}
                    </div>
                ))}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    exchangeRates: state.exchangeRates
})

export default connect(mapStateToProps, { getCurrencyThunkCreator })(ExchangeRates)