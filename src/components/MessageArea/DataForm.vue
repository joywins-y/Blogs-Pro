<template>
  <form class="data-form-container" id="data-form-container" @submit.prevent="handleSubmit" ref="form">
    <div class="form-item">
      <div class="input-area">
        <input
          type="text"
          placeholder="用户昵称"
          v-model="formData.nickName"
          maxlength="10"
        />
        <span class="tip">{{ formData.nickName.length }}/10</span>
      </div>
      <div class="error">{{ error.nickName }}</div>
    </div>
    <div class="form-item">
      <div class="input-area">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          maxlength="300"
          placeholder="输入内容"
          v-model="formData.content"
        ></textarea>
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <div class="botton-area">
        <button :disabled="isSubmiting">
          {{ isSubmiting ? "提交中..." : "提交" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      formData: {
        nickName: "",
        content: "",
      },
      error: {
        nickName: "",
        content: "",
      },
      isSubmiting: false,
    };
  },
  methods: {
    handleSubmit() {
      this.error.nickName = this.formData.nickName ? "" : "请填写昵称";
      this.error.content = this.formData.content ? "" : "请填写内容";
      if (this.error.nickName || this.error.content) {
        return;
      }
      this.isSubmiting = true;
      this.$emit("submit", this.formData, (successMsg) => {
        this.$showMessage({
          type: "success",
          content: successMsg,
          duration: 1000,
          container: this.$refs.form,
          callback: () => {
            this.isSubmiting = false;
            this.formData.nickName = "";
            this.formData.content = "";
          },
        });
      });
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.data-form-container {
  margin-bottom: 24px;
  overflow: hidden;

  .form-item {
    margin-bottom: 8px;
  }

  .input-area {
    width: 90%;
    position: relative;
  }

  .text-area {
    position: relative;
  }

  .tip {
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: #b4b8bc;
    font-size: 12px;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid @gray;
    outline: none;
    color: @words;
    font-size: 14px;
    border-radius: 4px;
    &:focus {
      border-color: @primary;
    }
  }

  input {
    padding: 0 16px;
    height: 40px;
  }

  textarea {
    resize: none;
    padding: 8px 16px;
    height: 120px;
  }

  .error {
    margin-top: 4px;
    color: @danger;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
  }

  button {
    position: relative;
    cursor: pointer;
    border: none;
    outline: none;
    width: 100px;
    height: 34px;
    color: #fff;
    background: @primary;
    border-radius: 4px;
    &:hover {
      background: darken(@primary, 10%);
    }
    &:disabled {
      background: lighten(@primary, 20%);
      cursor: not-allowed;
    }
  }
}
</style>