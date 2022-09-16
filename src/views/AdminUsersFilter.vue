<script setup lang="ts">
import { useUsers } from '@/store/users'

const router = useRouter()
const cancel = () => router.push('/admin/users')

const departments = computed(() => useUsers().departments?.map(department => ({
  value: department,
  text: department
})))

const roles = [
  {
    value: 1,
    text: '一般員工'
  },
  {
    value: 2,
    text: '一般主管'
  },
  {
    value: 3,
    text: '高級主管'
  },
  {
    value: 4,
    text: '管理員'
  }
]

</script>

<template>
  <TheModal
    size="side"
    @cancel="cancel"
  >
    <div class="m-2">
      <BaseFormSelect
        class="mb-4"
        title="部門"
        :options="departments"
      />
      <BaseFormSelect
        class="mb-4"
        title="角色"
        :options="roles"
      />
    </div>
  </TheModal>
</template>
