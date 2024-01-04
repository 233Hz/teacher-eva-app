<script setup lang="ts">
import { ref, computed } from 'vue'
import type { VitrualItem } from '@/types/h-vitrual'

interface Props {
  data?: any[]
}
defineProps<Props>()

/**
 * 内容列表dom
 */
const listContainerRef = ref<HTMLDivElement>()
/**
 * 滚动容器dom
 */
const scorllContainerRef = ref<HTMLDivElement>()
/**
 * 动态获取滚动容器高度
 */
const scorllContainerHeight = computed(() =>
  scorllContainerRef.value ? scorllContainerRef.value.clientHeight : 0
)
/**
 * 预估高度
 */
const estimate = ref(200)
/**
 * 视口第一个元素索引
 */
const startIndex = ref(0)
/**
 * 视口最后一个元素的索引
 */
const endIndex = computed(() => {
  if (!list.value || list.value.length <= 0) return 0
  const tempList = list.value
  let index = startIndex.value
  // 列表容器总高度
  let listContentTotalHeight = tempList[index].height
  // 视口高度
  let viewPortHeight = scorllContainerHeight.value
  //内容高度小于视口高度时，一直循环
  while (listContentTotalHeight < viewPortHeight) {
    index++
    listContentTotalHeight += tempList[index].height
  }
  // 因为数组的slice方法是包头不包尾的所以还需要再endPos上+1，才会是预期的元素数量
  index++
  // 防止多出空白，多渲染一个填补
  return index + 1
})
const startOffset = ref(0)
const styleTranslate = computed(
  () => `transform:translate(0,${startOffset.value}px)`
)

const list = ref<VitrualItem<any>[]>([])
/**
 * 撑开滚动容器高度
 */
const strutHeight = computed(() =>
  list.value.length > 0 ? list.value[list.value.length - 1].height : 0
)
</script>

<template>
  <scroll-view
    ref="scorllContainerRef"
    scroll-y
    class="scorll-container"
    :style="{ height: `${scorllContainerHeight}px` }"
  >
    <!-- 用于撑开高度的容器 -->
    <view class="strut-container" :style="{ height: `${strutHeight}px` }" />
    <view ref="listContainerRef" class="list-container"></view>
  </scroll-view>
</template>

<style scoped lang="scss">
.scorll-container {
  border: 1px solid #ddd;
  position: relative;
  width: 100%;
  height: 100%;

  .strut-container {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
  }

  .list-container {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
  }
}
</style>
