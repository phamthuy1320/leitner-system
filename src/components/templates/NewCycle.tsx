import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { NewWord } from "../molecules/NewWord";
import { ListBox } from "../molecules/ListBox";
import { Card } from "../atoms/Card";
import { useWordContext } from "../../context/useWordContext";
import { Select } from "../atoms/Select";
import { Layout } from "../molecules/Layout";

export interface INewCycleProps {}

export const NewCycle = (props: ReturnType<typeof useNewCycle>) => {
  const { data } = useWordContext();
  return (
    <Layout>
      <NewWord />
      <Card hidden>
        <Flex flexWrap={"wrap"}>
          <ListBox name={"box1"} list={data.box1} />
          <ListBox name={"box2"} list={data.box2} />
          <ListBox name={"box3"} list={data.box3} />
          <ListBox name={"box4"} list={data.box4} />
          <ListBox name={"box5"} list={data.box5} />
        </Flex>
      </Card>
      <Select />
    </Layout>
  );
};

export const useNewCycle = (props: INewCycleProps) => {
  return {
    ...props,
  };
};
