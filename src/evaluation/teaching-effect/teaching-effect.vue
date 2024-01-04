<script setup lang="ts">
import { useTeachingEffect } from './hooks'
const {
  subsectionList,
  standardList,
  scrollTop,
  popupShow,
  subsectionIndex,
  handeSubsectionChange,
  handlePopupClose,
  handleOpenStandardPopup
} = useTeachingEffect()

const data = [
  {
    id: 1,
    title: '孙雷',
    secondaryInfo: [
      {
        id: 11,
        label: '系部',
        value: '制药技术系'
      },
      {
        id: 12,
        label: '教研组',
        value: '组数学教研组'
      },
      {
        id: 13,
        label: '属性',
        value: '外聘教师'
      }
    ]
  },
  {
    id: 2,
    title: '张玉玲',
    secondaryInfo: [
      {
        id: 11,
        label: '系部',
        value: '制药技术系'
      },
      {
        id: 12,
        label: '教研组',
        value: '组数学教研组'
      },
      {
        id: 13,
        label: '属性',
        value: '外聘教师'
      }
    ]
  }
]
</script>

<template>
  <view class="evaluation-page">
    <view class="evaluation-tabbar">
      <u-navbar
        title="工作态度"
        safeAreaInsetTop
        fixed
        placeholder
        :autoBack="true"
      />
    </view>
    <u-sticky bgColor="#fff">
      <view class="subsection-box">
        <u-subsection
          mode="subsection"
          activeColor="#03aa8c"
          :list="subsectionList"
          :current="subsectionIndex"
          @change="handeSubsectionChange"
        />
      </view>
    </u-sticky>
    <view class="evaluation-content">
      <h-evaluation-list :list="data">
        <template #footer="{ row }">
          <u-form labelPosition="top" :model="row" labelWidth="auto">
            <u-form-item label="教案（10分）" borderBottom>
              <u-input></u-input>
            </u-form-item>
            <u-form-item label="教学基本素养（20分）" borderBottom>
              <u-input></u-input>
            </u-form-item>
            <u-form-item label="教学内容（20分）" borderBottom>
              <u-input></u-input>
            </u-form-item>
            <u-form-item label="教学方法（30分）" borderBottom>
              <u-input></u-input>
            </u-form-item>
            <u-form-item label="教学效果（20分）" borderBottom>
              <u-input></u-input>
            </u-form-item>
            <u-form-item label="总分" borderBottom>
              <u-input></u-input>
            </u-form-item>
          </u-form>
        </template>
      </h-evaluation-list>
    </view>
    <view class="evaluation-footer">
      <view class="evaluation-footer-content"></view>
      <view
        class="evaluation-footer-standard-btn"
        hover-class="hover"
        @tap="handleOpenStandardPopup"
      >
        评分标准
      </view>
      <view class="evaluation-footer-save-btn" hover-class="hover">
        保存评分
      </view>
    </view>
    <up-back-top
      icon="arrow-up"
      mode="square"
      :scrollTop="scrollTop"
      :customStyle="{ backgroundColor: '#03aa8c' }"
      :iconStyle="{
        fontSize: '32rpx',
        color: '#fff'
      }"
    />
    <u-popup :show="popupShow" @close="handlePopupClose" round="12">
      <view class="popup-content">
        <scroll-view scroll-y class="scroll-view">
          <view class="popup-title">参考标准</view>
          <h-evaluation-standard :data="standardList" />
        </scroll-view>
      </view>
    </u-popup>
  </view>
</template>

<style scoped lang="scss">
page {
  background-color: $u-bg-color;
}

$footer-height: 80rpx;

.subsection-box {
  padding: 20rpx;
}

.evaluation-content {
  margin-bottom: $footer-height;
  padding: 20rpx;

  .evaluation-input-item {
    display: flex;
    align-items: center;
    gap: 12rpx;

    .input-label {
      font-size: 28rpx;
      color: $u-content-color;
      font-weight: 400;
    }

    .input-block {
      flex: 1;
    }
  }
}

.evaluation-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: $footer-height;
  line-height: $footer-height;
  background-color: white;
  display: flex;
  align-items: center;

  &-content {
    flex: 1;
  }

  &-standard-btn {
    height: $footer-height;
    line-height: $footer-height;
    padding: 0 20rpx;
    background-color: $u-warning;
    color: white;
  }
  &-standard-btn.hover {
    background-color: $u-warning-disabled;
  }

  &-save-btn {
    height: $footer-height;
    line-height: $footer-height;
    padding: 0 20rpx;
    background-color: #03aa8c;
    color: white;
  }

  &-save-btn.hover {
    background-color: #41b5a0;
  }
}

.popup-content {
  padding: 20rpx;
  height: 50vh;

  .scroll-view {
    height: 100%;

    .popup-title {
      font-size: 32rpx;
      font-weight: 600;
      height: 64rpx;
      line-height: 64rpx;
      margin-bottom: 20rpx;
    }
  }
}
</style>
