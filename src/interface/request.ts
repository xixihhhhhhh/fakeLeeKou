

/** 基础数据接口 */
export interface ResDataStruct<T = any> {
  /** 响应内容体 */
  body: T;
  /** api响应信息 */
  message: string;
  /** api响应编码 */
  code: number;
  /** 当前请求页数 */
  page: number;
  /** api接口返回是否成功 */
  success: boolean;
  /** api接口查询数据库总数 */
  total: number | string | null;
}
/** 字典数据结构 */
export interface BaseDictStruct {
  appId: string | null
  appName: string | null
  created: string
  createdBy: string
  dictKey: string
  dictName: string
  dictType: number
  dictValue: string
  isLeaf: number
  parentId: string
  sid: string
  status: number | null
  tenantId: string
  userId: string | null
  ordered: number | null
}

/** 登录数据结构 */
export interface BigScreenLoginStruct {
  success: boolean
  message: string
  token: string
}

/** 基础请求参数接口 */
export interface ReqDataStruct<T = any> {
  /** 请求参数体 */
  body?: T;
  /** 当前请求页数 */
  page?: number;
  /** 当前请求页数大小 */
  pageSize?: number;
  /** 排序字段 */
  sortName?: string;
  /** 排序方式 */
  sortOrder?: string;
}