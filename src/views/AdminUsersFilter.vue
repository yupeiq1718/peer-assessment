<script setup lang="ts">
import { useForm } from 'vee-validate'
import { departments, roleData } from '@/utilities/data'
import { Ref } from 'vue'

const router = useRouter()

const departmentOptions = computed(() => departments.concat([{
  value: '',
  text: '全部'
}]))

const roleOptions = roleData.concat([{
  value: 0,
  text: '全部'
}])

const filterDepartment:Ref<string> = inject('filterDepartment', ref(''))
const filterRoles:Ref<0|1|2|3|4> = inject('filterRoles', ref(0))

const setFilterData:({ department, roles }: {
  department: string,
  roles: 0|1|2|3|4
})=>void = inject('setFilterData', () => null)

const { handleSubmit } = useForm({
  initialValues: {
    department: filterDepartment.value,
    roles: filterRoles.value
  }
})

const submit = handleSubmit(({ department, roles }) => {
  setFilterData({
    department,
    roles: Number(roles) as 0|1|2|3|4
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
        name="roles"
        :options="roleOptions"
      />
    </div>
  </TheModal>
</template>
