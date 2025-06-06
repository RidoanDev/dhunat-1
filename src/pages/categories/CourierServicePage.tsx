
import { Car } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "এসএ পরিবহন", phone: "01712345678", location: "বাস স্ট্যান্ড", subcategory: "কুরিয়ার", description: "সারাদেশে পার্সেল পৌঁছে দেওয়া", hours: "সকাল ৮টা - রাত ৮টা" }
];

const subcategories = ["কুরিয়ার", "পার্সেল"];

const CourierServicePage = () => {
  return <CategoryTemplate categoryName="কুরিয়ার সার্ভিস" description="কুরিয়ার ও পার্সেল সার্ভিস" services={services} categoryIcon={Car} subcategories={subcategories} />;
};

export default CourierServicePage;
