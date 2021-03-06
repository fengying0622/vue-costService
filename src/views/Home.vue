<template>
  <div class="home">
    <pageHead title="成本分析">
      <el-button type="primary" size="mini">信息按钮</el-button>
    </pageHead>
    <div class="container">
      <div class="panel">
        <el-button size="small" @click="deleteAll">批量删除</el-button>
        <el-radio-group v-model="radio" size="small">
          <el-radio-button
            v-for="(item, index) in options"
            :key="index"
            :label="item"
          ></el-radio-button>
        </el-radio-group>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData_choose"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="项目编号" prop="id"> </el-table-column>
        <el-table-column label="项目名称" prop="name"> </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <div class="table-cell">
              <i :class="scope.row.icon"></i>
              <span>{{ scope.row.status }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text">复制</el-button>
            <el-button type="text" @click="watchDetail(scope.row.id)"
              >详情</el-button
            >
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import pageHead from "../components/PageHead";
export default {
  components: {
    pageHead
  },
  data() {
    return {
      radio: "全部",
      options: ["全部", "成功", "已启动", "失败"],
      tableData: [
        {
          id: "1025",
          name: "名称1",
          icon: "el-icon-success",
          status: "成功"
        },
        {
          id: "1026",
          name: "名称1",
          icon: "el-icon-s-help",
          status: "已启动"
        },
        {
          id: "1030",
          name: "名称1",
          icon: "el-icon-error",
          status: "失败"
        },
        {
          id: "1027",
          name: "名称1",
          icon: "el-icon-s-help",
          status: "已启动"
        },
        {
          id: "1028",
          name: "名称1",
          icon: "el-icon-error",
          status: "失败"
        },
        {
          id: "1029",
          name: "名称1",
          icon: "el-icon-success",
          status: "成功"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 详情路由跳转传参
    watchDetail(id) {
      this.$router.push({ name: "detail", params: { id: id } });
    },
    //批量删除
    deleteAll() {
      this.multipleSelection.forEach(element => {
        this.tableData = this.tableData.filter(item => item.id != element.id);
      });
    }
  },
  computed: {
    //计算属性
    tableData_choose() {
      let arr = [];
      if (this.radio === "全部") {
        arr = this.tableData;
      } else {
        arr = this.tableData.filter(item => item.status == this.radio);
      }
      return arr;
    }
  }
};
</script>

<style scoped lang="less">
.home {
  .container {
    background: #fff;
    padding: 16px 20px;
    height: calc(100vh - 104px);
  }
  .panel {
    display: flex;
    margin-bottom: 16px;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
