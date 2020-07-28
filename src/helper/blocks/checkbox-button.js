const config = {
  attrs: {
    textColor: {
      type: 'color',
      label: 'Checkbox 激活时的文本颜色'
    },
    fill: {
      type: 'color',
      label: 'Checkbox 激活时的填充色和边框色'
    },
    size: {
      type: 'select',
      label: '多选框组尺寸',
      options: [{ text: '默认', value: null }, 'medium', 'small', 'mini']
    },
    min: {
      type: 'input',
      label: '可被勾选的 Checkbox 的最小数量',
      attrs: {
        type: 'number',
        min: 0
      }
    },
    max: {
      type: 'input',
      label: '可被勾选的 Checkbox 的最大数量',
      attrs: {
        type: 'number',
        min: 0
      }
    }
  },
  attrsData: {},
  attrsDefaultData: {
    size: null,
    min: 0,
    max: 0,
    textColor: '#ffffff',
    fill: '#409EFF'
  },
  common: {
    default: {
      type: 'checkbox',
      label: '默认值',
      isReloadOptions: true,
      options: data => data.options
    },
    options: {
      type: 'json-editor',
      label: '选项',
      tip:
        'options支持`API接口`、`数组`、`函数`、`Promise`等, 具体看<a target="_blank" href="https://www.yuque.com/chaojie-vjiel/vbwzgu/rgenav" class="el-link el-link--primary">文档</a>'
    }
  },
  schemaOptions: {
    options: [
      { text: '选项1', value: 1 },
      { text: '选项2', value: 2 },
      { text: '选项3', value: 3 }
    ]
  },
  commonDefaultData: {}
}

export default config
