import { useEffect } from "react";
import {useLocation } from "react-router-dom";

export default function ScrollToTop({ children }) {
    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
    },[location]);

    return <>{children}</>
}

function App() {
    return (
        <ScrollToTop>
       
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/file-complaint" element={<FileComplaint />} />
          <Route path="/view-cleaning-events" element={<ViewCleaningEvents />} />
          <Route path="/donate-excess-food" element={<DonateExcessFood />} />
          <Route path="/sustainability-blogs" element={<SustainabilityBlogs />} />
          <Route path="/bike-rental-services" element={<BikeRentalServices />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register-volunteer" element={<RegisterVolunteer />} />
          <Route path="/donate-charity" element={<DonateCharity />} />
          <Route path="/ngo-dashboard" element={<NGODashboard />} />
          <Route path="/rental-dashboard" element={<RentalServiceDashboard />} />
        </Routes>
      </Router>
      </ScrollToTop>
    );
  }