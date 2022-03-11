import { memo } from "react";
import styled from 'styled-components';

export default memo(function PageContent({ children, padding }) {
    return (
        <PageContentContainer>
            <Content >
                {children}
            </Content>
        </PageContentContainer>
    )
})

const PageContentContainer = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
`

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    
`