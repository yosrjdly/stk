"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";

interface CardData {
  title: string;
  amount: string;
  count: number;
  backgroundColor: string;
}

const cardData: CardData[] = [
  { title: "Crée", amount: "803.000 TND", count: 9, backgroundColor: "#2196F3" },
  { title: "Validé", amount: "1500.000 TND", count: 5, backgroundColor: "#4CAF50" },
  { title: "Rejeté", amount: "300.000 TND", count: 2, backgroundColor: "#F44336" },
  { title: "En attente", amount: "700.000 TND", count: 4, backgroundColor: "#FF9800" },
  { title: "Approuvé", amount: "920.000 TND", count: 7, backgroundColor: "#9C27B0" },
  { title: "En cours", amount: "600.000 TND", count: 3, backgroundColor: "#3F51B5" },
  { title: "Terminé", amount: "1100.000 TND", count: 6, backgroundColor: "#00BCD4" },
  { title: "Suspendu", amount: "450.000 TND", count: 8, backgroundColor: "#795548" },
  { title: "Annulé", amount: "500.000 TND", count: 1, backgroundColor: "#E91E63" },
  { title: "Reporté", amount: "750.000 TND", count: 10, backgroundColor: "#607D8B" },
];

const StatusCards: FC = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", padding: "16px" }}>
      {cardData.map((card, index) => (
        <Card key={index} style={{ backgroundColor: card.backgroundColor, color: "white", borderRadius: "10px" }}>
          <CardContent>
            <Typography variant="h6">{card.title}</Typography>
            <Typography variant="h5">{card.amount}</Typography>
            <Typography variant="h6">{card.count}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatusCards;
