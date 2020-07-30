<template>
  <div class="sider-props-config-panel">
    <form-schema
      :formData="formData"
      :formSchema="config"
      size="small"
      @input="updateFormAttrs"
      label-position="top"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'form-schema-generator-shared-props',
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
          },
          default: 24
        },
        default: {
          type: 'input',
          label: '默认值'
        },
        required: {
          type: 'switch',
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
        },
        options: {
          label: 'Options',
          type: 'map-array',
          attrs: {
            keys: ['text', 'value'],
            labels: ['字段', '值'],
            components: ['el-input', 'el-input'],
            direction: 'column',
            labelWidth: 30
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters(['activeField']),
    formData () {
      const { attrs, ...others } = this.activeField
      return others
    }
  },
  methods: {
    ...mapMutations(['updateCommonData']),
    updateFormAttrs (data) {
      this.updateCommonData(data)
    }
  }
}
</script>
<style>
.sider-props-config-panel .wen-form-field-tip {
  padding: 0 10px;
  margin: 0;
}
</style>
