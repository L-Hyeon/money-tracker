import { useState } from 'react';
import { Picker, PickerWrapper } from './ColorPicker.style';
import { ColorResult, SketchPicker } from 'react-color';

type Props = {
  color: string;
  onChange?: (color: ColorResult) => void;
};

const ColorPicker = ({ color, onChange }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Picker
      onClick={() => {
        setIsActive(!isActive);
      }}
      color={color}>
      <PickerWrapper isActive={isActive}>
        <SketchPicker color={color} onChange={onChange} />
      </PickerWrapper>
    </Picker>
  );
};

export default ColorPicker;
