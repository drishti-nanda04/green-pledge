"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const data = [
    { month: 'Jan', target: 3, actual: 1.2 },
    { month: 'Feb', target: 3, actual: 2 },
    { month: 'Mar', target: 3, actual: 3.2 },
    { month: 'Apr', target: 3, actual: 2.7 },
    { month: 'May', target: 3, actual: 3.7 },
    { month: 'Jun', target: 3, actual: 4 },
];

export default function CO2OffsetChart() {
    return (
        <ResponsiveContainer width="100%" height={403}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis unit="t" domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="target" name="Target" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="actual" name="Actual" stroke="#2e7d32" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    );
}
