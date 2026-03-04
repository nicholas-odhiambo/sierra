import type { Faq } from "@/types/faq";
import { Accordion, Span } from "@chakra-ui/react";

interface FaqProps {
  items: Faq[];
}

export const FaqItem = ({ items }: FaqProps) => {
  return (
    <>
      <Accordion.Root multiple defaultValue={["b"]}>
        {items.map((item, index) => (
          <Accordion.Item key={index} value={item.id}>
            <Accordion.ItemTrigger>
              <Span flex="1" fontWeight="bold">
                {item.question}
              </Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>{item.answer}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  );
};
