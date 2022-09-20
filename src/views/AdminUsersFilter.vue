<script setup lang="ts">
import { useUsers } from '@/store/users'
import { useForm } from 'vee-validate'
import { getDepartments, getRoles } from '@/utilities/data'

const router = useRouter()

const departments = computed(() => getDepartments().map(department => ({
  value: department,
  text: department
})))

const departmentOptions = computed(() => departments.value?.concat([{
  value: '',
  text: '全部'
}]))

const roleOptions = getRoles().concat([{
  value: 0,
  text: '全部'
}])

const { handleSubmit } = useForm({
  initialValues: useUsers().filterData
})

const submit = handleSubmit(({ department, role }) => {
  useUsers().setFilterData({
    department,
    role: Number(role) as 0|1|2|3|4
  })
  router.push('/admin/users')
})

const cancel = () => router.push('/admin/users')
</script>

<template>
  <TheModal
    size="side"
    @confirm="submit"
    @cancel="cancel"
  >
    <div class="m-2">
      <BaseFormSelect
        class="mb-4"
        title="部門"
        name="department"
        :options="departmentOptions"
      />
      <BaseFormSelect
        class="mb-4"
        title="角色"
        name="role"
        :options="roleOptions"
      />
    </div>
  </TheModal>
</template>
