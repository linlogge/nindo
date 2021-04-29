import { Box, SimpleGrid } from "@chakra-ui/layout";
import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/stat";
import { abbreviateNumber } from "@lib/numbers";
import { FC } from "react";

const Channel: FC = () => {
  return (
    <SimpleGrid columns={3} gap="2">
      <Box shadow="base" rounded="lg" bg="white" p="6">
        <Stat>
          <StatLabel>Abonnenten</StatLabel>
          <StatNumber>{abbreviateNumber(2560000)}</StatNumber>
          <StatHelpText>Insgesamt</StatHelpText>
        </Stat>
      </Box>
      <Box shadow="base" rounded="lg" bg="white" p="6">
        <Stat>
          <StatLabel>Views</StatLabel>
          <StatNumber>+{abbreviateNumber(21600000)}</StatNumber>
          <StatHelpText>Letzte 30 Tage</StatHelpText>
        </Stat>
      </Box>
      <Box shadow="base" rounded="lg" bg="white" p="6">
        <Stat>
          <StatLabel>Neue Abonnenten</StatLabel>
          <StatNumber>+{abbreviateNumber(10000)}</StatNumber>
          <StatHelpText>Letzte 30 Tage</StatHelpText>
        </Stat>
      </Box>
    </SimpleGrid>
  );
};

export default Channel;
