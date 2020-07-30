<template>
  <div class="app-main-center">
    <form-schema
      v-model="formData"
      :form-schema="formSchema"
      :request="handleSubmit"
      @success="handleSuccess"
      ref="form"
      label-width="150px"
      v-bind="globalProps"
    >
      <template v-slot:content="{schema, field, index}">
        <draggable
          :animation="200"
          :disabled="false"
          :list="fieldList"
          @add="handleAdd"
          @end="handleMoveEnd"
          @start="handleMoveStart"
          group="form"
        >
          <div
            class="form-area-placeholder"
            v-if="fieldList.length === 0"
          >
            从左侧拖拽来添加表单项
          </div>
          <template v-else>
            <div
              @click="handleFormItemClick(index)"
              :class="{
                'form-item-active': activeIndex === index,
                'form-item': true
              }"
            >
              <form-field :schema="schema" :field="field" />
              <i
                @click.stop="handleDelete(index)"
                class="el-icon-delete form-item-delete-btn"
                v-if="activeIndex === index"
              ></i>
            </div>
          </template>
        </draggable>
      </template>
    </form-schema>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import { ITEM_PROPS } from '@/helper/constants'
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
    ...mapState(['activeIndex', 'fieldList', 'formMinorAttrs', 'globalProps']),
    ...mapGetters(['activeField', 'formSchema'])
  },
  methods: {
    ...mapMutations([
      'updateIndex',
      'updateTabName',
      'removeField'
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
    handleDelete (index) {
      this.removeField(index)
    },
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
