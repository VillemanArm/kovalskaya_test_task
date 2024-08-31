import settings from '@/settings.json'
import axios from 'axios'

export default class ConverterApi {
    protected serverURL = settings.serverURL

    getRates() {
        const base = 'USD'
        const currencies = 'RUB,EUR,USD'
        const resolution = '1h'
        const url = `https://api.fxratesapi.com/latest?base=${base}&currencies=${currencies}&resolution=${resolution}&amount=1&places=6&format=json`

        const response = axios.get(url).catch((error) => console.log(error))

        return response
    }
}
