<template>
  <div id="app">
    <e-full-screen-container>
      <e-digital-flop :value="value" :decimals="0"></e-digital-flop>
      <div style="margin-top:20px;">
        <input type="number" v-model="txtValue" /> <input type="button" value="更新数据" @click="handleUpdate" />
      </div>
    </e-full-screen-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      txtValue: 0,
      value: 0
    }
  },
  methods: {
    handleUpdate() {
      this.value = +this.txtValue
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
