<script setup lang="ts">
import { useUsers } from '@/store/users'

type User = {
  department: string,
  email: string,
  name: string,
  role:number[]
}
const user = reactive<User>({
  department: '',
  email: '',
  name: '',
  role: []
})

const departments = computed(() => useUsers().departments?.map(department => ({
  value: department,
  text: department
})))

const router = useRouter()
const createUser = async () => {
  try {
    const response = await useUsers().createUser(user)
    console.log(response)
  } catch ({ response }) {
    console.log(response)
  }
}
const cancel = () => router.push('/admin/users')

</script>

<template>
  <TheModal
    size="full"
    @concern="createUser"
    @cancel="cancel"
  >
    <article class="m-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
      <BaseFormInput
        v-model:value="user.name"
        class="col-span-1"
        title="姓名"
      />
      <BaseFormInput
        v-model:value="user.email"
        class="col-span-1"
        title="電子郵件"
      />
      <BaseFormSelect
        v-model:value="user.department"
        :options="departments"
        class="col-start-1 col-span-1"
        title="部門"
      />
      <BaseFormTag
        v-model:value="user.role"
        class="col-span-1 lg:col-span-2 2xl:col-span-3"
        title="角色"
        :tags="['一般員工', '一般主管', '高級主管', '管理員']"
      />
    </article>
  </TheModal>
</template>
