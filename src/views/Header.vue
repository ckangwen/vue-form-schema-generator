<template>
<div class="flex--center" style="height: 100%">
  <h2>表单生成器</h2>
  <div>
    <el-tooltip class="header-icon" effect="dark" content="预览" placement="top-start" :open-delay="300">
      <div @click="() => { previewDialog = true }">
        <i class="el-icon-view"></i>
      </div>
    </el-tooltip>
    <el-tooltip class="header-icon" effect="dark" content="生成数据" placement="top-start" :open-delay="300">
      <div @click="() => { exportDataDialog = true }">
        <i class="el-icon-tickets"></i>
      </div>
    </el-tooltip>
    <el-tooltip class="header-icon" effect="dark" content="生成代码" placement="top-start" :open-delay="300">
      <div @click="() => { exportCodeDialog = true }">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.8796283,13.1746043 C8.05933938,13.3842672 8.03505861,13.6999172 7.82539569,13.8796283 C7.61573277,14.0593394 7.30008277,14.0350586 7.1203717,13.8253957 L4.1203717,10.3253957 C3.9598761,10.1381508 3.9598761,9.86184918 4.1203717,9.67460431 L7.1203717,6.17460431 C7.30008277,5.96494139 7.61573277,5.94066062 7.82539569,6.1203717 C8.03505861,6.30008277 8.05933938,6.61573277 7.8796283,6.82539569 L5.15853889,10 L7.8796283,13.1746043 Z M8.95309157,19.7114427 C8.83631497,19.9616783 8.53879283,20.0698682 8.28855727,19.9530916 C8.0383217,19.836315 7.93013183,19.5387928 8.04690843,19.2885573 L15.0469084,4.28855727 C15.163685,4.0383217 15.4612072,3.93013183 15.7114427,4.04690843 C15.9616783,4.16368503 16.0698682,4.46120717 15.9530916,4.71144273 L8.95309157,19.7114427 Z M16.1203717,10.8253957 C15.9406606,10.6157328 15.9649414,10.3000828 16.1746043,10.1203717 C16.3842672,9.94066062 16.6999172,9.96494139 16.8796283,10.1746043 L19.8796283,13.6746043 C20.0401239,13.8618492 20.0401239,14.1381508 19.8796283,14.3253957 L16.8796283,17.8253957 C16.6999172,18.0350586 16.3842672,18.0593394 16.1746043,17.8796283 C15.9649414,17.6999172 15.9406606,17.3842672 16.1203717,17.1746043 L18.8414611,14 L16.1203717,10.8253957 Z"/>
          </svg>
        </span>
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
    <code-mirror :code="data"></code-mirror>
    <div class="btn-action">
      <el-button @click="handleCopyData" type="primary">复制数据</el-button>
    </div>
  </el-dialog>
  <el-dialog
    :visible.sync="exportCodeDialog"
    append-to-body
    title="代码"
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
import { mapState } from 'vuex'
// import tpl from '../utils/tpl.ejs'
// const ejs = require('ejs')

export default {
  name: 'create-form-header',
  components: {
    CodeMirror
  },
  mixins: [formSchemaMixin],
  data () {
    return {
      exportDataDialog: false,
      previewDialog: false,
      exportCodeDialog: false
    }
  },
  computed: {
    ...mapState([
      'gloablProps'
    ]),
    data () {
      return JSON.stringify(this.formSchema, null, 2)
    },
    code () {
      // const tpl = '';
      // const getFormAttrObj = formAttr => {
      //   return Object.entries(formAttr).map(([key, value]) => {
      //     // 将 [['name', 'zhang'], ['age', 10]] => [{name: 'zhang', ':age': 10}]
      //     // 因为 vue 模板 非字符串前需要加 : 表示变量
      //     key = typeof value === 'string' ? key : `:${key}`
      //     return {
      //       key,
      //       value
      //     }
      //   })
      // }
      // return ejs.render(tpl, {
      //   formAttr: getFormAttrObj(this.gloablProps),
      //   formSchema: {}
      // })
      return 'code'
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
  .header-icon > span,
  .header-icon > i {
    padding: 0 24px;
    font-size: 18px;
  }
</style>
