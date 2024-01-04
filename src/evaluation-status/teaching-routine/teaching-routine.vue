<script setup lang="ts">
import { useTeachingRoutine } from './hooks'
const { subsectionList, subsectionIndex, handeSubsectionChange } =
  useTeachingRoutine()

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
        label: '评价人',
        value: '陈欢'
      },
      {
        label: '是否评价',
        value: '是'
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
        label: '属性',
        value: '外聘教师'
      },
      {
        label: '是否评价',
        value: '是'
      }
    ]
  }
]
</script>

<template>
  <view class="evaluation-page">
    <view class="evaluation-tabbar">
      <u-navbar
        title="教学常规评价情况"
        safeAreaInsetTop
        fixed
        placeholder
        :autoBack="true"
      />
    </view>
    <view class="subsection-box">
      <u-subsection
        mode="subsection"
        activeColor="#03aa8c"
        :list="subsectionList"
        :current="subsectionIndex"
        @change="handeSubsectionChange"
      />
    </view>
    <view class="evaluation-content">
      <h-evaluation-list :list="data" />
    </view>
    <view class="evaluation-footer">
      <view class="progress-box">
        <view class="progress-text">
          <text>已评价10%</text>
          <text>未评价90%</text>
        </view>
        <u-line-progress
          :percentage="10"
          activeColor="#03aa8c"
          inactiveColor="#dd6161"
        />
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
page {
  background-color: $u-bg-color;
}

$footer-height: 80rpx;

.subsection-box {
  padding: 20rpx 20rpx 0 20rpx;
}

.evaluation-content {
  margin-bottom: $footer-height;
  padding: 20rpx;
}

.evaluation-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: $footer-height;
  line-height: $footer-height;
  background-color: white;

  .progress-box {
    padding: 0 20rpx;
    .progress-text {
      display: flex;
      justify-content: space-between;
      font-size: 24rpx;
      color: $u-tips-color;
      height: 48rpx;
      line-height: 48rpx;
    }
  }
}
</style>
