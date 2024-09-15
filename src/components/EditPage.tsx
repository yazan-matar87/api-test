import { useParams } from 'react-router-dom';
import EditPageRightSide from "./EditPageRightSide";
import EditPageLeftSide from "./EditPageLeftSide";

const Edit_Page = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <EditPageLeftSide id={id} />
        </div>
        <div style={{ flex: 2 }}>
          <EditPageRightSide id={id} />
        </div>
      </div>
    </>
  );
};

export default Edit_Page;
