import * as yup from 'yup';


// export const TableSchema = yup.object({
//     name: yup.string().required('User ID is required'),
//     image: yup.mixed().nullable(),
//     // image: yup.string().required('Title is required'),
//     // completed: yup.boolean().required('Completion status is required'),
//   });

  
export const TableSchema = yup.object({
  name: yup.string().required('Name is required'),
  teacher: yup.mixed().required('Teacher is required'),
  image: yup.mixed().nullable(),
});
export const validationSchema = yup.object().shape({
  name: yup.string().required('Please input the name!'),
  teacher: yup.string().required('Please select a teacher!'),
});