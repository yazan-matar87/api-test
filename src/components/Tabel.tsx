import '../App.css';
import { Table } from 'antd';
import { columns } from './Tabel-item';
import { useGetAllTeacher } from '../api/teacher';

export function TableComponent() {
    
     const { data } = useGetAllTeacher();
    //   console.log(data);
    

    return (
        <>
            <Table
                columns={columns}
                dataSource={data?.map((item: { id: any; }) => ({ ...item, key: item.id }))} // Add unique key to each item
                pagination={{
                    pageSize: 10,
                    total: data?.length, // Pass the total count to pagination
                }}
            />
        </>
    );
}

export default TableComponent;
