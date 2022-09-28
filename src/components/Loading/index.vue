<template>
  <div class="loading-container">
    <span class="letter">L</span>
    <span class="letter rotation">&nbsp;&nbsp;&nbsp;</span>
    <span class="letter">a</span>
    <span class="letter">d</span>
    <span class="letter">i</span>
    <span class="letter">n</span>
    <span class="letter">g</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";

.loading-container {
  .self-center();
}

.letter {
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: @lightWords;
  position: relative;

  animation: pulse 0.45s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
  display: inline-block;
  transform: translate3d(0, 0, 0);
  margin-top: 0.5em;
  text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
}

.letter:nth-child(1) {
  animation-delay: 0s;
}
.letter:nth-child(2) {
  animation-delay: 0.0999888888s;
}
.letter:nth-child(3) {
  animation-delay: 0.1333333333s;
}
.letter:nth-child(4) {
  animation-delay: 0.2333333333s;
}
.letter:nth-child(5) {
  animation-delay: 0.3333333333s;
}
.letter:nth-child(6) {
  animation-delay: 0.4333333333s;
}
.letter:nth-child(7) {
  animation-delay: 0.5333333333s;
}
.letter:nth-child(8) {
  animation-delay: 0.6333333333s;
}
.letter:nth-child(9) {
  animation-delay: 0.7333333333s;
}
.letter:nth-child(10) {
  animation-delay: 0.8333333333s;
}
.letter:nth-child(11) {
  animation-delay: 0.9333333333s;
}

@keyframes pulse {
  0% {
    transform: translate3d(0, 0, 0);
    text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
  }
  100% {
    transform: translate3d(0, -0.5em, 0);
    text-shadow: rgba(255, 255, 255, 0.4) 0 1em 0.35em;
  }
}

.rotation::before {
  content: "";
  position: absolute;
  left: 0.1em;
  bottom: 0.214285em;
  width: 0.385714em;
  height: 0.385714em;
  border-radius: 50%;
  border: 0.142858em solid @lightWords;
  border-bottom-color: #ff3d00;
  animation: rotation 0.6s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>