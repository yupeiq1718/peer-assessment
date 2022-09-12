<script setup lang="ts">
import { useUsers } from '@/store/users'

const fields = [
  {
    name: '姓名',
    key: 'name'
  },
  {
    name: '電子信箱',
    key: 'email',
    width: '40%'
  },
  {
    name: '部門',
    key: 'department',
    width: '20%'
  },
  {
    name: '角色',
    key: 'role',
    width: '20%'
  },
  {
    name: '功能',
    key: 'function'
  }
]

const items = ref()

onBeforeMount(async () => {
  await useUsers().readUsers()
  items.value = useUsers().users
})

</script>

<template>
  <div class="mx-5 my-2">
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
      <template #email="data">
        {{ data.data }}
      </template>
      <template #department="data">
        <BaseTag variant="theme">
          {{ data.data }}
        </BaseTag>
      </template>
      <template #role="data">
        <BaseTag
          v-for="item of data.data"
          :key="item"
          variant="theme"
          class="mx-1"
        >
          {{ item }}
        </BaseTag>
      </template>
      <template #function>
        <div>
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
        </div>
      </template>
    </BaseTable>
  </div>
</template>
