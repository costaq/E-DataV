import styled from "vue-styled-components";

const boxContainerProps = {
    fontSize: { type: Number },
    fontColor: { type: String },
    backgroundColor: { type: String }
}

const waterWaveProps = {
    value: { type: Number },
    waveColors: { type: Array }
}

export const BoxContainer = styled('div', boxContainerProps)`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: ${props => props.backgroundColor};
    border-radius: 100%;
    overflow: hidden;

    .percent {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 3;
        width: 100%;
        height: 100%;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.fontColor};
        font-size: ${props => props.fontSize}px;
    }
`;

export const WaterWave = styled('div', waterWaveProps)`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    transform: translate(0, ${props => 100 - props.value}%);
    background: ${props => props.waveColors[0]};
    transition: all .3s;

.water_wave {
    width: 200%;
    position: absolute;
    bottom: 100%;
}

.water_wave_back {
    right: 0;
    fill: ${props => props.waveColors[1]};
    -webkit-animation: wave-back 2s infinite linear;
    animation: wave-back 2s infinite linear;
}

.water_wave_front {
    left: 0;
    fill: ${props => props.waveColors[0]};
    margin-bottom: -1px;
    -webkit-animation: wave-front 1s infinite linear;
    animation: wave-front 1s infinite linear;
}

@keyframes wave-front {
    100% {
      -webkit-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
    }
}

@keyframes wave-back {
    100% {
      -webkit-transform: translate(50%, 0);
      transform: translate(50%, 0);
    }
}
`;