import { memo, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MENU from 'data/MenuSideBar';
import styled from 'styled-components';
import { useDisplayContext } from "context/DisplayContext";
import { CloseOutlined } from "@ant-design/icons";

export default memo(function SideBar() {
    const history = useHistory()
    const [activeMenu, setActiveMenu] = useState(history.location.pathname);
    const { sideBarVisible, setSideBarVisible } = useDisplayContext();

    useEffect(() => {
        history.listen(() => setActiveMenu(history.location.pathname));
    }, [history]);

    return (
        <Bar visible={sideBarVisible}>
            <BarHeader>
                <AppName
                    isActive={activeMenu === '/'}
                    onClick={() => {
                        history.push('/')
                    }}
                >
                    MenuOrderApp
                </AppName>
                <CloseOutlined
                    onClick={() => {
                        setSideBarVisible(!sideBarVisible)
                    }}
                    style={{
                        fontSize: '16px'
                    }}
                />
            </BarHeader>
            <MenuContainer>
                {
                    MENU.map(({ name, path }, index) => {
                        const isActive = activeMenu === path

                        return (
                            <MenuList
                                key={index}
                                isActive={isActive}
                                onClick={() => {
                                    history.push(path)
                                }}
                            >
                                {name}
                            </MenuList>
                        )
                    })
                }
            </MenuContainer>
        </Bar>
    )
})

const AppName = styled.div`
    padding: 4px 8px;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    background-color: ${(props) => props.isActive ? 'var(--color-2)' : 'var(--color-3)'};
`

const Bar = styled.div`
    height: 100%;
    max-width: ${(props) => props.visible ? '254px' : '0px'};
    min-width: ${(props) => props.visible ? '254px' : '0px'};
    background-color: #fff;
    box-shadow: var(--box-shadow);
    overflow: hidden;

    transition-duration: 400ms;
    z-index: 1;
`

const BarHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 54px;
    padding: 0 16px;
    background-color: var(--color-4);
`

const MenuContainer = styled.div`
    width: 100%;
    padding: 0 8px;
`

const MenuList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 42px;
    padding: 0 16px;
    margin-top: 8px;
    cursor: pointer;
    background-color: ${(props) => props.isActive ? 'var(--color-2)' : '#fff'};
    color: ${(props) => props.isActive ? '#fff' : 'var(--color-1)'};
    border-radius: 6px;
    white-space: nowrap; 

    :hover{
        background-color: ${(props) => props.isActive ? 'var(--color-2)' : '#eee'};
    }
`
