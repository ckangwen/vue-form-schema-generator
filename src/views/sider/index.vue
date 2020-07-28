<template>
  <el-tabs class="aside-config-panel" type="border-card" stretch :value="tabName">
    <template v-for="(item) in tabs">
      <el-tab-pane :key="item.name" :name="item.name">
        <span slot="label">
          <el-tooltip class="item" effect="dark" :content="item.label" placement="bottom">
            <i :class="item.icon"></i>
          </el-tooltip>
        </span>
        <component :is="item.component" />
      </el-tab-pane>
    </template>
  </el-tabs>
</template>
<script>
import ComponentList from './ComponentList'
import FieldProps from './FieldProps'
import FieldSharedProps from './FieldSharedProps'
import GlobalProps from './GlobalProps'
import { mapState } from 'vuex'
import { ALL_COMPONENTS, COMMON_PROPS, ITEM_PROPS, GLOBAL_PROPS } from '@/helper/constants'
export default {
  name: 'create-form-aside',
  components: {
    ComponentList,
    FieldProps,
    FieldSharedProps,
    GlobalProps
  },
  data () {
    return {
      tabs: [
        {
          name: ALL_COMPONENTS,
          icon: 'el-icon-menu',
          label: '全部组件',
          component: 'component-list'
        },
        {
          name: ITEM_PROPS,
          icon: 'el-icon-edit',
          label: '属性配置',
          component: 'field-props'
        },
        {
          name: COMMON_PROPS,
          icon: 'el-icon-s-opportunity',
          label: '组件通用配置',
          component: 'field-shared-props'
        },
        {
          name: GLOBAL_PROPS,
          icon: 'el-icon-s-opportunity',
          label: 'FormSchema配置',
          component: 'global-props'
        }
      ]
    }
  },
  computed: {
    ...mapState(['tabName'])
  }
}
</script>
<style lang="scss">
.el-tabs--border-card>.el-tabs__content  {
  padding: 10px;
}
.aside-config-panel .el-tabs__content {
  height: calc(100vh - 101px);
  overflow: auto;
}
</style>
