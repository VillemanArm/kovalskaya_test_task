<template>
    <form class="converter">
        <div class="converter__block">
            <label for="exchangeable-currency-amount">Обмениваемая валюта:</label>
            <select
                v-model="exchangeableCurrency"
                @change="calculateReceivedCurrencyAmount"
            >
                <option
                    v-for="currency in converterStore.currencies"
                    :key="currency"
                    :value="currency"
                >
                    {{ currency }}
                </option>
            </select>
            <input
                v-model="exchangeableCurrencyAmount"
                id="exchangeable-currency-amount"
                type="number"
                class="converter__amount"
                @input="calculateReceivedCurrencyAmount"
                min="0"
            />
        </div>
        <div class="converter__block">
            <label for="received-currency-amount">Получаемая валюта:</label>
            <select
                v-model="receivedCurrency"
                @change="calculateExchangeableCurrencyAmount"
            >
                <option
                    v-for="currency in converterStore.currencies"
                    :key="currency"
                    :value="currency"
                >
                    {{ currency }}
                </option>
            </select>
            <input
                v-model="receivedCurrencyAmount"
                id="received-currency-amount"
                type="number"
                class="converter__amount"
                @input="calculateExchangeableCurrencyAmount"
                min="0"
            />
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useConverterStore } from '@/stores/converterStore'
import type { Rates } from '@/types/converter.dto'

const converterStore = useConverterStore()

const exchangeableCurrency = ref<string>(converterStore.baseCurrency)
const receivedCurrency = ref<string>(converterStore.baseCurrency)
const exchangeableCurrencyAmount = ref<number>(0)
const receivedCurrencyAmount = ref<number>(0)

const calculateReceivedCurrencyAmount = () => {
    if (converterStore.rates) {
        receivedCurrencyAmount.value = +(
            (exchangeableCurrencyAmount.value *
                converterStore.rates[receivedCurrency.value as keyof Rates]) /
            converterStore.rates[exchangeableCurrency.value as keyof Rates]
        ).toFixed(2)
    }
}

const calculateExchangeableCurrencyAmount = () => {
    if (converterStore.rates) {
        exchangeableCurrencyAmount.value = +(
            (receivedCurrencyAmount.value *
                converterStore.rates[exchangeableCurrency.value as keyof Rates]) /
            converterStore.rates[receivedCurrency.value as keyof Rates]
        ).toFixed(2)
    }
}

watch(exchangeableCurrencyAmount, () => {
    if (exchangeableCurrencyAmount.value < 0) {
        receivedCurrencyAmount.value = -exchangeableCurrencyAmount.value
    }
})
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'
.converter__amount
    border: 1px solid black
</style>
