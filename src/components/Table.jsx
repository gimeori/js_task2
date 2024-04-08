import React, { useMemo, useState, useRef, useEffect} from 'react';
import { getCoreRowModel, useReactTable, flexRender, getSortedRowModel } from '@tanstack/react-table';
import {
    MaterialReactTable,
    useMaterialReactTable,
  } from 'material-react-table';
import DATA from '../datatable';


const columns = [
    {
        accessorKey: 'task',
        header: "Task",
        footer: "Task",
    },
    {
        accessorKey: 'due',
        header: "Due",
        footer: "Due",
    },
    {
        accessorKey: 'notes',
        header: "Notes",
        footer: "Notes",
    },

]
const Table = () => {
    const [sorting, setSorting]= useState([]) 

    const rowVirtualizerRef=useRef(null)
    const [row,setRow]=useState([])
    const [isLoading, setIsLoading]=useState(true)

    const data=useMemo(()=> DATA, [])
    useEffect(() => {
        if (typeof window !== 'undefined'){
            setRow(DATA);
            setIsLoading(false);
        }
    }, []);
    useEffect(()=> {
        try{
            rowVirtualizerRef.current?.scrollToIndex?.(0);
        } catch (error){
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

    console.log(table.getHeaderGroups());
    return (
    <div className='w3-container'>
        <div className="table-container">
        {/* <table className='w3-table-all'>
            <thead>
            {table.getHeaderGroups().map(headerGroup =>(
                <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                            <div>
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {
                                {
                                    asc: '🔼',desc:'🔽',
                                }[header.column.getIsSorted() ?? null]
                            }
                            </div>
                        </th>)}
                </tr>
            ))}
            </thead>

            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
            <tfoot>
            {table.getFooterGroups().map(footerGroup =>(
                <tr key={footerGroup.id}>
                        {footerGroup.headers.map(header => <th key={header.id}>
                            {flexRender(header.column.columnDef.header, header.getContext())}
                        </th>)}
                </tr>
            ))}
            </tfoot>
        </table> */}
        <MaterialReactTable table ={table}/>
        </div>
    </div>
);
};
export default Table;

