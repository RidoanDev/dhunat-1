
import { Stethoscope } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  {
    id: 1,
    name: "ডাঃ মোহাম্মদ রহমান",
    phone: "01712345678",
    location: "ঢুনট বাজার, মেইন রোড",
    subcategory: "সাধারণ চিকিৎসক",
    rating: 4.8,
    description: "MBBS, MD - ১৫ বছরের অভিজ্ঞতা",
    hours: "সকাল ৯টা - রাত ৯টা"
  },
  {
    id: 2,
    name: "ডাঃ ফাতেমা খাতুন",
    phone: "01823456789",
    location: "পুরাতন বাজার এলাকা",
    subcategory: "গাইনি বিশেষজ্ঞ",
    rating: 4.9,
    description: "MBBS, FCPS - মহিলা ও শিশু বিশেষজ্ঞ",
    hours: "সকাল ৮টা - দুপুর ২টা, বিকাল ৫টা - রাত ৮টা"
  },
  {
    id: 3,
    name: "ডাঃ আবুল কালাম",
    phone: "01934567890",
    location: "হাসপাতাল রোড",
    subcategory: "শিশু বিশেষজ্ঞ",
    rating: 4.7,
    description: "MBBS, DCH - শিশু রোগ বিশেষজ্ঞ",
    hours: "সকাল ১০টা - দুপুর ১টা, সন্ধ্যা ৬টা - রাত ৯টা"
  },
  {
    id: 4,
    name: "ডাঃ নাসির উদ্দিন",
    phone: "01745678901",
    location: "স্টেশন রোড",
    subcategory: "হৃদরোগ বিশেষজ্ঞ",
    rating: 4.6,
    description: "MBBS, MD (Cardiology)",
    hours: "সন্ধ্যা ৫টা - রাত ৮টা"
  },
  {
    id: 5,
    name: "ডাঃ সালমা বেগম",
    phone: "01856789012",
    location: "কলেজ গেট",
    subcategory: "চর্ম বিশেষজ্ঞ",
    rating: 4.5,
    description: "MBBS, DDV - চর্ম ও যৌন রোগ বিশেষজ্ঞ",
    hours: "বিকাল ৪টা - রাত ৭টা"
  }
];

const subcategories = [
  "সাধারণ চিকিৎসক",
  "গাইনি বিশেষজ্ঞ", 
  "শিশু বিশেষজ্ঞ",
  "হৃদরোগ বিশেষজ্ঞ",
  "চর্ম বিশেষজ্ঞ"
];

const DoctorPage = () => {
  return (
    <CategoryTemplate
      categoryName="ডাক্তার"
      description="ঢুনট এলাকার বিশেষজ্ঞ ডাক্তারদের তালিকা। আপনার প্রয়োজন অনুযায়ী বিশেষজ্ঞ ডাক্তার খুঁজুন এবং সরাসরি যোগাযোগ করুন।"
      services={services}
      categoryIcon={Stethoscope}
      subcategories={subcategories}
    />
  );
};

export default DoctorPage;
