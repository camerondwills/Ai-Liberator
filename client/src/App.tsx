import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy" component={PrivacyPolicy} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleTagManagerNoScript />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;