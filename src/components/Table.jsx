import React, { useMemo, useState, useRef, useEffect } from 'react';
import { getCoreRowModel, getSortedRowModel } from '@tanstack/react-table';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';

const response = await fetch('http://127.0.0.1:8000/authors/?skip=0&limit=10')
const authors = await response.json()

const columns = [
    {
        accessorKey: 'id',
        header: "ID",
    },
    {
        accessorKey: 'name',
        header: "Name",
    },

]
const Table = () => {
    const [sorting, setSorting] = useState([])
    const rowVirtualizerRef = useRef(null)
    const [row, setRow] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const data = useMemo(() => authors, [])
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRow(authors);
            setIsLoading(false);
        }
    }, []);
    useEffect(() => {
        try {
            rowVirtualizerRef.current?.scrollToIndex?.(0);
        } catch (error) {
            console.error(error);
        }
    }, [sorting]);

    const table = useMaterialReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting: sorting,
            isLoading,
        },
        onSortingChange: setSorting,
        enableBottomToolbar: false,
        enableGlobalFilterModes: true,
        enablePagination: false,
        enableRowNumbers: true,
        enableRowVirtualization: true,
        muiTableContainerProps: { sx: { maxHeight: '200px' } },
        rowVirtualizerOptions: { overscan: 5 },
        enableColumnOrdering: true,
        muiTableBodyProps: {
            sx: {

                '& tr > *:first-of-type': {
                    position: 'sticky',
                    left: 0,
                    zIndex: 1,
                    backgroundColor: 'white',
                },
            },
        },

    });
    return (
        <div className='w3-container'>
            <div className="table-container">
                <MaterialReactTable table={table} />
            </div>
        </div>
    );
};
export default Table;

