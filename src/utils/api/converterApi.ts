import type { Currencies } from '@/types/converter.dto'
import axios from 'axios'

export default class ConverterApi {
    getRates(baseCurrency: string, currencies: Currencies) {
        const resolution = '1m'
        const url = `https://api.fxratesapi.com/latest?base=${baseCurrency}&currencies=${currencies.join(',')}&resolution=${resolution}&amount=1&places=6&format=json`

        const response = axios.get(url).catch((error) => console.log(error))

        return response
    }
}
