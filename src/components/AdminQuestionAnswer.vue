<script setup lang="ts">
import { useQuestions } from '@/store/questions'
import { getVariants } from '@/utilities/data'
import { useSystem } from '@/store/system'
import { useConfirm } from '@/store/confirm'

const systemStatus = computed(() => useSystem().systemStatus)

interface Props {
  id: number,
  index: number
}

const props = defineProps<Props>()

const route = useRoute()
const roleId = computed(() => Number(route.params.roleId))

const question = computed(() => useQuestions().question({
  roleId: roleId.value, id: props.id
}))

type ToastData = {
  isActive: boolean,
  variant: string,
  message: string
}
const setToastData:(data:ToastData) => void = inject('setToastData', () => null)

const setIsLoading:(value:boolean) => void = inject('setIsLoading', () => null)

const getQuestionnaire = async () => {
  try {
    const response = await useQuestions().readQuestionnaire(roleId.value)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const removeQuestion = async ({ roleId, id }:{
  roleId: number, id: number
}) => {
  try {
    setIsLoading(true)
    const response = await useQuestions().deleteQuestion({ roleId, id })
    console.log(response)
    setToastData({
      isActive: true,
      variant: 'success',
      message: '刪除成功'
    })
    getQuestionnaire()
  } catch (error) {
    console.log(error)
    setToastData({
      isActive: true,
      variant: 'error',
      message: '刪除失敗'
    })
  } finally {
    setIsLoading(false)
  }
}

const router = useRouter()

const handleQuestionEdit = () => {
  router.push(`/admin/question/${roleId.value}/edit/${question.value?.id}`)
}

const handleQuestionRemove = () => {
  useConfirm().setConfirmData({
    isActive: true,
    confirm: () => removeQuestion({ roleId: 2, id: props.id }),
    text: '請確認是否刪除該筆資料？'
  })
}
</script>

<template>
  <div>
    <article class="p-8 bg-white rounded-2xl flex flex-col mb-4">
      <label>
        <BaseTag
          class="mr-1"
          :variant="getVariants(props.index)"
        >
          {{ question?.tag }}
        </BaseTag>
        <span :class="question?.isRequired && `after:content-['*'] after:ml-1 after:text-error`">
          {{ question?.content }}
        </span>
      </label>
      <BaseFormScore
        v-if="question?.typeId===1 || question?.typeId===2"
        name="score"
        :variant="getVariants(props.index)"
        class="mt-4"
      />
      <BaseFormTextarea
        v-if="question?.typeId===2 || question?.typeId===3"
        name="text"
        :placeholder="question.textHint"
        class="w-full mt-4"
      />
    </article>
    <footer
      v-if="systemStatus===0"
      class="flex flex-row justify-end items-center duration-500 overflow-hidden mb-4"
    >
      <hr class="border-2 border-light grow-[1] mx-3">
      <button
        class="rounded-2xl flex justify-center items-center bg-light hover:bg-theme fill-white w-10 h-10 mr-2 duration-500"
        @click="handleQuestionEdit()"
      >
        <BaseSvgIcon
          name="edit"
          class="w-6 h-6"
        />
      </button>
      <button
        class="rounded-2xl flex justify-center items-center bg-light hover:bg-theme fill-white w-10 h-10 mr-2 duration-500"
        @click="handleQuestionRemove()"
      >
        <BaseSvgIcon
          name="delete"
          class="w-6 h-6"
        />
      </button>
    </footer>
  </div>
</template>
