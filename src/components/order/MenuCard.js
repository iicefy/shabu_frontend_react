import { memo, useState } from "react";
import Button from 'antd/lib/button';
import Space from 'antd/lib/space';
import Image from 'antd/lib/image';
import styled from 'styled-components';

export default memo(function MenuCard({
    img,
    title,
    price,
    isFuffet
}) {
    const [count, setCount] = useState(0)

    return (
        <Card>
            <div
                style={{
                    display: 'block',
                    height: '100%',
                    paddingLeft: '24%',
                    position: 'relative',
                    backgroundColor: '#000',
                    borderRadius: '8px',
                    marginRight: '8px'
                }}
            >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <Image
                        alt='food_img'
                        src={img}
                        height='100%'
                        width='100%'
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{title}</div>
                <div style={{ display: 'flex', flexDirection: 'row-reverse', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Space>
                        <Button
                            type="primary"
                            shape="circle"
                            size='small'
                            onClick={() => {
                                if (count > 0) {
                                    setCount(count - 1)
                                }
                            }}
                        >
                            -
                        </Button>
                        <div style={{ margin: '0 4px' }}>
                            {count}
                        </div>
                        <Button
                            type="primary"
                            shape="circle"
                            size='small'
                            onClick={() => {
                                setCount(count + 1)
                            }}
                        >
                            +
                        </Button>
                    </Space>
                    {
                        !isFuffet &&
                        <div style={{ fontSize: '14px' }}>{price}</div>
                    }
                </div>
            </div>
        </Card>
    )
})

const Card = styled.div`
    width: 100%;
    height: 100px;
    border-radius: 8px;
    border: 1px solid #eee;
    box-shadow: 0px 4px 12px 3px rgba(0,0,0,0.15);
    margin-bottom: 12px;
    display: flex;
    padding: 6px;
`