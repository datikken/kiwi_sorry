<template>
  <div id="oper container">
    <NavbarSimple />
    <div class="row">

      <AlertSorry />
      <OrderInfo />
      <DisasterRegion />

    </div>
  </div>
</template>

<script>
import NavbarSimple from "@/components/NavbarSimple";
import OrderInfo from "@/components/OrderInfo";
import AlertSorry from "@/components/AlertSorry";
import DisasterRegion from "@/components/DisasterRegion";

export default {
  name: 'App',
  components: {
    AlertSorry,
    OrderInfo,
    NavbarSimple,
    DisasterRegion
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;1,400&display=swap');
@import './bootstrap-variables';
@import '~@kiwitaxi/design/dist/main.css';
body {
  background-color: #f6f7f8;
  overflow-x: hidden;
}
.row {
  margin: 0 auto!important;
  max-width: 706px;
  padding: 20px;
}
</style>
