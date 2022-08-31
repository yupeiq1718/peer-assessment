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
</template>
