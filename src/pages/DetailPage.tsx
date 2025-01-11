import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataStore } from '../libs/store/DataStore';
import Flex from '../components/layouts/Layout';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import RecordList from '../components/organisms/RecordList';
import DropBox from '../components/atoms/DropDown';
import { Record } from '../libs/types/Record';

const DetailPage = () => {
  const { year, month, date } = useParams();
  const { selDate, setSelDate } = dataStore();
  const [record, setRecord] = useState<Record>({
    id: -1,
    type: 0,
    category: 0,
    value: 0,
    memo: '',
  });

  const RECORD_TYPES = ['수입', '지출'];

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

  const setRecordType = (idx: number) => {
    setRecord({
      ...record,
      type: idx,
    });
  };

  return (
    <main>
      <Flex
        style={{ boxShadow: '0 4px 5px 0 var(--shadow-color)', borderRadius: '20px', padding: '30px' }}
        width="40%"
        direction="column"
        gap="20px">
        <Text width="100%" style={{ textAlign: 'left' }}>
          내역 추가
        </Text>
        <Flex width="100%" align="space-between">
          <DropBox value={record.type} onClick={setRecordType} list={RECORD_TYPES} />
          <Text>Value Input</Text>
        </Flex>
        <Button onClick={addRecord}>추가</Button>
      </Flex>
      <RecordList />
    </main>
  );
};

export default DetailPage;
