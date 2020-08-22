<!-- 组件说明 -->
<template>
  <div class="recommend">
    <div v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style  scoped>
.recommend {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 15px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommend div {
  flex: 1;
}
.recommend div img {
  width: 70px;
  margin-bottom: 10px;
}
</style>