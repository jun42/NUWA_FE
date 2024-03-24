import { Flex, Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Step = ({ isStep, step }) => {
  const unshownSteps =
    isStep === '/create-workspace/agreement' || isStep === '/create-workspace';
  if (unshownSteps) return;
  return (
    <Flex gap="10px" mb={'70px'} justify={'center'}>
      {step.map((stepItem, index) => (
        <Flex key={stepItem.step} alignItems="center">
          {0 < index && (
            <ChevronRightIcon
              color={isStep.endsWith(stepItem.step) ? '#000' : '#D6D6D6'}
            />
          )}
          <Text
            ml="8px"
            fontSize="14px"
            fontWeight={700}
            color={isStep.endsWith(stepItem.step) ? '#000' : '#D6D6D6'}
          >
            {stepItem.stepName}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Step;
