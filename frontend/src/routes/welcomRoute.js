import { Routes, Route } from "react-router-dom";
import AuthForm from "../components/Auth/loggin/AuthForm";
import WelcomePage from "../components/Welcome/Welcome/WelcomePage";
import ForgotPassword from "../components/Auth/forgotPassword/ForgotPassword";
import ResetPassword from "../components/Auth/resetPassword/ResetPassword";
import RegisterForm from "../components/Auth/register/RegisterForm";
import ActivationAccount from "../components/Auth/activationAccount/ActivationAccount";
import WelcomeSlider from "../components/Auth/slide/Slide";

const WelcomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/WelcomeSlider" element={<WelcomeSlider />} />
      <Route path="/RegisterForm" element={<RegisterForm />} />
      <Route path="/AuthForm" element={<AuthForm />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword/:token" element={<ResetPassword />} />
      <Route
        path="api/emailConfirm/:activationCode"
        element={<ActivationAccount />}
      />
    </Routes>
  );
};

export default WelcomeRoutes;
