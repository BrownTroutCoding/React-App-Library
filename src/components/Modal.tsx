import React from 'react'
import CarForm from './BookForm';
import BookForm from './BookForm';
import { server_calls } from '../api/server';

type Props = {
  id?: string;
  open: boolean;
  onClose?: () => void;
  selectedBook?: any;
};

const Modal = (props: Props) => {
  if (!props.open) return <></>;

  return (
    <div
      onClick={props.onClose}
      className="fixed w-full h-full flex overflow-auto z-1 justify-center align-middle bg-gray-300 bg-opacity-25"
    >
      <div
        className="max-w-600px w-2/5 fixed flex z-1 bg-white shadow-xl rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="w-full flex flex-col">
          <div className="flex flex-row space-apart">
            <p
              className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
              onClick={props.onClose}
            >
              X
            </p>
          </div>
          <div className="flex flex-column items-center text-center p-2">
            <BookForm id={props.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
