<script setup lang='ts'>
import { getCurrentInstance, watch, onMounted } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { useShadowHost } from './utils'

const isDark = useDark()
const toggleDark = useToggle(isDark)

let host = $ref(useShadowHost())

function reflectDark () {
  host?.toggleAttribute('dark', isDark.value)
}

onMounted(reflectDark)
watch(isDark, reflectDark)
</script>

<template>
  <button class="icon-button" aria-label="Toggle theme" @click="toggleDark()">
    <transition name="slide" mode="out-in">
      <ic:twotone-nightlight v-if="isDark"/>
      <ic:twotone-wb-sunny v-else/>
    </transition>
  </button>
</template>

<style lang="postcss">
:host {
  --color: #fbbf24;
  --bg-normal: #fAfAf9;
  --bg-active: #f5f5f4;
  --font-size: 24px;
}

:host([dark]) {
  --color: #fef3c7;
  --bg-normal: #262626;
  --bg-active: #2d2d2d;
}

.icon-button {
  background-color: var(--bg-normal);
  border: none;
  border-radius: .5rem;
  color: var(--color);
  cursor: pointer;
  display: flex;
  font-size: var(--font-size);
  overflow: hidden;
  padding: 0.4em;
  transition: background-color 0.3s ease, color 0.3s cubic-bezier(0.64, 0, 0.78, 0);
}

.icon-button:hover,
.icon-button:focus {
  background-color: var(--bg-active);
  outline: none;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-enter-from {
  transform: translateY(-150%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
}

.slide-leave-to {
  transform: translateY(150%);
}
</style>
