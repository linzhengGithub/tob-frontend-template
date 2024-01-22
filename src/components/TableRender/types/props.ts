import { TableBasicColumn } from "./column"

export interface TableBasicProps {
  data: Recordable[]
  columns: TableBasicColumn[],
  remote?: boolean
  striped?: boolean
  singleLine?: boolean
  bottomBordered?: boolean
  flexHeight?: boolean
  showPagination?: boolean
  pagination?: Object | false
  requestApi?: (params?: any) => Promise<ResponseApi>
}

export interface ResponseApi {
  // 定义你期望的 API 响应的数据结构
  code: number
  content: {
    data: Recordable[]
    total: number
  }
  msg: string
}
