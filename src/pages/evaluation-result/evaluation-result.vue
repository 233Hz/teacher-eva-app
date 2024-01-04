<script setup lang="ts">
import { useEvaluationResult } from './hooks'

const {
  actionSheetShow,
  actionSheetList,
  handleOpenActionSheet,
  handleCloseActionSheet
} = useEvaluationResult()

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
        label: '教师属性',
        value: '外聘教师'
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
      }
    ]
  }
]
</script>

<template>
  <view class="evaluation-page">
    <u-navbar
      title="评教结果"
      safeAreaInsetTop
      fixed
      placeholder
      leftIcon=""
      rightIcon="more-dot-fill"
      :autoBack="true"
      @rightClick="handleOpenActionSheet"
    />
    <view class="evaluation-content">
      <h-evaluation-list :list="data">
        <template #footer>
          <view class="evaluation-score-box">
            <view class="total-score">
              <view class="total-score__label">总分</view>
              <view class="total-score__value">100</view>
            </view>
            <view class="score-item">
              <view class="score-item__label">教学常规</view>
              <view class="score-item__value">100</view>
            </view>
            <view class="score-item">
              <view class="score-item__label">工作态度</view>
              <view class="score-item__value">100</view>
            </view>
            <view class="score-item">
              <view class="score-item__label">课堂教学</view>
              <view class="score-item__value">100</view>
            </view>
            <view class="score-item">
              <view class="score-item__label">教学科研</view>
              <view class="score-item__value">100</view>
            </view>
            <view class="score-item">
              <view class="score-item__label">教学特色</view>
              <view class="score-item__value">100</view>
            </view>
            <view class="score-item">
              <view class="score-item__label">部长加分</view>
              <view class="score-item__value">100</view>
            </view>
            <view class="score-item">
              <view class="score-item__label">教学事故扣分</view>
              <view class="score-item__value">100</view>
            </view>
          </view>
          <navigator
            url="/pages/evaluation-result/evaluation-result-details"
            open-type="navigate"
            hover-class="navigator-hover"
          >
            <view class="evaluation-details-box">
              <view>查看详情</view>
              <u-icon name="arrow-right" />
            </view>
          </navigator>
        </template>
      </h-evaluation-list>
    </view>
    <u-action-sheet
      round="16"
      cancelText="取消"
      :show="actionSheetShow"
      :actions="actionSheetList"
      @close="handleCloseActionSheet"
    />
  </view>
</template>

<style scoped lang="scss">
page {
  background-color: $u-bg-color;
}

.evaluation-content {
  padding: 20rpx;

  .evaluation-score-box {
    padding-bottom: 20rpx;
    margin-bottom: 20rpx;
    border-bottom: 1px solid #f5f5f5;

    .total-score {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20rpx;

      &__label {
        color: $u-main-color;
        font-size: 28rpx;
        font-weight: 600;
      }

      &__value {
        color: $u-main-color;
        font-size: 32rpx;
        font-weight: 600;
      }
    }

    .score-item {
      $fs: 24rpx;
      $h: $fs * 2;

      display: flex;
      justify-content: space-between;
      align-items: center;
      height: $h;
      line-height: $h;

      &__label {
        font-size: $fs;
        font-weight: 300;
        color: $u-tips-color;
      }

      &__value {
        color: $u-tips-color;
        font-size: $fs;
        font-weight: 500;
      }
    }
  }

  .evaluation-details-box {
    $fs: 28rpx;
    $h: $fs * 2;

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $h;
    line-height: $h;
    font-size: $fs;
    font-weight: 400;
    padding: 0 10rpx;
  }
}
</style>
