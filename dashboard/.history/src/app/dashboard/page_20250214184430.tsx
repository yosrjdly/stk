import DashboardStats from "@/componenets/cards/smallCard/StatisticCard";
import Layout from "../dashboard/Layout";
import TopSellingCard from "@/componenets/cards/mediumCard/TopSellingCard";
import Chart from "@/componenets/Charts/Chart";

export default function DashboardHome() {
  return (
    <Layout>
    <DashboardStats/>
    <TopSellingCard/>
    <TopSellingCard/>

    <Chart/>

    </Layout>
  );
}
