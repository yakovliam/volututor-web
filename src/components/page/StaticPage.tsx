import { Flex, FlexProps } from "@chakra-ui/react";
import { FC } from "react";
export type StaticPageProps = FlexProps & {
  children: React.ReactNode;
};

const StaticPage: FC<StaticPageProps> = ({ children, ...rest }) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      flex="1"
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default StaticPage;
