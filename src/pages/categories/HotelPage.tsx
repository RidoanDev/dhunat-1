
import { Building } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  {
    id: 1,
    name: "হোটেল শান্তি",
    phone: "01712345678",
    location: "মেইন রোড",
    subcategory: "হোটেল",
    description: "এসি ও নন-এসি রুম",
    hours: "২৪ ঘন্টা সেবা"
  }
];

const subcategories = ["হোটেল", "গেস্ট হাউস"];

const HotelPage = () => {
  return (
    <CategoryTemplate
      categoryName="হোটেল"
      description="ঢুনট এলাকার হোটেল ও থাকার ব্যবস্থা"
      services={services}
      categoryIcon={Building}
      subcategories={subcategories}
    />
  );
};

export default HotelPage;
