<script setup lang="ts">
const type = ref('')

const router = useRouter()
const cancel = () => router.push('/admin/question')
</script>

<template>
  <TheModal
    size="side"
    @cancel="cancel"
  >
    <div class="m-2">
      <BaseFormSelect
        class="mb-4"
        title="問卷類型"
        :selected="type"
        :options="[
          {
            value: 'staff',
            text: '員工互評'
          },
          {
            value: 'leader',
            text: '主管互評'
          }
        ]"
      />
    </div>
  </TheModal>
</template>
