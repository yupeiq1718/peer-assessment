<script setup lang="ts">
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
const setToastData = (data:ToastData) => {
  toastData.value = data
}
provide('setToastData', setToastData)

const isLoading = ref(false)
const setIsLoading = (value:boolean) => {
  isLoading.value = value
}
provide('setIsLoading', setIsLoading)

type ConfirmData = {
  isActive: boolean,
  confirm: unknown
}
const confirmData = ref<ConfirmData>({
  isActive: false,
  confirm: () => null
})
const setConfirmData = (data:ConfirmData) => {
  confirmData.value = data
}
provide('setConfirmData', setConfirmData)
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
  <BaseToast
    v-if="toastData.isActive"
    v-model:isActive="toastData.isActive"
    :variant="toastData.variant"
    class="fixed top-4 right-4"
  >
    {{ toastData.message }}
  </BaseToast>
  <TheLoading v-if="isLoading" />
  <BaseConfirm
    v-if="confirmData.isActive"
    v-model:isActive="confirmData.isActive"
    @confirm="confirmData.confirm"
  />
</template>
