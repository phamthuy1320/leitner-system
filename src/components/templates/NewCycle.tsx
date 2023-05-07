import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { NewWord } from "../molecules/NewWord";
import { ListBox } from "../molecules/ListBox";
import { Card } from "../atoms/Card";
import { useWordContext } from "../../context/useWordContext";

export interface INewCycleProps {}

export const NewCycle = (props: ReturnType<typeof useNewCycle>) => {
  const { data } = useWordContext();
  return (
    <Box>
      <NewWord />
      <Card>
        <Flex flexWrap={"wrap"}>
          <ListBox name={"box1"} list={data.box1} />
          <ListBox name={"box2"} list={data.box2} />
          <ListBox name={"box3"} list={data.box3} />
          <ListBox name={"box4"} list={data.box4} />
          <ListBox name={"box5"} list={data.box5} />
        </Flex>
      </Card>
    </Box>
  );
};

export const useNewCycle = (props: INewCycleProps) => {
  return {
    ...props,
  };
};
