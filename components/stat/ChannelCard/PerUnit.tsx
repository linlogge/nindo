import { SimpleGrid, Box } from "@chakra-ui/layout";
import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/stat";
import { abbreviateNumber } from "@lib/numbers";
import { FC } from "react";

const PerUnit: FC = () => {
  return (
    <SimpleGrid columns={4} gap="2">
      <Box shadow="base" rounded="lg" bg="white" p="6">
        <Stat>
          <StatLabel>Views</StatLabel>
          <StatNumber>{abbreviateNumber(1600000)}</StatNumber>
          <StatHelpText>Pro Video</StatHelpText>
        </Stat>
      </Box>
      <Box shadow="base" rounded="lg" bg="white" p="6">
        <Stat>
          <StatLabel>Likes</StatLabel>
          <StatNumber>{abbreviateNumber(1600000)}</StatNumber>
          <StatHelpText>Pro Video</StatHelpText>
        </Stat>
      </Box>
      <Box shadow="base" rounded="lg" bg="white" p="6">
        <Stat>
          <StatLabel>Kommentare</StatLabel>
          <StatNumber>{abbreviateNumber(1600000)}</StatNumber>
          <StatHelpText>Pro Video</StatHelpText>
        </Stat>
      </Box>
      <Box shadow="base" rounded="lg" bg="white" p="6">
        <Stat>
          <StatLabel>Dislikes</StatLabel>
          <StatNumber>{abbreviateNumber(1600000)}</StatNumber>
          <StatHelpText>Pro Video</StatHelpText>
        </Stat>
      </Box>
    </SimpleGrid>
  );
};

export default PerUnit;
