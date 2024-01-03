import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import "./Form.css"

//aici este un formular, vezi sign up pt explicatie formular, si aici practic adauga o carte in db, daca utilizatorul nu gasestre cartea.

const schema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  thumb: Yup.string().url('Invalid URL format'),
  genreID: Yup.object().shape({
    id: Yup.number().required('Genre ID is required'),
    genreName: Yup.string().required('Genre Name is required'),
  }),
  isbn: Yup.string().min(4).max(100).required('ISBN is required'),
  description: Yup.string().required('Description is required'),
});

const Form = () => {



  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

 const onSubmit = async (data) => {
    try {
      // Ensure that both books are selected
      
      console.log("This is the book we aded",data);

      const response = await axios.post('http://localhost:8080/books/add', data);

      if (response.status === 201) {
        console.log('Exchange announcement submitted successfully!');
        // Handle success, e.g., redirect to another page
      } else {
        console.error('Failed to submit exchange announcement.');
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form className='yo' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" {...register('title')} />
      <p>{errors.title?.message}</p>

      <label htmlFor="author">Author</label>
      <input type="text" id="author" {...register('author')} />
      <p>{errors.author?.message}</p>

      <label htmlFor="thumb">Picture URL</label>
      <input type="text" id="thumb" {...register('thumb')} />
      <p>{errors.author?.thumb}</p>

      <label htmlFor="genreID.id">Genre ID</label>
      <input type="number" id="genreID.id" {...register('genreID.id')} />
      <p>{errors.genreID?.id?.message}</p>

      <label htmlFor="genreID.genreName">Genre Name</label>
      <input type="text" id="genreID.genreName" {...register('genreID.genreName')} />
      <p>{errors.genreID?.genreName?.message}</p>

      <label htmlFor="isbn">ISBN</label>
      <input type="text" id="isbn" {...register('isbn')} />
      <p>{errors.isbn?.message}</p>

      <label htmlFor="description">Description</label>
      <textarea id="description" {...register('description')} />
      <p>{errors.description?.message}</p>

      <button type="submit">Submit</button>
      
    </form>
  );
};

export default Form;