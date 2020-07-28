import { components } from '@/helper/project-config'
import { ALL_COMPONENTS } from '@/helper/constants'
export default {
  formData: {},
  formMinorAttrs: {},
  fieldList: [
    {
      field: 'name',
      label: 'name',
      type: 'input',
      attrs: {
        clearable: true,
        prefixIcon: 'el-icon-edit'
      }
    }
  ],
  /** create-form所使用到的组件列表 */
  components,
  /** 被选中的FormItem的下标 */
  activeIndex: 0,
  /** 右侧Tab的name值 */
  tabName: ALL_COMPONENTS,
  globalProps: {}
}
