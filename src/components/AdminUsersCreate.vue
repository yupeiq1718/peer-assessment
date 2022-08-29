<template>
  <article class="m-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
    <BaseFormFour
      class="col-span-1"
      title="姓名"
    />
    <BaseFormFour
      class="col-span-1"
      title="電子郵件"
    />
    <BaseFormOne
      class="col-start-1 col-span-1"
      title="部門"
    />
    <BaseFormOne
      class="col-span-1"
      title="主管"
    />
    <BaseFormFive
      class="col-span-1 lg:col-span-2 2xl:col-span-3"
      title="角色"
      :tags="['一般員工', '一般主管', '高級主管', '管理員']"
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
