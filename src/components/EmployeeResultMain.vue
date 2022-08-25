<script setup lang="ts">
type Field= {
  key:string,
  name:string,
  width?: string
}

type Item = {
  key:string,
  [key:string]:unknown
}

const fields:Field[] = [
  {
    name: '姓名',
    key: 'name'
  },
  {
    name: '部門',
    key: 'department',
    width: '20%'
  },
  {
    name: '評分',
    key: 'scores',
    width: '60%'
  },
  {
    name: '功能',
    key: 'function'
  }
]

const items = ref<Item[]>([
  {
    key: '1',
    name: '許斾旟',
    department: 'O2 meta 組',
    scores: [1, 4, 3, 3, 5]
  },
  {
    key: '2',
    name: '劉于瑄',
    department: '專案組',
    scores: [3, 2, 5, 4, 2]
  }
])

</script>

<template>
  <div class="mx-4">
    <BaseTable
      :fields="fields"
      :items="items"
    >
      <template #name="data">
        <div>
          <img
            class="inline-block rounded-full w-16 max-w-none h-16 mr-4"
            src="@/assets/images/user.jpg"
            alt="user"
          >
          <span>
            {{ data.data }}
          </span>
        </div>
      </template>
      <template #department="data">
        <BaseTag variant="theme">
          {{ data.data }}
        </BaseTag>
      </template>
      <template #scores="data">
        <BaseScore
          v-for="(score, key) of data.data"
          :key="key"
          variant="theme"
          :score="score"
        />
      </template>
      <template #function>
        <div>
          <BaseSvgIcon
            role="button"
            class="w-6 h-6 m-2 fill-muted hover:fill-theme"
            name="eye"
          />
        </div>
      </template>
    </BaseTable>
  </div>
</template>
