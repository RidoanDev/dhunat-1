
import { Clock } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  {
    id: 1,
    name: "ঢুনট-ঢাকা",
    phone: "01712345678",
    location: "বাস স্ট্যান্ড",
    subcategory: "আন্তঃজেলা",
    description: "প্রতিদিন ৮টি বাস, ভাড়া ৩৫০ টাকা",
    hours: "সকাল ৬টা - রাত ১১টা"
  },
  {
    id: 2,
    name: "ঢুনট-বগুড়া",
    phone: "01823456789",
    location: "স্থানীয় বাস স্ট্যান্ড",
    subcategory: "স্থানীয়",
    description: "প্রতি ঘন্টায় বাস, ভাড়া ৫০ টাকা",
    hours: "সকাল ৫টা - রাত ১০টা"
  }
];

const subcategories = ["আন্তঃজেলা", "স্থানীয়"];

const BusSchedulePage = () => {
  return (
    <CategoryTemplate
      categoryName="বাস সময়সূচি"
      description="ঢুনট থেকে বিভিন্ন গন্তব্যের বাসের সময়সূচি"
      services={services}
      categoryIcon={Clock}
      subcategories={subcategories}
    />
  );
};

export default BusSchedulePage;
