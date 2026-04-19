import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
// 1. Lazy load below-the-fold sections
import { lazy, Suspense } from "react";

const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const ModesSection = lazy(() => import("@/components/ModesSection"));
const StepsSection = lazy(() => import("@/components/StepsSection"));
const ComparisonSection = lazy(() => import("@/components/ComparisonSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const TranscriptionSection = lazy(() => import("@/components/TranscriptionSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
// Footer is small but often imported in CTA, so lazy load it too if used here
// import Footer from "@/components/Footer"; 

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero loads immediately (Eager) */}
        <HeroSection />

        {/* 2. Wrap others in Suspense so they load in background */}
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <FeaturesSection />
          <ModesSection />
          <StepsSection />
          <ComparisonSection />
          <PricingSection />
          <TranscriptionSection />
          <FAQSection />
          <CTASection />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
