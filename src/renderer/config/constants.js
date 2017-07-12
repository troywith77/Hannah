const isDEV = process.env.NODE_ENV === 'development'

const XGBAPIBASE = isDEV
  ? 'http://devapi.xuangubao.cn'
  : 'https://api.xuangubao.cn'

const CONSTANTS = {
  XGBAPIBASE
}

export default CONSTANTS