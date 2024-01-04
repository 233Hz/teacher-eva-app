<script setup lang="ts"></script>

<template>
  <view>
    <u-navbar title="评价情况" safeAreaInsetTop fixed placeholder leftIcon="" />
    <view class="cell-box">
      <u-gap height="20" />
      <view class="cell-box__block">
        <u-cell-group>
          <u-cell
            title="教学常规评价情况"
            isLink
            url="/evaluation-status/teaching-routine/teaching-routine"
            size="large"
          />
          <u-cell
            title="工作态度评价情况"
            isLink
            url="/evaluation-status/work-attitude/work-attitude"
            size="large"
          />
          <u-cell
            title="教学效果评价情况-督导"
            isLink
            url="/evaluation-status/teaching-effect/teaching-effect"
            size="large"
          />
          <u-cell
            title="教学效果评价情况-同行"
            isLink
            url="/evaluation-status/teaching-effect/teaching-effect"
            size="large"
          />
          <u-cell
            title="教学效果评价情况-班主任"
            isLink
            url="/evaluation-status/teaching-effect/teaching-effect"
            size="large"
          />
          <u-cell
            title="教学效果评价情况-教研组"
            isLink
            url="/evaluation-status/teaching-effect/teaching-effect"
            size="large"
          />
          <u-cell
            title="教学效果评价情况-学生"
            isLink
            url="/evaluation-status/teaching-effect/teaching-effect"
            size="large"
          />
          <u-cell
            title="教学科研评价情况"
            isLink
            url="/evaluation-status/teaching-research/teaching-research"
            size="large"
          />
          <u-cell
            title="教学特色评价情况"
            isLink
            url="/evaluation-status/teaching-feature/teaching-feature"
            size="large"
          />
        </u-cell-group>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
page {
  background-color: $u-bg-color;
}

.cell-box {
  &__block {
    background-color: #fff;
  }
}
</style>
