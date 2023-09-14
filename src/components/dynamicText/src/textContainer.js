/*
 * @Autor: costa
 * @Date: 2023-09-07 09:58:49
 * @LastEditors: costa
 * @LastEditTime: 2023-09-14 15:25:45
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import styled from "vue-styled-components";

const textProps = {
    duration: { type: Number, default: 1 },
    delay: { type: Number, default: 0 },
    spacing: { type: Number, default: 5 }
}

const textContainerProps = {
    colors: { type: Array, default: () => ['#fff', '#1e80ff'] },
}

export const TextContainer = styled('div', textContainerProps)`
    color: ${props => props.colors[0]};

    @keyframes text-gradient {
        to {
            color: ${props => props.colors[1]};
        }
    }
`;

export const Text = styled('span', textProps)`
    
    animation: text-gradient ${props => props.duration}s linear ${props => props.delay}s infinite alternate;
    margin: 0 ${props => props.spacing}px;
`;