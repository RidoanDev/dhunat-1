
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Search, Filter, Clock, Star } from "lucide-react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";

interface Service {
  id: number;
  name: string;
  phone: string;
  location: string;
  subcategory: string;
  rating?: number;
  description?: string;
  hours?: string;
  image?: string;
}

interface CategoryTemplateProps {
  categoryName: string;
  services: Service[];
  categoryIcon: React.ComponentType<{ className?: string }>;
  description: string;
  subcategories: string[];
}

const CategoryTemplate = ({ 
  categoryName, 
  services, 
  categoryIcon: CategoryIcon, 
  description,
  subcategories 
}: CategoryTemplateProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("সকল");

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubcategory = selectedSubcategory === "সকল" || 
                              service.subcategory === selectedSubcategory;
    
    return matchesSearch && matchesSubcategory;
  });

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleMap = (location: string) => {
    const encodedLocation = encodeURIComponent(`${location}, Dhunat, Bogra`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-3 py-4 mb-16">
        {/* Category Header */}
        <div className="text-center mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <CategoryIcon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-800 mb-2">{categoryName}</h1>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-4 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="খোঁজ করুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 h-9 text-sm border-2 border-blue-200 focus:border-blue-500"
            />
          </div>

          {/* Subcategory Filter */}
          <div className="flex flex-wrap gap-1.5">
            <Button
              variant={selectedSubcategory === "সকল" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSubcategory("সকল")}
              className="text-xs h-7 px-2"
            >
              সকল
            </Button>
            {subcategories.map((subcategory) => (
              <Button
                key={subcategory}
                variant={selectedSubcategory === subcategory ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSubcategory(subcategory)}
                className="text-xs h-7 px-2"
              >
                {subcategory}
              </Button>
            ))}
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-3">
          {filteredServices.length === 0 ? (
            <Card className="text-center py-6">
              <CardContent>
                <CategoryIcon className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">কোন সেবা পাওয়া যায়নি</h3>
                <p className="text-sm text-gray-500">আপনার খোঁজার শর্ত পরিবর্তন করে আবার চেষ্টা করুন</p>
              </CardContent>
            </Card>
          ) : (
            filteredServices.map((service) => (
              <Card key={service.id} className="hover:shadow-md transition-shadow border hover:border-blue-300">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-base text-gray-800 mb-1">{service.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs mb-1">{service.subcategory}</Badge>
                      {service.description && (
                        <p className="text-xs text-gray-600 mb-1">{service.description}</p>
                      )}
                    </div>
                    {service.rating && (
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-xs font-medium">{service.rating}</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-3 h-3 mr-1.5 text-blue-600" />
                      <span className="text-xs">{service.location}</span>
                    </div>
                    
                    {service.hours && (
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-3 h-3 mr-1.5 text-green-600" />
                        <span className="text-xs">{service.hours}</span>
                      </div>
                    )}

                    <div className="flex space-x-2 pt-2">
                      <Button
                        onClick={() => handleCall(service.phone)}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white h-8"
                        size="sm"
                      >
                        <Phone className="w-3 h-3 mr-1" />
                        <span className="text-xs">কল করুন</span>
                      </Button>
                      
                      <Button
                        onClick={() => handleMap(service.location)}
                        variant="outline"
                        className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 h-8"
                        size="sm"
                      >
                        <MapPin className="w-3 h-3 mr-1" />
                        <span className="text-xs">ম্যাপ দেখুন</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Statistics */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-3 bg-white rounded-lg px-4 py-2 shadow-sm border">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">{services.length}</div>
              <div className="text-xs text-gray-600">মোট সেবা</div>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">{filteredServices.length}</div>
              <div className="text-xs text-gray-600">ফলাফল</div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default CategoryTemplate;
