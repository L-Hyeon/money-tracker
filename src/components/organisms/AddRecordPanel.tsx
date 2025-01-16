import { BaseSyntheticEvent, useState } from 'react';
import Flex from '../layouts/Layout';
import Text from '../atoms/Text';
import DropBox from '../atoms/DropDown';
import Input from '../atoms/Input';
import { CATEGORIES, Record, RECORD_TYPES } from '../../libs/types/Record';
import Button from '../atoms/Button';
import PanelLayout from '../layouts/PanelLayout';

const AddRecordPanel = () => {
  const [record, setRecord] = useState<Record>({
    id: -1,
    type: 0,
    category: 0,
    value: '',
    memo: '',
  });

  const addRecord = () => {
    console.log(11);
  };

  const setRecordType = (idx: number) => {
    setRecord({
      ...record,
      type: idx,
    });
  };
  const changeRecordValue = (e: BaseSyntheticEvent) => {
    setRecord({
      ...record,
      value: Number(e.target.value.replaceAll(',', '')).toLocaleString('ko-KR'),
    });
  };
  const setCategory = (idx: number) => {
    setRecord({
      ...record,
      category: idx,
    });
  };
  const changeRecordMemo = (e: BaseSyntheticEvent) => {
    setRecord({
      ...record,
      memo: e.target.value,
    });
  };

  return (
    <PanelLayout>
      <Text width="100%" style={{ textAlign: 'left' }}>
        내역 추가
      </Text>
      <Flex width="100%" align="space-between">
        <DropBox value={record.type} onClick={setRecordType} list={RECORD_TYPES} />
        <Input name="record_value" value={record.value} onChange={changeRecordValue} align="right" width="30%" />
      </Flex>
      <Flex width="100%" align="space-between">
        <DropBox value={record.category} onClick={setCategory} list={CATEGORIES[record.type]} />
        <Input name="record_value" value={record.memo} onChange={changeRecordMemo} align="right" width="70%" />
      </Flex>
      <Button onClick={addRecord}>추가</Button>
    </PanelLayout>
  );
};

export default AddRecordPanel;
