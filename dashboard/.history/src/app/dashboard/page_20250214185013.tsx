import DashboardStats from "../../componenets/cards/DashboardStats/DashboardStats"
import Layout from "../dashboard/Layout";
import TopSellingCard from "../../";
import Chart from "@/components/Charts/Chart";
import { Box, Grid } from "@mui/material";

export default function DashboardHome() {
  return (
    <Layout>
      {/* Stats at the top */}
      <Box sx={{ mb: 2 }}>
        <DashboardStats />
      </Box>

      {/* Two TopSellingCards in one row */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} md={6}>
          <TopSellingCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <TopSellingCard />
        </Grid>
      </Grid>

      {/* Chart below */}
      <Box>
        <Chart />
      </Box>
    </Layout>
  );
}
