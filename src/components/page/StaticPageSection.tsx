import { Flex, FlexProps } from "@chakra-ui/react";
import { FC } from "react";

export type StaticPageSectionProps = FlexProps & {
  children: React.ReactNode;
};

const StaticPageSection: FC<StaticPageSectionProps> = ({
  children,
  ...rest
}) => {
  return <Flex {...rest}>{children}</Flex>;
};

export default StaticPageSection;
