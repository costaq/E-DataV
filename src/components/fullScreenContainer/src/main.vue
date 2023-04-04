<template>
    <div class="full-container">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'EFullScreenContainer',
    props: {
        type: {
            type: String,
            required: false,
            default: 'full' // full 全部拉伸 | full-width 宽度拉伸 | full-height 高度拉伸 | initial 初始化默认不拉伸
        },
        /**
         * @description 大屏设计稿宽度
         */
        width: {
            type: Number,
            required: false,
            default: 1920
        },
        /**
         * @description 大屏设计稿高度
         */
        height: {
            type: Number,
            required: false,
            default: 1080
        }
    },
    data() {
        return {
        }
    },
    watch: {

    },
    methods: {
        scale() {
            const windowWidth =
                document.documentElement.clientWidth || window.screen.width;

            //X轴scale,全屏时根据设置值计算
            const xScale = windowWidth / this.width;

            const windowHeight =
                document.documentElement.clientHeight || window.screen.height;

            //Y轴scale,全屏时根据设置值计算
            const yScale = windowHeight / this.height;

            let scale = '1';
            let overflow = 'overflow: hidden';

            switch (this.type) {
                case 'full':
                    scale = `${xScale}, ${yScale}`;
                    overflow = 'overflow: hidden';
                    break
                case 'full-width':
                    scale = `${xScale}, ${xScale}`;
                    overflow = 'overflow-y: scroll';
                    break
                case 'full-height':
                    scale = `${yScale}, ${yScale}`;
                    overflow = 'overflow-x: scroll';
                    break
                case 'initial':
                    scale = '1';
                    overflow = 'overflow: auto';
                    break
            }

            let css = `body{transform: scale(${scale}); 
                height: ${this.height + 'px'}; width: ${this.width}px; 
                transform-origin: left top; ${overflow};}`;

            const head = document.getElementsByTagName('head')[0];

            let style = document.createElement('style');

            style.type = 'text/css';

            style.appendChild(document.createTextNode(css));

            head.appendChild(style);
        }
    },
    beforeMount() {
        this.scale();

        window.onresize = () => this.scale()
    }
}
</script>