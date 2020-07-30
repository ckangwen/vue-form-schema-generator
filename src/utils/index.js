export function generateCode (formData, formSchema, attrs) {
  let str = ''
  const keys = Object.keys(attrs)
  keys.forEach((key, idx) => {
    if (key && attrs[key] !== undefined) {
      str += `    ${key}='${attrs[key]}'`
      if (idx !== keys.length - 1) {
        str += '\n'
      }
    }
  })
  return `
<template>
  <form-schema
${str}
    :formSchema="formSchema"
    v-model="formData"
    :request-fn="handleRequest"
    @request-success="handleRequestSuccess"
  />
</template>

<script>
export default {
  data() {
    return {
      formData: ${formData},
      formSchema: ${formSchema}
    };
  },
  methods: {
    handleRequest(data) {
      console.log(data);
      return Promise.resolve();
    },
    handleRequestSuccess() {
      this.$message.success("发送成功");
    }
  }
};
</script>
  `
}

export function convertToArray (val) {
  return Object.keys(val).map(key => {
    return {
      field: key,
      ...val[key]
    }
  })
}
