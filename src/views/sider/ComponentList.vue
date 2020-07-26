<template>
  <div>
    <el-input
      v-model.trim="searchValue"
      placeholder="请输入内容"
    ></el-input>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <span class="panel-title">
            基础控件
          </span>
        </template>
        <draggable
          :group="{ name: 'form', pull: 'clone', put: false }"
          :list="basicType"
          :clone="dragFormField"
          :sort="false"
        >
          <div class="component-block" v-for="(item, index) in basicType" :key="index">
            <span class="component-block-title">{{ item.name }}</span>
          </div>
        </draggable>

      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <span class="panel-title">
            其他控件
          </span>
        </template>
        <draggable
          :group="{ name: 'form', pull: 'clone', put: false }"
          :list="otherType"
          :sort="false"
          :clone="dragFormField"
        >
          <div class="component-block" v-for="(item, index) in otherType" :key="index">
            <span class="component-block-title">{{ item.name }}</span>
          </div>
        </draggable>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import Fuse from 'fuse.js'
import isNil from 'lodash/isNil'
import cloneDeep from 'lodash/cloneDeep'
import omitBy from 'lodash/omitBy'
import blocksConfig from '@/helper/blocks'
import { components, formAttrDefault } from '@/helper/project-config'
export default {
  name: 'create-form-component-list',
  components: {
    draggable
  },
  data () {
    return {
      searchValue: '',
      activeNames: ['1']
    }
  },
  computed: {
    basicType () {
      return this.querySearch(components.filter(t => t.type === 'basic'))
    },
    otherType () {
      return this.querySearch(components.filter(t => t.type === 'others'))
    }
  },
  methods: {
    querySearch (pool) {
      this.activeNames = ['1', '2']
      if (this.searchValue === '' || this.searchValue == null) {
        return pool
      }
      return new Fuse(pool, {
        findAllMatches: true,
        includeMatches: true,
        // 要搜索的键名列表
        keys: [
          'name'
        ]
      })
        .search(this.searchValue)
        .map(t => {
          return { ...t.item }
        })
    },
    dragFormField (original) {
      // draggable中list的子项
      const { name } = original
      return this.addFormField(name, { label: name })
    },
    /**
     * @param{string} name 表单项类型
     */
    addFormField (type, common = {}, attrs = {}) {
      const {
        attrsData = {},
        attrsDefaultData = {},
        commonData = {}
        // commonDefaultData = {}
      } = blocksConfig[type] || {}

      common.field = common.field || `${common.label}_${Date.now()}` || `key_${Date.now()}`
      common.label = common.label || '默认标题'

      const fieldAttrs = Object.assign(
        {},
        cloneDeep(commonData),
        {
          ...common,
          type,
          attrs: {
            ...attrs,
            ...cloneDeep(attrsDefaultData),
            ...cloneDeep(attrsData)
          }
        }
      )
      fieldAttrs.attrs = this.filterEmptyOrDefaultValue(fieldAttrs.attrs)
      return fieldAttrs
    },
    filterEmptyOrDefaultValue (obj) {
      const isEmptyOrDefaultValue = (val, key) =>
        isNil(val) || val === formAttrDefault[key]
      return omitBy(obj, isEmptyOrDefaultValue)
    }
  }
}
</script>
<style lang="scss">
.panel-title {
  font-size: 16px;
  i {
    margin-left: 10px;
    font-size: 18px;
  }
}
.component-block {
  padding: 10px;
  color: #606266;
  cursor: move;
  border: 1px solid #8aa5e4;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 3px;
  padding: 6px 8px;
  box-sizing: border-box;
  margin: 5px;
  font-size: 15px;

  .component-block-title {
    font-size: 600;
    color: #000;
  }
}
</style>
