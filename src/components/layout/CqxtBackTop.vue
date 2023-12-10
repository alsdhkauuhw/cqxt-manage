<template>
    <transition :name="`${ns.namespace.value}-fade-in`">
      <div
        v-if="visible"
        :style="backTopStyle"
        :class="ns.b()"
        @click.stop="handleClick"
      >
        <slot>
          <el-icon :class="ns.e('icon')"><caret-top /></el-icon>
        </slot>
      </div>
    </transition>
  </template>
  
  <script lang="ts" setup>
  import { useBackTop } from '@/enum/use-backtop';
import { backtopProps, backtopEmits, useNamespace } from 'element-plus';
import { computed } from 'vue'
  
  const COMPONENT_NAME = 'ElBacktop'
  
  defineOptions({
    name: COMPONENT_NAME,
  })
  
  const props = defineProps(backtopProps)
  const emit = defineEmits(backtopEmits)
  
  const ns = useNamespace('backtop')
  
  const { handleClick, visible } = useBackTop(props, emit, COMPONENT_NAME)
  
  const backTopStyle = computed(() => ({
    right: `${props.right}px`,
    bottom: `${props.bottom}px`,
  }))
  </script>