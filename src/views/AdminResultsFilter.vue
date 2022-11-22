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

const setYear:(value:number) => void = inject('setYear', () => null)
const setFilename: (value:string) => void = inject('setFilename', () => null)
const setRoleId:(value:number) => void = inject('setRoleId', () => null)

const submit = handleSubmit(values => {
  setYear(values.year)
  setFilename(values.filename)
  setRoleId(values.roleId)
  router.push('/admin/results')
})

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
        name="roleId"
        :options="roleOptions"
      />
    </div>
  </TheModal>
</template>
