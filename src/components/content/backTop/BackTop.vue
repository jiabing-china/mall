<!-- 组件说明 -->
<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt />
  </div>
</template>

<script>
//import x from ''
export default {
  name: "BackTop",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style  scoped>
.back-top {
  position: fixed;
  right: 8px;
  bottom: 55px;
}
.back-top img {
  width: 43px;
}
</style>