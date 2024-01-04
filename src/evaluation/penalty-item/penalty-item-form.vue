<script setup lang="ts"></script>

<template>
  <view>
    <u-navbar
      title="添加扣分项"
      safeAreaInsetTop
      fixed
      placeholder
      :autoBack="true"
    />
    <view class="form-content">
      <u-form labelPosition="top" labelWidth="auto">
        <u-form-item label="选择教师">
          <u-input disabledColor="#ffffff" placeholder="请选择教师" />
        </u-form-item>
        <u-form-item label="加分原因">
          <u-input disabledColor="#ffffff" placeholder="请填写加分原因" />
        </u-form-item>
        <u-form-item label="加分值">
          <u-input disabledColor="#ffffff" placeholder="请填写加分值" />
        </u-form-item>
      </u-form>
      <u-button type="primary" text="提交" customStyle="margin-top: 10px" />
      <u-button type="error" text="重置" customStyle="margin-top: 10px" />
    </view>
  </view>
</template>

<style scoped lang="scss">
page {
  background-color: $u-bg-color;
}

.form-content {
  margin: 20rpx;
  padding: 20rpx;
  background-color: white;
  border-radius: 16px;
}
</style>
