import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Aboutus from "./pages/Home/components/Aboutus/Aboutus";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import HowItWorks from "./pages/Common/HowItWorks";
import Individuals from "./pages/Common/Individuals";
import Teams from "./pages/Common/Teams";
import Pricing from "./pages/Common/Pricing";
import Blog from "./pages/Common/Resources/Blog";
import Support from "./pages/Common/Resources/Support";
import WhatsNew from "./pages/Common/Resources/WhatsNew";
import Features from "./pages/Common/Features";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardComponents/DashboardHome/DashboardHome";
import Availability from "./pages/Dashboard/DashboardComponents/Availability";
import Integrations from "./pages/Dashboard/DashboardComponents/Integrations";
import Help from "./pages/Dashboard/DashboardComponents/Help";
import EventTypes from "./pages/Dashboard/DashboardComponents/DashboardHome/Components/EventTypes";
// import ScheduledEvents from "./pages/Dashboard/DashboardComponents/DashboardHome/Components/ScheduledEvents";
import Workflows from "./pages/Dashboard/DashboardComponents/DashboardHome/Components/Workflows";
import RoutingForms from "./pages/Dashboard/DashboardComponents/DashboardHome/Components/RoutingForms";
import Billing from "./pages/Dashboard/DashboardComponents/billing/Billing";
import Upcoming from "./pages/Dashboard/DashboardComponents/DashboardHome/Components/ScheduledEvent/Upcoming/Upcoming";
import Pending from "./pages/Dashboard/DashboardComponents/DashboardHome/Components/ScheduledEvent/Pending/Pending";
import Past from "./pages/Dashboard/DashboardComponents/DashboardHome/Components/ScheduledEvent/Past/Past";
import ScheduledEvents from "./pages/Dashboard/DashboardComponents/DashboardHome/Components/ScheduledEvent/ScheduledEvent";
import Navbar from "./pages/Home/components/Navbar/Navbar";
import Footer from "./pages/Home/components/Footer/Footer";
import Apps from "./pages/Dashboard/DashboardComponents/Apps";
import OneOnOne from "./pages/Dashboard/DashboardComponents/DashboardHome/Components/EventTypesComponents/OneOnOne";
import Group from "./pages/Dashboard/DashboardComponents/DashboardHome/Components/EventTypesComponents/Group";
import EventTypesName from "./pages/Dashboard/DashboardComponents/DashboardHome/Components/EventTypesComponents/EventTypesName";
import DateRange from "./pages/Dashboard/DashboardComponents/DashboardHome/Components/ScheduledEvent/DateRange/DateRange";
import AccountSettings from "./pages/Dashboard/DashboardComponents/AccountSettings";
import AdminManagement from "./pages/Dashboard/DashboardComponents/AdminManagement";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/howitworks" element={<HowItWorks></HowItWorks>}></Route>
        <Route path="/features" element={<Features></Features>}></Route>
        <Route
          path="/individuals"
          element={<Individuals></Individuals>}
        ></Route>
        <Route path="/teams" element={<Teams></Teams>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/whatsnew" element={<WhatsNew></WhatsNew>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/support" element={<Support></Support>}></Route>
        <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* nested */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<DashboardHome />}></Route>

          <Route path="d-home" element={<DashboardHome />}>
            {/* home nested */}
            <Route path="event-types" element={<EventTypes />} />
            <Route path="Scheduled" element={<ScheduledEvents />}>
              {/* Scheduled Event nested */}
              <Route path="Scheduled" element={<Upcoming />}></Route>
              <Route path="upcoming" element={<Upcoming />}></Route>
              <Route path="pending" element={<Pending />}></Route>
              <Route path="past" element={<Past />}></Route>
              <Route path="date" element={<DateRange />}></Route>
            </Route>
            <Route path="workflows" element={<Workflows />} />
            <Route path="routing" element={<RoutingForms />} />
          </Route>

          <Route path="event-type" element={<EventTypesName />}></Route>
          <Route path="event-type/one-on-one" element={<OneOnOne />}></Route>
          <Route path="event-type/group" element={<Group />}></Route>
          <Route path="availability" element={<Availability />}></Route>
          <Route path="billing" element={<Billing />}></Route>
          <Route path="integration" element={<Integrations />}></Route>
          <Route path="apps" element={<Apps />}></Route>
          <Route path="help" element={<Help />}></Route>
          <Route path="accountSetting" element={<AccountSettings />}></Route>
          <Route path="admin-management" element={<AdminManagement />}></Route>
          <Route path="integrations" element={<Integrations />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
