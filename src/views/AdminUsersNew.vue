<script setup lang="ts">
import { useUsers } from '@/store/users'
import { useForm } from 'vee-validate'
import { departments, roleData } from '@/utilities/data'
import * as yup from 'yup'

const schema = yup.object({
  department: yup.string().required('此欄位必填'),
  name: yup.string().required('此欄位必填'),
  email: yup.string().required('此欄位必填').test('email', '不符合公司電子郵件格式', (value) => (value?.includes('@osensetech.com') && value?.split('@osensetech.com')[1] === '') || false),
  roles: yup.array().required('此欄位必填').min(1, '最少選擇一項'),
  managerId: yup.number().required('此欄位必填')
})

const { setFieldValue, handleSubmit, resetForm } = useForm({
  validationSchema: schema
})
setFieldValue('roles', [])

const managerOptions = computed(() => useUsers().activeUsers?.filter(user => user.roles.includes(2)).map(user => ({
  text: user.name,
  value: user.id
})))

type ToastData = {
  isActive: boolean,
  variant: string,
  message: string
}
const setToastData:(data:ToastData) => void = inject('setToastData', () => null)

const setIsLoading:(value:boolean) => void = inject('setIsLoading', () => null)

const router = useRouter()

const submit = handleSubmit(async values => {
  try {
    setIsLoading(true)
    console.log(values)
    const response = await useUsers().createUser({
      name: values.name,
      email: values.email,
      department: values.department,
      roles: values.roles,
      managerId: Number(values.managerId)
    })
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'success',
      message: '新增成功'
    })
    resetForm()
    await useUsers().readUsers()
  } catch ({ response }) {
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'error',
      message: '新增失敗'
    })
  } finally {
    setIsLoading(false)
  }
})
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
        type="email"
        name="email"
        class="col-span-1"
        title="電子郵件"
      />
      <BaseFormSelect
        name="department"
        :options="departments"
        class="col-span-1"
        title="部門"
      />
      <BaseFormSelect
        name="managerId"
        :options="managerOptions"
        class="col-span-1"
        title="主管"
      />
      <BaseFormTag
        name="roles"
        class="col-span-1"
        title="角色"
        :tags="roleData.map(role => role.text)"
      />
    </article>
  </TheModal>
</template>
