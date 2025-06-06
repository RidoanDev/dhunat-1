
import { ShoppingCart } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "পুরাতন জিনিস কিনি-বেচি", phone: "01712345678", location: "পুরাতন বাজার", subcategory: "পুরাতন জিনিস", description: "আসবাবপত্র ও ইলেকট্রনিক্স", hours: "সকাল ৯টা - সন্ধ্যা ৭টা" }
];

const subcategories = ["পুরাতন জিনিস", "নতুন পণ্য"];

const BuySellPage = () => {
  return <CategoryTemplate categoryName="ক্রয়-বিক্রয়" description="পণ্য ক্রয়-বিক্রয়ের মার্কেটপ্লেস" services={services} categoryIcon={ShoppingCart} subcategories={subcategories} />;
};

export default BuySellPage;
