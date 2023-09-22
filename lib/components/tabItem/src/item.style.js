import styled from 'vue-styled-components';

const TabItemProps = {
    symbolId: { type: String, default: '' },
    width: { type: Number, default: 300 },
    height: { type: Number, default: 300 },
    margin: { type: Number, default: 10 },
    fontSize: { type: Number, default: 16 },
    fontColor: { type: String, default: '#fff' },
    duration: { type: Number, default: 3 },
    backgroundColor: { type: String, default: 'transparent' }
}

const TabItemContentProps = {
    fontSize: { type: Number, default: 16 },
    fontColor: { type: String, default: '#fff' }
}

export const TabItem = styled('div', TabItemProps)`
    position: relative;
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    float: left;
    margin: ${props => props.margin}px;
    cursor: pointer;

    &.active {
        rect {
            stroke-dasharray:${props => props.width + props.height}; 
            animation: blinker-active-${props => props.symbolId} ${props => props.duration}s linear infinite;
        }
    }

    &:hover {
        rect {
            animation: blinker-hover-${props => props.symbolId} ${props => props.duration}s linear infinite;
        }
    }

    rect {
        height: ${props => props.height}px;
        width: ${props => props.width}px;
        fill: ${props => props.backgroundColor};
        stroke-dasharray: 0 10000;
        stroke-dashoffset: 0;
        stroke-width: 3px;
    }
`;

export const ItemBorder = styled.svg`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`;

export const ItemText = styled.span`
    margin: 0 5px;
`;

export const ItemIcon = styled.span``;

export const ItemContent = styled('div', TabItemContentProps)`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.fontSize}px;
    color: ${props => props.fontColor};
`;