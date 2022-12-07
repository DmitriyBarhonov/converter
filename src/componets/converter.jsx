import React, { useState } from "react"
import { connect } from 'react-redux'
import { getCurrencyThunkCreator } from "../redux/converterReducer"
import { Loader } from "../Loader/loader"
import { Button, Input } from 'antd';
import style from "./style.module.css"
import { useTranslation } from 'react-i18next';


export const Converter = (props) => {
    // TRANSLATE
    const { t } = useTranslation();

    const error = t("errorServerConverter")

    // HOOKS
    let [amount, setAmount] = useState(1)

    let [conversionFrom, setconversionFrom] = useState("USD");

    let [conversionTo, setconversionTo] = useState("RUB");

    // LISTENER

    const amountChange = (e) => {
        setAmount(e.currentTarget.value.replace(/[^0-9]/g, ''))
    }
    const conversionFromChange = (e) => {
        setconversionFrom(e.currentTarget.value.replace(/[^a-zа-яё]/gi, '').toUpperCase())
    }
    const conversionToChange = (e) => {
        setconversionTo(e.currentTarget.value.replace(/[^a-zа-яё]/gi, '').toUpperCase())
    }

    const getClickConverter = () => {
        if (conversionFrom.length === 3 && conversionTo.length === 3 && amount) {
            props.getCurrencyThunkCreator(conversionTo, conversionFrom, amount, error)
        } else {
            alert(t("alert"))
        }
    }




    return (
        <div className={style.main_page}>
            <div>
                <div className={style.input_title}>{t("quantity")}</div>
                <Input placeholder={t("quantity")} className={style.input_converter} onChange={amountChange} value={amount} />
            </div>
            <div>
                <div className={style.input_title}>{t("from")}</div>
                <Input placeholder={t("from")} className={style.input_converter} onChange={conversionFromChange} value={conversionFrom} />
            </div>
            <div>
                <div className={style.input_title}>{t("to")}</div>
                <Input placeholder={t("to")} className={style.input_converter} onChange={conversionToChange} value={conversionTo} />
            </div>
            <Button className={style.btn_converter} onClick={getClickConverter} type="primary">{t("buttonConvert")}</Button>
            <div>
                {props.converter.loaderStatus ? <div><Loader /></div> : <div className={style.result}> {`${amount} ${conversionFrom}= ${props.converter.result || ''}`}</div>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    converter: state.converter
})

export default connect(mapStateToProps, { getCurrencyThunkCreator })(Converter)