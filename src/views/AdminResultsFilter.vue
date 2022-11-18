<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useHistory } from '@/store/history'
import { roleData } from '@/utilities/data'

const histories = computed(() => useHistory().histories)

const { values, handleSubmit } = useForm()

const yearOptions = computed(() => histories.value?.map((history) => ({
  text: history.year,
  value: history.year
})))
const filenameOptions = computed(() => histories.value?.find((history) => history.year === Number(values.year))?.filename.map(filename => ({
  text: filename,
  value: filename
})))

const roleOptions = roleData.slice(0, 2)

const router = useRouter()
const submit = handleSubmit(values => router.push(`/admin/results?year=${values.year}&filename=${values.filename}&roleId=${values.roles}`))
const cancel = () => router.push('/admin/results')

</script>

<template>
  <TheModal
    size="side"
    @cancel="cancel"
    @confirm="submit"
  >
    <div class="m-2">
      <BaseFormSelect
        name="year"
        class="mb-4"
        title="年度"
        :options="yearOptions"
      />
      <BaseFormSelect
        class="mb-4"
        title="次別"
        name="filename"
        :options="filenameOptions"
      />
      <BaseFormSelect
        class="mb-4"
        title="類型"
        name="roles"
        :options="roleOptions"
      />
    </div>
  </TheModal>
</template>
