<!--
 * @Autor: costa
 * @Date: 2023-04-04 11:04:29
 * @LastEditors: costa
 * @LastEditTime: 2024-01-22 15:28:28
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
<template>
  <div id="app">
    <e-full-screen-container>
      <div style="width: 700px;height:500px;">
        <div style="width: 300px; height: 300px;">
          <e-gauge-chart :value="value" :value-font-size="80"></e-gauge-chart>
        </div>
        <!-- <div style="width:600px;height:200px;">
          <e-dynamic-text :text="text" style="font-size: 36px;font-weight: bold;" :colors="['#fff', '#000']" />
          <button @click="handleChangeText">更新数据</button>
        </div>
        <e-border-box-1>
          <e-digital-flop :value="value" :decimals="0" color="#fff"></e-digital-flop>
          <e-water-level-pond style="width:300px;height:300px;" :value="value" :background-color="'#000'" />
        </e-border-box-1> -->
        <!-- <e-border-box-3 style="width:300px;height:200px;" text="数据大屏" border-color="#1e80ff" background-color="transparent" text-position="right" font-color="#fff"></e-border-box-3> -->
        <!-- <e-border-box-2 style="width:300px;height:300px;">
          <e-scroll-ranking-board type="page" :items="rankingList" @row-click="handleChange"></e-scroll-ranking-board>
        </e-border-box-2> -->
        <!-- <e-border-box-2 style="width:300px;height:300px;">
          <e-scroll-ranking-board type="page" :items="rankingList" @row-click="handleChange"></e-scroll-ranking-board>
        </e-border-box-2>
        <e-tab :columns="3" style="width:300px;height:300px;" @change="handleChange">
          <e-tab-item value="1"><template slot="icon"><a-icon type="down-square" /></template>1</e-tab-item>
          <e-tab-item value="2">2</e-tab-item>
          <e-tab-item value="3">3</e-tab-item>
        </e-tab> -->
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
      text: 'E-DataV数据大屏',
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
    },
    handleChangeText() {
      this.text = 'E-DataV数据可视化大屏';
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
