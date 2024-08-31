import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import ConverterApi from '@/common_functions/api/converterApi'
import type { Rates } from '@/types/converter.dto'

const converterApi = new ConverterApi()

export const useConverterStore = defineStore('converter', () => {
    const rates = ref<Rates>()

    const getRates = async () => {
        const response = await converterApi.getRates()
        rates.value = response?.data.rates
    }

    return { rates, getRates }
})
