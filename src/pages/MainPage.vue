<template>
    <div class="container rates">
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
    </div>
</template>

<script setup lang="ts">
import { useConverterStore } from '@/stores/converterStore'

const converterStore = useConverterStore()
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'

.rates
    margin-top: 20rem

    p
        margin-bottom: 8rem
</style>
