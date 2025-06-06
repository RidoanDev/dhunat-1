
import { Heart } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  {
    id: 1,
    name: "ঢুনট উপজেলা স্বাস্থ্য কমপ্লেক্স",
    phone: "051-12345678",
    location: "উপজেলা সদর, ঢুনট",
    subcategory: "সরকারি হাসপাতাল",
    rating: 4.2,
    description: "২৪ ঘন্টা জরুরি সেবা, বিনামূল্যে চিকিৎসা",
    hours: "২৪ ঘন্টা"
  },
  {
    id: 2,
    name: "আল-আমিন হাসপাতাল",
    phone: "01712345678",
    location: "মেইন রোড, ঢুনট বাজার",
    subcategory: "বেসরকারি হাসপাতাল",
    rating: 4.5,
    description: "আধুনিক সুবিধা সহ বেসরকারি হাসপাতাল",
    hours: "সকাল ৮টা - রাত ১০টা"
  },
  {
    id: 3,
    name: "ঢুনট মেডিকেল সেন্টার",
    phone: "01823456789",
    location: "পুরাতন বাজার",
    subcategory: "ক্লিনিক",
    rating: 4.3,
    description: "সাশ্রয়ী মূল্যে মানসম্পন্ন চিকিৎসা সেবা",
    hours: "সকাল ৯টা - রাত ৯টা"
  },
  {
    id: 4,
    name: "মা ও শিশু হাসপাতাল",
    phone: "01934567890",
    location: "হাসপাতাল রোড",
    subcategory: "বিশেষায়িত হাসপাতাল",
    rating: 4.7,
    description: "মা ও শিশুদের জন্য বিশেষায়িত সেবা",
    hours: "২ৄ ঘন্টা"
  }
];

const subcategories = [
  "সরকারি হাসপাতাল",
  "বেসরকারি হাসপাতাল",
  "ক্লিনিক",
  "বিশেষায়িত হাসপাতাল"
];

const HospitalPage = () => {
  return (
    <CategoryTemplate
      categoryName="হাসপাতাল"
      description="ঢুনট এলাকার সকল হাসপাতাল ও চিকিৎসা কেন্দ্রের তালিকা। জরুরি চিকিৎসা সেবার জন্য নিকটতম হাসপাতাল খুঁজুন।"
      services={services}
      categoryIcon={Heart}
      subcategories={subcategories}
    />
  );
};

export default HospitalPage;
