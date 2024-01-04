import React, { useEffect,useState } from 'react';
import './DashEdit.css';
import { useForm, SubmitHandler, setValue } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SearchBar from '../Anunturi/Search';
//Schema 
 const schema = Yup.object().shape({
  bookID1: Yup.number(),
  bookID2: Yup.number(),
  comment: Yup.string(),
  status: Yup.string(),
  condition: Yup.string(),
});

const DashEdit = () => {

 const [exchangeData, setExchangeData] = useState({});
 const {id} = useParams();
 const { register, handleSubmit, setValue ,formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
 useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/exchanges/getExchange?id=${id}`);
        console.log("This is data", response.data);

        setExchangeData({
          bookID1: response.data?.bookID1?.id,
          bookID2: response.data?.bookID2?.id,
          comment: response.data?.comment,
          status: response.data?.status,
          condition: response.data?.condition,
        });

        // Set form values after data is fetched
        setValue('bookID1', response.data?.bookID1?.id || '');
        setValue('bookID2', response.data?.bookID2?.id || '');
        setValue('status', response.data?.status || '');
        setValue('condition', response.data?.condition || '');
        setValue('comment', response.data?.comment || '');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    dataFetch();
  }, [id, setValue]);


const onSubmit = async (data) => {
   try {
      const updateData = {
        bookID1: data.bookID1,
        bookID2: data.bookID2,
        comment: data.comment,
        exchangeDate: '2023-12-01',
        status: data.status,
        condition: data.condition,
      };

      console.log(updateData.status)

      // Make PUT request to update data
      await axios.put(`http://localhost:8080/exchanges/update/${id}`, updateData);
      console.log('Data updated successfully');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };





 
  return (
    <div className='anunturi-dashedit-container'>
     <div className='anunturi-form-dashedit-Container'>

      <form className='yo flocmp2' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="bookID1">BookID1</label>
      <input type="text" id="bookID1" {...register('bookID1')} />
      <p>{errors.bookID1?.message}</p>

      <label htmlFor="bookID2">bookID2</label>
      <input type="text" id="bookID2" {...register('bookID2')} />
      <p>{errors.author?.message}</p>

      <label htmlFor="comment">comment</label>
      <input type="textarea" id="comment" {...register('comment')} />
      <p>{errors.exchangeDate?.message}</p>

      <label htmlFor="status">Status</label>
      <input type="text" id="status" {...register('status')} />
      <p>{errors.status?.message}</p>

      <label htmlFor="condition">condition</label>
      <input type="text" id="condition" {...register('condition')} />
      <p>{errors.condition?.message}</p>

  
      <button type="submit">Submit</button>
      
    </form>
     <SearchBar />

     </div>
    </div>
  )
}

export default DashEdit