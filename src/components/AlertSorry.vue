<template>
  <div class="sorry">
    <i class="sorry-icon"></i>
    <div class="sorry-text">Ввиду участившихся случаев ошибок оплаты картами виза и мастеркард, необходимо указать страну в которой была выпущена ваша карта.</div>
  </div>
</template>

<script>
export default {
  name: "AlertSorry"
}
</script>

<style lang="scss" scoped>
@import '~@kiwitaxi/design/src/mixins';

.sorry {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #FBE3E3;
  padding: 16px 28px;
  border-radius: 5px;
  margin: 0 0 20px 0;
  @include media-breakpoint-up(md) {
    flex-wrap: nowrap;
    width: 100%;
  }
}
.sorry-icon {
  background-image: url('@/assets/info.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 22px;
  height: 22px;
  margin-right: 20px;
  margin-bottom: 10px;

  @include media-breakpoint-up(md) {
    margin-bottom: 0;
  }
}
</style>
