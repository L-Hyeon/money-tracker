import { useEffect, useState } from 'react';
import Text from '../atoms/Text';
import Flex from '../layouts/Layout';
import { ColorResult } from 'react-color';
import ToggleButton from '../atoms/ToggleButton';
import ColorPicker from '../atoms/ColorPicker';

const Header = () => {
  const [pointColor, setPointColor] = useState<string>('#5272a4');
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    //indexedDB에서 기본 테마 읽어오기
  }, []);

  const changeColor = (e: ColorResult) => {
    setPointColor(e.hex);
    document.documentElement.style.setProperty('--point-color', e.hex);
  };

  const changeTheme = () => {
    setDarkTheme(!darkTheme);
    document.documentElement.style.setProperty('--main-color', darkTheme ? '#fff' : '#333');
    document.documentElement.style.setProperty('--invalid-color', darkTheme ? '#e0e0e0' : '#2a2a2a');
  };

  return (
    <header>
      <Text fontSize={1.5}>가계부</Text>
      <Flex width="120px" gap="10px">
        <ColorPicker color={pointColor} onChange={changeColor} />
        <ToggleButton isActive={darkTheme} onToggle={changeTheme} />
      </Flex>
    </header>
  );
};

export default Header;
