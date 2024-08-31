import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import ConverterApi from '@/utils/api/converterApi'
import type { Currencies, Rates } from '@/types/converter.dto'

const converterApi = new ConverterApi()

export const useConverterStore = defineStore('converter', () => {
    const rates = ref<Rates>()
    const currencies: Currencies = ['RUB', 'EUR', 'USD']
    const baseCurrency = ref<string>('USD')

    const getRates = async () => {
        const response = await converterApi.getRates(baseCurrency.value, currencies)
        rates.value = response?.data.rates
    }

    watch(baseCurrency, async () => {
        const response = await converterApi.getRates(baseCurrency.value, currencies)
        rates.value = response?.data.rates
    })

    return { rates, getRates, currencies, baseCurrency }
})
