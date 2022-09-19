<script setup lang="ts">
import { useUsers } from '@/store/users'

const tableFields = [
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

const tableItems = computed(() => useUsers().filteredUsers?.map(user => ({
  name: user.name,
  email: user.email,
  department: user.department,
  role: user.role,
  function: user.id
})))

const getUsers = async () => {
  try {
    const response = await useUsers().readUsers()
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const removeUser = async (id:number) => {
  try {
    const response = await useUsers().deleteUser(id)
    console.log(response)
    await getUsers()
  } catch (error) {
    console.log(error)
  }
}

const router = useRouter()
const edit = (id:number) => router.push(`/admin/users/update/${id}`)
</script>

<template>
  <div class="mx-5 my-2">
    <BaseTable
      :fields="tableFields"
      :items="tableItems"
    >
      <template #name="name">
        <div>
          <img
            class="inline-block rounded-full w-16 max-w-none h-16 mr-4"
            src="@/assets/images/user.jpg"
            alt="user"
          >
          <span>
            {{ name.data }}
          </span>
        </div>
      </template>
      <template #email="email">
        {{ email.data }}
      </template>
      <template #department="department">
        <BaseTag variant="theme">
          {{ department.data }}
        </BaseTag>
      </template>
      <template #role="role">
        <BaseTag
          v-for="item of role.data"
          :key="item"
          variant="theme"
          class="mx-1"
        >
          {{ item }}
        </BaseTag>
      </template>
      <template #function="id">
        <div>
          <BaseSvgIcon
            role="button"
            class="w-6 h-6 m-2 fill-muted hover:fill-theme"
            name="edit"
            @click="edit(id.data)"
          />
          <BaseSvgIcon
            role="button"
            class="w-6 h-6 m-2 fill-muted hover:fill-theme"
            name="delete"
            @click="removeUser(id.data)"
          />
        </div>
      </template>
    </BaseTable>
  </div>
</template>
