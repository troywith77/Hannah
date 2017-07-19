<template>
  <div>
    <div v-html="msg.Content" />
  </div>
</template>

<script>
  import { getMessage } from '@/services/Message'

  export default {
    props: ['params'],
    data() {
      return {
        msg: {}
      }
    },
    methods: {
      fetchData() {
        getMessage(this.params.id).then(res => {
          console.log(res.data)
          this.msg = res.data
        })
      }
    },
    mounted() {
      this.fetchData()
    }
  }
</script>

<style lang="scss" scoped>
  
</style>