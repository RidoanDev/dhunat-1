
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Calendar, AlertTriangle, Info } from "lucide-react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";

const notifications = [
  {
    id: 1,
    title: "বিদ্যুৎ বিভ্রাটের নোটিশ",
    description: "আগামীকাল সকাল ১০টা থেকে দুপুর ২টা পর্যন্ত ঢুনট এলাকায় বিদ্যুৎ বিভ্রাট থাকবে। অসুবিধার জন্য দুঃখিত।",
    date: "২০২৪-০৬-০৫",
    type: "emergency",
    icon: AlertTriangle
  },
  {
    id: 2,
    title: "পৌরসভা অফিস বন্ধ",
    description: "আগামী ৭ জুন পৌরসভা অফিস সরকারি ছুটির কারণে বন্ধ থাকবে। জরুরি কাজের জন্য হটলাইনে যোগাযোগ করুন।",
    date: "২০২৪-০৬-০৪",
    type: "info",
    icon: Info
  },
  {
    id: 3,
    title: "ডেঙ্গু প্রতিরোধ কার্যক্রম",
    description: "ঢুনট এলাকায় ডেঙ্গু প্রতিরোধে মশার ওষুধ ছিটানো হবে। বাসিন্দাদের সহযোগিতা কামনা করা হচ্ছে।",
    date: "২০২৪-০৬-০৩",
    type: "health",
    icon: Bell
  },
  {
    id: 4,
    title: "নতুন বাস রুট চালু",
    description: "ঢুনট থেকে ঢাকা নতুন বাস রুট চালু হয়েছে। প্রতিদিন সকাল ৬টা থেকে রাত ১০টা পর্যন্ত সেবা পাওয়া যাবে।",
    date: "২০২৪-০৬-০২",
    type: "transport",
    icon: Info
  },
  {
    id: 5,
    title: "মুক্তিযোদ্ধা ভাতা বিতরণ",
    description: "আগামী সপ্তাহে মুক্তিযোদ্ধা ভাতা বিতরণ করা হবে। সংশ্লিষ্টরা প্রয়োজনীয় কাগজপত্র নিয়ে উপস্থিত হন।",
    date: "২০২৪-০৬-০১",
    type: "government",
    icon: Info
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'emergency':
      return 'border-l-red-500 bg-red-50';
    case 'health':
      return 'border-l-yellow-500 bg-yellow-50';
    case 'transport':
      return 'border-l-blue-500 bg-blue-50';
    case 'government':
      return 'border-l-green-500 bg-green-50';
    default:
      return 'border-l-gray-500 bg-gray-50';
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'emergency':
      return 'text-red-600';
    case 'health':
      return 'text-yellow-600';
    case 'transport':
      return 'text-blue-600';
    case 'government':
      return 'text-green-600';
    default:
      return 'text-gray-600';
  }
};

const NotificationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-3 py-4 mb-16">
        <div className="text-center mb-6">
          <Bell className="w-10 h-10 mx-auto text-blue-600 mb-3" />
          <h1 className="text-xl font-bold text-gray-800 mb-2">সর্বশেষ নোটিশ</h1>
          <p className="text-sm text-gray-600">ঢুনট এলাকার গুরুত্বপূর্ণ নোটিশ ও আপডেট</p>
        </div>

        <div className="space-y-3">
          {notifications.map((notification) => (
            <Card key={notification.id} className={`border-l-4 ${getTypeColor(notification.type)} hover:shadow-md transition-shadow`}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <notification.icon className={`w-5 h-5 ${getTypeIcon(notification.type)}`} />
                    <CardTitle className="text-base text-gray-800">{notification.title}</CardTitle>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>{notification.date}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-700 leading-relaxed">{notification.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-6 bg-gradient-to-r from-red-600 to-orange-600 text-white p-4 rounded-lg text-center">
          <AlertTriangle className="w-6 h-6 mx-auto mb-2" />
          <h3 className="text-base font-bold mb-2">জরুরি যোগাযোগ</h3>
          <p className="mb-2 text-sm">যেকোনো জরুরি পরিস্থিতিতে নিচের নম্বরে কল করুন:</p>
          <div className="space-y-1 text-sm font-semibold">
            <p>জাতীয় জরুরি সেবা: ৯৯৯</p>
            <p>স্থানীয় প্রশাসন: ০১৭xxxxxxxx</p>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default NotificationsPage;
