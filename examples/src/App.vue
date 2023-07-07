<template>
  <div id="app">
    <e-full-screen-container>
      <div style="width: 400px;height:400px;">
        <e-border-box-1>
          <e-digital-flop :value="value" :decimals="0"></e-digital-flop>
        </e-border-box-1>

        <div style="margin-top:20px;">
          <input type="number" v-model="txtValue" /> <input type="button" value="更新数据" @click="handleUpdate" />
        </div>
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
