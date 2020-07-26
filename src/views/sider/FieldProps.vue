<template>
  <div>
    <ele-form
      :formData="activeField.attrs || {}"
      :formDesc="itemAttrs"
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
