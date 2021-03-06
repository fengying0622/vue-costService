<template>
  <div class="detail">
    <router-link to="/home"
      ><pageHead isBack title="项目详情"></pageHead
    ></router-link>
    <div>{{ id }}</div>
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
      id: ""
    };
  },
  mounted() {
    this.id = this.$route.params.id;
  },
  methods: {
    backRoute() {}
  }
};
</script>

<style scoped></style>
