<template>
  <div class="spin"></div>
</template>

<style lang="scss">
@import '../assets/main.scss';

.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: map-get($map: $colors, $key: primary-green);
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to { -webkit-transform: rotateZ(360deg);  }
}
</style>