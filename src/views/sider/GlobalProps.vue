<template>
  <div class="sider-props-config-panel">
    <form-schema
      :formData="globalProps || {}"
      :formSchema="schema"
      size="small"
      @input="updateGlobalProps"
      label-position="top"
    />
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'form-schema-generator-global-props',
  computed: {
    ...mapState(['globalProps'])
  },
  data () {
    return {
      schema: {
        labelVisible: {
          type: 'switch',
          label: 'label是否可见',
          default: true
        },
        labelPosition: {
          type: 'select',
          label: 'label是否可见',
          options: ['right', 'top', 'left'],
          default: 'right'
        },
        size: {
          type: 'select',
          label: '全局表单大小',
          options: ['medium', 'small', 'mini']
        },
        labelWidth: {
          type: 'input',
          label: 'label宽度'
        }
      }
    }
  },
  methods: {
    ...mapMutations(['setGlobalProps']),
    updateGlobalProps (data) {
      this.setGlobalProps(data)
    }
  }
}
</script>
<style>
.sider-props-config-panel .el-form--label-top .el-form-item__label {
  line-height: 100%;
  padding: 0;
}
</style>
