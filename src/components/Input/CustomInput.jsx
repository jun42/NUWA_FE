import { forwardRef } from 'react';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import AtIcon from '@components/Image/AtIcon';

// CustomInput 컴포넌트 정의
const CustomInput = forwardRef(function CustomInput(
  { width, placeholder, height = '52px', ...restProps },
  ref
) {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" paddingTop={'12px'}>
        <AtIcon />
      </InputLeftElement>
      <Input
        width={width}
        height={height}
        borderRadius={'8px'}
        type="text"
        placeholder={placeholder}
        bg={'white'}
        border={'1px solid #ccc'}
        maxLength={30}
        ref={ref}
        {...restProps}
      />
    </InputGroup>
  );
});

export default CustomInput;
