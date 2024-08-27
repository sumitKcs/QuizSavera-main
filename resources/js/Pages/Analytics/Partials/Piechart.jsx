import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#FFBB28", "#00C49F", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    label,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.75;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
            className="text-xl font-extrabold"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

import React from "react";

const Piechart = ({ unattempted, correct, incorrect, total }) => {
    const data = [
        { name: "Un-attempted", value: unattempted },
        { name: "Correct", value: correct },
        { name: "Incorrect", value: incorrect },
    ];

    const attempted = total - unattempted;

    return (
        <>
            <ResponsiveContainer
                width="100%"
                height="100%"
                className="relative flex flex-col gap-8"
            >
                <PieChart width={500} height={500}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="40%"
                        legendType="star"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>

                <div className="flex flex-wrap text-sm justify-center w-full gap-4 px-4 py-4 absolute bottom-0">
                    <div className="flex  gap-2">
                        <span className="bg-[#FFBB28] size-5"></span>
                        <p className="flex gap-2">
                            <span>Un-Attempted</span>
                            <span>
                                ({unattempted}/{total})
                            </span>
                        </p>
                    </div>
                    <h5>
                        Attempted: {attempted} / {total}
                    </h5>
                    <div className="flex gap-2">
                        <span className="bg-[#00C49F] size-5"></span>
                        <p className="flex gap-2">
                            <span>Correct</span>
                            <span>
                                ({correct}/{attempted})
                            </span>
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <span className="bg-[#FF8042] size-5"></span>
                        <p className="flex gap-2">
                            <span>Incorrect</span>
                            <span>
                                ({incorrect}/{attempted})
                            </span>
                        </p>
                    </div>
                </div>
            </ResponsiveContainer>
        </>
    );
};

export default Piechart;
