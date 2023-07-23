

import Tabs from '@/components/tabs';
import WeeklyChartLine from '@/components/weeklyChart/weeklyChartLine';
import config from '@/config';
import { CoinActionEnum } from '@/redux/slices/exchange.interface';
import { setExchanges } from '@/redux/slices/exchange.slice';
import { RootState } from '@/redux/store';
import Socket from '@/socket/socket';
import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Announcement from './announcement';
import HomeCard from './cards/cards';
import HomeTable from './table';

const HomePage = () => {
    const exchanges = useSelector((state: RootState) => state.exchange.exchanges);
    const columns = ["trade", "price", "action", "side", "Hour"]
    const dispatch = useDispatch();

    useEffect(() => {
        const tradeSocket = new Socket()
        tradeSocket.connect(`${config.socket.url}`)
        tradeSocket.onOpen(() => tradeSocket.sendMessage({ "op": "subscribe", "args": ["orderBookL2_25:XBTUSD"] }))

        setInterval(() => {
            tradeSocket.onMessage((response: any) => {
                if (response.action && Object.keys(CoinActionEnum).includes(response.action)) {
                    dispatch(setExchanges(response.data.map((item: any) => {
                        return { ...item, action: response.action }
                    })))
                    setTimeout(() => tradeSocket.onMessage(() => { }), 5)
                }
            })
        }, 2000)
        return () => { tradeSocket.disconnect() }
    }, [])

    const data = exchanges.map((exchange) => {
        return {
            symbol: exchange.symbol,
            price: exchange.price,
            action: exchange.action,
            side: exchange.side,
            timestamp: new Date(exchange.timestamp).toLocaleTimeString(),
        }
    })
    const tabs = [
        {
            name: 'Chart',
            component: <WeeklyChartLine />
        },
        {
            name: 'Table',
            component: <HomeTable data={data} columns={columns.map((item) => {
                return {
                    title: item
                }
            })} />
        },
        {
            name: 'Announcement',
            component: <Announcement />
        }

    ]
    return (
        <>
            <HomeCard />
            <div className='grid grid-cols-1 justify-items-center'>
                <Tabs tabs={tabs} />
            </div>
        </>
    )
}

export default HomePage