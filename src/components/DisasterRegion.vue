<template>
  <div class="disregion">
    <h3 class="disregion-head">Выберите регион выпуска банковской карты</h3>
    <div class="disregion-cont">
      <div class="disregion-item">
        <p class="disregion-text">Карта выпущена на территории Российской Федерации</p>
        <kw-switcher
            slot="activator"
            :checked="russia"
            @change="onChange"
        />
      </div>

      <div class="disregion-item">
        <p class="disregion-text">Карта выпущена вне территории Российской Федерации</p>
        <kw-switcher
            slot="activator"
            :checked="!russia"
            @change="onChange"
        />
      </div>

      <div class="disregion-line"></div>

      <div class="disregion-link"
           @click="submit"
      >
        Оплатить
      </div>

    </div>
  </div>
</template>

<script>
import KwSwitcher from '@kiwitaxi/vue-components/dist/KwSwitcher';

export default {
  name: "DisasterRegion",
  components: {
    KwSwitcher
  },
  data: () => ({
    russia: true
  }),
  methods: {
    onChange() {
      this.russia = !this.russia;
    },
    submit() {
      let url = `/services/prepay/confirmation?prepay_id=${window.orderDATA.order_prepayID}&hash=${window.orderDATA.order_hash}&is_rus_card=${this.russia ? 1 : 0}`;
      fetch(url)
          .then(function (result) {
            result.json().then(function (json) {
              window.location = json['formUrl'];
            });
          });
    }
  }
}
</script>

<style lang="scss" scoped>
.disregion {
  padding: 0;
}

.disregion-head {
  margin: 0 0 20px 20px;
}

.disregion-cont {
  background: #fff;
  border-radius: 5px;
}

.disregion-btn {
  width: calc(100% - 40px);
  margin: 20px 20px 20px 20px;
}

.disregion-line {
  width: 100%;
  height: 2px;
  background: #E5E5E5;
  margin-top: 10px;
}

.disregion-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;

  &:first-child {
    padding-top: 10px;
  }
}

.disregion-link {
  width: calc(100% - 40px);
  margin: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #26a65b;
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgb(55 63 71 / 5%);
  background-color: #26a65b;
  color: #fff;
  cursor: pointer;
  padding: 13px 16px;
  display: inline-block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
  transition: color .2s ease-in-out, background-color .2s ease-in-out;
  position: relative;
  text-decoration: none;
}
</style>
