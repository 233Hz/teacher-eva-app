declare module 'vue' {
  /**
   * 自定义全局组件
   */
  export interface GlobalComponents {
    HEvaluationList: (typeof import('../components/index'))['HEvaluationList']
    HEvaluationStandard: (typeof import('../components/index'))['HEvaluationStandard']
    HVitrual: (typeof import('../components/index'))['HVitrual']
  }
}

export {}
