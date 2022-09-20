<script setup lang="ts">
const router = useRouter()
const cancel = () => router.push('/employee/staff')

</script>

<template>
  <TheModal
    size="full"
    @cancel="cancel"
  >
    <article class="m-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
      <BaseFormSelect
        class="col-span-1"
        title="合作部門"
      />
      <BaseFormSelect
        class="col-span-1"
        title="合作部門"
      />
      <BaseFormTwo
        class="col-span-1 lg:col-span-2 2xl:col-span-3"
        title="問題一：你就本次與對方的合作經驗，綜合評分會給對方幾分"
        tag="綜合"
      />
      <BaseFormThree
        class="col-span-1 lg:col-span-2 2xl:col-span-3"
        title="問題一：你就本次與對方的合作經驗，綜合評分會給對方幾分"
        description="對於信賴程度，是否有想補充地方"
        tag="綜合"
      />
    </article>
  </TheModal>
</template>
