
import { Wifi } from "lucide-react";
import CategoryTemplate from "@/components/CategoryTemplate";

const services = [
  { id: 1, name: "ঢুনট অনলাইন", phone: "01712345678", location: "অনলাইন", subcategory: "তথ্য সাইট", description: "স্থানীয় খবর ও তথ্য", hours: "২৪ ঘন্টা" }
];

const subcategories = ["তথ্য সাইট", "সেবা সাইট"];

const WebsitePage = () => {
  return <CategoryTemplate categoryName="ওয়েবসাইট" description="ওয়েবসাইট লিস্টিং" services={services} categoryIcon={Wifi} subcategories={subcategories} />;
};

export default WebsitePage;
