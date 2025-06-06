
import { GraduationCap } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "স্টুডেন্ট বুক স্টোর", phone: "01712345678", location: "কলেজ গেট", subcategory: "বই-খাতা", description: "সকল শ্রেণীর বই ও স্টেশনারি", hours: "সকাল ৮টা - রাত ৮টা" }
];

const subcategories = ["বই-খাতা", "স্টেশনারি"];

const StudentPage = () => {
  return <CategoryTemplate categoryName="স্টুডেন্ট" description="ছাত্র-ছাত্রীদের জন্য প্রয়োজনীয় সেবা" services={services} categoryIcon={GraduationCap} subcategories={subcategories} />;
};

export default StudentPage;
