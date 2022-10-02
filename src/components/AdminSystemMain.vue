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
        {{ '新的互評填寫已經開始。員工和主管可以開始填寫互評問券。' }}
        <br><br>
      </p>
      <p class="text-dark">
        {{ '暫停：暫時停止員工和主管填寫互評問券，此操作並不會結束這次互評。' }}
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
          <li>{{ '互評結果瀏覽' }}</li>
        </ul>
      </section>
      <section class="my-4 border-2 border-light p-4">
        <h3 class="font-bold text-dark mb-2">
          {{ '管理員：' }}
        </h3>
        <ul class="text-muted">
          <li>{{ '未填名單提醒' }}</li>
          <li>{{ '互評結果瀏覽' }}</li>
          <li>{{ '系統狀態設定' }}</li>
        </ul>
      </section>
    </section>
    <section class="bg-white rounded-2xl px-6 py-4">
      <h2 class="text-lg font-bold text-dark mb-2">
        {{ systemStatus[2].text }}：
      </h2>
      <p class="text-dark">
        {{ '員工和主管暫時無法填寫互評問券。' }}
      </p>
      <br>
      <p class="text-dark">
        {{ '重啟：員工和主管可以繼續填寫互評。' }}
      </p>
      <p class="text-dark">
        {{ '儲存：結束這次互評並儲存這次紀錄。' }}
      </p>
      <p class="text-dark">
        {{ '刪除：結束這次互評並刪除這次紀錄。' }}
      </p>
      <section class="my-4 border-2 border-light p-4">
        <h3 class="font-bold text-dark mb-2">
          {{ '主管：' }}
        </h3>
        <ul class="text-muted">
          <li>{{ '互評結果瀏覽' }}</li>
        </ul>
      </section>
      <section class="my-4 border-2 border-light p-4">
        <h3 class="font-bold text-dark mb-2">
          {{ '管理員：' }}
        </h3>
        <ul class="text-muted">
          <li>{{ '未填名單提醒' }}</li>
          <li>{{ '互評結果瀏覽' }}</li>
          <li>{{ '系統狀態設定' }}</li>
        </ul>
      </section>
    </section>
    <section class="bg-white rounded-2xl px-6 py-4">
      <h2 class="text-lg font-bold text-dark mb-2">
        {{ systemStatus[0].text }}：
      </h2>
      <p class="text-dark">
        {{ '舊互評已結束' }}
        <br><br>
      </p>
      <p class="text-dark">
        {{ '開始：開始新的填寫互評。' }}
      </p>
      <section class="my-4 border-2 border-light p-4">
        <h3 class="font-bold text-dark mb-2">
          {{ '主管：' }}
        </h3>
        <ul class="text-muted">
          <li>{{ '互評結果瀏覽' }}</li>
        </ul>
      </section>
      <section class="my-4 border-2 border-light p-4">
        <h3 class="font-bold text-dark mb-2">
          {{ '管理員：' }}
        </h3>
        <ul class="text-muted">
          <li>{{ '使用者設定' }}</li>
          <li>{{ '問卷設定' }}</li>
          <li>{{ '互評結果瀏覽' }}</li>
          <li>{{ '系統狀態設定' }}</li>
        </ul>
      </section>
    </section>
  </article>
</template>
