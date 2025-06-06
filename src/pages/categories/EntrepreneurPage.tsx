
import { Users } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  {
    id: 1,
    name: "তরুণ উদ্যোক্তা সংগঠন",
    phone: "01712345678",
    location: "যুব উন্নয়ন অফিস",
    subcategory: "স্টার্টআপ সাপোর্ট",
    description: "নতুন ব্যবসায়ীদের সহায়তা",
    hours: "সকাল ৯টা - বিকাল ৫টা"
  }
];

const subcategories = ["স্টার্টআপ সাপোর্ট", "ব্যবসায়িক পরামর্শ"];

const EntrepreneurPage = () => {
  return (
    <CategoryTemplate
      categoryName="উদ্যোক্তা"
      description="স্থানীয় উদ্যোক্তা ও ব্যবসায়িক সহায়তা"
      services={services}
      categoryIcon={Users}
      subcategories={subcategories}
    />
  );
};

export default EntrepreneurPage;
