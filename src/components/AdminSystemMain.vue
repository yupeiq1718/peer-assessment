<script setup lang="ts">
import { useSystem } from '@/store/system'
import { systemStatus } from '@/utilities/data'

const systemStatusId = computed(() => useSystem().systemStatus)

</script>

<template>
  <div class="mt-8">
    <header class="mx-4 bg-white rounded-2xl px-6 py-4 flex justify-between items-center">
      <h2 class="text-lg font-bold">
        <span class="text-dark">{{ '互評狀態' }}：</span>
        <span class="text-theme">{{ systemStatus[systemStatusId - 1].text }}</span>
      </h2>
    </header>
    <article class="grid grid-cols-1 lg:grid-cols-2">
      <section class="bg-white rounded-2xl px-6 py-4 m-4 mr-2">
        <h2 class="text-lg font-bold text-dark mb-2">
          {{ systemStatus[0].text }}：
        </h2>
        <p class="text-dark">
          {{ '各角色可使用的功能權限' }}
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
      <section class="bg-white rounded-2xl px-6 py-4 m-4 ml-2">
        <h2 class="text-lg font-bold text-dark mb-2">
          {{ systemStatus[1].text }}：
        </h2>
        <p class="text-dark">
          {{ '各角色可使用的功能權限' }}
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
    </article>
  </div>
</template>
