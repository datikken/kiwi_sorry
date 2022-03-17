<template>
  <div class="opernav">
    <img
        class="opernav-logo"
        src="@/assets/kiwitaxi-logo.svg"
        alt="logo"
    />
  </div>
</template>

<script>
export default {
  name: "NavbarSimple"
}
</script>

<style lang="scss" scoped>
  .opernav {
    width: 100%;
    height: 67px;
    display: flex;
    align-items: center;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    padding: 8px 24px 8px 40px;
    box-shadow: 0 2px 16px 0 rgb(55 63 71 / 15%);
  }
</style>
