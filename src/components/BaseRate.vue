<script setup lang="ts">
type Variant = 'primary'|'secondary'|'success'|'alert'|'error'|'info'|'muted'

interface Props {
  variant: Variant,
  score: number
}
const props = withDefaults(defineProps<Props>(), {
  score: 0
})

const number = computed(() => {
  switch (true) {
    case (props.score < 0) :
      return 0
    case (props.score > 5) :
      return 5
    default:
      return Math.round(props.score * 100) / 100
  }
})

type VariantMap= {
  [key in Variant]?: string
}

const fillStyleMap:VariantMap = {
  primary: '#E8F3F4',
  secondary: '#F4ECEB',
  success: '#D9ECEB',
  alert: '#FCE9CE',
  error: '#FADCDB',
  info: '#DEEFF6',
  muted: '#E1E1E1'
}
const strokeStyleMap:VariantMap = {
  primary: '#A2CED3',
  secondary: '#D4B3AE',
  success: '#66B4AF',
  alert: '#F2A63B',
  error: '#ED7470',
  info: '#7DC1DC',
  muted: '#888888'
}

const rate = ref()

const createCircle = () => {
  const canvas = rate.value
  const ctx = canvas.getContext('2d')
  const width = ctx.canvas.width
  const outerRadius = width * 0.5 * 17 / 18
  const innerRadius = outerRadius * 13 / 17
  const angle = Math.PI * 2 * number.value / 5

  ctx.beginPath()
  ctx.moveTo(width * 0.5, width * 0.5 - outerRadius)
  ctx.arc(width * 0.5, width * 0.5, outerRadius, -Math.PI * 0.5, Math.PI * 1.5, false)
  ctx.fillStyle = fillStyleMap[props.variant]
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(width * 0.5, width * 0.5 - outerRadius)
  ctx.arc(width * 0.5, width * 0.5, outerRadius, -Math.PI * 0.5, angle - Math.PI * 0.5, false)
  ctx.lineTo(width * 0.5, width * 0.5)
  ctx.fillStyle = strokeStyleMap[props.variant]
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(width * 0.5, width * 0.5 - innerRadius)
  ctx.arc(width * 0.5, width * 0.5, innerRadius, -Math.PI * 0.5, Math.PI * 1.5, false)
  ctx.fillStyle = '#fff'
  ctx.fill()

  ctx.fillStyle = angle ? strokeStyleMap[props.variant] : fillStyleMap[props.variant]
  ctx.font = `${width / 3}px sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(number.value, width * 0.5, width - outerRadius)
}

watch(props, () => createCircle())

onMounted(() => {
  createCircle()
})

</script>
<template>
  <canvas
    ref="rate"
    width="68"
    height="68"
  />
</template>
