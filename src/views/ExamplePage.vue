<script setup lang="ts">
const variants = ['theme', 'success', 'alert', 'error', 'info', 'muted']
const statues = ['success', 'alert', 'error', 'info', 'muted']
const isToastActive = ref(true)
const score = ref()
const value = ref()
const selected = ref()
const options = [
  {
    value: 'one',
    text: 'one'
  },
  {
    value: 'two',
    text: 'two'
  }
]
</script>

<template>
  <section>
    <h2>Button</h2>
    <br>
    <BaseButton
      v-for="variant of variants"
      :key="variant"
      :variant="variant"
    >
      Button
    </BaseButton>
  </section>
  <br>
  <section>
    <h2>Tag</h2>
    <br>
    <BaseTag
      v-for="variant of variants"
      :key="variant"
      :variant="variant"
    >
      Tag
    </BaseTag>
  </section>
  <br>
  <section>
    <h2>Toast</h2>
    <br>
    <template
      v-for="variant of variants"
      :key="variant"
    >
      <BaseToast
        v-if="isToastActive"
        v-model:is-active="isToastActive"
        :variant="variant"
      >
        Toast
      </BaseToast>
    </template>
  </section>
  <br>
  <section>
    <h2>Score</h2>
    <br>
    <BaseScore
      v-for="variant of variants"
      :key="variant"
      :score="score"
      :variant="variant"
    >
      Toast
    </BaseScore>
    <input
      v-model="score"
      type="number"
    >
  </section>
  <section>
    <h2>Input</h2>
    <br>
    <template
      v-for="status of statues"
      :key="status"
    >
      <div class="inline-block">
        <BaseFormInput
          v-model:value="value"
          :status="status"
          type="text"
        />
        <br>
        <BaseFormMessage
          :status="status"
          message="message"
        />
      </div>
    </template>
    <div class="inline-block">
      <input
        v-model="value"
        type="text"
      >
      <p>{{ value }}</p>
    </div>
  </section>
  <section>
    <h2>Textarea</h2>
    <br>
    <template
      v-for="status of statues"
      :key="status"
    >
      <div class="inline-block">
        <BaseFormTextarea
          v-model:value="value"
          :status="status"
          type="text"
        />
        <br>
        <BaseFormMessage
          :status="status"
          message="message"
        />
      </div>
    </template>
    <div class="inline-block">
      <input
        v-model="value"
        type="text"
      >
      <p>{{ value }}</p>
    </div>
  </section>
  <section>
    <h2>Select</h2>
    <br>
    <template
      v-for="status of statues"
      :key="status"
    >
      <div class="inline-block">
        <BaseFormSelect
          v-model:selected="selected"
          :status="status"
          :options="options"
        />
        <br>
        <BaseFormMessage
          :status="status"
          message="message"
        />
      </div>
    </template>
    <div class="inline-block">
      <p>{{ value }}</p>
    </div>
  </section>
</template>
