const config = {
  attrs: {
    size: {
      type: 'select',
      label: '尺寸',
      options: [{ text: '默认', value: null }, 'medium', 'small', 'mini']
    },
    type: {
      type: 'select',
      label: '类型',
      options: [
        { text: '默认', value: null },
        'primary',
        'success',
        'warning',
        'danger',
        'info',
        'text'
      ]
    },
    plain: {
      type: 'switch',
      label: '是否朴素按钮'
    },
    round: {
      type: 'switch',
      label: '是否圆角按钮'
    },
    circle: {
      type: 'switch',
      label: '是否圆形按钮'
    },
    icon: {
      type: 'input',
      label: '图标类名',
      attrs: {
        clearable: true
      }
    },
    autofocus: {
      type: 'switch',
      label: '是否默认聚焦'
    },
    nativeType: {
      type: 'radio',
      label: '原生 type 属性',
      options: ['button', 'submit', 'reset']
    },
    text: {
      label: '按钮文本',
      type: 'input'
    }
  },
  attrsData: {},
  attrsDefaultData: {
    text: '按钮文本'
  },
  commonAttrs: {
    default: {
      type: 'input',
      label: '按钮文本'
    }
  },
  commonData: {
    text: '按钮文本',
    layout: 24
  },
  commonDefaultData: {}
}
export default config
