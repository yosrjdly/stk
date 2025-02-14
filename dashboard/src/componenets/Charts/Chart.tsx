"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "27/1", value: 4 },
  { date: "5/2", value: 1 },
  { date: "10/2", value: 4 },
];

const Chart = () => {
  return (
    <Card sx={{ width: "100%", borderRadius: 2, boxShadow: 3, padding: 2 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 2 }}>
        Tendances des colis par jour
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[1, 4]} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
