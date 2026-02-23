import {
  Hero,
  HeroChatRules,
  HeroEnd,
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
      <HeroEnd />
    </div>
  );
};
