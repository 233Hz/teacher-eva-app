import { ref } from 'vue'

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
  }
]

export const useWorkAttitude = () => {
  const popupShow = ref(false)
  const handlePopupClose = () => (popupShow.value = false)
  const handleOpenStandardPopup = () => (popupShow.value = true)
  return {
    standardList,
    popupShow,
    handlePopupClose,
    handleOpenStandardPopup
  }
}
