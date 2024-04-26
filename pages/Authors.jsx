import React from 'react'
import Table from '../src/components/Table'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import lg from '../src/providers/lg.gif'


export const authorsApi=createApi({
  reducerPath: 'authorsApi',
  baseQuery:fetchBaseQuery({baseUrl: 'http://127.0.0.1:8000/'}),
  endpoints: (build) => ({
    getAuthors: build.query({
      query: () => `authors`
    })
  })
})
export const {useGetAuthorsQuery} = authorsApi;


export default function Authors() {
  const {data=[], isLoading, isError, isFetching} =useGetAuthorsQuery()
  if(isLoading) return <img src={lg}></img> 
  if(isError) return <h2>Ошибка при получении данных</h2>
  if(!data) return <h2>Нет данных</h2>
  return (
    <div>
      <ul>
        {data.map(item =>(
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        <Table />
      </div>
    </div>
  )
}
