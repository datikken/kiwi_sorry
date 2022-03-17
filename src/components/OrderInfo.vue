<template>
  <div class="payinfo">
    <div class="payinfo_head">
      <div class="payinfo_head_txt">Оплата заказа: {{ order_number }}</div>
      <div class="payinfo_head_icons">
        <img class="payinfo-visa" src="@/assets/visa.svg" alt="Visa" />
        <img class="payinfo-master" src="@/assets/master.svg" alt="Master" />
        <img class="payinfo-mir" src="@/assets/mir.svg" alt="Mir" />
      </div>
    </div>

    <div class="payinfo_notice">
      Необходимо оплатить заказ в течении 20 минут.
    </div>

    <ul class="payinfo_list">
      <li class="payinfo_item">
        <span class="payinfo_key">Трансфер:</span>
        <span class="payinfo_val">{{ order_desc }}</span>
      </li>
      <li class="payinfo_item">
        <span class="payinfo_key">Получатель:</span>
        <span class="payinfo_val">{{ order_recepient }}</span>
      </li>
      <li class="payinfo_item">
        <span class="payinfo_key">К оплате:</span>
        <span class="payinfo_val">{{ order_amount }} р.</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OrderInfo",
  data: () => ({
    order_number: null,
    order_desc: null,
    order_amount: null,
    order_recepient: null,
    order_prepayID: null,
    order_hash: null
  }),
  mounted() {
    this.order_number = window.orderDATA.order_number;
    this.order_desc = window.orderDATA.order_desc;
    this.order_amount = window.orderDATA.order_amount;
    this.order_recepient = window.orderDATA.order_recepient;
    this.order_prepayID = window.orderDATA.order_prepayID;
    this.order_hash = window.orderDATA.order_hash;
  }
}
</script>

<style lang="scss" scoped>
@import '~@kiwitaxi/design/src/mixins';

.payinfo {
  background: #fff;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 0 20px!important;
}
.payinfo_list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  width: calc(100% - 20px);
  @include media-breakpoint-up(md) {
    width: 100%;
  }
}
.payinfo_notice {
  color: #ff0000;
  display: block;
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 14px;
  padding-top: 0px;
}

.payinfo_head_icons, .payinfo_head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.payinfo_head_txt {
  color: #373f47;
  font-size: 26px;
  font-weight: 800;
  font-family: 'Open Sans', sans-serif;
  margin: 20px 0 0 0;
  @include media-breakpoint-up(md) {
    margin: 0;
  }
}
.payinfo_item {
  display: flex;
  flex-wrap: wrap;
  min-height: 30px;
}
.payinfo_key {
  font-weight: bold;
  color: #484848;
  width: 120px;
  font-family: 'Open Sans', sans-serif;
  line-height: 28px;
}
.payinfo_val {
  line-height: 18px;
  padding-top: 5px;
  padding-bottom: 5px;
  display: block;
  font-weight: 600;
  @include media-breakpoint-up(md) {
    padding-left: 120px;
  }
}
</style>
