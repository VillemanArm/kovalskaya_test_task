<template>
    <div class="container">
        <div class="converter">
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
                v-model="exchangeableAmount"
                id="exchangeable-currency-amount"
                type="text"
                class="converter__amount"
                @input="handleExchangeableAmountInput($event as InputEvent)"
                min="0"
            />
            <label for="received-currency-amount">Получаемая валюта:</label>
            <select
                v-model="receivedCurrency"
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
                v-model="receivedAmount"
                id="received-currency-amount"
                type="text"
                class="converter__amount"
                @input="handleReceivedAmountInput($event as InputEvent)"
                min="0"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useConverterStore } from '@/stores/converterStore'
import type { Rates } from '@/types/converter.dto'
import { setValidateNumberInput } from '@/utils/validators/validators'

const converterStore = useConverterStore()

const exchangeableCurrency = ref<string>(converterStore.baseCurrency)
const receivedCurrency = ref<string>(converterStore.baseCurrency)
const exchangeableAmount = ref<number>(0)
const receivedAmount = ref<number>(0)

const calculateReceivedCurrencyAmount = () => {
    if (converterStore.rates) {
        receivedAmount.value = +(
            (exchangeableAmount.value *
                converterStore.rates[receivedCurrency.value as keyof Rates]) /
            converterStore.rates[exchangeableCurrency.value as keyof Rates]
        ).toFixed(2)
    }
}

const calculateExchangeableCurrencyAmount = () => {
    if (converterStore.rates) {
        exchangeableAmount.value = +(
            (receivedAmount.value *
                converterStore.rates[exchangeableCurrency.value as keyof Rates]) /
            converterStore.rates[receivedCurrency.value as keyof Rates]
        ).toFixed(2)
    }
}

const handleReceivedAmountInput = (event: InputEvent) => {
    setValidateNumberInput(event.target as HTMLInputElement, receivedAmount)
    calculateExchangeableCurrencyAmount()
}

const handleExchangeableAmountInput = (event: InputEvent) => {
    setValidateNumberInput(event.target as HTMLInputElement, exchangeableAmount)
    calculateReceivedCurrencyAmount()
}
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'

.converter
    margin-top: 20rem
    display: grid
    grid-template-columns: 190rem 80rem 240rem
    column-gap: 20rem
    row-gap: 8rem

    input
        padding-left: 4rem
</style>
