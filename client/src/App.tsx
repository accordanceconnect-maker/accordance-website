// client/src/App.tsx

import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { BackToTop } from "@/components/BackToTop";
import { ScrollToTop } from "@/components/ScrollToTop";

import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Questions from "@/pages/Questions";
import Insights from "@/pages/Insights";
import InsightDetail from "@/pages/InsightDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "@/pages/not-found";

/* ---------------------------------------------------------
   ROUTER — CONTENT ONLY
--------------------------------------------------------- */

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/:id" component={ServiceDetail} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/questions" component={Questions} />
      <Route path="/insights" component={Insights} />
      <Route path="/insights/:slug" component={InsightDetail} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

/* ---------------------------------------------------------
   APP SHELL — SPINE OWNER
--------------------------------------------------------- */

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      
      {/* SYSTEM UTILITIES */}
      <Toaster />
      <BackToTop />
      <ScrollToTop />

      {/* GLOBAL NAV */}
      <Navbar />

      {/* CONTENT RAIL */}
      <div className="site-wrapper">
        <main className="site-main">
          <Router />
        </main>
      </div>

      {/* GLOBAL FOOTER */}
      

    </QueryClientProvider>
  );
}