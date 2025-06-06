
import { Link, useLocation } from "react-router-dom";
import { Home, MessageSquare, Bell, Info } from "lucide-react";

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "হোম", path: "/", icon: Home },
    { name: "যোগাযোগ", path: "/my-app", icon: MessageSquare },
    { name: "নোটিশ", path: "/notifications", icon: Bell },
    { name: "সম্পর্কে", path: "/about", icon: Info },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex items-center justify-around py-1.5">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex flex-col items-center space-y-0.5 py-1.5 px-2 rounded transition-all duration-200 ${
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-gray-500 hover:text-primary hover:bg-primary/5'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
