
import { Building } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "ঢুনট পৌরসভা", phone: "051-12345678", location: "পৌরসভা ভবন", subcategory: "পৌর সেবা", description: "ট্রেড লাইসেন্স ও অন্যান্য সেবা", hours: "সকাল ৯টা - ব্যিকাল ৫টা" }
];

const subcategories = ["পৌর সেবা", "হোল্ডিং ট্যাক্স"];

const MunicipalityPage = () => {
  return <CategoryTemplate categoryName="পৌরসভা" description="পৌরসভার সেবা" services={services} categoryIcon={Building} subcategories={subcategories} />;
};

export default MunicipalityPage;
