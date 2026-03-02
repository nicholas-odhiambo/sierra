import type { PricingQuestions } from "@/types/pricing";
import { Box, Text } from "@chakra-ui/react";

interface PriceQuiz {
  questions: PricingQuestions[];
}

export const QuestionsPricing = ({ questions }: PriceQuiz) => {
  return (
    <>
      {questions.map((qsn) => (
        <Box key={qsn.id}>
          <Text as="h3">{qsn.quiz}</Text>
          <Text as="p">{qsn.answer}</Text>
        </Box>
      ))}
    </>
  );
};
