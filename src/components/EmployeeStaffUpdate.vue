<template>
  <article class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
    <BaseFormOne
      class="col-span-1"
      title="合作部門"
    />
    <BaseFormOne
      class="col-span-1"
      title="合作部門"
    />
    <BaseFormTwo
      class="col-span-1 lg:col-span-2 2xl:col-span-3"
      title="問題一：你就本次與對方的合作經驗，綜合評分會給對方幾分"
      tag="綜合"
    />
  </article>
  <footer class="w-full flex justify-center">
    <BaseButton
      class="mx-2"
      variant="success"
    >
      確定
    </BaseButton>
    <BaseButton
      class="mx-2"
      variant="error"
    >
      取消
    </BaseButton>
  </footer>
</template>
