// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Form, Input, Button, Upload, Select } from 'antd';
// import { getsubjectById, updateItem, getTeachers } from '../api/teacher';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';

// const Edit_Page_left_side = () => {
//   const { id } = useParams();
//   const [form] = Form.useForm();
//   const [data, setData] = useState(null);
//   const [teachers, setTeachers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getsubjectById(id);
//         const teacherResponse = await getTeachers();
//         console.log('Teachers:', teacherResponse);
//         const subjectData = response.data;
//         setData(subjectData);
//         setTeachers(teacherResponse.data);
//         form.setFieldsValue({
//           teacher: subjectData.teacher,
//           id: subjectData.id,
//           name: subjectData.name,
//           image: subjectData.image ? [{ url: subjectData.image }] : [],
//         });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, [id, form]);

//   const onFinish = async (values) => {
//     try {
//       await updateItem(id, values);
//       console.log('Update successful');
//     } catch (error) {
//       console.error('Update failed', error);
//     }
//   };

//   const normFile = (e) => {
//     console.log('Upload event:', e);
//     if (Array.isArray(e)) {
//       return e;
//     }
//     return e && e.fileList ? e.fileList : [];
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required('Please input the name!'),
//     teacher: Yup.string().required('Please select a teacher!'),
//   });

//   return (
//     <Form
//       form={form}
//       onFinish={onFinish}
//       layout="vertical"
//       initialValues={data}
//       validateMessages={{ required: '${label} is required!' }}
//       resolver={yupResolver(validationSchema)}
//     >
//       <Form.Item label="ID" name="id">
//         <Input disabled />
//       </Form.Item>
//       <Form.Item label="Name" name="name">
//         <Input />
//       </Form.Item>
//       <Form.Item label="Teacher" name="teacher">
//         <Select placeholder="Select a teacher">
//           {teachers && teachers.length > 0 && teachers.map(teacher => (
//             <Select.Option key={teacher.id} value={teacher.id}>
//               {teacher.name}
//             </Select.Option>
//           ))}
//         </Select>
//       </Form.Item>
//       <Form.Item label="Image" name="image" valuePropName="fileList" getValueFromEvent={normFile}>
//         <Upload listType="picture" maxCount={1}>
//           <Button>Upload Image</Button>
//         </Upload>
//       </Form.Item>
//       <Form.Item>
//         <Button type="primary" htmlType="submit">
//           Save
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };












// import { useEffect, useState } from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { getsubjectById, updateItem } from '../api/teacher';
// import { Button, Card, Input, Upload } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import '../index.css'; // Make sure to create this CSS file

// function EditPageLeftSide({ id }:any) {
//   const [initialValues, setInitialValues] = useState({
//     id: '',
//     name: '',
//     image: null,
//   });
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await getsubjectById(id);
//       console.log('Fetched data:', response.data); // Print the nested data to the console
//       setInitialValues({
//         id: response.data.id,
//         name: response.data.name,
//         image: response.data.image,
//       });
//     };
//     fetchData();
//   }, [id]);
//   const validationSchemaForEditPageLeftSide = Yup.object().shape({
//     name: Yup.string().required('Subject name is required'),
//     image: Yup.mixed().nullable(),
//   });
  
//   const callUpdate = (values) => {
//     console.log('Form values:', values);
//     updateItem(id, values);
//     console.log('Data updated successfully');
//   };
//   return (
//     <Card title="Edit Subject" className="edit-card">
//       <Formik
//         enableReinitialize
//         initialValues={initialValues}
//         validationSchema={validationSchemaForEditPageLeftSide}
//         onSubmit={callUpdate}
//       >
//         {({ setFieldValue, values }) => (
//           <Form>
//             <div className="form-group">
//               <label htmlFor="id">ID</label>
//               <Field name="id" type="text" disabled as={Input} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="name">Subject Name</label>
//               <Field name="name" type="text" as={Input} />
//               <ErrorMessage name="name" component="div" className="error-message" />
//             </div>
//             <div style={{ marginTop: '6%', marginBottom: '6%' }} className="form-group">
//               <label htmlFor="image">Image</label>
//               {values.image && (
//                 <div>
//                   <img src={values.image} alt="Subject" style={{ maxWidth: '20%', maxHeight: '20%', marginBottom: '10px' }} />
//                 </div>
//               )}
//               <Upload
//                 name="image"
//                 beforeUpload={() => false}
//                 onChange={(event) => {
//                   setFieldValue('image', event.file);
//                 }}
//               >
//                 <Button style={{ marginTop: '2%' }} icon={<UploadOutlined />}>Select File</Button>
//               </Upload>
//               <ErrorMessage name="image" component="div" className="error-message" />
//             </div>
//             <Button type="primary" htmlType="submit">Save</Button>
//           </Form>
//         )}
//       </Formik>
//     </Card>
//   );
// }

// export default EditPageLeftSide;























import { Formik, Field, Form } from 'formik';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { getsubjectById, updateItem } from "../../src/api/teacher";
import '../index.css'; // Import the CSS file

interface FormValues {
  id: number;
  name: string;
  image: File | null;
}

export function EditPageLeftSide({ id }:any) {
  const [initialValues, setInitialValues] = useState<FormValues>({ id: 0, name: '', image: null });
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getsubjectById(id);
        console.log('Fetched data:', response.data);
        setInitialValues({
          id: response.data.id,
          name: response.data.name,
          image: null,
        });
        setImageUrl(response.data.image); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  const print = (values: FormValues) => {
    console.log(values,"this is the values");
    updateItem(id, values) 
      .then((response: any) => {
        console.log('Update successful:', response);
      })
      .catch((error: any) => {
        console.error('Update failed:', error);
      });
  };

  return (
    <>
      <h2>Edit Form</h2>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={(values) => {
          console.log('Form submitted with values:', values);
          print(values);
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className="form-container">
            <p className="form-label">ID</p>
            <Field type="text" name="id" disabled className="form-input" />
            {errors.id && touched.id ? <div className="form-error">{errors.id}</div> : null}

            <p className="form-label">Add new name for your subject</p>
            <Field type="text" name="name" placeholder="The subject name..." className="form-input" />
            {errors.name && touched.name ? <div className="form-error">{errors.name}</div> : null}

            {imageUrl && (
              <div className="image-container">
                <p className="form-label">Current Image:</p>
                <img src={imageUrl} alt="Current" className="current-image" />
              </div>
            )}

            <p className="form-label">Choose your image</p>
            <input
              type="file"
              name="image"
              onChange={(event) => {
                setFieldValue("image", event?.currentTarget?.files[0]);
              }}
              className="form-input"
            />
            {errors.image && touched.image ? <div className="form-error">{errors.image}</div> : null}

            <Button htmlType='submit' type="primary" className="submit-button">Save</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default EditPageLeftSide;







