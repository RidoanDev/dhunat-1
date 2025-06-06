
import { ShoppingCart } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  {
    id: 1,
    name: "চাল (মিনিকেট)",
    phone: "01712345678",
    location: "ঢুনট বাজার",
    subcategory: "খাদ্যশস্য",
    description: "আজকের দাম: ৫৫ টাকা/কেজি",
    hours: "গতকালের তুলনায় ২ টাকা বৃদ্ধি"
  },
  {
    id: 2,
    name: "গরুর মাংস",
    phone: "01823456789",
    location: "পুরাতন বাজার",
    subcategory: "মাংস ও মাছ",
    description: "আজকের দাম: ৭৮০ টাকা/কেজি",
    hours: "দাম স্থিতিশীল"
  },
  {
    id: 3,
    name: "রুই মাছ",
    phone: "01934567890",
    location: "মাছের বাজার",
    subcategory: "মাংস ও মাছ",
    description: "আজকের দাম: ৪৫০ টাকা/কেজি",
    hours: "তাজা মাছ পাওয়া যাচ্ছে"
  },
  {
    id: 4,
    name: "পেঁয়াজ",
    phone: "01745678901",
    location: "সব্জির বাজার",
    subcategory: "সবজি",
    description: "আজকের দাম: ৮৫ টাকা/কেজি",
    hours: "স্থানীয় পেঁয়াজ পাওয়া যাচ্ছে"
  },
  {
    id: 5,
    name: "আলু",
    phone: "01856789012",
    location: "সব্জির বাজার",
    subcategory: "সবজি",
    description: "আজকের দাম: ৩২ টাকা/কেজি",
    hours: "মানসম্পন্ন আলু পাওয়া যাচ্ছে"
  },
  {
    id: 6,
    name: "ডিম",
    phone: "01967890123",
    location: "পোল্ট্রি শপ",
    subcategory: "দুগ্ধজাত",
    description: "আজকের দাম: ১৪৫ টাকা/ডজন",
    hours: "দেশি ও ফার্মের ডিম পাওয়া যাচ্ছে"
  }
];

const subcategories = [
  "খাদ্যশস্য",
  "মাংস ও মাছ",
  "সবজি",
  "দুগ্ধজাত",
  "তেল ও মসলা"
];

const TodaysMarketPage = () => {
  return (
    <CategoryTemplate
      categoryName="আজকের বাজার"
      description="ঢুনট বাজারের দৈনিক পণ্যের দাম ও বাজার তথ্য। কেনাকাটার আগে আজকের দাম জেনে নিন।"
      services={services}
      categoryIcon={ShoppingCart}
      subcategories={subcategories}
    />
  );
};

export default TodaysMarketPage;
