<script setup lang="ts">

type Type = 'employee'|'admin'
const type = ref<Type>('employee')
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
</script>

<template>
  <router-view />
</template>

<style>
/* #app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
</style>
