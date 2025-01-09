import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { dataStore } from '../libs/store/DataStore';
import Flex from '../components/layouts/Layout';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import RecordList from '../components/organisms/RecordList';

const DetailPage = () => {
  const { year, month, date } = useParams();
  const { selDate, setSelDate } = dataStore();

  useEffect(() => {
    console.log(year, Number(month) - 1, date);
    setSelDate(new Date(Number(year), Number(month) - 1, Number(date)));
  }, []);

  useEffect(() => {
    console.log(selDate);
  }, [selDate]);

  const addRecord = () => {
    console.log(11);
  };

  return (
    <main>
      <Flex width="30%" direction="column" gap="20px">
        <Text style={{ width: '100%', textAlign: 'left' }}>내역 추가</Text>
        <Flex width="100%" align="space-between">
          <Text>DropBox</Text>
          <Text>Value Input</Text>
        </Flex>
        <Button onClick={addRecord}>추가</Button>
      </Flex>
      <RecordList />
    </main>
  );
};

export default DetailPage;
