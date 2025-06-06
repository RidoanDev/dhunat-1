
import { Heart } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  {
    id: 1,
    name: "রক্তদাতাদের সংগঠন",
    phone: "01712345678",
    location: "ঢুনট সদর",
    subcategory: "রক্তদান সংগঠন",
    description: "স্বেচ্ছায় রক্তদান ও সংগ্রহ",
    hours: "২৪ ঘন্টা সেবা"
  },
  {
    id: 2,
    name: "উপজেলা ব্লাড ব্যাংক",
    phone: "051-12345678",
    location: "স্বাস্থ্য কমপ্লেক্স",
    subcategory: "ব্লাড ব্যাংক",
    description: "সকল গ্রুপের রক্ত সংরক্ষণ",
    hours: "২৪ ঘন্টা"
  }
];

const subcategories = ["রক্তদান সংগঠন", "ব্লাড ব্যাংক"];

const BloodPage = () => {
  return (
    <CategoryTemplate
      categoryName="রক্তদান"
      description="জরুরি রক্তের প্রয়োজনে যোগাযোগ করুন"
      services={services}
      categoryIcon={Heart}
      subcategories={subcategories}
    />
  );
};

export default BloodPage;
