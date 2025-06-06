
import { Users } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "শ্রমিক পয়েন্ট", phone: "01712345678", location: "মাজার রোড", subcategory: "দিন মজুর", description: "নির্মাণ শ্রমিক ও দিন মজুর", hours: "সকাল ৬টা - দুপুর ১২টা" }
];

const subcategories = ["দিন মজুর", "কারিগর"];

const DayLaborerPage = () => {
  return <CategoryTemplate categoryName="দিন মজুর" description="দিন মজুরদের তথ্য" services={services} categoryIcon={Users} subcategories={subcategories} />;
};

export default DayLaborerPage;
