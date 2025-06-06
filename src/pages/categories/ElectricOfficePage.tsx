
import { Building } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "পল্লী বিদ্যুৎ অফিস", phone: "051-12345678", location: "বিদ্যুৎ অফিস", subcategory: "বিদ্যুৎ সেবা", description: "নতুন সংযোগ ও বিল পরিশোধ", hours: "সকাল ৯টা - বিকাল ৫টা" }
];

const subcategories = ["বিদ্যুৎ সেবা", "গ্যাস সেবা"];

const ElectricOfficePage = () => {
  return <CategoryTemplate categoryName="বিদ্যুৎ অফিস" description="বিদ্যুৎ অফিস সংক্রান্ত সেবা" services={services} categoryIcon={Building} subcategories={subcategories} />;
};

export default ElectricOfficePage;
