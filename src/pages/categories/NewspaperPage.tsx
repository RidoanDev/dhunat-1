
import { Newspaper } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "দৈনিক ঢুনট", phone: "01712345678", location: "প্রেস ক্লাব", subcategory: "স্থানীয় পত্রিকা", description: "স্থানীয় খবর ও বিজ্ঞাপন", hours: "প্রতিদিন সকালে প্রকাশিত" }
];

const subcategories = ["স্থানীয় পত্রিকা", "জাতীয় পত্রিকা"];

const NewspaperPage = () => {
  return <CategoryTemplate categoryName="সংবাদপত্র" description="সংবাদপত্র ও নিউজ সোর্স" services={services} categoryIcon={Newspaper} subcategories={subcategories} />;
};

export default NewspaperPage;
