<template>
  <div id="app">
    <e-full-screen-container>
      <div style="width: 700px;height:800px;">
        <e-border-box-1>
          <e-digital-flop :value="value" :decimals="0"></e-digital-flop>
          <e-water-level-pond style="width:300px;height:300px;" :value="value" :background-color="'#000'" />
          <div style="width:600px;height:100px;">
            <e-tab :value="'2'" :items="items" :columns="3" @change="handleChange"></e-tab>
          </div>
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
      value: 0,
      items: [{ label: 'test1', value: '1' }, { label: 'test2', value: '2' }, { label: 'test3', value: '3' }],
    }
  },
  methods: {
    handleUpdate() {
      this.value = +this.txtValue
    },
    handleChange(value) {
      console.log(value);
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
  background-color: #000;
}
</style>
