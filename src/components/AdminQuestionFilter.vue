<script setup lang="ts">
const type = ref('')

</script>

<template>
  <div class="m-2">
    <BaseFormSelect
      class="mb-4"
      title="問卷類型"
      :selected="type"
      :options="[
        {
          value: 'staff',
          text: '員工互評'
        },
        {
          value: 'leader',
          text: '主管互評'
        }
      ]"
    />
  </div>
</template>
