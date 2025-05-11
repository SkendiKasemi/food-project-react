import { useParams } from 'react-router-dom';
import { useDishById } from '../../context/SingleDishByIdContext';
import { useEffect } from 'react';
import './singleDishPage.css';

import Description from '../../components/SingleDishPageComponents/Description';
import MiddlePart from '../../components/SingleDishPageComponents/MiddlePart';
import Recipe from '../../components/SingleDishPageComponents/Recipe';
import Loading from '../../components/Other/Loading';

function SingleDishPage() {
  const { id } = useParams();
  const { setId, loading } = useDishById(); 

  useEffect(() => {
    setId(id);
  }, [id, setId]);

  if(loading) return <Loading />

  return (
    <div className='sdp-container'>
      <div className='sdp-inner-container'>
        <Description />
        <MiddlePart />
        <Recipe />
      </div>
    </div>
  );
}

export default SingleDishPage;
