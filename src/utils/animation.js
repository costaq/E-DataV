/**
* @description 动画函数
* @param {*} duration 持续时间
* @param {*} from 开始值
* @param {*} to 差值
* @param {*} onProcess 处理回调
*/
const animation = (duration, from, to, onProcess) => {
    // 获取差值
    const dif = to - from;
    // 计算速度
    const speed = dif / duration;
    // 初始值
    let value = from;
    
    const startime = new Date();

    onProcess(value);

    const _run = () => {
        // 计算已经执行的时间
        const difTime = new Date() - startime;

        if(difTime > duration) {
            value = to;
            onProcess(value);
            return;
        }

        // 起始值+已经执行的时间*速度
        value = from + speed * difTime;

        onProcess(value);

        requestAnimationFrame(_run);
    }

    requestAnimationFrame(_run);
}

export {
    animation
}