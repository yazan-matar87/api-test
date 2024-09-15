import { Formik, Field, Form } from 'formik';
import { Modal, Button } from 'antd';
import { TableSchema } from "../schema/schema";
import { useState, useEffect } from 'react';
import { useAddQuery, getTeachers } from "../../src/api/teacher";
import { useModalStore } from '../assets/stateMangment'; // Adjust the import path as needed
import { UserOutlined } from '@ant-design/icons';
import "../index.css"

interface FormValues {
  name: string;
  image: File | null;
  teacher: number;
}

export function ModelStructure() {
  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const hideModal = useModalStore((state) => state.hideModal);

  const [formValues, setFormValues] = useState<FormValues | null>(null);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getTeachers()
      .then(response => {
        setTeachers(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleOk = () => {
    if (formValues) {
      const data = new FormData();
      data.append('name', formValues.name);
      if (formValues.image) {
        data.append('image', formValues.image);
      }
      data.append('teacher', formValues.teacher.toString());
  
      console.log("Form Data:", formValues);
      useAddQuery(formValues);
    }
    hideModal();
  };

  const handleCancel = () => {
    hideModal();
  };

  return (
    <>
      <Modal
        title={<><UserOutlined /> Add Item</>}
        open={isModalOpen}
        onOk={handleOk}
        footer={false}
        onCancel={handleCancel}
      >
        <div className="form-container">
          <Formik
            initialValues={{ name: "", image: null, teacher: 0 }}
            validationSchema={TableSchema}
            onSubmit={(values) => {
              console.log(values);
              setFormValues(values as FormValues);
              handleOk();
            }}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form>
                <label className="form-label">Add your subject name</label>
                <br></br>
                <Field className="form-input" type="text" name="name" placeholder="The subject name..." />
                {errors.name && touched.name ? <div className="form-error">{errors.name}</div> : null}
                 <br></br>
                <label className="form-label">Choose your image</label>
                <div className="image-container">
                  <input
                    className="form-input"
                    type="file"
                    name="image"
                    onChange={(event) => {
                      setFieldValue("image", event?.currentTarget?.files[0]);
                    }}
                  />
                  {errors.image && touched.image ? <div className="form-error">{errors.image}</div> : null}
                </div>

                <label className="form-label">Add your teacher's name</label>
                <br></br>
                <Field className="form-input" as="select" name="teacher">
                  <option value="" aria-placeholder='Select a teacher'></option>
                  {teachers.map(teacher => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.name}
                    </option>
                  ))}
                </Field>
                {errors.teacher && touched.teacher ? <div className="form-error">{errors.teacher}</div> : null}

                <br />
                <br />
                <Button className="submit-button" htmlType='submit' type="primary">Submit</Button>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
}

export default ModelStructure;
