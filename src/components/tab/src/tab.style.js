import styled from "vue-styled-components";

const TabProps = {
    symbolId: { type: String, default: '' },
    length: { type: Number, default: 300 }
}

export const TabContainer = styled('div', TabProps)`
    position: relative;
    width: 100%;
    height: 100%;

    @keyframes blinker-hover-${props => props.symbolId} {
        0% { stroke-dashoffset: 0; stroke-dasharray: 0 10000; }
        50% { stroke-dasharray:${props => props.length}; }
        100% { stroke-dashoffset: -${props => (props.length) * 2}; stroke-dasharray: 10000 0;}
    }

    @keyframes blinker-active-${props => props.symbolId} {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -${props => (props.length) * 2};}
    }
`;