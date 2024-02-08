import { Circle, Flex, Text } from '@chakra-ui/react';

const Step = ({ isStep, step }) => {
  console.log(isStep);
  const unshownSteps =
    isStep === '/create-workspace/agreement' || isStep === '/create-workspace';
  if (unshownSteps) return;
  return (
    <Flex gap="10px" w="600px" mr="338px" mb="32px">
      {step.map((stepItem) => (
        <Flex key={stepItem} alignItems="center">
          <Circle
            bg={isStep.endsWith(stepItem.step) ? '#5158FF' : '#D6D6D6'}
            size="16px"
          ></Circle>
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
