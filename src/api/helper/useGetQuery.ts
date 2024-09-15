import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { string } from "yup";

export function useGetQuery(key: string, endpoint: string, token: string) {
    const headers = {
        'Authorization': `Bearer ${token}`,
        "x-cycle-id": 1,
        "x-branch-id": 1,
        "x-term-id": 1
    }; const fetchData = async () => {
        const response = await axios.get(`https://school-demo-back.point-dev.net/api/${endpoint}?course_id=4`, { headers });
        // console.log(response.data.data,"this is you want");

        return response.data.data;
    };
    return useQuery({
        queryKey: [key],
        queryFn: fetchData,
    });
}
export const fetchTeachers = async (endpoint:string,token: string) => {
  const headers = {
    'Authorization': `Bearer ${token}`,
    "x-cycle-id": 1,
    "x-branch-id": 1,
    "x-term-id": 1
  };

  try {
    const response = await axios.get(`https://school-demo-back.point-dev.net/api/${endpoint}`, { headers });
    // console.log(response.data.data);
    return response.data.data
  } catch (error) {
    console.error('Error fetching teachers:', error);
  }
};


export async function fetchSubjectById (endpoint:string,token: string,id:number){
    const headers = {
    'Authorization': `Bearer ${token}`,
    "x-cycle-id": 1,
    "x-branch-id": 1,
    "x-term-id": 1
  };

  try {
    const response = await axios.get(`https://school-demo-back.point-dev.net/api/${endpoint}/${id}`, { headers });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching teacher:', error);
    throw error; // Re-throw the error to handle it in the calling function if needed
  }
}

