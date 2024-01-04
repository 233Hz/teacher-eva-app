<script setup lang="ts">
import { usePenaltyItem } from './hooks'

const { handleNavbarRightClick } = usePenaltyItem()
const data = [
  {
    id: 1,
    title: '孙雷',
    secondaryInfo: [
      {
        label: '系部',
        value: '制药技术系'
      },
      {
        label: '教研组',
        value: '组数学教研组'
      },
      {
        label: '扣分原因',
        value: '没有'
      },
      {
        label: '分值',
        value: '100'
      },
      {
        label: '评价人',
        value: '张三'
      }
    ]
  },
  {
    id: 2,
    title: '张玉玲',
    secondaryInfo: [
      {
        label: '系部',
        value: '制药技术系'
      },
      {
        label: '教研组',
        value: '组数学教研组'
      },
      {
        label: '扣分原因',
        value: '没有'
      },
      {
        label: '分值',
        value: '100'
      },
      {
        label: '评价人',
        value: '张三'
      }
    ]
  }
]
</script>

<template>
  <view>
    <u-navbar
      title="扣分项"
      safeAreaInsetTop
      fixed
      placeholder
      rightIcon="plus-circle"
      :autoBack="true"
      @rightClick="handleNavbarRightClick"
    />
    <view class="page-list">
      <h-evaluation-list :list="data">
        <template #footer>
          <view class="evaluation-action-box">
            <view class="action-btn-item">
              <up-button
                type="primary"
                text="编辑"
                shape="circle"
                plain
                icon="edit-pen"
              />
            </view>
            <view class="action-btn-item">
              <up-button
                type="error"
                text="删除"
                shape="circle"
                plain
                icon="trash"
              />
            </view>
          </view>
        </template>
      </h-evaluation-list>
    </view>
  </view>
</template>

<style scoped lang="scss">
page {
  background-color: $u-bg-color;
}

.page-list {
  padding: 20rpx;

  .evaluation-action-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20rpx;
  }
}
</style>
