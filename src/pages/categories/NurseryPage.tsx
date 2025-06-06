
import { Baby } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "মা ও শিশু কেয়ার", phone: "01712345678", location: "হাসপাতাল এলাকা", subcategory: "শিশু পরিচর্যা", description: "নবজাতক ও শিশুর যত্ন", hours: "২৪ ঘন্টা" }
];

const subcategories = ["শিশু পরিচর্যা", "গর্ভকালীন সেবা"];

const NurseryPage = () => {
  return <CategoryTemplate categoryName="নার্সারি" description="নার্সারি ও বেবি কেয়ার সেবা" services={services} categoryIcon={Baby} subcategories={subcategories} />;
};

export default NurseryPage;
