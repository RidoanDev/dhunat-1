
import { Heart } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "সাধারণ সেবা কেন্দ্র", phone: "01712345678", location: "মেইন রোড", subcategory: "জরুরি সাহায্য", description: "যেকোনো ধরনের সাহায্য", hours: "২৪ ঘন্টা" }
];

const subcategories = ["জরুরি সাহায্য", "পরামর্শ"];

const GeneralHelpPage = () => {
  return <CategoryTemplate categoryName="সাধারণ সাহায্য" description="সাধারণ সাহায্য সংক্রান্ত সেবা" services={services} categoryIcon={Heart} subcategories={subcategories} />;
};

export default GeneralHelpPage;
