import { IntergrationCards } from "@/components/IntergrationCards";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";

import asana from "../../images/asana.png";

export const IntegrationCatalogue = () => {
  return (
    <>
      <Box background="white" py={{ base: "100px", lg: "150px" }}>
        <Container maxW="6xl" background="gray.200">
          <Grid
            templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
            gap={{ base: 30, md: 35 }}
          >
            <GridItem>
              {" "}
              <IntergrationCards
                icon=""
                title="Google Drive"
                description="Optimized structures for peak performance and user experience."
              />{" "}
            </GridItem>
            <GridItem>
              {" "}
              <IntergrationCards
                icon=""
                title="intercom"
                description="Connect with your audience, understanding their needs."
              />
            </GridItem>
            <GridItem>
              {" "}
              <IntergrationCards
                icon=""
                title="Stay organized"
                description="Manage projects, tasks, and deadlines seamlessly."
              />
            </GridItem>
            <GridItem>
              {" "}
              <IntergrationCards
                icon=""
                title="Workflow automation"
                description="Automate workflows, enhancing efficiency and productivity"
              />
            </GridItem>
            <GridItem>
              {" "}
              <IntergrationCards
                icon=""
                title="Communication"
                description="Real-time team collaboration, fostering synergy and creativity."
              />
            </GridItem>
            <GridItem>
              {" "}
              <IntergrationCards
                icon={asana}
                title="Project management"
                description="Precise management, ensuring projects are executed flawlessly."
              />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
