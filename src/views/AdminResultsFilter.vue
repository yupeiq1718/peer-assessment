<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useHistory } from '@/store/history'
import { roleData } from '@/utilities/data'
import * as yup from 'yup'
import { Ref } from 'vue'

const histories = computed(() => useHistory().histories)

const { values, handleSubmit, setFieldValue } = useForm()

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

interface HistoryFilterData {
  year?: number,
  filename?: string,
  roleId?: number
}
const historyFilterData:Ref<HistoryFilterData> = inject('historyFilterData', ref({
  year: NaN,
  filename: '',
  roleId: NaN
}))
const setHistoryFilterData:(value:HistoryFilterData) => void = inject('setHistoryFilterData', () => null)

console.log(historyFilterData.value)
setFieldValue('year', historyFilterData.value?.year)
setFieldValue('filename', historyFilterData.value?.filename)
setFieldValue('roleId', historyFilterData.value?.roleId)

const submit = handleSubmit(values => {
  setHistoryFilterData({
    year: values.year,
    filename: values.filename,
    roleId: values.roleId

  })
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
        :rule="yup.number().required('此欄位必填')"
      />
      <BaseFormSelect
        class="mb-4"
        title="次別"
        name="filename"
        :options="filenameOptions"
        :rule="yup.string().required('此欄位必填')"
      />
      <BaseFormSelect
        class="mb-4"
        title="類型"
        name="roleId"
        :options="roleOptions"
        :rule="yup.number().required('此欄位必填')"
      />
    </div>
  </TheModal>
</template>
