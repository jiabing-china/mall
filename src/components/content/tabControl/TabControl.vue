<!-- 组件说明 -->
<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      class="tab-control-item"
      @click="itemclick(index)"
      :class="{active:currentIndex === index }"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  name: "",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {},
  methods: {
    itemclick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style  scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  line-height: 40px;
  height: 40px;
  background-color: #fff;
  /* position: sticky; */
  /* top: 44px; */
}
.tab-control-item {
  flex: 1;
  /* height: 40px; */
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>