
import { GraduationCap } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "ঢুনট সরকারি কলেজ", phone: "051-12345678", location: "কলেজ এলাকা", subcategory: "কলেজ", description: "উচ্চ মাধ্যমিক ও স্নাতক কোর্স", hours: "সকাল ৮টা - দুপুর ২টা" }
];

const subcategories = ["স্কুল", "কলেজ", "মাদ্রাসা"];

const EducationalInstitutePage = () => {
  return <CategoryTemplate categoryName="শিক্ষা প্রতিষ্ঠান" description="স্কুল, কলেজ ও অন্যান্য শিক্ষা প্রতিষ্ঠান" services={services} categoryIcon={GraduationCap} subcategories={subcategories} />;
};

export default EducationalInstitutePage;
