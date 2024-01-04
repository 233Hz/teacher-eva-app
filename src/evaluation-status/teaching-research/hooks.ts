import { ref } from 'vue'

const subsectionList = ['已评价', '未评价']

export const useTeachingResearch = () => {
  const subsectionIndex = ref(0)
  const handeSubsectionChange = (index: number) =>
    (subsectionIndex.value = index)
  return {
    subsectionList,
    subsectionIndex,
    handeSubsectionChange
  }
}
