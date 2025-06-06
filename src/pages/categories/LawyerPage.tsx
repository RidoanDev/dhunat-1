
import { Briefcase } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  {
    id: 1,
    name: "অ্যাডভোকেট করিম উল্লাহ",
    phone: "01712345678",
    location: "কোর্ট এলাকা",
    subcategory: "ফৌজদারি আইন",
    description: "১০ বছরের অভিজ্ঞতা",
    hours: "সকাল ৯টা - রাত ৬টা"
  }
];

const subcategories = ["ফৌজদারি আইন", "দেওয়ানি আইন"];

const LawyerPage = () => {
  return (
    <CategoryTemplate
      categoryName="আইনজীবী"
      description="ঢুনট এলাকার অভিজ্ঞ আইনজীবীদের তালিকা"
      services={services}
      categoryIcon={Briefcase}
      subcategories={subcategories}
    />
  );
};

export default LawyerPage;
