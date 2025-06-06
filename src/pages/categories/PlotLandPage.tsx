
import { Home } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "আবাসিক প্লট", phone: "01712345678", location: "নতুন এলাকা", subcategory: "আবাসিক জমি", description: "৩ কাঠা প্লট বিক্রয়", hours: "দর আলোচনা সাপেক্ষে" }
];

const subcategories = ["আবাসিক জমি", "কৃষি জমি"];

const PlotLandPage = () => {
  return <CategoryTemplate categoryName="জমি/প্লট" description="জমি ক্রয়-বিক্রয় ও প্লটের তথ্য" services={services} categoryIcon={Home} subcategories={subcategories} />;
};

export default PlotLandPage;
