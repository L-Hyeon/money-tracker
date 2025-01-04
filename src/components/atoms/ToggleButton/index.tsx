import { Notch, ToggleWrapper } from './ToggleButton.style';

type Props = {
  isActive: boolean;
  onToggle: () => void;
};

const ToggleButton = ({ isActive, onToggle }: Props) => {
  return (
    <ToggleWrapper onClick={onToggle} isActive={isActive}>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  );
};

export default ToggleButton;
