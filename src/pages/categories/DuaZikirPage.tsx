
import { Heart } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "ইসলামিক সেন্টার", phone: "01712345678", location: "মসজিদ কমপ্লেক্স", subcategory: "দোয়া-জিকির", description: "ইসলামিক বই ও তথ্য", hours: "সকাল ৮টা - রাত ৮টা" }
];

const subcategories = ["দোয়া-জিকির", "ইসলামিক বই"];

const DuaZikirPage = () => {
  return <CategoryTemplate categoryName="দোয়া-জিকির" description="ইসলামিক দোয়া ও জিকির" services={services} categoryIcon={Heart} subcategories={subcategories} />;
};

export default DuaZikirPage;
