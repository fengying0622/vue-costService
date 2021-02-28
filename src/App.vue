<template>
  <div id="app">
    <div class="menu" :class="{ active: collapse }">
      <div class="logo">
        <img src="./assets/logo.png" />
      </div>
      <left-menu v-model="collapse"></left-menu>
    </div>
    <div class="container" :class="{ active: collapse }">
      <router-view />
    </div>
  </div>
</template>

<script>
import LeftMenu from "./components/LeftMenu";

export default {
  name: "App",
  components: {
    LeftMenu
  },
  data() {
    return {
      collapse: false
    };
  }
};
</script>

<style lang="less" scoped>
#app {
  font-size: 14px;
  display: flex;
  height: 100%;
  .menu {
    width: 192px;
    background: #282b3c;
    height: 100%;
    &.active {
      width: 0;
    }
  }
  .logo {
    text-align: center;
    margin: 12px;
    overflow: hidden;
    img {
      width: 40px;
    }
  }
  .container {
    width: calc(100% - 192px);
    margin: 20px;
    &.active {
      width: 100%;
    }
  }
}
</style>
