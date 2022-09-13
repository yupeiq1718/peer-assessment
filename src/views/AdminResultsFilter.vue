<script setup lang="ts">
const router = useRouter()
const cancel = () => router.push('/admin/results')

</script>

<template>
  <TheModal
    size="side"
    @cancel="cancel"
  >
    <div class="m-2">
      <BaseFormOne
        class="mb-4"
        title="年度"
      />
      <BaseFormOne
        class="mb-4"
        title="次別"
      />
      <BaseFormOne
        class="mb-4"
        title="類型"
      />
    </div>
  </TheModal>
</template>
