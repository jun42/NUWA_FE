import { Flex, Image, Radio, RadioGroup, Stack } from '@chakra-ui/react';

const ChannelRadio = ({ name, RadioConstants, value, setValue }) => {
  return (
    <Flex flexDirection={'column'} gap={'14px'} pb={'4rem'} fontSize={'14px'}>
      <div>{name}</div>
      <RadioGroup onChange={setValue} value={value}>
        <Stack spacing={'14px'}>
          {RadioConstants.map((item) => (
            <Flex
              justifyContent={'space-between'}
              alignItems={'center'}
              key={item.id}
            >
              <Flex gap={'8px'}>
                <Image src={item.icon} />
                <div>{item.label + ' - ' + item.description}</div>
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
