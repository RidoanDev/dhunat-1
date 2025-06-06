
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MessageSquare, Phone, Mail, User, Send } from "lucide-react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { useToast } from "@/hooks/use-toast";

const MyAppPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "ত্রুটি",
        description: "দয়া করে সব ফিল্ড পূরণ করুন",
        variant: "destructive"
      });
      return;
    }

    // Create mailto link
    const subject = encodeURIComponent("Dhunat.App থেকে যোগাযোগ");
    const body = encodeURIComponent(`
নাম: ${formData.name}
ফোন: ${formData.phone}
বার্তা: ${formData.message}

এই বার্তাটি Dhunat.App থেকে পাঠানো হয়েছে।
    `);
    
    const mailtoLink = `mailto:admin@dhunat.app?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    toast({
      title: "সফল!",
      description: "আপনার ইমেইল ক্লায়েন্ট খোলা হয়েছে। ইমেইল পাঠান বাটনে ক্লিক করুন।"
    });

    // Reset form
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6 mb-20">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">আমাদের সাথে যোগাযোগ</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            আপনার মতামত, পরামর্শ বা যেকোনো সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন। 
            আমরা আপনার বার্তার উত্তর দ্রুত দেওয়ার চেষ্টা করবো।
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-purple-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
              <CardTitle className="text-center text-xl">যোগাযোগ ফর্ম</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center space-x-2 text-gray-700">
                    <User className="w-4 h-4" />
                    <span>আপনার নাম *</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-2 border-purple-200 focus:border-purple-500 transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center space-x-2 text-gray-700">
                    <Phone className="w-4 h-4" />
                    <span>ফোন নম্বর *</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="উদাহরণ: ০১৭xxxxxxxx"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-2 border-purple-200 focus:border-purple-500 transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center space-x-2 text-gray-700">
                    <MessageSquare className="w-4 h-4" />
                    <span>আপনার বার্তা *</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="আপনার মতামত, পরামর্শ বা প্রশ্ন লিখুন..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-2 border-purple-200 focus:border-purple-500 transition-colors min-h-[120px] resize-y"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  বার্তা পাঠান
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  <strong>নোট:</strong> এই ফর্ম পূরণ করলে আপনার ইমেইল ক্লায়েন্ট খুলে যাবে। 
                  তারপর ইমেইল পাঠান বাটনে ক্লিক করুন।
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Options */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            অন্যান্য যোগাযোগের মাধ্যম
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-blue-200">
              <CardContent className="p-6">
                <Phone className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold text-gray-800 mb-2">ফোন করুন</h3>
                <p className="text-blue-600 font-semibold text-lg">০১৭xxxxxxxx</p>
                <p className="text-sm text-gray-600 mt-2">সকাল ৯টা - রাত ৯টা</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-green-200">
              <CardContent className="p-6">
                <Mail className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="font-semibold text-gray-800 mb-2">ইমেইল করুন</h3>
                <p className="text-green-600 font-semibold">admin@dhunat.app</p>
                <p className="text-sm text-gray-600 mt-2">২৪ ঘন্টার মধ্যে উত্তর</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-purple-200">
              <CardContent className="p-6">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold text-gray-800 mb-2">সোশ্যাল মিডিয়া</h3>
                <p className="text-purple-600 font-semibold">@DhunatApp</p>
                <p className="text-sm text-gray-600 mt-2">ফেসবুক ও মেসেঞ্জার</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-12">
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200">
            <CardHeader>
              <CardTitle className="text-center text-indigo-800">সাধারণ প্রশ্নাবলী</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">কতক্ষণের মধ্যে উত্তর পাবো?</h4>
                <p className="text-gray-600 text-sm">আমরা সাধারণত ২৪ ঘন্টার মধ্যে উত্তর দেওয়ার চেষ্টা করি।</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">নতুন সেবা যোগ করা যাবে?</h4>
                <p className="text-gray-600 text-sm">হ্যাঁ! আমাদের সাথে যোগাযোগ করুন এবং আপনার সেবার তথ্য দিন।</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">অ্যাপটি কি ফ্রি?</h4>
                <p className="text-gray-600 text-sm">হ্যাঁ, Dhunat.App সম্পূর্ণ বিনামূল্যে ব্যবহার করা যায়।</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default MyAppPage;
