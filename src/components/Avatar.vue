<template>
  <div>
    <img
      :src="url"
      :style="{
        width: size + 'px',
        height: size + 'px',
      }"
      class="avatar-img"
    />
  </div>
</template>

<script>
export default {
  props: {
    url: { type: String, required: true },
    size: { type: Number },
  },
};
</script>

<style>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
}
</style>