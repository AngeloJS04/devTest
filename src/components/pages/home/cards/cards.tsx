import { RootState } from '@/redux/store';
import { validateAmount } from '@/utils/validateAmount';
import React from 'react'
import { useSelector } from 'react-redux'

const HomeCard = () => {
    const exchanges = useSelector((state: RootState) => state.exchange.exchanges);
    const maxPrice = Math.max(...exchanges.map((exchange) => exchange.price))
    const minPrice = Math.min(...exchanges.map((exchange) => exchange.price))

    const percentageChange = ((maxPrice - minPrice) / maxPrice) * 100

    const dataCards = [
        {
            name: 'Trade',
            value: exchanges[0]?.symbol,
            color: 'text-white/70',
            icon: 'exchange'
        },
        {
            name: 'Max Price',
            value: maxPrice > 0 ? `$ ${validateAmount(`${maxPrice}`)}` : '0.00',
            color: 'text-green-400',
            icon: 'top'

        },
        {
            name: 'Min Price',
            value: minPrice > 0 ? `$ ${validateAmount(`${minPrice}`)}` : '0.00',
            color: 'text-red-400',
            icon: 'down'
        },
        {
            name: 'Perc. Change',
            value: `${percentageChange.toFixed(2)}%`,
            color: percentageChange > 0 ? 'text-green-400' : 'text-red-400',
            icon: 'percentage'
        }

    ]

    return (

        <div className="flex flex-wrap justify-center justify-items-center mx-20  mb-20">
            {
                dataCards.map((item, index) => {
                    return (
                        <div className="w-2/2 xl:w-1/4 px-3" key={index}>
                            <div className="w-full text-white border border-gray-600 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
                                <img className='mr-7' width="30" height="30" src={`/img/${item.icon}.png`} alt="up--v1" />
                                <div className="text-gray-700">
                                    <p className={`font-semibold text-sm md:text-3xl ${item.color}`}>
                                        {item.value}
                                    </p>
                                    <p className='text-white/80 '>{item.name}</p>
                                </div>
                            </div>
                        </div>

                    )
                })
            }
        </div>


    )
}

export default HomeCard