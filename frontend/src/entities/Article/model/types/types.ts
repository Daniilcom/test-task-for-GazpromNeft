export interface Article {
  articleid: number
  subarticleid: number
  articlename: string
  external_str_id: number
  ecrlongname: string
}

export interface ArticleState {
  data: Article[]
  loading: boolean
  error: string
  page: number
  limit: number
  totalPages: number
  totalItems: number
}

export enum ArticleFields {
  ARTICLE_ID = 'articleid',
  SUBARTICLE_ID = 'subarticleid',
  ARTICLE_NAME = 'articlename',
  EXTERNAL_STR_ID = 'external_str_id',
  ECR_LONG_NAME = 'ecrlongname',
}
