<script setup lang="ts">
import { useForm } from 'vee-validate'
import { roles } from '@/utilities/data'

const router = useRouter()
const route = useRoute()

const { values, handleSubmit } = useForm({
  initialValues: {
    roleId: route.params.roleId
  }
})

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
        :options="roles"
      />
    </div>
  </TheModal>
</template>
