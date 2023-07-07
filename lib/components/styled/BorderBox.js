/*
 * @Autor: costa
 * @Date: 2023-07-07 10:15:38
 * @LastEditors: costa
 * @LastEditTime: 2023-07-07 10:20:25
 * @Description: svg边框
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import styled, { css } from "vue-styled-components";

const position = css`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const BorderContent = styled.div`
    ${() => position}
`;

export const BorderSvgContainer = styled.svg`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
`;

export const BorderBox = styled.div`
    ${() => position}
`;