<template>
<div>
    <ele-form
      :formData="activeField.commonData || {}"
      :formDesc="config"
      :formAttrs="{ size: 'small' }"
      @input="updateFormAttrs"
      :isShowBackBtn="false"
      :isShowSubmitBtn="false"
      :span="20"
      labelPosition="top"
    />
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'form-schema-shared-props',
  data () {
    return {
      config: {
        field: {
          type: 'input',
          label: '字段名',
          tip: '字段名不可重复'
        },
        label: {
          type: 'input',
          label: '标签'
        },
        layout: {
          type: 'slider',
          label: '宽度',
          attrs: {
            min: 1,
            max: 24,
            'format-tooltip' (val) {
              return `${val} / 24`
            }
          }
          // on: {
          //   input: val => {
          //     // slider组件, 如果传递的value为null或者undefined, 会赋值为 1, 无法利用到默认值, 所以去掉
          //     if (val !== 1) {
          //       this.updateCurrentItem({
          //         ...this.currentFormItem,
          //         layout: val
          //       });
          //     }
          //   }
          // }
        },
        default: {
          type: 'input',
          label: '默认值'
        },
        required: {
          type: 'yesno',
          label: '校检',
          title: '是否必填'
        },
        rules: {
          type: 'textarea',
          label: '校检规则',
          title: '新增校检规则'
        },
        tip: {
          type: 'input',
          label: '表单项提示'
        },
        isShowLabel: {
          label: '否显示标签',
          type: 'switch',
          tip: '与全局isShowLabel作用相同'
        },
        labelWidth: {
          label: '标签宽度',
          type: 'input',
          tip: '需要以`px`作为单位, 例如`100px`, 默认为全局设置的labelWidth值'
        }
      }
    }
  },
  computed: {
    ...mapGetters(['activeField'])
  },
  methods: {
    ...mapMutations(['updateFormItemAttrs']),
    updateFormAttrs (data) {
      console.log(data)
      // this.updateFormItemAttrs(data)
    }
  }
}
</script>
