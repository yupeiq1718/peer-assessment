<script setup lang="ts">
import { useForm } from 'vee-validate'
import { roles } from '@/utilities/data'

const router = useRouter()
const route = useRoute()

const { handleSubmit } = useForm({
  initialValues: {
    roleId: route.params.id
  }
})

const submit = handleSubmit(values => {
  router.push(`/admin/question/${values.roleId}`)
})

const cancel = () => router.push('/admin/questions')
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
