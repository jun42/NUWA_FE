import { Flex, Image, Radio, RadioGroup, Stack } from '@chakra-ui/react';

const ChannelRadio = ({ RadioConstants, value, setValue }) => {
  return (
    <Flex flexDirection={'column'} gap={'14px'} pb={'3rem'}>
      <div>채널 종류 선택</div>
      <RadioGroup onChange={setValue} value={value}>
        <Stack spacing={'14px'}>
          {RadioConstants.map((item) => (
            <Flex justifyContent={'space-between'} key={item.id}>
              <Flex gap={'10px'}>
                <Image src={item.icon} />
                {item.label + ' - ' + item.description}
              </Flex>
              <Radio
                colorScheme="gray"
                value={item.value}
                borderColor={'gray'}
              />
            </Flex>
          ))}
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default ChannelRadio;
