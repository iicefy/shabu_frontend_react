import { memo } from "react";


export default memo(function Home() {
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            {/* {
                foods.map((food, index) => {
                    return (
                        <div
                            style={{
                                width: '200px',
                                height: '200px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                margin: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                border: '1px solid #a9a9a9',
                                backgroundColor: '#000'
                            }}
                        >
                            <img alt='food' src={food.thumb} width='100%' />
                        </div>
                    )
                })
            } */}
        </div>
    )
})