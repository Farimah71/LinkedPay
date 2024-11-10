import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { SplashScreen } from "../components/splash-screen";
import Private from "./private/private";

// begin:: Lazy imports
const AuthLayout = lazy(() => import("../layout/_auth"));
const PanelLayout = lazy(() => import("../layout/_panel"));
const Login = lazy(() => import("../pages/auth/login"));
const SignUp = lazy(() => import("../pages/auth/signup"));
const ChangePhone = lazy(() => import("../pages/auth/change-phone"));
const ForgotPassword = lazy(() => import("../pages/auth/forgot-password"));

const NotFound = lazy(() => import("../pages/404"));
const Settings = lazy(() => import("../pages/shared/settings"));
const HelpAndSupport = lazy(() => import("../pages/shared/help-and-support"));
const Application = lazy(() => import("../pages/panel/application"));
const SupportTicketDetails = lazy(
  () => import("../pages/shared/help-and-support/ticket-detail")
);

// Institutional panel
const WebManagement = lazy(
  () => import("../pages/panel-Institutional/web-management")
);
const LinkPayment = lazy(
  () => import("../pages/panel-Institutional/link-payment")
);
const SiteDetail = lazy(
  () => import("../pages/panel-Institutional/web-management/site-detail")
);
const PhysicalPOS = lazy(
  () => import("../pages/panel-Institutional/physical-POS")
);
const UserAuthorization = lazy(
  () => import("../pages/panel-Institutional/user-authorization")
);
const LinkDetail = lazy(
  () => import("../pages/panel-Institutional/link-payment/link-detail")
);
const InstitutionalPanel = lazy(
  () => import("../pages/panel-Institutional/panel")
);
const TransactionReport = lazy(
  () => import("../pages/panel-Institutional/reports/transaction-report")
);
const ProgressPayment = lazy(
  () => import("../pages/panel-Institutional/reports/progress-payment")
);
const Bills = lazy(() => import("../pages/panel-Institutional/reports/bills"));

// Personal panel
const LinkPaymentPersonal = lazy(
  () => import("../pages/panel-personal/link-payment")
);
const LinkDetailPersonal = lazy(
  () => import("../pages/panel-personal/link-payment/link-detail")
);
const PanelPersonal = lazy(() => import("../pages/panel-personal/panel"));
// end:: Lazy imports

export const Router: React.FC = () => {
  const userType = localStorage.trpos__user_type;

  return (
    <Suspense fallback={<SplashScreen />}>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="change-phone" element={<ChangePhone />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route element={<Private />}>
          <Route path="/dashboard" element={<PanelLayout />}>
            {(userType == undefined || userType == 0) && (
              <Route path="application" element={<Application />} />
            )}

            {userType == 2 && (
              <Route path="Institutional">
                <Route path="panel" element={<InstitutionalPanel />} />
                <Route path="webManagement" element={<WebManagement />} />
                <Route path="linkPayment" element={<LinkPayment />} />
                <Route path="siteDetail/:id" element={<SiteDetail />} />
                <Route path="physicalPOS" element={<PhysicalPOS />} />
                <Route
                  path="userAuthorization"
                  element={<UserAuthorization />}
                />
                <Route path="linkDetail/:id" element={<LinkDetail />} />
                <Route
                  path="transactionReport"
                  element={<TransactionReport />}
                />
                <Route path="progressPayment" element={<ProgressPayment />} />
                <Route path="bills" element={<Bills />} />
              </Route>
            )}

            {userType == 1 && (
              <Route path="personal">
                <Route path="panel" element={<PanelPersonal />} />
                <Route path="linkPayment" element={<LinkPaymentPersonal />} />
                <Route path="linkDetail/:id" element={<LinkDetailPersonal />} />
              </Route>
            )}

            {/* begin:: Shared pages */}
            <Route path="settings" element={<Settings />} />
            <Route path="helpAndSupport" element={<HelpAndSupport />} />
            <Route
              path="helpAndSupport/ticketDetail/:id"
              element={<SupportTicketDetails />}
            />
            {/* end:: Shared pages */}
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
