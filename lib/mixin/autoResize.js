/*
 * @Autor: costa
 * @Date: 2023-07-07 11:28:01
 * @LastEditors: costa
 * @LastEditTime: 2023-07-07 14:55:12
 * @Description: 边框组件公共属性
 * @Copyright: © 2023 by costa. All rights reserved.
 */
export default {
    data() {
        return {
            width: 0,
            height: 0
        }
    },
    methods: {
        init: function() {
            this.$nextTick(_ => {
                const dom = this.$refs[this.ref];
                this.width = dom ? dom.$el.clientWidth : 0;
                this.height = dom? dom.$el.clientHeight : 0;
            });
        }
    },
    mounted() {
        this.init();
    }
}