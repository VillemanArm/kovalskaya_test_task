<template>
    <div class="">
        <ListModule />
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted, onUpdated, watch } from 'vue'
//import {useRoute} from 'vue-router'
import ListModule from '@/components/ListModule/ListModule.vue'

defineProps<{
    msg?: string
}>()
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'
</style>
