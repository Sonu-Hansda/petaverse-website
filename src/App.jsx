import HomePage from './pages/HomePage';
import NavBarNew from './components/NavBarNew';
import BreedingPage from './pages/BreedingPage';
import Footer from './components/Footer';
import PublicRoute from './components/PublicRoutes';
import ProtectedRoute from './components/ProtectedRoutes';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBarNew />
        <ScrollToTop/>
        <main className="flex-grow">
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Route>
            <Route path="/" element={<HomePage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/breeding" element={<BreedingPage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;