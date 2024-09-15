import { useGetQuery, fetchTeachers, fetchSubjectById } from "./helper/useGetQuery";
import { deleteItem } from "./helper/useDeleteQuery";
import { addQuery } from "./helper/useAddQuery";
// import { useUpdateQuery } from "./helper/useUpdateQuery";
import {updateQuery} from "./helper/useUpdateQuery"
// import { useQuery } from "react-query";
// import { useMutation, useQueryClient } from '@tanstack/react-query';

const endpoint = "subject";
const endpointTeacher = "teacher";
const key = "subject";
const token = "278|FVKuMLqSwyKTEUQTDNXdtFE2aK0G9oQyHFkg6mlk2f63654a";


// export const updatedData = (id: number, data: object) => useUpdateQuery(key, endpoint, token)


export const useGetAllTeacher = () => useGetQuery(key, endpoint, token);
export const useAddQuery = (data: {id:number, name: string; teacher: string; image: File }) => addQuery(endpoint, token, data);
export const getTeachers = () => fetchTeachers(endpointTeacher, token);

// export const getTeacherById = (id:number) => fetchTeachers(endpointTeacher, token,id);

export async function getsubjectById(id: number) {
  const response = await fetchSubjectById(endpoint, token, id);
  return response;
}

export const updateItem = (id: string | number | undefined, data: {id:number; name: any; image: any; _method:"PUT" }) => {updateQuery(endpoint, token, data,id),console.log(id);
};


// export const updateItem = (data: { name: string; image: File }, id: number) => {
//   const queryClient = useQueryClient();

//   const { data: updatedData, isLoading, error, refetch } = useQuery(
//     ['updateItem', id],
//     () => updateQuery(endpoint, token, data, id),
//     {
//       enabled: false, // Disable automatic query execution
//       onSuccess: () => {
//         // Invalidate and refetch
//         queryClient.invalidateQueries(['items']);
//       },
//     }
//   );

//   return { updatedData, isLoading, error, refetch };
// };

export const deleteSubject = (id: number) => deleteItem(endpoint, token, id);

export { updateQuery };

