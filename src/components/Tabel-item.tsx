// import { Tag } from 'antd';
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { onDeleteAlarm } from '../assets/alarmes';

export const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image) => (
      <img src={image} alt='no photo..' style={{ width: '50px', height: '50px' }} />
    ),
  },
  {
    title: "Action",
    dataIndex: "id",
    key: "action",
    render: (id: number) => (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link to={`/editPage/${id}`}>
          <EditOutlined onClick={() => console.log("Edit clicked")} />
        </Link>
        <DeleteOutlined onClick={() => onDeleteAlarm(id)} />
      </div>
    ),
  }   
];
export const columnsForEdit = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image) => (
      image ? <img src={image} alt='photo' style={{ width: '50px', height: '50px' }} /> : "no photo..."
    ),
  },
];

