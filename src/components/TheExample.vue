<script setup lang="ts">
const isToastActive = ref(true)
const score = ref()
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
  <br>
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
  <br>
  <section>
    <h2>Rate</h2>
    <br>
    <BaseRate
      :score="score"
      variant="secondary"
    >
      Toast
    </BaseRate>
    <input
      v-model="score"
      type="number"
    >
  </section>
</template>
