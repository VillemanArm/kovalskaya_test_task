<template>
    <h1>Converter</h1>
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted, onUpdated, watch } from 'vue'
//import {useRoute} from 'vue-router'

defineProps<{
    msg?: string
}>()
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'
</style>
