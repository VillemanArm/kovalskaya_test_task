<template>
    <p
        v-for="(rate, currency) in converterStore.rates"
        :key="currency"
    >
        {{
            currency !== converterStore.baseCurrency
                ? `${currency}: ${(1 / rate).toFixed(2)} ${converterStore.baseCurrency}`
                : ''
        }}
    </p>
</template>

<script setup lang="ts">
import { useConverterStore } from '@/stores/converterStore'

const converterStore = useConverterStore()
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'
</style>
