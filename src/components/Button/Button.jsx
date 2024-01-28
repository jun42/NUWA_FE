import styled from 'styled-components';

const Button = ({
  children,
  onClick,
  $type = 'solid',
  $rounded,
  $padding,
  $color,
  ...props
}) => {
  return (
    <StButton
      onClick={onClick}
      $type={$type}
      $color={$color}
      $rounded={$rounded}
      $padding={$padding}
      {...props}
    >
      {children}
    </StButton>
  );
};

export default Button;

const StButton = styled.button`
  padding: ${({ $padding }) => $padding};
  width: 100%;
  border-radius: ${({ $rounded }) => $rounded};
  background-color: ${({ $type, theme, $color }) =>
    $type === 'solid'
      ? theme.color[$color]
      : $type === 'outline'
      ? '#fff'
      : '#fff'};
  border: 1px solid ${({ theme, $color }) => theme.color[$color]};
  border-radius: ${({ $rounded }) => $rounded};
  /* width: ;  */ // 설정해줘야함
  /* height: ; */ //자동으로?
  /* padding: ; */ //설정해줘야함
`;
