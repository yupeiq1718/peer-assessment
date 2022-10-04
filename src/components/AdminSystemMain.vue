<script setup lang="ts">
import { useSystem } from '@/store/system'
import { systemStatus } from '@/utilities/data'

const systemStatusId = computed(() => useSystem().systemStatus)

</script>

<template>
  <header class="bg-white rounded-2xl px-6 py-4 my-4 flex justify-between items-center">
    <h2 class="text-lg font-bold">
      <span class="text-dark">{{ '互評狀態' }}：</span>
      <span class="text-theme">{{ systemStatus[systemStatusId]?.text }}</span>
    </h2>
  </header>
  <hr class="border-1 border-muted my-4 w-full">
  <article class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <section class="bg-white rounded-2xl px-6 py-4">
      <h2 class="text-lg font-bold text-dark mb-2">
        {{ systemStatus[1].text }}：
      </h2>
      <p class="text-dark">
        {{ '開放填寫互評問卷。點選「暫停」可切換系統至「暫停中」。' }}
      </p>
      <section class="my-4 border-2 border-light p-4">
        <h3 class="font-bold text-dark mb-2">
          {{ '員工：' }}
        </h3>
        <ul class="text-muted">
          <li>{{ '員工互評填寫' }}</li>
        </ul>
      </section>
      <section class="my-4 border-2 border-light p-4">
        <h3 class="font-bold text-dark mb-2">
          {{ '主管：' }}
        </h3>
        <ul class="text-muted">
          <li>{{ '主管互評填寫' }}</li>
          <li>{{ '歷史結果查詢' }}</li>
        </ul>
      </section>
      <section class="my-4 border-2 border-light p-4">
        <h3 class="font-bold text-dark mb-2">
          {{ '管理員：' }}
        </h3>
        <ul class="text-muted">
          <li>{{ '使用者設定' }}</li>
          <li>{{ '未填名單提醒' }}</li>
          <li>{{ '歷史結果查詢' }}</li>
          <li>{{ '系統狀態設定' }}</li>
        </ul>
      </section>
    </section>
    <section class="bg-white rounded-2xl px-6 py-4">
      <h2 class="text-lg font-bold text-dark mb-2">
        {{ systemStatus[2].text }}：
      </h2>
      <p class="text-dark">
        {{ '暫時無法填寫互評問券。可選擇「恢復進行」切回「進行中」。' }}
      </p>
      <section class="my-4 border-2 border-light p-4">
        <h3 class="font-bold text-dark mb-2">
          {{ '主管：' }}
        </h3>
        <ul class="text-muted">
          <li>{{ '歷史結果查詢' }}</li>
        </ul>
      </section>
      <section class="my-4 border-2 border-light p-4">
        <h3 class="font-bold text-dark mb-2">
          {{ '管理員：' }}
        </h3>
        <ul class="text-muted">
          <li>{{ '使用者設定' }}</li>
          <li>{{ '未填名單提醒' }}</li>
          <li>{{ '歷史結果查詢' }}</li>
          <li>{{ '系統狀態設定' }}</li>
        </ul>
      </section>
    </section>
    <section class="bg-white rounded-2xl px-6 py-4">
      <h2 class="text-lg font-bold text-dark mb-2">
        {{ systemStatus[0].text }}：
      </h2>
      <p class="text-dark">
        {{ '互評尚未開始。點選「開始」可切換系統至 「進行中」。' }}
      </p>
      <section class="my-4 border-2 border-light p-4">
        <h3 class="font-bold text-dark mb-2">
          {{ '主管：' }}
        </h3>
        <ul class="text-muted">
          <li>{{ '歷史結果查詢' }}</li>
        </ul>
      </section>
      <section class="my-4 border-2 border-light p-4">
        <h3 class="font-bold text-dark mb-2">
          {{ '管理員：' }}
        </h3>
        <ul class="text-muted">
          <li>{{ '使用者設定' }}</li>
          <li>{{ '問卷設定' }}</li>
          <li>{{ '歷史結果查詢' }}</li>
          <li>{{ '系統狀態設定' }}</li>
        </ul>
      </section>
    </section>
  </article>
</template>
