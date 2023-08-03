<!--
 * @Autor: costa
 * @Date: 2023-07-17 14:25:20
 * @LastEditors: costa
 * @LastEditTime: 2023-08-03 15:58:35
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
-->
## E-DataV
<a href="https://www.npmjs.com/package/e-datav">
    <img src="https://img.shields.io/npm/v/e-datav.svg" alt="LICENSE" />
</a>

### 什么是E-DataV?

* E-DataV是一个基于**Vue2**的数据可视化组件库（[Vue2版本](https://github.com/costaq/E-DataV)及[React版本](https://github.com/costaq/E-DataV-React)）
* 提供数据可视化大屏所需的各种组件，朋友写的[DataV](https://github.com/DataV-Team/DataV)组件库中已有的组件，我这边不会过多增加，最多是效果提升
* 因个人比较佛系，更新会比较慢，但会持续更新

### 链接

[E-DataV 官方文档](https://costaq.github.io/)

### npm安装

```shell
$ npm install e-datav
```

### 使用

```js
import Vue from 'vue'
import EDataV from 'e-datav'

Vue.use(EDataV)

// 按需引入
import { EDigitalFlop } from 'e-datav'
Vue.use(EDigitalFlop)
```

### UMD版

```js

<body>
    <div id="app">
        <e-digital-flop :value="9999" separator=","></e-digital-flop>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/e-datav/dist/e-datav.min.vue.js"></script>
<script>
    new Vue({
        el: '#app'
    })
</script>

```

