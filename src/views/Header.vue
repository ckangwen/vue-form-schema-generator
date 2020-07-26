<template>
<div class="flex--center" style="height: 100%">
  <h2>表单生成器</h2>
  <div>
    <el-tooltip class="header-icon" effect="dark" content="预览" placement="top-start">
      <div @click="() => { previewDialog = true }">
        <i class="el-icon-view"></i>
      </div>
    </el-tooltip>
    <el-tooltip class="header-icon" effect="dark" content="生成数据" placement="top-start">
      <div @click="() => { exportDataDialog = true }">
        <i class="el-icon-tickets"></i>
      </div>
    </el-tooltip>
    <el-tooltip class="header-icon" effect="dark" content="导入数据" placement="top-start">
      <div @click="() => { exportDataDialog = true }">
        <i class="el-icon-download"></i>
      </div>
    </el-tooltip>
  </div>

  <el-dialog
    :visible.sync="previewDialog"
    append-to-body
    title="预览"
    fullscreen
  >
      <ele-form
      v-model="formData"
      :form-desc="formSchema"
      :request-fn="handleSubmit"
      @request-success="handleSuccess"
      ref="ele-form"
      v-bind="formMinorAttrs"
    ></ele-form>
  </el-dialog>
  <el-dialog
    :visible.sync="exportDataDialog"
    append-to-body
    title="数据"
    width="600px"
  >
    <code-mirror :code="code"></code-mirror>
    <div class="btn-action">
      <el-button @click="handleCopyData" type="primary">复制数据</el-button>
    </div>
  </el-dialog>
</div>
</template>
<script>
import CodeMirror from '@/components/codemirror'
// import copy from 'clipboard-copy'
import formSchemaMixin from '@/mixins/formSchema'
// import { mapGetters, mapState } from 'vuex'
export default {
  name: 'create-form-header',
  components: {
    CodeMirror
  },
  mixins: [formSchemaMixin],
  data () {
    return {
      exportDataDialog: false,
      previewDialog: false
    }
  },
  computed: {
    code () {
      return JSON.stringify(this.formSchema, null, 2)
    }
  },
  methods: {
    handleCopyData () {
      // copy(endent(this.formSchema))
      // this.$message.success('复制成功!')
    }
  }
}
</script>
<style>
  .flex--center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn-action {
    margin-top: 10px;
  }
  .header-icon {
    display: inline-block;
    height: 64px;
    line-height: 64px;
  }
  .header-icon:hover {
    background: #eee;
  }
  .header-icon > i {
    padding: 0 24px;
  }
</style>
