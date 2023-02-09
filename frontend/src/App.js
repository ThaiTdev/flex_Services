import WelcomeRoutes from "./routes/welcomRoute";
import CustomerRoutes from "./routes/customerRoute";
import AuthGuard from "./_helpers/AuthGuard";
import ProRoutes from "./routes/proRoute";

function App() {
  return (
    <div>
      <WelcomeRoutes />
      <AuthGuard>
        <CustomerRoutes />
        <ProRoutes />
      </AuthGuard>
    </div>
  );
}

export default App;
