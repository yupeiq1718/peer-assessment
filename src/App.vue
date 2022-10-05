<script setup lang="ts">
import { useConfirm } from '@/store/confirm'
type Type = 'employee'|'admin'
const type = ref<Type>('admin')
const setType = (value:Type) => {
  type.value = value
}

provide('type', type)

type ThemeColorMap = {
  employee:string[],
  admin:string[],
}
const themeColorMap:ThemeColorMap = {
  employee: ['#A2CED3', '#E8F3F4'],
  admin: ['#D4B3AE', '#F4ECEB']
}
const setThemeColor = (type:Type) => {
  document.documentElement.style.setProperty('--color-theme', themeColorMap[type][0])
  document.documentElement.style.setProperty('--color-theme-light', themeColorMap[type][1])
}
provide('setThemeColor', setThemeColor)

const switchPosition = (value:Type) => {
  setThemeColor(value)
  setType(value)
}
provide('switchPosition', switchPosition)

type ToastData = {
  isActive: boolean,
  variant: string,
  message: string
}
const toastData = ref<ToastData>({
  isActive: false,
  variant: '',
  message: ''
})

let toastTimer = setTimeout(() => {
  toastData.value.isActive = false
}, 5000)

const setToastData = (data:ToastData) => {
  clearTimeout(toastTimer)
  toastData.value = data
  toastTimer = setTimeout(() => {
    toastData.value.isActive = false
  }, 5000)
}
provide('setToastData', setToastData)

const isLoading = ref(false)
const setIsLoading = (value:boolean) => {
  isLoading.value = value
}
provide('setIsLoading', setIsLoading)

const confirmData = computed(() => useConfirm().confirmData)
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition
      name="page"
      appear
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
  <transition
    name="toast"
    mode="out-in"
    appear
  >
    <BaseToast
      v-if="toastData.isActive"
      v-model:isActive="toastData.isActive"
      :variant="toastData.variant"
      class="fixed top-4 right-4"
    >
      {{ toastData.message }}
    </BaseToast>
  </transition>
  <TheLoading v-if="isLoading" />
  <BaseConfirm
    v-if="confirmData.isActive"
    v-model:isActive="confirmData.isActive"
    :text="confirmData.text"
    @confirm="confirmData.confirm"
  />
</template>
