export type PricingPackage = {
  name: string;
  description: string;
  price: string;
  benefits: string[];
};

export interface PricingQuestions {
  id: string;
  quiz: string;
  answer: string;
}
