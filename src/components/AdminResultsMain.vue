<script setup lang="ts">
import { useHistory } from '@/store/history'

const route = useRoute()

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
    width: '28%'
  },
  {
    name: '評分',
    key: 'scores',
    width: '56%'
  }
]

const items = ref<Item[]>([])

const readAllHistoryScore = async ({ year, filename, roleId }: {
  year: number, filename: string, roleId: number
}) => {
  try {
    const response = await useHistory().readAllHistoryScore({
      year: Number(year),
      filename: filename,
      roleId: Number(roleId)
    })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
watch(() => route.query, () => readAllHistoryScore({
  year: Number(route.query.year),
  filename: route.query.filename as string,
  roleId: Number(route.query.roleId)
}), { immediate: true })
</script>

<template>
  <BaseTable
    :fields="fields"
    :items="items"
  >
    <template #name="data">
      <div>
        <img
          class="inline-block rounded-full w-16 max-w-none h-16 mr-4"
          src="/user.png"
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
        class=" w-[4.5rem] h-[4.5rem]"
        variant="theme"
        :score="score"
      />
    </template>
  </BaseTable>
</template>
