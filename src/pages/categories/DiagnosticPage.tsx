
import { Camera } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  {
    id: 1,
    name: "ঢুনট ডায়াগনস্টিক সেন্টার",
    phone: "01712345678",
    location: "হাসপাতাল রোড",
    subcategory: "এক্স-রে ও আল্ট্রাসাউন্ড",
    description: "সকল ধরনের ডায়াগনস্টিক সেবা",
    hours: "সকাল ৮টা - রাত ৮টা"
  },
  {
    id: 2,
    name: "পপুলার ল্যাব",
    phone: "01823456789",
    location: "মেইন রোড",
    subcategory: "রক্ত পরীক্ষা",
    description: "দ্রুত ও নির্ভুল রিপোর্ট",
    hours: "সকাল ৭টা - রাত ৯টা"
  }
];

const subcategories = ["এক্স-রে ও আল্ট্রাসাউন্ড", "রক্ত পরীক্ষা", "ইসিজি"];

const DiagnosticPage = () => {
  return (
    <CategoryTemplate
      categoryName="ডায়াগনস্টিক"
      description="ঢুনট এলাকার ডায়াগনস্টিক সেন্টার ও ল্যাবরেটরি"
      services={services}
      categoryIcon={Camera}
      subcategories={subcategories}
    />
  );
};

export default DiagnosticPage;
