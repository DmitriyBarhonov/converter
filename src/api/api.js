import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "apikey": "ESzsCMhQWf7B8UgBo2ZYvvVl29EB53ra",
    },
    baseURL: 'https://api.apilayer.com/exchangerates_data/'
})
// 5VW1PIGMQmS0jW3WVaCqCXvjT08MgP2Y old
// ESzsCMhQWf7B8UgBo2ZYvvVl29EB53ra new

export const exchangeRatesAPI = {
    getRate(baseCurrency) {
        return instance.get(`latest?symbols=&base=${baseCurrency}`, )
            .then(r => {
                return r.data
            })
    },
    getConverter( conversionTo, conversionFrom,amount){
        return instance.get(`convert?to=${conversionTo}&from=${conversionFrom}&amount=${amount}`, )
            .then(r => {
                return r.data
            })
    },
}
