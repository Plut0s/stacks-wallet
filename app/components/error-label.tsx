import React from 'react';
import { Flex, Box, FlexProps } from '@blockstack/ui';

import { ExclamationMark } from './icons/exclamation-mark';

type ErrorLabelProps = FlexProps;

export const ErrorLabel: React.FC<ErrorLabelProps> = ({ children, ...rest }) => (
  <Flex mt={3} {...rest}>
    <Box mr={2} position="relative" top="1px">
      <ExclamationMark />
    </Box>
    <Box mr={5}>{children}</Box>
  </Flex>
);
