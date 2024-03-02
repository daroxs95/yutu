import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  return <>Details for {id}</>;
}

export default Details;
