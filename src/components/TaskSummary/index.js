import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"
const TaskSummary = ({ Piedata }) => {
    const COLORS = ['#98D89E', '#F6DC7D', '#EE8484'];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="task-summary">
            <h2>Task Status Distribution</h2>
            <ResponsiveContainer width="100%" height={200}>
                <PieChart width="100%">
                    <Pie
                        cx="40%"
                        cy="50%"
                        data={Piedata}
                        startAngle={0}
                        endAngle={360}
                        dataKey="count"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}s
                    >
                        {Piedata.map((entry, index) => (
                            <Cell name={entry.language} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend
                        iconType="circle"
                        layout="vertical"
                        verticalAlign="middle"
                        align="center"
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};


export default TaskSummary