<script setup lang="ts">
import { Ref, ref } from 'vue'

defineProps({
  userCountry: {
    type: String,
  },
})

const showTooltip: Ref<boolean> = ref(false)

const toogleTooltip = (): void => {
  showTooltip.value = !showTooltip.value
}
</script>

<template>
  <div class="tooltip">
    <div class="tooltip-click" @click="toogleTooltip">
      <slot></slot>
    </div>
    <div class="tooltip-content" v-if="showTooltip">
      {{ userCountry }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.tooltip {
  position: relative;

  &-click {
    cursor: pointer;
  }

  &-content {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f0f0f0;
    color: #333;
    padding: 5px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 999;
  }
}
</style>
