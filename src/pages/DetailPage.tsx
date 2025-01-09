import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { year, month, date } = useParams();
  console.log(year, Number(month) - 1, date);

  return <main>{date}</main>;
};

export default DetailPage;
