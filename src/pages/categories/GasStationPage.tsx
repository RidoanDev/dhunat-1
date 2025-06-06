
import { Fuel } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "জামিল ফিলিং স্টেশন", phone: "01712345678", location: "হাইওয়ে", subcategory: "পেট্রোল পাম্প", description: "পেট্রোল, ডিজেল ও অক্টেন", hours: "২৪ ঘন্টা" }
];

const subcategories = ["পেট্রোল পাম্প", "গ্যাস"];

const GasStationPage = () => {
  return <CategoryTemplate categoryName="গ্যাস স্টেশন" description="গ্যাস ও ফুয়েল স্টেশন" services={services} categoryIcon={Fuel} subcategories={subcategories} />;
};

export default GasStationPage;
