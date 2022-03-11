import { memo } from "react";
import styled from 'styled-components';

export default memo(function Order() {

    return (
        <OrderContainer>
            Orders
            <OrderBottomBar>
            </OrderBottomBar>
        </OrderContainer>
    )
})


const OrderContainer = styled.div`
    display: flex;
    flex: 1;
    /* height: 100%; */
    position: relative;
`

const OrderBottomBar = styled.div`
    height: 52px;
    width: 100%;
    position: absolute;
    box-shadow: var(--box-shadow);
    bottom: 0;
`