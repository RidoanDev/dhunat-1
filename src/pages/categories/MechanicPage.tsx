
import { Wrench } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "কামাল মেকানিক", phone: "01712345678", location: "গ্যারেজ এলাকা", subcategory: "গাড়ি মেরামত", description: "সকল ধরনের গাড়ি মেরামত", hours: "সকাল ৮টা - সন্ধ্যা ৬টা" }
];

const subcategories = ["গাড়ি মেরামত", "বাইক মেরামত"];

const MechanicPage = () => {
  return <CategoryTemplate categoryName="মিস্ত্রি" description="টেকনিশিয়ান ও মিস্ত্রির সেবা" services={services} categoryIcon={Wrench} subcategories={subcategories} />;
};

export default MechanicPage;
