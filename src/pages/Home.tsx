import {
  Hero,
  HeroChatRules,
  HeroFeatures,
  HeroIntegration,
  HeroLive,
  HeroPricing,
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
    </div>
  );
};
