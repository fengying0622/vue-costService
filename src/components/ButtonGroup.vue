<template>
  <div class="buttonGroup">
 <el-radio-group v-model="radio">
      <el-radio-button v-for="(item,index) in options" :key="index" :label="item"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  data() {
    return {
     radio:'',
     options:['全部','成功','已启动','失败'],
    };
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.buttonGroup {

}
</style>
