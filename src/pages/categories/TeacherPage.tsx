
import { GraduationCap } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  {
    id: 1,
    name: "প্রফেসর আলম স্যার",
    phone: "01712345678",
    location: "কলেজ এলাকা",
    subcategory: "গণিত",
    description: "এইচএসসি ও ভর্তি পরীক্ষার জন্য",
    hours: "বিকাল ৪টা - রাত ৮টা"
  }
];

const subcategories = ["গণিত", "ইংরেজি", "বিজ্ঞান"];

const TeacherPage = () => {
  return (
    <CategoryTemplate
      categoryName="শিক্ষক"
      description="ঢুনট এলাকার অভিজ্ঞ শিক্ষক ও টিউটর"
      services={services}
      categoryIcon={GraduationCap}
      subcategories={subcategories}
    />
  );
};

export default TeacherPage;
