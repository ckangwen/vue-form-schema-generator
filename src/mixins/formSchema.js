import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'formSchema'
    ]),
    ...mapState([
      'formData',
      'formMinorAttrs'
    ])
  },
  methods: {
    handleSubmit (data) {
      return Promise.resolve()
    },
    handleSuccess () {
      this.$message.success('创建成功')
    }
  }
}
