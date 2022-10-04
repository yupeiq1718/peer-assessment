<script setup lang="ts">
import { useUsers } from '@/store/users'
import { roleData } from '@/utilities/data'

const router = useRouter()

const items = [
  {
    name: 'create',
    icon: 'plus',
    function: () => router.push('/admin/users/new')
  },
  {
    name: 'filter',
    icon: 'filter',
    function: () => router.push('/admin/users/filter')
  }
]

const users = computed(() => useUsers().users)

const filterDepartment = ref<string>('')
provide('filterDepartment', filterDepartment)

const filterRoles = ref<0|1|2|3|4>(0)
provide('filterRoles', filterRoles)

const setFilterData = ({ department, roles }: {
  department: string,
  roles: 0|1|2|3|4
}) => {
  filterDepartment.value = department
  filterRoles.value = roles
}
provide('setFilterData', setFilterData)

</script>
<template>
  <span class="absolute font-bold text-muted text-sm h-4 mb-2">
    <BaseSvgIcon
      name="users"
      class="w-4 h-4 mr-2 fill-muted"
    />
    <span v-if="!filterDepartment && !filterRoles">{{ '全部使用者' }}</span>
    <span v-if="filterDepartment">{{ filterDepartment }}</span>
    <span v-if="filterRoles">{{ roleData[filterRoles - 1].text }}</span>
  </span>
  <div
    v-if="users"
    class="absolute top-8 left-0 w-full h-[calc(100%-2rem)] px-4 overflow-auto"
  >
    <AdminUsersMain />
    <transition
      name="sidebar"
      mode="out-in"
      appear
    >
      <TheSideBar :items="items" />
    </transition>
    <router-view v-slot="{ Component }">
      <transition
        name="modal"
        mode="out-in"
        appear
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
