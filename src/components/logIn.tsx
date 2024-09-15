import { Button, Input, Card } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useModalStore } from '../assets/stateMangment'; // Adjust the import path as needed
import { UserOutlined } from '@ant-design/icons';

export function LogIn() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      // Handle login logic here
      console.log('Username:', values.username);
      console.log('Password:', values.password);
    },
  });

  return (
    <Card
      title={<><UserOutlined /> Log In</>}
      style={{ width: 300, margin: 'auto', marginTop: '100px' }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Input
          name="username"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}
        <Input.Password
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <Button type="primary" htmlType="submit" style={{ marginTop: '10px' }}>
          Log In
        </Button>
      </form>
    </Card>
  );
}

export default LogIn;
