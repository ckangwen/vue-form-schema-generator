<template>
  <div class="sider-props-config-panel">
    <form-schema
      :formData="activeField.attrs || {}"
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
  name: 'wen-create-form-comp-config',
  computed: {
    ...mapGetters(['activeField']),
    itemAttrs () {
      return blocksConfig[this.activeField.type].attrs
    }
  },
  methods: {
    ...mapMutations(['updateFormItemAttrs']),
    updateFormAttrs (data) {
      this.updateFormItemAttrs(data)
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
