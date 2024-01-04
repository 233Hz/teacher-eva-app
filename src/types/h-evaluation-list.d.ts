interface SecondaryInfoItem {
  label: string
  value: string
}

type SecondaryInfo = SecondaryInfoItem[]

export interface HEvaluationListItem {
  title: string
  dataKey?: string
  secondaryInfo: SecondaryInfo
  [key: string]: any
}
