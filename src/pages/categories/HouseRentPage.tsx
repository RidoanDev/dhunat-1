
import { Home } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  {
    id: 1,
    name: "২ রুমের ফ্ল্যাট",
    phone: "01712345678",
    location: "মেইন রোড",
    subcategory: "ফ্ল্যাট",
    description: "মাসিক ভাড়া ১২,০০০ টাকা",
    hours: "পরিবার ভাড়া দেওয়া হবে"
  }
];

const subcategories = ["ফ্ল্যাট", "বাড়ি", "রুম"];

const HouseRentPage = () => {
  return (
    <CategoryTemplate
      categoryName="বাসা ভাড়া"
      description="ঢুনট এলাকায় ভাড়ার বাড়ি ও ফ্ল্যাট"
      services={services}
      categoryIcon={Home}
      subcategories={subcategories}
    />
  );
};

export default HouseRentPage;
