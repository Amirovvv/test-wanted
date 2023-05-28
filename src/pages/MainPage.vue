<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useUsersStore } from '@/stores/users.store'
import { useFiltersStore } from '@/stores/filtersUser.store'
import UserList from '@/components/UserList.vue'
import AppSelect from '@/components/ui/AppSelect.vue'

const storeUsers = useUsersStore()
const storeFilters = useFiltersStore()

const filteredUsers = computed(() => {
  const filterUser = storeFilters.activeFilterCountry.toLowerCase()
  const filterScore = storeFilters.activeFilterScore
  const { extremeValue, score } = filterScore ?? {}

  return storeUsers.users.filter(
    (user) =>
      user.country.toLowerCase().includes(filterUser) &&
      (extremeValue === 'max'
        ? user.score > score
        : extremeValue === 'min'
        ? user.score < score
        : true),
  )
})

onMounted(() => {
  storeUsers.getUsers()
})
</script>

<template>
  <div class="main">
    <div class="main-content">
      <div class="main-content__filters">
        <AppSelect
          :options="storeFilters.filterCountry"
          @active-filter="storeFilters.updateFilterCountry"
        />
        <AppSelect
          :options="storeFilters.filterScore"
          @active-filter="storeFilters.updateFilterScore"
        />
      </div>
      <UserList :user-list="filteredUsers" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  height: 100vh;
  &-content {
    display: flex;
    gap: 24px;
    margin: auto;
    width: max-content;
    height: 100%;
    justify-content: center;
    align-items: center;

    &__filters {
      display: flex;
      flex-direction: column;
      gap: 100px;
    }
  }
}
</style>
