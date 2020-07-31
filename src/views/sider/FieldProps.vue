<template>
  <div class="sider-props-config-panel">
    <form-schema
      :formData="activeField ? (activeField.attrs || {}) : {}"
      :formSchema="itemAttrs"
      size="small"
      @input="updateFormAttrs"
      label-position="top"
    />
  </div>
</template>
<script>
import blocksConfig from '@/helper/blocks'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'form-schema-generator-field-props',
  computed: {
    ...mapGetters(['activeField']),
    itemAttrs () {
      if (Object.keys(this.activeField).length === 0) return {}
      return blocksConfig[this.activeField.type].attrs
    }
  },
  methods: {
    ...mapMutations(['updateAttrsData']),
    updateFormAttrs (data) {
      this.updateAttrsData(data)
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
