import isNil from 'lodash/isNil'
import omitBy from 'lodash/omitBy'
import { formAttrDefault } from '@/helper/project-config'

export default {
  /** 更新FormItem的索引 */
  updateIndex (state, index) {
    state.activeIndex = index
  },
  /** 更新Tab的name */
  updateTabName (state, name) {
    state.tabName = name
  },
  /** 更新表单子项的attrs */
  updateAttrsData (state, attrs) {
    const { fieldList, activeIndex } = state

    const isEmptyOrDefaultValue = (val, key) =>
      isNil(val) || val === formAttrDefault[key]
    attrs = omitBy(attrs, isEmptyOrDefaultValue)
    // eslint-disable-next-line no-unused-vars
    const prev = fieldList[activeIndex].attrs || {}
    const curr = {
      ...prev,
      ...attrs
    }
    fieldList[activeIndex].attrs = curr
  },
  /** 更新表单的schema */
  updateFormSchema (state, fieldList) {
    state.fieldList = fieldList
  },
  setGlobalProps (state, newProps) {
    state.globalProps = {
      ...state.globalProps,
      ...newProps
    }
  },
  updateCommonData (state, prop) {
    const { activeIndex, fieldList } = state
    const curr = {
      ...fieldList[activeIndex],
      ...prop
    }
    state.fieldList.splice(activeIndex, 1, curr)
  },
  removeField (state, index) {
    state.fieldList.splice(index, 1)
    state.activeIndex = -1
  }
}
