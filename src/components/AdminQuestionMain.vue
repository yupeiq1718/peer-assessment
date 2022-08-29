<template>
  <article class="pt-2 px-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
    <BaseFormSelect
      class="col-span-1"
      title="合作部門"
      :options="[
        {
          value: 'o2',
          text: 'O2 meta 組'
        },
        {
          value: 'project',
          text: '專案組'
        }
      ]"
    />
    <BaseFormSelect
      class="col-span-1"
      title="合作對象"
      :options="[
        {
          value: 'pey',
          text: '許斾旟'
        },
        {
          value: 'claire',
          text: '劉于瑄'
        }
      ]"
    />
    <BaseAnswerScore
      class="col-span-1 lg:col-span-2 2xl:col-span-3"
      title="問題一：你就本次與對方的合作經驗，綜合評分會給對方幾分"
      tag="綜合"
    />
    <BaseAnswerAll
      class="col-span-1 lg:col-span-2 2xl:col-span-3"
      title="問題一：你就本次與對方的合作經驗，綜合評分會給對方幾分"
      description="對於信賴程度，是否有想補充地方"
      tag="綜合"
    />
    <BaseAnswerText
      class="col-span-1 lg:col-span-2 2xl:col-span-3"
      title="最後，總體來說，就這次的合作經驗，是否有想補充的地方"
    />
  </article>
</template>
