<script setup lang="ts">
const router = useRouter()
const cancel = () => router.push('/employee/result')

</script>

<template>
  <TheModal
    size="side"
    @cancel="cancel"
  >
    <div class="m-2">
      <BaseFormSelect
        class="mb-4"
        title="年度"
      />
      <BaseFormSelect
        class="mb-4"
        title="次別"
      />
      <BaseFormSelect
        class="mb-4"
        title="類型"
      />
    </div>
  </TheModal>
</template>
