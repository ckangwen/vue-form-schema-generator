import isNil from 'lodash/isNil'
import omitBy from 'lodash/omitBy'
import omit from 'lodash/omit'
import keyBy from 'lodash/keyBy'
import cloneDeep from 'lodash/cloneDeep'
import mapValues from 'lodash/mapValues'
import { formAttrDefault } from '@/helper/project-config'

export function _keyBy (list, key) {
  // 1.数组转以 key值 的对象
  const obj = keyBy(cloneDeep(list), key)
  // 2.删除原 key
  const deleteKey = obj => omit(obj, key)
  return mapValues(obj, deleteKey)
}
const isEmptyOrDefaultValue = (val, key) =>
  isNil(val) || val === formAttrDefault[key]

export default {
  activeField (state, getters) {
    const { activeIndex, fieldList } = state
    return fieldList && fieldList.length > 0 && activeIndex > -1
      ? fieldList[activeIndex]
      : null
  },
  // formAttrs (state) {
  //   const { formMinorAttrs } = state
  //   if (!formMinorAttrs) return null
  //   const isEmptyOrDefaultValue = (val, key) =>
  //     isNil(val) || val === formAttrDefault[key]
  //   return omitBy(formMinorAttrs, isEmptyOrDefaultValue)
  // },
  formSchema (state) {
    const fieldList = state.fieldList || []
    if (!fieldList.attrs) {
      fieldList.attrs = {}
    } else {
      fieldList.attrs = omitBy(fieldList.attrs, isEmptyOrDefaultValue)
    }
    return fieldList
      ? _keyBy(fieldList, 'field')
      : {}
  }
}
