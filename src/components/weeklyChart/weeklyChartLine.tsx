import config from "@/config";
import { CoinActionEnum } from "@/redux/slices/exchange.interface";
import { setExchanges } from "@/redux/slices/exchange.slice";
import { RootState } from "@/redux/store";
import Socket from "@/socket/socket";

import {
    CategoryScale, Chart as ChartJS, Filler, Legend, LinearScale, LineElement, PointElement, ScriptableContext, Title,
    Tooltip
} from "chart.js";
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";

import styles from "./weeklyChartLine.module.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);


const WeeklyChartLine = () => {

    const exchanges = useSelector((state: RootState) => state.exchange.exchanges);
    const [chartData, setChartData] = useState<any>([]);

    useEffect(() => {
        const data = exchanges.map((exchange) => exchange.price);
        setChartData(data)
    }, [exchanges])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            filler: {
                propagate: false
            },
            interaction: {
                intersect: true
            }
        },
        scales: {
            x: {
                grid: {
                    borderDash: [4, 4],
                    color: "#ffffff52",
                    tickColor: 'transparent'
                },
                ticks: { color: 'white', beginAtZero: true, padding: 10 },
            },

            y: {
                grid: {
                    borderDash: [4, 4],
                    color: "#ffffff52",
                    tickColor: 'transparent'
                },
                ticks: { color: 'white', beginAtZero: true, padding: 10 }
            },
        },
        parsing: {
            xAxisKey: 'label',
            yAxisKey: 'totalPrice'
        }
    };

    const data = {
        labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
            "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],

        datasets: [
            {
                borderWidth: 4,
                color: "white",
                data: chartData,
                label: 'XBTUSD',
                borderColor: "#EE340B99",
                fill: "start",
                backgroundColor: (context: ScriptableContext<"line">) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                    gradient.addColorStop(0, "rgba(235,57,26,0.4)");
                    gradient.addColorStop(1, "rgba(235,57,26,0.1)");
                    return gradient;
                },
                tension: 0.4,
            },
        ]
    };

    return (
        <div className={`relative px-2 py-4 rounded-lg h-100 bg-black/10  shadow-lg`} >
            <div className="px-4 d-flex align-items-center justify-content-end ">
                <span style={{ width: "8px", height: "8px", content: " ", backgroundColor: "#FDD65B" }} className="d-flex me-2 rounded-circle"></span>
                <span className="text-white" style={{ fontSize: "12px" }}>AMOUNT</span>
            </div>
            <h2 style={{ fontSize: "26px" }} className={`text-center text-white m-0 px-3 pb-3 ${styles.title}`} >Bitmex Exchanges</h2>
            <div className="d-flex justify-content-center align-items-center w-100">
                <div className="px-3 w-100">
                    <Line options={options} data={data} />
                </div>
            </div>

        </div>
    )
}

export default WeeklyChartLine 