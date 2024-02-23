import React from 'react';
import { Button } from '@chakra-ui/react';

const GreySort = ({ label }) => {
  return (
    <Button borderRadius="8px" fontSize="14px" fontWeight="500" p="12px 26px">
      {label}
    </Button>
  );
};

export default GreySort;
