
import { Clock } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  {
    id: 1,
    name: "বগুড়া-ঢাকা ইন্টারসিটি",
    phone: "16230",
    location: "বগুড়া রেলস্টেশন",
    subcategory: "ইন্টারসিটি",
    description: "ঢুনট থেকে বগুড়া ১৫ কিমি",
    hours: "সকাল ৭টা, দুপুর ১২টা, সন্ধ্যা ৬টা"
  }
];

const subcategories = ["ইন্টারসিটি", "মেইল ট্রেন"];

const TrainSchedulePage = () => {
  return (
    <CategoryTemplate
      categoryName="ট্রেন সময়সূচি"
      description="নিকটতম রেলস্টেশন থেকে ট্রেনের সময়সূচি"
      services={services}
      categoryIcon={Clock}
      subcategories={subcategories}
    />
  );
};

export default TrainSchedulePage;
