<script setup lang="ts">
import { useUsers } from '@/store/users'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  department: yup.string().required('此欄位必填'),
  name: yup.string().required('此欄位必填'),
  email: yup.string().required('此欄位必填').email('不符合電子郵件格式'),
  role: yup.array().required('此欄位必填').min(1, '最少選擇一項')
})

const { handleSubmit } = useForm({
  initialValues: {
    department: '',
    email: '',
    name: '',
    role: []
  },
  validationSchema: schema
})

const departments = computed(() => useUsers().departments?.map(department => ({
  value: department,
  text: department
})))

const router = useRouter()

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
    const response = await useUsers().createUser(values)
    console.log(response)
    await getUsers()
  } catch ({ response }) {
    console.log(response)
  }
})
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
        type="text"
        class="col-span-1"
        title="姓名"
      />
      <BaseFormInput
        type="email"
        name="email"
        class="col-span-1"
        title="電子郵件"
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
      />
    </article>
  </TheModal>
</template>
