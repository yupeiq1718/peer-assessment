<script setup lang="ts">
import { useForm } from 'vee-validate'
import { roleData } from '@/utilities/data'

const router = useRouter()
const route = useRoute()

const { values, handleSubmit } = useForm({
  initialValues: {
    roleId: route.params.roleId
  }
})

const roleOptions = roleData.slice(0, 2)

const submit = handleSubmit(values => router.push(`/admin/question/${values.roleId}`))

const cancel = () => router.push(`/admin/question/${values.roleId}`)
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
        :options="roleOptions"
      />
    </div>
  </TheModal>
</template>
