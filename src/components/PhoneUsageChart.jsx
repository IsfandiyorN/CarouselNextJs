import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const PhoneUsageChart = ({ usageData }) => {
    const labels = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}.00`);

    const data = {
        labels,
        datasets: [
            {
                label: 'Phone Usage Time (seconds)',
                data: usageData,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Phone Usage Over 24 Hours' },
        },
    };

    return <Line data={data} options={options} />;
};

export default PhoneUsageChart;
