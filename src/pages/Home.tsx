import {
  Hero,
  HeroChatRules,
  HeroFeatures,
  HeroIntegration,
  HeroLive,
  HeroPricing,
  HeroStrategy,
  HeroTestimonials,
} from "@/sections/home";

export const Home = () => {
  return (
    <div>
      <Hero />
      <HeroFeatures />
      <HeroLive />
      <HeroChatRules />
      <HeroIntegration />
      <HeroPricing />
      <HeroStrategy />
      <HeroTestimonials />
    </div>
  );
};
