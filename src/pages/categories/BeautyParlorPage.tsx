
import { Heart } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "রূপসী বিউটি পার্লার", phone: "01712345678", location: "মহিলা কলেজ এলাকা", subcategory: "মহিলা পার্লার", description: "সকল ধরনের বিউটি সেবা", hours: "সকাল ৯টা - রাত ৮টা" }
];

const subcategories = ["মহিলা পার্লার", "পুরুষ সেলুন"];

const BeautyParlorPage = () => {
  return <CategoryTemplate categoryName="বিউটি পার্লার" description="বিউটি পার্লার সার্ভিস" services={services} categoryIcon={Heart} subcategories={subcategories} />;
};

export default BeautyParlorPage;
