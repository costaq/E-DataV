<template>
    <loading-container class="e-loading">
        <loading-circle :borderColor="borderColor" :size="size">
            <loading-ball :color="borderColor" />
            <slot></slot>
        </loading-circle>
    </loading-container>
</template>
<script>
import { LoadingBall, LoadingCircle, LoadingContainer } from './loading.style';
export default {
    name: 'ELoading',
    components: {
        LoadingBall,
        LoadingCircle,
        LoadingContainer
    },
    props: {
        /**
        * @description 边框颜色
        */
        borderColor: {
            type: String,
            required: false,
            default: '#1e80ff'
        },
        /**
         * @description 尺寸，即宽高
         */
        size: {
            type: Number,
            required: false,
            default: 120
        },
    }
}
</script>