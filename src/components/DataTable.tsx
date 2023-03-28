import React, { useState } from 'react';
import { Button } from "@mui/material";
import Modal from "./Modal";
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'isbn', headerName: 'ISBN Number', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'author', headerName: 'Author', flex: 1 },
    { field: 'year', headerName: 'Year', flex: 1 },
    { 
        field: 'read',
        headerName: 'Read',
        flex: 1,
        renderCell: (params) => {
            const isRead = params.value;
            return isRead ? <span>&#10003;</span> : <span></span>;
        }
    },    
]



function DataTable() {
    const [open, setOpen] = useState(false);
    const { contactData, getData } = useGetData();
    const [selectionModel, setSelectionModel] = useState<any>([]);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = async () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`);
        setTimeout(() => {
            window.location.reload();
        }, 500);
    };

    return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className='space-x-5 ml-10'>
            <button
                className="p-3 bg-slate-500 rounded hover:bg-slate-800 hover:text-white"
                onClick={() => handleOpen()}
                >
                Add Book
            </button>
            <button
                onClick={handleOpen}
                className="p-3 bg-slate-500 m-3 rounded hover:bg-slate-800 hover:text-white onClick={handleOpen}"
            >
                Update
          </button>
          <button
                onClick={deleteData}
                className="p-3 bg-slate-500 m-3 rounded hover:bg-slate-800 hover:text-white onClick={handleOpen}"
            >
                Delete
          </button>
        </div>
        {/* Button section for controlling CRUD */}
        <div
          className={
            open ? "hidden" : "container mx-10 my-5 flex flex-col"
          }
          style={{ height: 400, width: "100%" }}
        >
            <h2 className="p-3 bg-slate-400 my-2 rounded">Book Library</h2>
            <DataGrid
            className='bg-opacity-100 bg-slate-200'
            rows={contactData}
            columns={columns}
            pageSizeOptions={[5]}
            checkboxSelection={true}
            onRowSelectionModelChange={(item: any) => {
                setSelectionModel(item);
            }}
            getRowId={(row) => row.isbn}
            />
        </div>
    </>
  )
}

export default DataTable
