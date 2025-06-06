
import { Building } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "সোনালী ব্যাংক", phone: "051-12345678", location: "মেইন রোড", subcategory: "ব্যাংক", description: "সকল ব্যাংকিং সেবা", hours: "সকাল ১০টা - বিকাল ৪টা" }
];

const subcategories = ["ব্যাংক", "বীমা"];

const BankInsurancePage = () => {
  return <CategoryTemplate categoryName="ব্যাংক-বীমা" description="ব্যাংক ও বীমা প্রতিষ্ঠান" services={services} categoryIcon={Building} subcategories={subcategories} />;
};

export default BankInsurancePage;
