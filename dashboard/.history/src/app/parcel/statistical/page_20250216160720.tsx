import FilterComponent from "@/componenets/forms/FilterComponent";
import Layout from "../../dashboard/Layout";
import StatusCards from "@/componenets/cards/StatusCards/StatusCards";

export default function CompanyDelivery() {
  return (
    <Layout>
    <FilterComponent/>
    <StatusCards/>
    </Layout>
  );
}
