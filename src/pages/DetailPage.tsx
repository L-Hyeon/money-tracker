import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { dataStore } from '../libs/store/DataStore';
import RecordList from '../components/organisms/RecordList';
import AddRecordPanel from '../components/organisms/AddRecordPanel';
import AddSchedulePanel from '../components/organisms/AddSchedulePanel';

const DetailPage = () => {
  const { year, month, date } = useParams();
  const { setSelDate } = dataStore();

  useEffect(() => {
    setSelDate(new Date(Number(year), Number(month) - 1, Number(date)));
  }, []);

  return (
    <main>
      <AddSchedulePanel />
      <AddRecordPanel />
      <RecordList />
    </main>
  );
};

export default DetailPage;
