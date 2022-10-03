<script setup lang="ts">
interface Props {
  fields: {
    key:string,
    name:string,
    width?: string
  }[],
  items?: {
    id:string,
    [key:string]:unknown
  }[]
}

const props = defineProps<Props>()
</script>

<template>
  <table class="relative border-separate border-spacing-x-0 border-spacing-y-2 text-dark text-center min-w-full">
    <thead>
      <tr>
        <th
          v-for="field of props.fields"
          :key="field.key"
          :width="field.width"
          class="px-3 2xl:px-4 py-2 border-y-2 first:border-l-2 last:border-r-2 border-muted first:rounded-l-2xl last:rounded-r-2xl bg-white font-bold"
        >
          {{ field.name }}
        </th>
      </tr>
    </thead>
    <transition-group
      name="tboby"
      tag="tbody"
      appear
    >
      <tr
        v-for="item, index of props.items"
        :key="index"
        class="whitespace-nowrap"
      >
        <td
          v-for="field of props.fields"
          :key="field.key"
          class="px-3 2xl:px-4 py-4 border-y-2 first:border-l-2 last:border-r-2 border-muted first:rounded-l-2xl last:rounded-r-2xl bg-white align-middle whitespace-nowrap"
        >
          <slot
            :name="field.key"
            :data="item[field.key]"
          />
        </td>
      </tr>
    </transition-group>
  </table>
</template>
<style scoped>
  .tbody-enter-active {
    @apply duration-500 delay-500;
  }

  .tbody-enter-from {
    @apply opacity-0  translate-y-16;
  }

  .tbody-move {
    @apply opacity-0  translate-y-16 duration-500 delay-500;
  }
  </style>
