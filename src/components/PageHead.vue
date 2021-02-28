<template>
  <div class="pageHead">
    <div class="title">
      <i v-if="isBack" class="el-icon-arrow-left" @click="backRoute"></i>
      <span>{{ title }}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    isBack: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    backRoute() {
      this.$emit("backClick");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.pageHead {
  height: 48px;
  line-height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  .title {
    font-size: 16px;
    display: flex;
    align-items: center;
    i {
      font-size: 16px;
    }
  }
}
</style>
