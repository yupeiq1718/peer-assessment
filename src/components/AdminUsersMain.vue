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

const items = ref<Item[]>([
  {
    key: '1',
    name: '許斾旟',
    email: 'yupeiq1718@osensetech.com',
    department: 'O2 meta 組',
    role: '一般員工'
  },
  {
    key: '2',
    name: '劉于瑄',
    email: 'claire.liu@osensetech.com',
    department: '專案組',
    role: '一般主管'
  }
])

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
        <BaseTag variant="theme">
          {{ data.data }}
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
