import { memo } from "react";
import styled from 'styled-components';
import { useDisplayContext } from "context/DisplayContext";
import { MenuOutlined } from "@ant-design/icons";

export default memo(() => {
    const { sideBarVisible, setSideBarVisible } = useDisplayContext();
    return (
        <Header>
            {
                !sideBarVisible &&
                <MenuOutlined
                    onClick={() => {
                        setSideBarVisible(!sideBarVisible)
                    }}
                    style={{
                        fontSize: '20px'
                    }}
                />
            }
        </Header>
    )
})

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    height: 54px;
    width: 100%;
    background-color: var(--color-4);
    z-index: 1;
`