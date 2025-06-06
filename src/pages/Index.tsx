
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, Car, Briefcase, ShoppingCart, 
  Baby, Wifi, Building, Heart, MapPin, Phone,
  Clock, Home, Users, GraduationCap, Wrench,
  Camera, Newspaper, Fuel, Shield, Menu
} from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";
import Header from "@/components/Header";

const categories = [
  // Medical & Emergency
  { name: "ডাক্তার", path: "/doctor", icon: Stethoscope, color: "text-red-600", bgColor: "bg-red-50", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&h=200" },
  { name: "হাসপাতাল", path: "/hospital", icon: Heart, color: "text-red-700", bgColor: "bg-red-50", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&h=200" },
  { name: "ডায়াগনস্টিক", path: "/diagnostic", icon: Camera, color: "text-pink-600", bgColor: "bg-pink-50", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=300&h=200" },
  { name: "রক্তদান", path: "/blood", icon: Heart, color: "text-red-800", bgColor: "bg-red-50", image: "https://images.unsplash.com/photo-1615461065624-c8b210b6b8fe?auto=format&fit=crop&w=300&h=200" },
  
  // Transportation & Security
  { name: "গাড়ি ভাড়া", path: "/vehicle-rent", icon: Car, color: "text-blue-600", bgColor: "bg-blue-50", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=200" },
  { name: "থানা", path: "/police-station", icon: Shield, color: "text-blue-700", bgColor: "bg-blue-50", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=300&h=200" },
  { name: "আইনজীবী", path: "/lawyer", icon: Briefcase, color: "text-indigo-600", bgColor: "bg-indigo-50", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&h=200" },
  
  // Jobs & Education
  { name: "চাকরি", path: "/jobs", icon: Briefcase, color: "text-green-600", bgColor: "bg-green-50", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=300&h=200" },
  { name: "শিক্ষক", path: "/teacher", icon: GraduationCap, color: "text-green-700", bgColor: "bg-green-50", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=200" },
  { name: "উদ্যোক্তা", path: "/entrepreneur", icon: Users, color: "text-emerald-600", bgColor: "bg-emerald-50", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300&h=200" },
  { name: "ট্রেইনিং সেন্টার", path: "/training-center", icon: GraduationCap, color: "text-teal-600", bgColor: "bg-teal-50", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=300&h=200" },
  
  // Daily Essentials
  { name: "আজকের বাজার", path: "/todays-market", icon: ShoppingCart, color: "text-orange-600", bgColor: "bg-orange-50", image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=300&h=200" },
  { name: "বাস সময়সূচি", path: "/bus-schedule", icon: Clock, color: "text-orange-700", bgColor: "bg-orange-50", image: "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?auto=format&fit=crop&w=300&h=200" },
  { name: "ট্রেন সময়সূচি", path: "/train-schedule", icon: Clock, color: "text-amber-600", bgColor: "bg-amber-50", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=300&h=200" },
  { name: "বাসা ভাড়া", path: "/house-rent", icon: Home, color: "text-yellow-600", bgColor: "bg-yellow-50", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=300&h=200" },
  { name: "হোটেল", path: "/hotel", icon: Building, color: "text-yellow-700", bgColor: "bg-yellow-50", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&h=200" },
  
  // Shopping & Real Estate
  { name: "স্টুডেন্ট", path: "/student", icon: GraduationCap, color: "text-purple-600", bgColor: "bg-purple-50", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=300&h=200" },
  { name: "দর্শনীয় স্থান", path: "/tourist-spots", icon: MapPin, color: "text-purple-700", bgColor: "bg-purple-50", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=300&h=200" },
  { name: "জমি/প্লট", path: "/plot-land", icon: Home, color: "text-violet-600", bgColor: "bg-violet-50", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=300&h=200" },
  { name: "মিস্ত্রি", path: "/mechanic", icon: Wrench, color: "text-slate-600", bgColor: "bg-slate-50", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=300&h=200" },
  
  // Family & Utility Services
  { name: "নার্সারি", path: "/nursery", icon: Baby, color: "text-pink-600", bgColor: "bg-pink-50", image: "https://images.unsplash.com/photo-1544867503-4b6445a1ad3f?auto=format&fit=crop&w=300&h=200" },
  { name: "ক্রয়-বিক্রয়", path: "/buy-sell", icon: ShoppingCart, color: "text-rose-600", bgColor: "bg-rose-50", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=300&h=200" },
  { name: "বিদ্যুৎ অফিস", path: "/electric-office", icon: Building, color: "text-cyan-600", bgColor: "bg-cyan-50", image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=300&h=200" },
  { name: "শিক্ষা প্রতিষ্ঠান", path: "/educational-institute", icon: GraduationCap, color: "text-sky-600", bgColor: "bg-sky-50", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=300&h=200" },
  
  // Online & Media
  { name: "কুরিয়ার সার্ভিস", path: "/courier-service", icon: Car, color: "text-lime-600", bgColor: "bg-lime-50", image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=300&h=200" },
  { name: "ভিডিও দেখুন", path: "/watch-video", icon: Camera, color: "text-green-600", bgColor: "bg-green-50", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=300&h=200" },
  { name: "বিউটি পার্লার", path: "/beauty-parlor", icon: Heart, color: "text-pink-700", bgColor: "bg-pink-50", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=300&h=200" },
  { name: "ওয়েবসাইট", path: "/website", icon: Wifi, color: "text-blue-600", bgColor: "bg-blue-50", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=200" },
  
  // Government & Finance
  { name: "পৌরসভা", path: "/municipality", icon: Building, color: "text-indigo-700", bgColor: "bg-indigo-50", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=300&h=200" },
  { name: "ব্যাংক-বীমা", path: "/bank-insurance", icon: Building, color: "text-blue-800", bgColor: "bg-blue-50", image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=300&h=200" },
  { name: "গ্যাস স্টেশন", path: "/gas-station", icon: Fuel, color: "text-orange-800", bgColor: "bg-orange-50", image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=300&h=200" },
  { name: "সংবাদপত্র", path: "/newspaper", icon: Newspaper, color: "text-gray-700", bgColor: "bg-gray-50", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=300&h=200" },
  
  // Community & Religion
  { name: "সাধারণ সাহায্য", path: "/general-help", icon: Heart, color: "text-emerald-700", bgColor: "bg-emerald-50", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=300&h=200" },
  { name: "দিন মজুর", path: "/day-laborer", icon: Users, color: "text-amber-700", bgColor: "bg-amber-50", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=300&h=200" },
  { name: "দোয়া-জিকির", path: "/dua-zikir", icon: Heart, color: "text-green-800", bgColor: "bg-green-50", image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=300&h=200" },
];

const bannerImages = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&h=300",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=300",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=300"
];

const emergencyNotices = [
  "ধুনট অ্যাপে আপনাকে স্বাগতম। আপনার প্রয়োজনীয় সকল সেবা একসাথ।"
];

const Index = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 4000);

    return () => {
      clearInterval(bannerInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Smaller Ad Banner Slider */}
      <div className="relative h-24 md:h-32 overflow-hidden">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ${
              index === currentBanner ? 'translate-x-0' : 
              index < currentBanner ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <img 
              src={image} 
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="text-white text-sm md:text-lg font-bold text-center">
                ঢুনট এলাকার সেবা খুঁজুন
              </h2>
            </div>
          </div>
        ))}
        
        {/* Banner Indicators */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === currentBanner ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Marquee Notice */}
      <div className="bg-primary text-white py-1.5 px-4 overflow-hidden">
        <div className="flex items-center">
          <span className="bg-white text-primary px-2 py-0.5 rounded text-xs font-semibold mr-3 flex-shrink-0">
            জরুরি নোটিশ
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              {emergencyNotices.map((notice, index) => (
                <span key={index} className="text-sm mr-8">
                  {notice}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories Grid - 4 columns with icons */}
      <div className="container mx-auto px-3 py-4">
        <h2 className="text-lg md:text-xl font-bold text-center mb-4 text-gray-800">
          সেবার ক্যাটাগরি সমূহ
        </h2>
        
        <div className="grid grid-cols-4 gap-2 md:gap-3">
          {categories.map((category, index) => (
            <Link key={index} to={category.path}>
              <Card className="group hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-sm">
                <CardContent className="p-2 text-center">
                  <div className={`relative w-full aspect-square mb-1.5 rounded-lg overflow-hidden ${category.bgColor}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <category.icon className={`w-6 h-6 md:w-8 md:h-8 ${category.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-primary transition-colors leading-tight">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Contact Section - Smaller */}
      <div className="bg-primary text-white py-3 mx-3 rounded-lg mb-16">
        <div className="text-center">
          <h3 className="text-base md:text-lg font-bold mb-2">জরুরি প্রয়োজনে যোগাযোগ</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-4">
            <div className="flex items-center">
              <Phone className="w-3 h-3 mr-1" />
              <span className="text-xs">জরুরি সেবা: ৯৯৯</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-3 h-3 mr-1" />
              <span className="text-xs">অ্যাডমিন: ০১৭xxxxxxxx</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Index;
