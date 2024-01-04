<script setup lang="ts">
const standardList = [
  {
    id: 1,
    primaryStandard: '教学常规（A系处打分）系处打分',
    children: [
      {
        id: 11,
        secondaryStandard: '上交材料',
        scoringBasis:
          '满分100分，材料和成绩提交每晚交一次扣5分；因私调课每4节课扣5分；听课每少一节课扣5分；教研活动每少一次扣5分。',
        children: [
          {
            id: 111,
            referenceStandard: '按时交授课计划和教学大纲'
          },
          {
            id: 112,
            referenceStandard: '教案抽查时能够及时交教案'
          },
          {
            id: 13,
            referenceStandard:
              '学期末，按时交教师听课记录本，教学评价表，教研组工作手册、试卷等应提交的资料'
          },
          {
            id: 114,
            referenceStandard: '学期末及时提交成绩'
          }
        ]
      },
      {
        id: 12,
        secondaryStandard: '纪律',
        scoringBasis:
          '满分100分，材料和成绩提交每晚交一次扣5分；因私调课每4节课扣5分；听课每少一节课扣5分；教研活动每少一次扣5分。',
        children: [
          {
            id: 121,
            referenceStandard: '上课无迟到、早退'
          },
          {
            id: 122,
            referenceStandard: '实验课课时利用充分，不早放'
          },
          {
            id: 123,
            referenceStandard: '积极参加教研活动'
          }
        ]
      },
      {
        id: 13,
        secondaryStandard: '听课',
        scoringBasis:
          '满分100分，材料和成绩提交每晚交一次扣5分；因私调课每4节课扣5分；听课每少一节课扣5分；教研活动每少一次扣5分。',
        children: [
          {
            id: 131,
            referenceStandard: '本学期内听课次数不少于8课时'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    primaryStandard: '工作态度(B)系处打分',
    children: [
      {
        id: 21,
        secondaryStandard: '工作态度',
        scoringBasis:
          '每一项中，完成相当出色20分，良好 15分，一般10分，差0～5分。 此项由系主任和教研组长组成评分小组，根据实际情况打分。此栏分数为这五项分数的总和。',
        children: [
          {
            id: 221,
            referenceStandard: '认真完成学校、系处、教研组布置的各项任务'
          },
          {
            id: 222,
            referenceStandard:
              '积极参加学校、系处、教研组等召开的各类会议及组织的各类大型活动'
          },
          {
            id: 223,
            referenceStandard:
              '教学态度亲切，关心爱护学生。参考学生座谈会记录和常规检查情况'
          },
          {
            id: 224,
            referenceStandard:
              '教学过程中，布置作业适量，批改认真，并且能给予学生及时反馈'
          },
          {
            id: 225,
            referenceStandard:
              '书写教案认真，听课笔记书写仔细，编写试卷合理。根据常规检查情况给分'
          }
        ]
      }
    ]
  }
]
</script>

<template>
  <view class="standard">
    <view class="standard-title">参考标准</view>
    <h-evaluation-standard :data="standardList" />
  </view>
</template>

<style scoped lang="scss">
.standard {
  padding: 20rpx;

  &-title {
    font-size: 42rpx;
    font-weight: 600;
    height: 84rpx;
    line-height: 84rpx;
    text-align: center;
  }
}
</style>
