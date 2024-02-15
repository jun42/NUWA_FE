import {  Flex, Text } from '@chakra-ui/react';
import {ChevronRightIcon} from '@chakra-ui/icons'

const Step = ({ isStep, step }) => {
  console.log(isStep);
  const unshownSteps =
    isStep === '/create-workspace/agreement' || isStep === '/create-workspace';
  if (unshownSteps) return;
  return (
    <Flex gap="10px" w="600px" mr="338px" mb="32px">
      {step.map((stepItem , index) => (
        <Flex key={stepItem.step} alignItems="center">
          { 0< index &&<ChevronRightIcon color={isStep.endsWith(stepItem.step) ? '#000' : '#D6D6D6'}/>}
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
