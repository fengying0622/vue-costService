<template>
  <div class="leftMenu">
    <div class="logo">
      <img src="../assets/logo.png" />
    </div>
    <div class="menu-info">
      <el-menu
        :default-active="$route.path"
        background-color="#282b33"
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
    </div>

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
  .logo {
    text-align: center;
    padding-top: 16px;
    overflow: hidden;
    img {
      width: 40px;
    }
  }
  .menu-info {
    overflow: hidden;
  }
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
    width: 0;
    height: 80px;
    border-left: 12px solid #282b33;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    transition: all 0.3s;
    position: absolute;
    right: -12px;
    top: 50%;
    margin-top: -80px;
    &::after {
      border: 5px solid transparent;
      border-left: 8px solid #fff;
      width: 0;
      height: 0;
      position: absolute;
      content: " ";
      top: 22px;
      right: 5px;
      transform: rotate(180deg);
    }
    &.active::after {
      transform: rotate(0deg);
      right: -3px;
    }
  }
}
</style>
