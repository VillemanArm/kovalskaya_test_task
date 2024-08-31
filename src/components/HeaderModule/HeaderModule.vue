<template>
    <header class="header">
        <div class="container">
            <router-link
                to="/"
                class="header__logo"
                >Конвертер валют</router-link
            >
            <div class="header__nav">
                <router-link to="/">Главная</router-link>
                <router-link to="/converter">Конвертер</router-link>
            </div>
            <div class="header__toolbar">
                <span>Основная валюта:</span>
                <select v-model="converterStore.baseCurrency">
                    <option
                        v-for="currency in converterStore.currencies"
                        :key="currency"
                        :value="currency"
                    >
                        {{ currency }}
                    </option>
                </select>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useConverterStore } from '@/stores/converterStore'

const converterStore = useConverterStore()

converterStore.getRates()

let getRatesInterval = setInterval(() => {
    converterStore.getRates()
}, 60000)

onUnmounted(() => {
    clearInterval(getRatesInterval)
})
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'

.header
    width: 100vw
    height: 60rem

    font-size: 18rem

    background-color: $primary-color

    .container
        height: 100%
        display: flex
        align-items: center
        justify-content: space-between

    a
        color: $primary-font-color

.header__logo
    font-size: 26rem

.header__nav
    display: flex
    gap: 16rem

    a:hover
        text-decoration: underline

.header__toolbar
    display: flex
    align-items: center
    gap: 16rem
</style>
