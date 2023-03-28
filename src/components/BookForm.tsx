import { Button, ButtonGroup, Select } from '@mui/material'
import Input from "./Input";
import { useForm } from 'react-hook-form';
import { server_calls } from '../api/server';
import { useDispatch, useStore, Provider } from 'react-redux';
import { chooseISBN, chooseAuthor, chooseTitle, chooseYear, chooseRead } from '../redux/slices/RootSlice'
import { Checkbox } from '@mui/material';
import { useState } from 'react';


// interface
interface BookFormProps {
  id?: string;
  initialData?: any;
}



const BookForm = (props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();
  const [read, setRead] = useState(false);

  

  // function that handles form submission for adding or updating a car record.
  const onSubmit = (data: any, event: any) => {
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data);
      console.log(`Updated: ${data.isbn} ${props.id}`);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      event?.target.reset();
    } else {
      const newBook = {
        isbn: data.isbn,
        title: data.title,
        author: data.author,
        year: data.year,
        read: read
      };
      server_calls.create(newBook);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <div className='mx-auto max-w-md'>
      <h2 className='text-gray-900 p-2 border-gray-200'>Enter your new book!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="isbn"></label>
          <Input {...register('isbn')}  name='isbn' placeholder='ISBN #'/>
        </div>
        <div>
          <label htmlFor="title"></label>
          <Input {...register('title')} name='title' placeholder='Title'/>
        </div>
        <div>
          <label htmlFor="author"></label>
          <Input {...register('author')}  name='author' placeholder='Author'/>
        </div>
        <div>
          <label htmlFor="year"></label>
          <Input {...register('year')}  name='year' placeholder='Year of publication'/>
        </div>
        <div className='mb-5 mt-3'>
          <label htmlFor="read"></label>
          <Checkbox {...register('read')}  name='read' checked={read} onChange={() => setRead(!read)} />
          <span
          className='text-gray-900 p-2 border border-gray-200 rounded-lg'
          >Check if read</span>
        </div>
        <div className="flex p-1">
          <button
            className="flex m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default BookForm
