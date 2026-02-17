import {
  Hero,
  HeroChatRules,
  HeroFeatures,
  HeroIntegration,
  HeroLive,
} from "@/sections/home";

export const Home = () => {
  return (
    <div>
      <Hero />
      <HeroFeatures />
      <HeroLive />
      <HeroChatRules />
      <HeroIntegration />
    </div>
  );
};
