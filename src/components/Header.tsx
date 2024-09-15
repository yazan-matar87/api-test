import { Button } from 'antd';
import { useModalStore } from '../assets/stateMangment'; // Adjust the import path as needed

export function Header() {
  const showModal = useModalStore((state) => state.showModal);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* <div>Tabel_name</div> */}
      <div>Subject</div>
      <Button onClick={() => {
        // console.log('Button clicked');
        showModal();
      }}>Add Modal</Button>  
        </div>
  );
}

export default Header;
