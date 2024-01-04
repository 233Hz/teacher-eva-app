import { ref } from 'vue'

const actionSheetList = [
  {
    name: '生成得分'
  },
  {
    name: '发布'
  },
  {
    name: '导出'
  }
]

export const useEvaluationResult = () => {
  const actionSheetShow = ref(false)
  const handleOpenActionSheet = () => (actionSheetShow.value = true)
  const handleCloseActionSheet = () => (actionSheetShow.value = false)
  return {
    actionSheetShow,
    actionSheetList,
    handleOpenActionSheet,
    handleCloseActionSheet
  }
}
