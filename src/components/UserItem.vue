<script setup lang="ts">
import { PropType } from 'vue'
import { UserItemType } from '@/types/types'
import AppTooltip from './ui/AppTooltip.vue'

defineProps({
  userItem: {
    type: Object as PropType<UserItemType>,
    required: true,
  },
})
</script>

<template>
  <div class="user-item">
    <div class="user-item__avatar">
      <AppTooltip :user-country="userItem.country">
        <img :src="userItem.avatar" alt="avatar"
      /></AppTooltip>
    </div>
    <div class="user-item__desc">
      <div class="user-item__desc-title">
        {{ userItem.title }} <span>{{ userItem.score }}</span>
      </div>
      <div class="user-item__desc-subtitle">
        <span>{{ userItem.author }}</span> &mdash; {{ userItem.subtitle }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.user-item {
  display: flex;
  padding: 12px 0;

  &__avatar {
    margin-right: 16px;
    // position: relative;
  }

  &__avatar,
  &__avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  &__desc {
    // width: 100%;
    // border-bottom: 1px solid;

    &-title {
      font-size: 16px;
      margin-bottom: 8px;

      span {
        color: #bdbdbd;
        margin-left: 4px;
      }
    }

    &-subtitle {
      font-size: 14px;
      color: #bdbdbd;

      span {
        color: black;
      }
    }
  }
}
</style>
