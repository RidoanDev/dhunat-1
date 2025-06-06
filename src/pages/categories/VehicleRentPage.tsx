
import { Car } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  {
    id: 1,
    name: "আলমগীর রেন্ট এ কার",
    phone: "01712345678",
    location: "বাস স্ট্যান্ড এলাকা",
    subcategory: "গাড়ি ভাড়া",
    description: "মাইক্রোবাস, প্রাইভেট কার ভাড়া",
    hours: "২৪ ঘন্টা সেবা"
  },
  {
    id: 2,
    name: "রহিম ট্রান্সপোর্ট",
    phone: "01823456789",
    location: "ট্রাক স্ট্যান্ড",
    subcategory: "ট্রাক ভাড়া",
    description: "মালামাল পরিবহনের জন্য",
    hours: "সকাল ৬টা - রাত ১০টা"
  }
];

const subcategories = ["গাড়ি ভাড়া", "ট্রাক ভাড়া", "মোটরসাইকেল"];

const VehicleRentPage = () => {
  return (
    <CategoryTemplate
      categoryName="গাড়ি ভাড়া"
      description="ঢুনট এলাকায় গাড়ি ভাড়া ও পরিবহন সেবা"
      services={services}
      categoryIcon={Car}
      subcategories={subcategories}
    />
  );
};

export default VehicleRentPage;
