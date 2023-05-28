<script setup lang="ts">
import { onMounted, onUnmounted, Ref, ref } from 'vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import ClearIcon from '@/components/icons/ClearIcon.vue'

const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits(['activeFilter'])

const visible: Ref<boolean> = ref(false)
const valueSelect: Ref<string> = ref(props.options.value)
const containerRef: Ref<HTMLDivElement | null> = ref(null)

const toggle = (): void => {
  visible.value = !visible.value
}

const currentSelect = (option: { value: string }): void => {
  valueSelect.value = option.value
  emits('activeFilter', option)
}

const clearOption = (): void => {
  valueSelect.value = props.options.value
  emits('activeFilter', '')
}

const handleClickOutside = (event: MouseEvent) => {
  if (
    containerRef.value &&
    !containerRef.value.contains(event.target as Node)
  ) {
    visible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="container" ref="containerRef" @click="handleClickOutside">
    <div class="select" @click="toggle">
      <div class="select-selector">
        <div class="select-selector__label">
          <span>{{ valueSelect }}</span>
        </div>
        <div class="select-selector__icons">
          <div class="select-selector__clear" @click.stop="clearOption">
            <ClearIcon />
          </div>
          <div class="select-selector__arrow" :class="{ expanded: visible }">
            <ArrowIcon />
          </div>
        </div>
      </div>
      <div class="select-options" :class="{ hidden: !visible }">
        <ul>
          <li
            v-for="(option, index) in options.list"
            :key="index"
            :class="{ current: option === valueSelect }"
            @click="currentSelect(option)"
          >
            {{ option.value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.select {
  width: 260px;
  border-bottom: 1px solid gainsboro;
  cursor: pointer;
  position: relative;
  font-size: 16px;

  &-selector {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__icons {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__arrow {
      transition-duration: 0.3s;
    }
  }

  ul {
    list-style-type: none;
    border: 1px solid gainsboro;
    position: absolute;
    width: 100%;
  }
  li {
    padding: 12px;
    &:hover {
      color: black;
      background: rgb(245, 245, 245);
    }
  }
}

.current {
  color: white;
  background: #1976d2;
}
.hidden {
  display: none;
}
.visible {
  display: none;
}
.expanded {
  transform: rotateZ(180deg) translateY(2px);
}
</style>
