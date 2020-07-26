<template>
  <div class="app-main-center">
    <ele-form
      v-model="formData"
      :form-desc="formSchema"
      :request-fn="handleSubmit"
      @request-success="handleSuccess"
      ref="ele-form"
      v-bind="formMinorAttrs"
    >
      <template
        v-slot:form-content="{ props, formDesc, formErrorObj }"
      >
        <draggable
          :animation="200"
          :disabled="false"
          :list="fieldList"
          @add="handleAdd"
          @end="handleMoveEnd"
          @start="handleMoveStart"
          group="form"
          tag="el-row"
          style="padding-bottom: 80px;"
        >
          <div
            class="form-area-placeholder"
            v-if="fieldList.length === 0"
          >
            从左侧拖拽来添加表单项
          </div>
          <template v-else>
            <template v-for="(formItem, field, index) of formDesc">
              <el-col
                :key="field"
                v-bind="formItem._colAttrs"
                @click.native="handleFormItemClick(index)"
                v-if="formItem._vif"
                class="form-item"
                :class="{ 'form-item-active': activeIndex === index }"
              >
                <el-form-item
                :error="formErrorObj ? formErrorObj[field] : null"
                  :prop="field"
                  :label="
                    props.isShowLabel && formItem.isShowLabel !== false
                      ? formItem.label
                      : null
                  "
                  :label-width="formItem.labelWidth || null"
                >
                  <component
                    :disabled="props.disabled || formItem._disabled"
                    :desc="formItem"
                    :is="formItem._type"
                    :options="formItem._options"
                    :ref="field"
                    :field="field"
                    v-model="formItem.default"
                  />
                  <div
                    class="ele-form-tip"
                    v-if="formItem.tip"
                    v-html="formItem.tip"
                  ></div>
                </el-form-item>

                <!-- 删除按钮 -->
                <i
                  @click.stop="handleDelete(index)"
                  class="el-icon-delete form-item-delete-btn"
                  v-if="activeIndex === index"
                ></i>
              </el-col>
            </template>
          </template>
        </draggable>
      </template>
    </ele-form>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import { ITEM_PROPS } from '@/config'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'create-form-main',
  components: {
    draggable
  },
  data () {
    return {
      formData: {}
    }
  },
  computed: {
    ...mapState(['activeIndex', 'fieldList', 'formMinorAttrs']),
    ...mapGetters(['activeField', 'formSchema'])
  },
  methods: {
    ...mapMutations([
      'updateIndex',
      'updateTabName'
    ]),
    updateSelectIndex (index) {
      this.updateIndex(index)
    },
    handleAdd (data) {
      this.updateIndex(data.newIndex)
    },
    handleFormItemClick (index) {
      this.updateIndex(index)
      this.updateTabName(ITEM_PROPS)
    },
    handleMoveEnd (data) {
      this.updateIndex(data.newIndex)
    },
    handleMoveStart (data) {

    },
    handleDelete (index) {},
    handleSubmit (data) {
      return Promise.resolve()
    },
    handleSuccess () {
      this.$message.success('创建成功')
    }
  }
}
</script>
<style lang="scss">
.app-main-center {
  padding: 20px;

  /* 当无表单时的占位 */
  .form-area-placeholder {
    width: 100%;
    height: 300px;
    line-height: 300px;
    background-color: white;
    color: #909399;
    text-align: center;
  }

  /* 表单项 */
  .form-item {
    background: white;
    cursor: move;
    position: relative;
    z-index: 1;
    padding: 0 20px;
    border: 1px dashed rgba(0, 0, 0, 0);

    &-active {
      border: 1px dashed #409eff;
    }

    /* 遮挡区(遮挡住) */
    &::after {
      content: " ";
      display: block;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      z-index: 2;
    }

    .form-item-delete-btn {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 3;
      cursor: pointer;
      padding: 7px 15px;
      color: white;
      background: #409eff;
    }
  }
}
</style>
