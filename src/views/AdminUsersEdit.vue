<script setup lang="ts">
import { useUsers } from '@/store/users'
import { getDepartments, getRoles } from '@/utilities/data'
import { useForm } from 'vee-validate'

const departments = computed(() => getDepartments().map(department => ({
  value: department,
  text: department
})))

type ToastData = {
  isActive: boolean,
  variant: string,
  message: string
}
const setToastData:(data:ToastData) => void = inject('setToastData', () => null)

const setIsLoading:(value:boolean) => void = inject('setIsLoading', () => null)

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
    setIsLoading(true)
    const response = await useUsers().readUsers()
    console.log(response)
  } catch (error) {
    console.log(error)
  } finally {
    setIsLoading(false)
  }
}

const submit = handleSubmit(async values => {
  try {
    setIsLoading(true)
    const response = await useUsers().updateUser({
      id: Number(id.value),
      user: {
        name: values.name,
        department: values.department
      }
    })
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'success',
      message: '更新成功'
    })
    router.push('/admin/users')
    getUsers()
  } catch ({ response }) {
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'error',
      message: '更新失敗'
    })
  } finally {
    setIsLoading(false)
  }
})

const router = useRouter()
const cancel = () => router.push('/admin/users')

</script>

<template>
  <TheModal
    size="full"
    @confirm="submit"
    @cancel="cancel"
  >
    <article class="m-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
      <BaseFormInput
        name="name"
        type="text"
        class="col-span-1"
        title="姓名"
      />
      <BaseFormInput
        name="email"
        class="col-span-1"
        type="email"
        title="電子郵件"
        disabled
      />
      <BaseFormSelect
        name="department"
        :options="departments"
        class="col-span-1"
        title="部門"
      />
      <BaseFormTag
        name="role"
        class="col-span-1 lg:col-span-2 2xl:col-span-3"
        title="角色"
        :tags="getRoles().map(role => role.text)"
        disabled
      />
    </article>
  </TheModal>
</template>
