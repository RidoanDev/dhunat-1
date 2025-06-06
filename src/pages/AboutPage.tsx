
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Users, Heart, Target } from "lucide-react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";

const teamMembers = [
  {
    name: "মোহাম্মদ রহিম",
    role: "প্রকল্প পরিচালক",
    phone: "০১৭xxxxxxxx",
    email: "rahim@dhunat.app"
  },
  {
    name: "ফাতেমা খাতুন",
    role: "কমিউনিটি ম্যানেজার",
    phone: "০১৮xxxxxxxx",
    email: "fatema@dhunat.app"
  },
  {
    name: "আবুল কাশেম",
    role: "টেকনিক্যাল সাপোর্ট",
    phone: "০১৯xxxxxxxx",
    email: "abul@dhunat.app"
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6 mb-20">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Dhunat.App সম্পর্কে</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ঢুনট এলাকার সবচেয়ে বিশ্বস্ত এবং সম্পূর্ণ স্থানীয় সেবার ডিরেক্টরি
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-green-700">
                <Target className="w-6 h-6" />
                <span>আমাদের লক্ষ্য</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                ঢুনট এলাকার মানুষের জন্য সহজ, দ্রুত এবং নির্ভরযোগ্য স্থানীয় সেবা খুঁজে পাওয়ার 
                একটি সুবিধাজনক প্ল্যাটফর্ম তৈরি করা। আমরা চাই যেন প্রতিটি মানুষ তাদের প্রয়োজনীয় 
                সেবা সহজেই খুঁজে পেতে পারেন।
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-blue-700">
                <Heart className="w-6 h-6" />
                <span>আমাদের দৃষ্টিভঙ্গি</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                একটি সংযুক্ত এবং সমৃদ্ধ ঢুনট কমিউনিটি গড়ে তোলা যেখানে প্রযুক্তির মাধ্যমে 
                সবাই সবার সাথে সংযুক্ত থাকবেন এবং স্থানীয় ব্যবসা ও সেবাদাতারা উন্নতি লাভ করবেন।
              </p>
            </CardContent>
          </Card>
        </div>

        {/* App Features */}
        <Card className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-indigo-800 mb-6">
              Dhunat.App এর বিশেষত্ব
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">৩৫+ সেবা ক্যাটাগরি</h3>
                <p className="text-sm text-gray-600">চিকিৎসা থেকে শুরু করে দৈনন্দিন সব ধরনের সেবা</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">সরাসরি যোগাযোগ</h3>
                <p className="text-sm text-gray-600">ফোন, ঠিকানা এবং ম্যাপের মাধ্যমে সহজ যোগাযোগ</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">নিয়মিত আপডেট</h3>
                <p className="text-sm text-gray-600">সর্বশেষ তথ্য এবং জরুরি নোটিশ</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-center space-x-3 text-2xl text-gray-800">
              <Users className="w-8 h-8 text-green-600" />
              <span>আমাদের টিম</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-green-600 mb-3">{member.role}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{member.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="text-center text-2xl">যোগাযোগের তথ্য</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">ঢুনট, বগুড়া, বাংলাদেশ</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6" />
              <span className="text-lg">+৮৮০ ১৭xxxxxxxx</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6" />
              <span className="text-lg">info@dhunat.app</span>
            </div>
            <div className="mt-6 pt-6 border-t border-white border-opacity-30">
              <p className="text-center text-green-100">
                আমাদের সাথে যোগ দিন এবং ঢুনট এলাকাকে আরো সংযুক্ত করুন!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default AboutPage;
