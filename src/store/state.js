import { ALL_COMPONENTS } from '@/helper/constants'
export default {
  formData: {},
  formMinorAttrs: {},
  fieldList: [
    {
      field: 'name',
      label: 'name',
      type: 'input',
      layout: 24,
      attrs: {
        clearable: true,
        prefixIcon: 'el-icon-edit'
      }
    }
  ],
  /** 被选中的FormItem的下标 */
  activeIndex: 0,
  /** 右侧Tab的name值 */
  tabName: ALL_COMPONENTS,
  globalProps: {}
}
