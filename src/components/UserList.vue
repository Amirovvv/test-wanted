<script setup lang="ts">
import { PropType } from 'vue'
import { useUsersStore } from '@/stores/users.store'
import { UserItemType } from '@/types/types'
import UserItem from '@/components/UserItem.vue'
import AppIsLoader from '@/components/ui/AppIsLoader.vue'

const store = useUsersStore()

defineProps({
  userList: {
    type: Object as PropType<UserItemType[]>,
    required: true,
  },
})
</script>

<template>
  <div class="user-list">
    <div class="user-list__title">Список пользователей</div>
    <div v-if="store.isLoading"><AppIsLoader /></div>
    <div v-else>
      <div v-if="!!userList.length">
        <transition-group name="fade" tag="div">
          <UserItem v-for="user in userList" :key="user.id" :user-item="user" />
        </transition-group>
      </div>
      <span v-else>Пусто</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-list {
  position: relative;
  padding: 12px;
  width: 450px;
  max-width: 450px;
  min-height: 474px;
  padding: 8px 16px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  &__title {
    padding: 15px 0;
    color: rgba(0, 0, 0, 0.6);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter {
  opacity: 0;
  transform: scale(0.2);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(0.2);
}

.fade-enter-active {
  transition-delay: 0.1s;
}

.fade-leave-active {
  transition-delay: 0s;
}
</style>
