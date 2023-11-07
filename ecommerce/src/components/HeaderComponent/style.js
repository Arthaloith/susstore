import styled from "styled-components";
import { Row } from "antd";

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: rgb(26, 148, 255);
    align-items: center;
    gap: 16px;
    flex-wrap: no-wrap;
`

export const WrapperTextHeader = styled.span`
    color: white;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
`
export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: white;
    gap: 10px;
    font-size: 12px;
`

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: white;
    white-space: nowrap;
`

