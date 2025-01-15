import styled from 'styled-components';
import { CaldendarDate } from '../../libs/types/Calendar';
import Flex from '../layouts/Layout';
import Text from '../atoms/Text';

type Props = {
  dateElement: CaldendarDate;
  navigate: () => void;
  isToday: boolean;
  color: string;
};

const CalendarElement = ({ dateElement, navigate, isToday, color }: Props) => {
  return (
    <Wrapper onClick={navigate} isActive={dateElement.date !== -1} isToday={isToday}>
      <Flex style={{ marginTop: '5%' }} width="90%" align="space-between">
        {dateElement.date !== -1 && <Text>.</Text>}
        <Flex style={{ alignItems: 'flex-end' }} direction="column" height="100%">
          <Text style={{ color: color }}>{dateElement.date !== -1 && dateElement.date}</Text>
          <Text style={{ color: 'var(--red-color)' }}>{dateElement.info}</Text>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.button<{ isActive: boolean; isToday: boolean }>`
  cursor: ${props => (props.isActive ? 'pointer' : 'none')};
  box-sizing: content-box;
  padding: 0;
  border: 0.5px solid var(--point-color);
  width: 12dvw;
  height: 10dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props =>
    props.isActive ? (props.isToday ? 'var(--point-color)' : 'transparent') : 'var(--invalid-color)'};
`;

export default CalendarElement;
