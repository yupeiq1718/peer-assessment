<script setup lang="ts">
const isToastActive = ref(true)
</script>

<template>
  <section>
    <h2>Button</h2>
    <br>
    <BaseButton variant="alert">
      Button
    </BaseButton>
  </section>
  <br>
  <section>
    <h2>Tag</h2>
    <br>
    <BaseTag variant="primary">
      Tag
    </BaseTag>
  </section>
  <section>
    <h2>Toast</h2>
    <br>
    <BaseToast
      v-if="isToastActive"
      v-model:is-active="isToastActive"
      variant="error"
    >
      Toast
    </BaseToast>
  </section>
</template>
