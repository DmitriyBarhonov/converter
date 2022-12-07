import {
    exchangeRatesAPI
} from "../api/api"

const SET_LINST_CURRENCIES = "SET_LINST_CURRENCIES"
const SET_LOADER = "SET_LOADER"


let initialState = {
    baseCurrency: 'RUB',
    listOfCurrencies: {},
    loaderStatus: false
}

const exchangeRatesReducer = (state = initialState, action) => {

    switch (action.type) {

            case SET_LINST_CURRENCIES: {
                return {
                    ...state,
                    listOfCurrencies: action.listOfCurrencies
                }
            }

            case SET_LOADER: {
                return {
                    ...state,
                    loaderStatus: action.loaderStatus
                }
            }
            default:
                return state;
    }

}



const setlistOfCurrenciesActionCreator = (listOfCurrencies) => ({
    type: SET_LINST_CURRENCIES,
    listOfCurrencies
})

const setLoader = (loaderStatus) => ({
    type: SET_LOADER,
    loaderStatus
})


export const getCurrencyThunkCreator = (baseCurrency, error) => {
    return (dispatch) => {
        dispatch(setLoader(true))
        exchangeRatesAPI.getRate(baseCurrency)
            .then(r => {
                dispatch(setLoader(false))
                dispatch(setlistOfCurrenciesActionCreator(r.rates))
            })
            .catch(() => {
                dispatch(setLoader(false))
                alert(error)
            })


    }
}


export default exchangeRatesReducer;