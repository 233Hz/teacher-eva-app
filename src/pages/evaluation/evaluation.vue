<script setup lang="ts"></script>

<template>
  <view>
    <u-navbar title="评教" safeAreaInsetTop fixed placeholder leftIcon="" />
    <view class="cell-box">
      <u-gap height="20" />
      <view class="cell-box__block">
        <u-cell-group>
          <u-cell
            title="教学常规"
            isLink
            url="/evaluation/teaching-routine/teaching-routine"
            size="large"
          />
          <u-cell
            title="工作态度"
            isLink
            url="/evaluation/work-attitude/work-attitude"
            size="large"
          />
          <u-cell
            title="教学效果-督导"
            isLink
            url="/evaluation/teaching-effect/teaching-effect"
            size="large"
          />
          <u-cell
            title="教学效果-同行"
            isLink
            url="/evaluation/teaching-effect/teaching-effect"
            size="large"
          />
          <u-cell
            title="教学效果-班主任"
            isLink
            url="/evaluation/teaching-effect/teaching-effect"
            size="large"
          />
          <u-cell
            title="教学效果-教研组"
            isLink
            url="/evaluation/teaching-effect/teaching-effect"
            size="large"
          />
          <u-cell
            title="教学效果-学生"
            isLink
            url="/evaluation/teaching-effect/teaching-effect"
            size="large"
          />
          <u-cell
            title="教学科研"
            isLink
            url="/evaluation/teaching-research/teaching-research"
            size="large"
          />
          <u-cell
            title="教学特色"
            isLink
            url="/evaluation/teaching-feature/teaching-feature"
            size="large"
          />
          <u-cell
            title="加分项"
            isLink
            url="/evaluation/bonus-item/bonus-item"
            size="large"
          />
          <u-cell
            title="扣分项"
            isLink
            url="/evaluation/penalty-item/penalty-item"
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
