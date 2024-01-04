<script setup lang="ts">
import type { HEvaluationListItem } from '../types/h-evaluation-list'

interface Props {
  list?: HEvaluationListItem[]
  secondaryLabelWidth?: number
}

withDefaults(defineProps<Props>(), {
  list: () => [],
  secondaryLabelWidth: 100
})
</script>

<template>
  <view class="evaluation-list">
    <u-empty v-if="!list.length" />
    <view
      v-else
      v-for="(item, index) in list"
      :key="item?.dataKey || item['id'] || index"
      class="evaluation-list-item"
    >
      <view
        class="evaluation-list-item__main"
        :style="{
          paddingBottom: $slots.footer ? '20rpx' : '0',
          marginBottom: $slots.footer ? '20rpx' : '0',
          borderBottom: $slots.footer ? '1rpx solid #f5f5f5' : 'none'
        }"
      >
        <view class="title">{{ item.title }}</view>
        <view
          class="secondary-info-item"
          v-for="secondaryItem in item.secondaryInfo"
          :key="secondaryItem.value"
        >
          <view
            class="secondary-info-item__label"
            :style="{ width: `${secondaryLabelWidth}rpx` }"
          >
            {{ secondaryItem.label }}
          </view>
          <view class="secondary-info-item__value">
            {{ secondaryItem.value }}
          </view>
        </view>
      </view>
      <slot name="footer" :row="item"></slot>
    </view>
  </view>
</template>

<style scoped lang="scss">
.evaluation-list {
  &-item {
    background-color: white;
    padding: 20rpx;
    border-radius: 16px;
    margin-bottom: 20rpx;

    &:last-child {
      margin-bottom: 0;
    }

    &__main {
      padding-bottom: 20rpx;
      margin-bottom: 20rpx;
      border-bottom: 1rpx solid #f5f5f5;

      .title {
        $text-size: 30rpx;
        $h: $text-size * 2;

        font-size: $text-size;
        font-weight: 600;
        height: $h;
        line-height: $h;
      }

      .secondary-info-item {
        display: flex;
        gap: 12rpx;

        $text-size: 24rpx;
        $h: $text-size * 2;
        &__label {
          color: $u-light-color;
          font-size: $text-size;
          line-height: $h;
          font-weight: 400;
        }

        &__value {
          flex: 1;
          color: $u-tips-color;
          font-size: $text-size;
          line-height: $h;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
