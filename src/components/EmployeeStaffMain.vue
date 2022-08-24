<script setup lang="ts">
type Title = string[]

type Data = {
  name: string,
  department: string,
  scores: number[]
}

const titleList:Title = ['姓名', '部門', '評分', '功能']

const dataList = ref<Data[]>([{
  name: '許斾旟',
  department: 'O2 meta 組',
  scores: [1, 4, 3, 3, 5]
},
{
  name: '劉于瑄',
  department: '專案組',
  scores: [3, 2, 5, 4, 2]
}])

</script>

<template>
  <div class="mx-4">
    <table class="relative border-separate border-spacing-x-0 border-spacing-y-2 text-dark text-center min-w-full">
      <thead>
        <tr>
          <th
            v-for="title of titleList"
            :key="title"
            class="px-4 py-2 border-y-2 first:border-l-2 last:border-r-2 border-muted first:rounded-l-2xl last:rounded-r-2xl bg-white font-bold"
          >
            {{ title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="data of dataList"
          :key="data.name"
          class="whitespace-nowrap"
        >
          <td class="px-4 py-4 border-y-2 first:border-l-2 last:border-r-2 border-muted first:rounded-l-2xl last:rounded-r-2xl bg-white align-middle whitespace-nowrap">
            <img
              class="inline-block rounded-full w-16 max-w-none h-16 mr-4"
              src="@/assets/images/user.jpg"
              alt="user"
            >
            <span>
              {{ data.name }}
            </span>
          </td>
          <td class="px-4 py-4 border-y-2 first:border-l-2 last:border-r-2 border-muted first:rounded-l-2xl last:rounded-r-2xl bg-white">
            <BaseTag variant="theme">
              {{ data.department }}
            </BaseTag>
          </td>
          <td class="px-4 py-4 border-y-2 first:border-l-2 last:border-r-2 border-muted first:rounded-l-2xl last:rounded-r-2xl bg-white w-2/3">
            <BaseRate
              v-for="(score, key) of data.scores"
              :key="key"
              variant="theme"
              :score="score"
            />
          </td>
          <td class="px-4 py-4 border-y-2 first:border-l-2 last:border-r-2 border-muted first:rounded-l-2xl last:rounded-r-2xl bg-white">
            <BaseSvgIcon
              role="button"
              class="w-6 h-6 m-2 fill-muted hover:fill-theme"
              name="edit"
            />
            <BaseSvgIcon
              role="button"
              class="w-6 h-6 m-2 fill-muted hover:fill-theme"
              name="delete"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
