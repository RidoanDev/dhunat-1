
import { Briefcase } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  {
    id: 1,
    name: "বাংলাদেশ ব্যাংক - ঢুনট শাখা",
    phone: "051-12345678",
    location: "ব্যাংক রোড, ঢুনট",
    subcategory: "ব্যাংক চাকরি",
    description: "ক্যাশিয়ার ও অফিসার পদে নিয়োগ বিজ্ঞপ্তি",
    hours: "আবেদনের শেষ তারিখ: ১৫ জুন ২০২৪"
  },
  {
    id: 2,
    name: "ঢুনট টেক্সটাইল মিলস",
    phone: "01712345678",
    location: "ইন্ডাস্ট্রিয়াল এলাকা",
    subcategory: "কারখানা চাকরি",
    description: "অপারেটর, মেকানিক ও সুপারভাইজার পদে নিয়োগ",
    hours: "অভিজ্ঞতা: ১-৩ বছর"
  },
  {
    id: 3,
    name: "শিক্ষা মন্ত্রণালয়",
    phone: "051-23456789",
    location: "সরকারি কলেজ",
    subcategory: "শিক্ষকতা",
    description: "প্রভাষক পদে নিয়োগ বিজ্ঞপ্তি",
    hours: "যোগ্যতা: স্নাতকোত্তর ডিগ্রি"
  },
  {
    id: 4,
    name: "আইটি সল্যুশন কোম্পানি",
    phone: "01823456789",
    location: "টাউন হল এলাকা",
    subcategory: "তথ্যপ্রযুক্তি",
    description: "ওয়েব ডেভেলপার ও গ্রাফিক্স ডিজাইনার",
    hours: "ফুল টাইম ও পার্ট টাইম"
  },
  {
    id: 5,
    name: "স্থানীয় এনজিও",
    phone: "01934567890",
    location: "এনজিও অফিস",
    subcategory: "উন্নয়ন কাজ",
    description: "ফিল্ড ওয়ার্কার ও প্রোগ্রাম অফিসার",
    hours: "স্থানীয় যুবকদের অগ্রাধিকার"
  }
];

const subcategories = [
  "ব্যাংক চাকরি",
  "কারখানা চাকরি",
  "শিক্ষকতা",
  "তথ্যপ্রযুক্তি",
  "উন্নয়ন কাজ"
];

const JobsPage = () => {
  return (
    <CategoryTemplate
      categoryName="চাকরি"
      description="ঢুনট এলাকার সর্বশেষ চাকরির বিজ্ঞপ্তি ও ক্যারিয়ার সুযোগ। আপনার যোগ্যতা অনুযায়ী চাকরি খুঁজুন এবং আবেদন করুন।"
      services={services}
      categoryIcon={Briefcase}
      subcategories={subcategories}
    />
  );
};

export default JobsPage;
