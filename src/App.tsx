
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import NotificationsPage from "./pages/NotificationsPage";
import AboutPage from "./pages/AboutPage";
import MyAppPage from "./pages/MyAppPage";

// Medical & Emergency
import DoctorPage from "./pages/categories/DoctorPage";
import HospitalPage from "./pages/categories/HospitalPage";
import DiagnosticPage from "./pages/categories/DiagnosticPage";
import BloodPage from "./pages/categories/BloodPage";

// Transportation & Security
import VehicleRentPage from "./pages/categories/VehicleRentPage";
import PoliceStationPage from "./pages/categories/PoliceStationPage";
import LawyerPage from "./pages/categories/LawyerPage";

// Jobs & Education
import JobsPage from "./pages/categories/JobsPage";
import TeacherPage from "./pages/categories/TeacherPage";
import EntrepreneurPage from "./pages/categories/EntrepreneurPage";
import TrainingCenterPage from "./pages/categories/TrainingCenterPage";

// Daily Essentials
import TodaysMarketPage from "./pages/categories/TodaysMarketPage";
import BusSchedulePage from "./pages/categories/BusSchedulePage";
import TrainSchedulePage from "./pages/categories/TrainSchedulePage";
import HouseRentPage from "./pages/categories/HouseRentPage";
import HotelPage from "./pages/categories/HotelPage";

// Shopping & Real Estate
import StudentPage from "./pages/categories/StudentPage";
import TouristSpotsPage from "./pages/categories/TouristSpotsPage";
import PlotLandPage from "./pages/categories/PlotLandPage";
import MechanicPage from "./pages/categories/MechanicPage";

// Family & Utility Services
import NurseryPage from "./pages/categories/NurseryPage";
import BuySellPage from "./pages/categories/BuySellPage";
import ElectricOfficePage from "./pages/categories/ElectricOfficePage";
import EducationalInstitutePage from "./pages/categories/EducationalInstitutePage";

// Online & Media
import CourierServicePage from "./pages/categories/CourierServicePage";
import WatchVideoPage from "./pages/categories/WatchVideoPage";
import BeautyParlorPage from "./pages/categories/BeautyParlorPage";
import WebsitePage from "./pages/categories/WebsitePage";

// Government & Finance
import MunicipalityPage from "./pages/categories/MunicipalityPage";
import BankInsurancePage from "./pages/categories/BankInsurancePage";
import GasStationPage from "./pages/categories/GasStationPage";
import NewspaperPage from "./pages/categories/NewspaperPage";

// Community & Religion
import GeneralHelpPage from "./pages/categories/GeneralHelpPage";
import DayLaborerPage from "./pages/categories/DayLaborerPage";
import DuaZikirPage from "./pages/categories/DuaZikirPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/my-app" element={<MyAppPage />} />
          
          {/* Medical & Emergency */}
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/hospital" element={<HospitalPage />} />
          <Route path="/diagnostic" element={<DiagnosticPage />} />
          <Route path="/blood" element={<BloodPage />} />
          
          {/* Transportation & Security */}
          <Route path="/vehicle-rent" element={<VehicleRentPage />} />
          <Route path="/police-station" element={<PoliceStationPage />} />
          <Route path="/lawyer" element={<LawyerPage />} />
          
          {/* Jobs & Education */}
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/entrepreneur" element={<EntrepreneurPage />} />
          <Route path="/training-center" element={<TrainingCenterPage />} />
          
          {/* Daily Essentials */}
          <Route path="/todays-market" element={<TodaysMarketPage />} />
          <Route path="/bus-schedule" element={<BusSchedulePage />} />
          <Route path="/train-schedule" element={<TrainSchedulePage />} />
          <Route path="/house-rent" element={<HouseRentPage />} />
          <Route path="/hotel" element={<HotelPage />} />
          
          {/* Shopping & Real Estate */}
          <Route path="/student" element={<StudentPage />} />
          <Route path="/tourist-spots" element={<TouristSpotsPage />} />
          <Route path="/plot-land" element={<PlotLandPage />} />
          <Route path="/mechanic" element={<MechanicPage />} />
          
          {/* Family & Utility Services */}
          <Route path="/nursery" element={<NurseryPage />} />
          <Route path="/buy-sell" element={<BuySellPage />} />
          <Route path="/electric-office" element={<ElectricOfficePage />} />
          <Route path="/educational-institute" element={<EducationalInstitutePage />} />
          
          {/* Online & Media */}
          <Route path="/courier-service" element={<CourierServicePage />} />
          <Route path="/watch-video" element={<WatchVideoPage />} />
          <Route path="/beauty-parlor" element={<BeautyParlorPage />} />
          <Route path="/website" element={<WebsitePage />} />
          
          {/* Government & Finance */}
          <Route path="/municipality" element={<MunicipalityPage />} />
          <Route path="/bank-insurance" element={<BankInsurancePage />} />
          <Route path="/gas-station" element={<GasStationPage />} />
          <Route path="/newspaper" element={<NewspaperPage />} />
          
          {/* Community & Religion */}
          <Route path="/general-help" element={<GeneralHelpPage />} />
          <Route path="/day-laborer" element={<DayLaborerPage />} />
          <Route path="/dua-zikir" element={<DuaZikirPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
