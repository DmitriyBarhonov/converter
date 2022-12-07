import {exchangeRatesAPI} from "../api/api"
const SET_RESULT = "SET_RESULT"
const SET_LOADER = "SET_LOADER"


let initialState = {
    result:null,
    loaderStatus: false
}

const converterReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_RESULT:
            return {
                ...state,
                result: action.result
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

export const setResultData = (result) => ({
    type: SET_RESULT,
    result,
})

const setLoader = (loaderStatus) => ({
    type: SET_LOADER,
    loaderStatus
})


export const getCurrencyThunkCreator = (conversionTo, conversionFrom,amount, error) => {
    return (dispatch) => {
        dispatch(setLoader(true))
        exchangeRatesAPI.getConverter(conversionTo, conversionFrom,amount)
            .then(r => {
                dispatch(setLoader(false))
                dispatch(setResultData(r.result.toFixed(2)))
            })
            .catch(() => {
                dispatch(setLoader(false))
                alert(error)
            })


    }
}


export default converterReducer;