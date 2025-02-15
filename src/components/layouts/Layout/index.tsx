import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  style?: object;
  gap?: string;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: string;
  wrap?: string;
  width?: string;
  height?: string;
};

const Flex = ({
  children,
  style,
  gap = '0px',
  direction = 'row',
  align = 'flex-start',
  wrap = 'nowrap',
  width = 'auto',
  height = 'auto',
}: Props) => {
  return (
    <Div style={style} gap={gap} direction={direction} align={align} wrap={wrap} width={width} height={height}>
      {children}
    </Div>
  );
};

const Div = styled.div<{
  width: string;
  height: string;
  gap: string;
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align: string;
  wrap: string;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.align};
  align-items: center;
  gap: ${props => props.gap};
  flex-wrap: ${props => props.wrap};
`;

export default Flex;
