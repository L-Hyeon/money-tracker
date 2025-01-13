import { useState } from 'react';
import DropDownIcon from '../../../assets/icons/dropdown.svg?react';
import CheckIcon from '../../../assets/icons/check.svg?react';
import styled from 'styled-components';
import Text from '../Text';
import styles from './Dropdown.module.css';

type Props = {
  value: number;
  onClick: (idx: number) => void;
  list: string[];
  width?: string;
  height?: string;
};

const DropBox = ({ value, onClick, list, width = '100px', height = '50px' }: Props) => {
  let icon = document.querySelector('.dropdown-icon') as HTMLElement;
  const [isDropActive, setIsDropActive] = useState<boolean>(false);
  const dropListDown = () => {
    if (isDropActive) {
      icon.style.transform = 'rotate(0deg)';
    } else {
      icon.style.transform = 'rotate(-180deg)';
    }
    setIsDropActive(!isDropActive);
  };

  return (
    <Wrapper onClick={dropListDown}>
      <Text width={width} height={height}>
        {list[value]}
        <DropDownIcon className={`${styles.icon} ${styles.dropboxIcon} dropdown-icon`} />
      </Text>
      <List isDropActive={isDropActive} size={list.length}>
        {list.map((v, i) => {
          return (
            <ListItem
              onClick={() => {
                onClick(i);
              }}
              width={width}
              height={height}>
              {i === value && <CheckIcon className={`${styles.icon} ${styles.chkboxIcon}`} />}
              {v}
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  border: 1px solid var(--point-color);
  border-radius: 10px;
`;

const List = styled.ul<{ isDropActive: boolean; size: number }>`
  position: absolute;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: ${props => (props.isDropActive ? `calc(${props.size}*100%)` : '0px')};
  transition: height 300ms ease-in-out;
`;
const ListItem = styled.li<{ width: string; height: string }>`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: var(--point-color);
  color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default DropBox;
