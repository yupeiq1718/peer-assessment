<script setup lang="ts">
import { useUsers } from '@/store/users'
import { useForm } from 'vee-validate'
import { roles } from '@/utilities/data'

const router = useRouter()

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
        title="問卷類型"
        name="roleId"
        :options="roles"
      />
    </div>
  </TheModal>
</template>
