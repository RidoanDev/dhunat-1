
import { GraduationCap } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  {
    id: 1,
    name: "কারিগরি প্রশিক্ষণ কেন্দ্র",
    phone: "01712345678",
    location: "কারিগরি কলেজ",
    subcategory: "কারিগরি প্রশিক্ষণ",
    description: "বিনামূল্যে দক্ষতা উন্নয়ন প্রশিক্ষণ",
    hours: "সকাল ৯টা - বিকাল ৫টা"
  }
];

const subcategories = ["কারিগরি প্রশিক্ষণ", "কম্পিউটার প্রশিক্ষণ"];

const TrainingCenterPage = () => {
  return (
    <CategoryTemplate
      categoryName="ট্রেইনিং সেন্টার"
      description="দক্ষতা উন্নয়ন ও প্রশিক্ষণ কেন্দ্রসমূহ"
      services={services}
      categoryIcon={GraduationCap}
      subcategories={subcategories}
    />
  );
};

export default TrainingCenterPage;
