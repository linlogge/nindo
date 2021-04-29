import { Grid, GridItem, Box } from "@chakra-ui/layout";
import { Stat, StatArrow, StatHelpText } from "@chakra-ui/stat";
import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { abbreviateNumber } from "@lib/numbers";
import { FC } from "react";

const test = [1, 2, 3, 4, 5, 6, 7];

const Week: FC = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap="5">
      <GridItem colSpan={{ base: 2 }}>
        <Box shadow="base" rounded="lg" bg="white" p="6">
          <Table variant="simple">
            <TableCaption>Letzte 7 Tage</TableCaption>
            <Thead>
              <Tr>
                <Th>Tag</Th>
                <Th>Abos</Th>
                <Th>Views</Th>
              </Tr>
            </Thead>
            <Tbody>
              {test.map((_, i) => (
                <Tr key={i}>
                  <Td>{20.04 - i}</Td>
                  <Td>
                    <Stat>
                      <StatHelpText>
                        <StatArrow type="increase" />
                        {abbreviateNumber(20000)}
                      </StatHelpText>
                    </Stat>
                  </Td>
                  <Td>
                    <Stat>
                      <StatHelpText>+{abbreviateNumber(50000)}</StatHelpText>
                    </Stat>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </GridItem>
      <GridItem colSpan={{ base: 3 }}>
        <Box shadow="base" rounded="lg" bg="white" p="6"></Box>
      </GridItem>
    </Grid>
  );
};

export default Week;
