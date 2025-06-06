
import { Shield } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  {
    id: 1,
    name: "ঢুনট থানা",
    phone: "051-12345678",
    location: "থানা রোড, ঢুনট",
    subcategory: "থানা",
    description: "সকল ধরনের আইনি সহায়তা",
    hours: "২৪ ঘন্টা"
  },
  {
    id: 2,
    name: "জাতীয় জরুরি সেবা",
    phone: "999",
    location: "সারাদেশে",
    subcategory: "জরুরি সেবা",
    description: "যেকোনো জরুরি পরিস্থিতিতে",
    hours: "২৪ ঘন্টা"
  }
];

const subcategories = ["থানা", "জরুরি সেবা"];

const PoliceStationPage = () => {
  return (
    <CategoryTemplate
      categoryName="থানা"
      description="ঢুনট থানা ও জরুরি সেবার তথ্য"
      services={services}
      categoryIcon={Shield}
      subcategories={subcategories}
    />
  );
};

export default PoliceStationPage;
