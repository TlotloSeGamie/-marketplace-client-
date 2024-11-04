import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import FAQ from './components/FAQ';
import ReturnsAndExchanges from './components/ReturnsAndExchanges';
import ShippingInformation from './components/ShippingInfo';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/returns" element={<ReturnsAndExchanges />} />
        <Route path="/shipping" element={<ShippingInformation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
