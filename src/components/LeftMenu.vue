<template>
  <div class="leftMenu">
    <el-menu
      :default-active="$route.path"
      background-color="#282b3c"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <template v-for="(item, index) in data">
        <!-- 有子菜单 -->
        <template v-if="item.children">
          <el-submenu :index="item.title" :key="index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item
              v-for="(m, n) in item.children"
              :key="n"
              :index="m.path"
            >
              <span slot="title">{{ m.title }}</span>
            </el-menu-item>
          </el-submenu>
        </template>
        <!-- 无子菜单 -->
        <template v-else>
          <el-menu-item :key="item.path" :index="item.path">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <div
      class="menu-switch"
      :class="{ active: value }"
      @click="clickCollpase"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  data() {
    return {
      data: [
        {
          icon: "el-icon-location",
          title: "处理中心",
          path: "/home"
        },
        {
          icon: "el-icon-menu",
          title: "消息来源",
          path: "/source"
        },
        {
          icon: "el-icon-setting",
          title: "订单管理",
          children: [
            {
              title: "订单一",
              path: "/about"
            },
            {
              title: "订单二",
              path: "/about1"
            },
            {
              title: "订单三",
              path: "/about2"
            }
          ]
        }
      ]
    };
  },
  methods: {
    clickCollpase() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.leftMenu {
  position: relative;
  height: 100%;
  .el-menu {
    border-right: none;
    .el-menu-item,
    .el-submenu__title {
      height: 40px;
      line-height: 40px;
    }
    .el-submenu .el-menu-item {
      min-width: auto;
    }
  }
  .menu-switch {
    position: absolute;
    width: 50px;
    height: 50px;
    background: red;
    right: -20px;
    &.active {
      right: 0;
    }
  }
}
</style>
