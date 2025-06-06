
import { Camera } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "ঢুনট ইউটিউব চ্যানেল", phone: "01712345678", location: "অনলাইন", subcategory: "স্থানীয় ভিডিও", description: "ঢুনট এলাকার খবর ও অনুষ্ঠান", hours: "নিয়মিত আপডেট" }
];

const subcategories = ["স্থানীয় ভিডিও", "বিনোদন"];

const WatchVideoPage = () => {
  return <CategoryTemplate categoryName="ভিডিও দেখুন" description="ভিডিও কনটেন্ট প্ল্যাটফর্ম" services={services} categoryIcon={Camera} subcategories={subcategories} />;
};

export default WatchVideoPage;
