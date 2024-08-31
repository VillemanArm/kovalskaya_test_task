<!-- 
    Компонент представляет из себя плавно выпадающий список. 
    Слот принимает ul или ol тег.
    Принимаемы параметры:
        isOpen: Boolean
 -->

<script setup lang="ts">
defineProps<{
    isOpen: Boolean
}>()
</script>

<template>
    <Transition name="dropping-list">
        <slot
            v-if="isOpen"
            class="menu-wrap"
        ></slot>
    </Transition>
</template>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'

ul
    transform-origin: 0 0
    list-style-type: none
    z-index: 1
    position: absolute


.dropping-list-enter-active
    animation: droppingList 0.5s

.dropping-list-leave-active
    animation: droppingList 0.5s reverse

@keyframes droppingList
    from
        transform: rotateX(-90deg)

    to
        transform: rotateX(0deg)
</style>
