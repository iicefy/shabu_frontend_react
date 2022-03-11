import { memo, useState, useEffect, useCallback } from "react";
import axios from "axios";
import Tab from 'antd/lib/tabs';
import styled from 'styled-components';
import CATEGORY from 'data/Category';
import PageContent from 'components/content-page/PageContent';
import { LoadingOutlined } from "@ant-design/icons";

const { TabPane } = Tab;

export default memo(function Order() {
    const [foods, setFoods] = useState([])
    const [activeKey, setActiveKey] = useState(1)
    const [foodLoading, setFoodLoading] = useState(false)

    const getFoods = useCallback(async (key) => {
        setFoodLoading(true)
        try {
            const result = await axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=${key}`)
            setFoods(result.data)
        } catch (error) {
            console.log(error);
        }
        setFoodLoading(false)
    }, [])

    useEffect(() => {
        getFoods(activeKey)
    }, [getFoods, activeKey])

    return (
        <MenuContainer>
            <TabCustom
                onChange={(key) => {
                    setActiveKey(key)
                }}
            >
                {
                    CATEGORY.map(({ title, key }) => {
                        return (
                            <TabPane tab={title} key={key} >
                                <PageContent padding='0 0 52px 0'>
                                    {
                                        foodLoading ?
                                            <LoadingContainer>
                                                <LoadingOutlined style={{ fontSize: 28 }} spin />
                                            </LoadingContainer>
                                            :
                                            <ListContainer>
                                                {

                                                    foods.map((data, index) => {
                                                        return (
                                                            <Food key={index}>
                                                                <ImgContainer>
                                                                    <img alt='img' src={data.thumb} style={{ objectFit: 'cover' }} height='100%' />
                                                                </ImgContainer>
                                                                <Info>
                                                                    {data.title}
                                                                </Info>
                                                            </Food>
                                                        )
                                                    })
                                                }
                                            </ListContainer>
                                    }

                                </PageContent>
                                {/* <OrderBottomBar>
                                </OrderBottomBar> */}
                            </TabPane>
                        )
                    })
                }
            </TabCustom>
        </MenuContainer>
    )
})

// const OrderBottomBar = styled.div`
//     height: 52px;
//     position: absolute;
//     box-shadow: var(--box-shadow);
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: #fff;
// `

const LoadingContainer = styled.div`
    display: flex;
    width: 100%;
    height: 120px;
    align-items: center;
    justify-content: center;
`

const Info = styled.div`

`

const ImgContainer = styled.div`
    min-width: 68px;
    max-width: 68px;
    height: 68px;
    border-radius: 6px;
    overflow: hidden;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;

    @media (min-width: 576px) {
        min-width: 68px;
        max-width: 68px;
        height: 68px;
    }
    @media (min-width: 620px){
        min-width: 68px;
        max-width: 68px;
        height: 68px;
    }
    @media (min-width: 992px){
        min-width: 68px;
        max-width: 68px;
        height: 68px;
    }
    @media (min-width: 1360px) {
        min-width: 80px;
        max-width: 80px;
        height: 80px;
    }
    @media (min-width: 1600px) {
        min-width: 80px;
        max-width: 80px;
        height: 80px;
    }
`

const Food = styled.div`
    display: flex;
    align-items: center;
    min-width: 100%;
    min-height: 84px;
    max-height: 84px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: var(--box-shadow);
    padding: 8px;

    @media (min-width: 576px) {
        min-height: 84px;
        max-height: 84px;
    }
    @media (min-width: 620px){
        min-height: 84px;
        max-height: 84px;
    }
    @media (min-width: 992px){
        min-height: 84px;
        max-height: 84px;
    }
    @media (min-width: 1360px) {
        min-height: 92px;
        max-height: 92px;
    }
    @media (min-width: 1600px) {
        min-height: 92px;
        max-height: 92px;
    }
`

const ListContainer = styled.div`
    display: grid;
    width: 100%;
    column-gap: 12px;
    row-gap: 12px;
    padding: 16px;
    grid-template-columns: 1fr;
    height: fit-content;

    @media (min-width: 576px) {
        grid-template-columns: 1fr;
        justify-content: space-between;
        column-gap: 12px;
        row-gap: 12px;
    }
    @media (min-width: 620px){
        grid-template-columns: 1fr 1fr ;
        justify-content: space-between;
        column-gap: 12px;
        row-gap: 12px;
    }
    @media (min-width: 992px){
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: space-between;
        column-gap: 12px;
        row-gap: 12px;
    }
    @media (min-width: 1360px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: space-between;
        column-gap: 12px;
        row-gap: 12px;
    }
    @media (min-width: 1600px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        justify-content: space-between;
        column-gap: 12px;
        row-gap: 12px;
    }
`

const MenuContainer = styled.div`
    display: flex;
    flex: 1;
`

const TabCustom = styled(Tab)`
    width: 100%;

    .ant-tabs-nav{
        margin: 0;
    }

    .ant-tabs-tab-btn{
        padding: 4px 16px;
        border-radius: 40px;
    }

    .ant-tabs-tab{
        margin: 0 0 0 16px ;
    }

    .ant-tabs-tab-active > .ant-tabs-tab-btn{
        padding: 4px 16px;
        background-color: var(--color-2);
        color: #fff;
        border-radius: 40px;
    }

    .ant-tabs-ink-bar{
        display: none;
    }

    .ant-tabs-tab:hover{
        color: var(--color-2);;
    }

    .ant-tabs-content{
        display: flex;
        height: 100%;
    }
`
