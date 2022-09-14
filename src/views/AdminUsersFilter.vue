<script setup lang="ts">
const router = useRouter()
const cancel = () => router.push('/admin/users')

</script>

<template>
  <TheModal
    size="side"
    @cancel="cancel"
  >
    <div class="m-2">
      <BaseFormSelect
        class="mb-4"
        title="部門"
      />
      <BaseFormSelect
        class="mb-4"
        title="角色"
      />
    </div>
  </TheModal>
</template>
