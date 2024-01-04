<script setup lang="ts">
import type { HEvaluationStandardData } from '@/types/h-evaluation-standard'

interface Props {
  data: HEvaluationStandardData
}

defineProps<Props>()
</script>

<template>
  <view
    class="standard-wrap"
    v-for="(primaryStandardItem, primaryStandardIndex) in data"
    :key="primaryStandardItem.id"
  >
    <view class="primary-wrap">
      <view class="primary-title">一级指标</view>
      <view class="primary-item-wrap">
        <view class="primary-item-title">
          <view class="primary-item-title-index">
            {{ primaryStandardIndex + 1 }}.
          </view>
          <view class="primary-item-title-text">
            {{ primaryStandardItem.primaryStandard }}
            <view v-if="primaryStandardItem.score" class="score-box">
              <up-badge
                shape="horn"
                :value="`${primaryStandardItem.score}分`"
              />
            </view>
          </view>
        </view>
        <view class="secondary-wrap">
          <view class="secondary-title">二级指标</view>
          <view class="secondary-item-wrap">
            <view
              class="secondary-item"
              v-for="(
                secondaryStandardItem, secondaryStandardIndex
              ) in primaryStandardItem.children"
              :key="secondaryStandardItem.id"
            >
              <view class="secondary-item-title">
                <view class="secondary-item-title-index"
                  >{{ secondaryStandardIndex + 1 }}.</view
                >
                <view class="secondary-item-title-text">
                  {{ secondaryStandardItem.secondaryStandard }}
                </view>
              </view>
              <view class="reference-standard-box">
                <view class="reference-standard-title">参考标准</view>
                <view
                  class="reference-standard-item"
                  v-for="(
                    referenceStandardItem, referenceStandardIndex
                  ) in secondaryStandardItem.children"
                  :key="referenceStandardItem.id"
                >
                  <view class="reference-standard-item-index">
                    {{ referenceStandardIndex + 1 }}.
                  </view>
                  <view class="reference-standard-item-text">
                    {{ referenceStandardItem.referenceStandard }}
                  </view>
                </view>
              </view>
              <u-gap height="10"></u-gap>
              <up-alert
                title="评分依据"
                :description="secondaryStandardItem.scoringBasis"
                type="success"
              />
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.standard-wrap {
  margin-bottom: 20rpx;

  &:last-child {
    margin-bottom: 0;
  }

  .primary-wrap {
    border-left: 1px solid $u-border-color;
    border-bottom: 1px solid $u-border-color;

    .primary-title {
      $size: 24rpx;
      $weight: 500;
      $height: 48rpx;

      margin-left: 12rpx;
      color: $u-tips-color;
      font-size: $size;
      font-weight: $weight;
      letter-spacing: 2rpx;
      height: $height;
      line-height: $height;
    }

    .primary-item-wrap {
      padding-left: 20rpx;
      padding-bottom: 20rpx;

      .primary-item-title {
        display: flex;
        align-items: flex-start;

        $color: $u-main-color;
        $size: 36rpx;
        $weight: 600;
        $height: 72rpx;

        &-index {
          width: $height;
          height: $height;
          line-height: $height;
          text-align: center;
          font-size: $size;
          font-weight: $weight;
          color: $color;
        }

        &-text {
          position: relative;
          flex: 1;
          line-height: $height;
          font-size: $size;
          font-weight: $weight;
          color: $color;

          .score-box {
            position: absolute;
            right: 0;
            top: -20rpx;
          }
        }
      }

      .secondary-wrap {
        border-left: 1px solid $u-border-color;
        border-bottom: 1px solid $u-border-color;

        .secondary-title {
          $size: 24rpx;
          $weight: 500;
          $height: 48rpx;

          margin-left: 12rpx;
          color: $u-tips-color;
          font-size: $size;
          font-weight: $weight;
          letter-spacing: 2rpx;
          height: $height;
          line-height: $height;
        }

        .secondary-item-wrap {
          padding-left: 20rpx;
          padding-bottom: 20rpx;

          .secondary-item {
            &-title {
              color: $u-main-color;
              display: flex;

              $item-size: 30rpx;
              $item-weight: 600;
              $item-height: 60rpx;

              &-index {
                width: $item-height;
                height: $item-height;
                line-height: $item-height;
                text-align: center;
                font-size: $item-size;
                font-weight: $item-weight;
              }

              &-text {
                flex: 1;
                font-size: $item-size;
                font-weight: $item-weight;
                line-height: $item-height;
              }
            }

            .reference-standard-box {
              padding: 20rpx;
              background-color: #03aa8c;
              border-radius: 6px;

              .reference-standard-title {
                color: $u-tips-color;
                font-size: 28rpx;
                font-weight: 600;
                height: 56rpx;
                line-height: 56rpx;
                color: white;
              }

              .reference-standard-item {
                display: flex;
                align-items: flex-start;

                $item-size: 24rpx;
                $item-weight: 500;
                $item-height: 48rpx;
                $item-color: white;

                &-index {
                  width: $item-height;
                  height: $item-height;
                  line-height: $item-height;
                  text-align: center;
                  color: $item-color;
                  font-size: $item-size;
                  font-weight: $item-weight;
                }

                &-text {
                  flex: 1;
                  line-height: $item-height;
                  color: $item-color;
                  font-size: $item-size;
                  font-weight: $item-weight;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
