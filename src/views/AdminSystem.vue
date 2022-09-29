<script setup lang="ts">
import { useSystem } from '@/store/system'

const systemStatus = computed(() => useSystem().systemStatus)

const getSystemStatus = async () => {
  try {
    const response = await useSystem().readSystemStatus()
    console.log(response)
  } catch ({ response }) {
    console.log(response)
  }
}

onBeforeMount(async () => {
  await getSystemStatus()
})
</script>
<template>
  <div class="absolute w-full h-full">
    <AdminSystemMain v-if="systemStatus" />
  </div>
</template>
