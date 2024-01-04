interface ReferenceStandardItem {
  id: number
  referenceStandard: string
}

interface SecondaryStandardItem {
  id: number
  secondaryStandard: string
  scoringBasis?: string
  children: ReferenceStandardItem[]
}

interface PrimaryStandardItem {
  id: number
  primaryStandard: string
  score?: number
  children: SecondaryStandardItem[]
}

export type HEvaluationStandardData = PrimaryStandardItem[]
