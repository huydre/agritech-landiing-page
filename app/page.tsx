import SiteHeader from "./components/site-header";
import HeroSection from "./components/hero-section";
import LogoCloud from "./components/logo-cloud";
import InnovatingSection from "./components/innovating-section";
import VideoShowcase from "./components/video-showcase";
import ArticlesGrid from "./components/articles-grid";
import FaqAccordion from "./components/faq-accordion";
import TestimonialsCarousel from "./components/testimonials-carousel";
import SiteFooter from "./components/site-footer";
import WordmarkHero from "./components/wordmark-hero";

export default function Page() {
  return (
    <main className="relative">
      <SiteHeader />
      <HeroSection />
      <LogoCloud />
      <InnovatingSection />
      <VideoShowcase />
      <ArticlesGrid />
      <FaqAccordion />
      <TestimonialsCarousel />
      <SiteFooter />
      <WordmarkHero />
    </main>
  );
}
