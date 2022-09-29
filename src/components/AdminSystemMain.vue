<script setup lang="ts">
import { useSystem } from '@/store/system'
import { systemStatus } from '@/utilities/data'

</script>

<template>
  <div class="mt-8">
    <header class="mx-4 bg-white rounded-2xl px-6 py-4">
      <h2 class="text-lg font-bold">
        <span class="text-dark">{{ '互評狀態' }}：</span>
        <span class="text-theme">{{ systemStatus[useSystem().systemStatus - 1].text }}</span>
      </h2>
      <p>
        {{ '' }}
      </p>
    </header>
    <article class="grid grid-cols-1 lg:grid-cols-2">
      <section class="bg-white rounded-2xl px-6 py-4 m-4">
        <h2 class="text-lg font-bold text-dark mb-4">
          {{ systemStatus[0].text }}{{ '功能權限：' }}
        </h2>
        <section class="mb-4">
          <h3 class="font-bold text-dark mb-2">
            {{ '主管：' }}
          </h3>
          <ul class="mb-4 text-theme">
            <li>{{ '互評結果瀏覽' }}</li>
          </ul>
        </section>
        <section class="mb-0">
          <h3 class="font-bold text-dark mb-2">
            {{ '管理員：' }}
          </h3>
          <ul class="mb-4 text-theme">
            <li>{{ '使用者設定' }}</li>
            <li>{{ '問卷設定' }}</li>
            <li>{{ '互評結果瀏覽' }}</li>
            <li>{{ '系統狀態設定' }}</li>
          </ul>
        </section>
      </section>
      <section class="bg-white rounded-2xl px-6 py-4 m-4">
        <h2 class="text-lg font-bold text-dark mb-4">
          {{ systemStatus[1].text }}{{ '功能權限：' }}
        </h2>
        <section class="mb-4">
          <h3 class="font-bold text-dark mb-2">
            {{ '員工：' }}
          </h3>
          <ul class="mb-4 text-theme">
            <li>{{ '員工互評填寫' }}</li>
          </ul>
        </section>
        <section class="mb-4">
          <h3 class="font-bold text-dark mb-2">
            {{ '主管：' }}
          </h3>
          <ul class="mb-4 text-theme">
            <li>{{ '主管互評填寫' }}</li>
            <li>{{ '互評結果瀏覽' }}</li>
          </ul>
        </section>
        <section class="mb-0">
          <h3 class="font-bold text-dark mb-2">
            {{ '管理員：' }}
          </h3>
          <ul class="mb-4 text-theme">
            <li>{{ '未填名單提醒' }}</li>
            <li>{{ '互評結果瀏覽' }}</li>
            <li>{{ '系統狀態設定' }}</li>
          </ul>
        </section>
      </section>
    </article>
  </div>
</template>
