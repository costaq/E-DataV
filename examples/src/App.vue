<!--
 * @Autor: costa
 * @Date: 2023-04-04 11:04:29
 * @LastEditors: costa
 * @LastEditTime: 2023-08-22 17:48:57
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
  <div id="app">
    <e-full-screen-container>
      <div style="width: 700px;height:500px;">
        <e-border-box-1>
          <e-digital-flop :value="value" :decimals="0" color="#fff"></e-digital-flop>
          <e-water-level-pond style="width:300px;height:300px;" :value="value" :background-color="'#000'" />
          <div style="width:600px;height:100px;">

          </div>

        </e-border-box-1>
        <e-border-box-2 style="width:300px;height:300px;">
          <e-scroll-ranking-board type="page" :items="rankingList" ></e-scroll-ranking-board>
        </e-border-box-2>
        <e-border-box-2 style="width:300px;height:300px;">
          <e-scroll-ranking-board type="page" :items="rankingList" ></e-scroll-ranking-board>
        </e-border-box-2>
        <e-tab :columns="3" style="width:300px;height:300px;">
            <e-tab-item value="1"><template slot="icon"><a-icon type="down-square" /></template>1</e-tab-item>
            <e-tab-item value="2">2</e-tab-item>
            <e-tab-item value="3">3</e-tab-item>
          </e-tab>
        <div style="margin-top:20px;">
          <input type="number" v-model="txtValue" /> <input type="button" value="更新数据" @click="handleUpdate" />
        </div>
        <div>

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
      items: [
        {
          label: 'test1', value: '1'
        },
        {
          label: 'test2', value: '2'
        }
      ],
      rankingList: Array.from({ length: 100 }).map((item, index) => {
        return {
          label: `test${index}`, value: index
        }
      })
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
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #000;
}
</style>
