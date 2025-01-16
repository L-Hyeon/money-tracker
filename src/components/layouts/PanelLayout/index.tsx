import Flex from '../Layout';

type Props = {
  children: any;
};

const PanelLayout = ({ children }: Props) => {
  return (
    <Flex
      style={{ boxShadow: '5px 5px 5px var(--shadow-color)', borderRadius: '20px', padding: '30px' }}
      width="80%"
      direction="column"
      gap="20px">
      {children}
    </Flex>
  );
};

export default PanelLayout;
