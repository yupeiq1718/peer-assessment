<script setup lang="ts">
import { useUsers } from '@/store/users'
import { departments, roleData } from '@/utilities/data'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const route = useRoute()
const id = computed(() => route.params.id)

const user = computed(() => useUsers().user(Number(id.value)))

const schema = yup.object({
  department: yup.string().required('此欄位必填'),
  name: yup.string().required('此欄位必填'),
  email: yup.string().required('此欄位必填').test('email', '不符合公司電子郵件格式', (value) => (value?.includes('@osensetech.com') && value?.split('@osensetech.com')[1] === '') || false),
  roles: yup.array().required('此欄位必填').min(1, '最少選擇一項'),
  managerId: yup.number().required('此欄位必填')
})

const { setFieldValue, handleSubmit } = useForm({
  validationSchema: schema
})
setFieldValue('department', user.value?.department)
setFieldValue('email', user.value?.email)
setFieldValue('name', user.value?.name)
setFieldValue('roles', user.value?.roles)
setFieldValue('managerId', user.value?.manager?.id)

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

const submit = handleSubmit(async values => {
  try {
    setIsLoading(true)
    const response = await useUsers().updateUser({
      id: Number(id.value),
      user: {
        name: values.name,
        email: values.email,
        department: values.department,
        roles: values.roles,
        managerId: Number(values.managerId)
      }
    })
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'success',
      message: '更新成功'
    })
    await useUsers().readUsers()
    router.push('/admin/users')
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
