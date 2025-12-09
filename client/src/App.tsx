import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import ServiceDetail from "@/pages/ServiceDetail";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Home} /> {/* Reuse home for now or dedicated list */}
      <Route path="/services/:id" component={ServiceDetail} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
