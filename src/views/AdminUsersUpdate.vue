<script setup lang="ts">
import { useUsers } from '@/store/users'
import { useForm } from 'vee-validate'

const departments = computed(() => useUsers().departments?.map(department => ({
  value: department,
  text: department
})))

const route = useRoute()
const id = computed(() => route.params.id)

const user = computed(() => useUsers().user(Number(id.value)))

const { handleSubmit } = useForm({
  initialValues: {
    department: user.value?.department || '',
    email: user.value?.email || '',
    name: user.value?.name || '',
    role: user.value?.role || []
  }
})

const getUsers = async () => {
  try {
    const response = await useUsers().readUsers()
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const submit = handleSubmit(async values => {
  try {
    const response = await useUsers().updateUser({
      id: Number(id.value),
      user: {
        name: values.name,
        department: values.department
      }
    })
    console.log(response)
    await getUsers()
  } catch ({ response }) {
    console.log(response)
  }
})

const router = useRouter()
const cancel = () => router.push('/admin/users')

</script>

<template>
  <TheModal
    size="full"
    @concern="submit"
    @cancel="cancel"
  >
    <article class="m-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
      <BaseFormInput
        name="name"
        class="col-span-1"
        title="姓名"
      />
      <BaseFormInput
        name="email"
        class="col-span-1"
        title="電子郵件"
        disabled
      />
      <BaseFormSelect
        name="department"
        :options="departments"
        class="col-start-1 col-span-1"
        title="部門"
      />
      <BaseFormTag
        name="role"
        class="col-span-1 lg:col-span-2 2xl:col-span-3"
        title="角色"
        :tags="['一般員工', '一般主管', '高級主管', '管理員']"
        disabled
      />
    </article>
  </TheModal>
</template>
