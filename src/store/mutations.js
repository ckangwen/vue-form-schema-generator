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
  /** 更新创建新的FormItem */
  // createField (state, fieldSchema) {
  //   if (!Array.isArray(fieldSchema)) {
  //     fieldSchema = [fieldSchema]
  //   }
  //   const newSchema = [
  //     ...state.fieldList,
  //     ...fieldSchema
  //   ]
  //   this.updateFormSchema(newSchema)
  // },
  // /** 更新表单 */
  // updateForm (state, form) {
  //   Object.assign(state.template, form)
  // },
  /** 更新表单子项的attrs */
  updateFormItemAttrs (state, attrs) {
    const { fieldList } = state

    const isEmptyOrDefaultValue = (val, key) =>
      isNil(val) || val === formAttrDefault[key]
    attrs = omitBy(attrs, isEmptyOrDefaultValue)
    // eslint-disable-next-line no-unused-vars
    const prev = fieldList[state.activeIndex].attrs || {}
    const curr = {
      ...prev,
      ...attrs
    }
    fieldList[state.activeIndex].attrs = curr
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
  }
}
