<template>
    <div class="page-container" v-if="totalPages > 1">
      <a :class="{ disabled: current === 1 }" @click="handleClick(1)">&lt;&lt;</a>
      <a :class="{ disabled: current === 1 }" @click="handleClick(current - 1)">
        &lt;
      </a>
      <a
        v-for="(n, i) in numbers"
        :key="i"
        :class="{ active: n === current }"
        @click="handleClick(n)"
      >
        {{ n }}
      </a>
      <a
        :class="{ disabled: current === totalPages }"
        @click="handleClick(current + 1)"
      >
        &gt;
      </a>
      <a
        :class="{ disabled: current === totalPages }"
        @click="handleClick(totalPages)"
      >
        &gt;&gt;
      </a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      current: { type: Number, default: 1 },
      total: { type: Number, default: 0 },
      limit: { type: Number, default: 10 },
      visibleNumber: { type: Number, default: 10 },
    },
    computed: {
      // 计算总页数
      totalPages() {
        return Math.ceil(this.total / this.limit);
      },
      visibleMin() {
        let min = this.current - Math.floor(this.visibleNumber / 2);
        return min < 1 ? 1 : min;
      },
      visibleMax() {
        let max = this.visibleMin + this.visibleNumber - 1;
        return max > this.totalPages ? this.totalPages : max;
      },
      numbers() {
        let arr = [];
        for (let i = this.visibleMin; i <= this.visibleMax; i++) {
          arr.push(i);
        }
        return arr;
      },
    },
    methods: {
      handleClick(newPage) {
        if (newPage == this.current) {
          return;
        }
        if (newPage < 1) {
          newPage = 1;
        }
        if (newPage > this.totalPages) {
          newPage = this.totalPages;
        }
        this.$emit("pageChange", newPage);
      },
    },
  };
  </script>
  
  <style lang="less" scoped>
  @import "~@/styles/var.less";
  
  .page-container {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 16px 8px;
    background: #f0f0f0;
    a {
      width: 32px;
      height: 32px;
      line-height: 32px;
      color: @words;
      margin: 8px;
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      background: #fff;
      text-align: center;
      &:hover {
        color: @primary;
      }
      &.disabled {
        color: @lightWords;
        cursor: not-allowed;
      }
      &.active {
        color: @primary;
        border-color: @primary;
        font-weight: bold;
      }
    }
  }
  </style>