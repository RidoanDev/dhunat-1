
import { MapPin } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "ঢুনট নদী", phone: "01712345678", location: "নদীর তীর", subcategory: "প্রাকৃতিক", description: "সুন্দর প্রাকৃতিক দৃশ্য", hours: "সূর্যোদয় থেকে সূর্যাস্ত" }
];

const subcategories = ["প্রাকৃতিক", "ঐতিহাসিক"];

const TouristSpotsPage = () => {
  return <CategoryTemplate categoryName="দর্শনীয় স্থান" description="ঢুনট এলাকার দর্শনীয় স্থানসমূহ" services={services} categoryIcon={MapPin} subcategories={subcategories} />;
};

export default TouristSpotsPage;
