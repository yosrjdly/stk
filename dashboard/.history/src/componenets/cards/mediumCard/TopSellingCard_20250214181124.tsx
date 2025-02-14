"use client";

import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const data = [
  { name: "article test", quantity: 7 },
  { name: "Version Test", quantity: 4 },
  { name: "Article 3", quantity: 1 },
];

const TopSellingCard = () => {
  return (
    <Card sx={{ maxWidth: 400, borderRadius: 2, boxShadow: 3, overflow: "hidden" }}>
      <CardContent sx={{ backgroundColor: "#f57c00", color: "white", textAlign: "center", padding: 2 ,borderRadius: 2 ,width:200}}>
        <Typography variant="h6" fontWeight="bold">
          10 articles plus vendus
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          Colis
        </Typography>
      </CardContent>
      <CardContent>
        <TableContainer component={Paper} elevation={0} sx={{ boxShadow: "none" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Désignation</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Qté Vendus</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default TopSellingCard;
