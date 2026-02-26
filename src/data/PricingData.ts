import type { PricingPackage } from "../types/pricing";

export const pricingPackages: PricingPackage[] = [
  {
    name: "Personal",
    description:
      "For individuals and small teams trying out for an unlimited period.",
    price: "29",
    benefits: [
      " Sell on your own terms",
      "Robust integrations",
      "Live streaming",
      " Marketing tools",
      "Automations",
    ],
  },
  {
    name: "Extended",
    description:
      "For individual account executives who want increased productivity.",
    price: "49",
    benefits: [
      "Robust integrations",

      " Unlimited bandwidth",
      "Robust integrations",
      " Marketing tools",
      "Automations",
    ],
  },
  {
    name: "Premium",
    description:
      "For medium and large sales organizations with advanced needs.",
    price: "99",
    benefits: [
      " Everything in Extended",
      "Robust integrations",
      "Live streaming",
      " Marketing tools",
      "Automations",
    ],
  },
];
