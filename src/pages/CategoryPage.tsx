
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import DoctorPage from "./categories/DoctorPage";
import HospitalPage from "./categories/HospitalPage";
import DiagnosticPage from "./categories/DiagnosticPage";
import BloodPage from "./categories/BloodPage";
import VehicleRentPage from "./categories/VehicleRentPage";
import PoliceStationPage from "./categories/PoliceStationPage";
import LawyerPage from "./categories/LawyerPage";
import JobsPage from "./categories/JobsPage";
import TeacherPage from "./categories/TeacherPage";
import EntrepreneurPage from "./categories/EntrepreneurPage";
import TrainingCenterPage from "./categories/TrainingCenterPage";
import TodaysMarketPage from "./categories/TodaysMarketPage";
import BusSchedulePage from "./categories/BusSchedulePage";
import TrainSchedulePage from "./categories/TrainSchedulePage";
import HouseRentPage from "./categories/HouseRentPage";
import HotelPage from "./categories/HotelPage";
import StudentPage from "./categories/StudentPage";
import TouristSpotsPage from "./categories/TouristSpotsPage";
import PlotLandPage from "./categories/PlotLandPage";
import MechanicPage from "./categories/MechanicPage";
import NurseryPage from "./categories/NurseryPage";
import BuySellPage from "./categories/BuySellPage";
import ElectricOfficePage from "./categories/ElectricOfficePage";
import EducationalInstitutePage from "./categories/EducationalInstitutePage";
import CourierServicePage from "./categories/CourierServicePage";
import WatchVideoPage from "./categories/WatchVideoPage";
import BeautyParlorPage from "./categories/BeautyParlorPage";
import WebsitePage from "./categories/WebsitePage";
import MunicipalityPage from "./categories/MunicipalityPage";
import BankInsurancePage from "./categories/BankInsurancePage";
import GasStationPage from "./categories/GasStationPage";
import NewspaperPage from "./categories/NewspaperPage";
import GeneralHelpPage from "./categories/GeneralHelpPage";
import DayLaborerPage from "./categories/DayLaborerPage";
import DuaZikirPage from "./categories/DuaZikirPage";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();

  switch (category) {
    case 'doctor':
      return <DoctorPage />;
    case 'hospital':
      return <HospitalPage />;
    case 'diagnostic':
      return <DiagnosticPage />;
    case 'blood':
      return <BloodPage />;
    case 'vehicle-rent':
      return <VehicleRentPage />;
    case 'police-station':
      return <PoliceStationPage />;
    case 'lawyer':
      return <LawyerPage />;
    case 'jobs':
      return <JobsPage />;
    case 'teacher':
      return <TeacherPage />;
    case 'entrepreneur':
      return <EntrepreneurPage />;
    case 'training-center':
      return <TrainingCenterPage />;
    case 'todays-market':
      return <TodaysMarketPage />;
    case 'bus-schedule':
      return <BusSchedulePage />;
    case 'train-schedule':
      return <TrainSchedulePage />;
    case 'house-rent':
      return <HouseRentPage />;
    case 'hotel':
      return <HotelPage />;
    case 'student':
      return <StudentPage />;
    case 'tourist-spots':
      return <TouristSpotsPage />;
    case 'plot-land':
      return <PlotLandPage />;
    case 'mechanic':
      return <MechanicPage />;
    case 'nursery':
      return <NurseryPage />;
    case 'buy-sell':
      return <BuySellPage />;
    case 'electric-office':
      return <ElectricOfficePage />;
    case 'educational-institute':
      return <EducationalInstitutePage />;
    case 'courier-service':
      return <CourierServicePage />;
    case 'watch-video':
      return <WatchVideoPage />;
    case 'beauty-parlor':
      return <BeautyParlorPage />;
    case 'website':
      return <WebsitePage />;
    case 'municipality':
      return <MunicipalityPage />;
    case 'bank-insurance':
      return <BankInsurancePage />;
    case 'gas-station':
      return <GasStationPage />;
    case 'newspaper':
      return <NewspaperPage />;
    case 'general-help':
      return <GeneralHelpPage />;
    case 'day-laborer':
      return <DayLaborerPage />;
    case 'dua-zikir':
      return <DuaZikirPage />;
    default:
      return <NotFound />;
  }
};

export default CategoryPage;
