import axios from "axios";


export async function deleteItem(endpoint: string, token: string, id: number) {
    const headers = {
      'Authorization': `Bearer ${token}`,
      "x-cycle-id": 1,
      "x-branch-id": 1,
      "x-term-id": 1
    };
  
    try {
      console.log("Sending DELETE request with headers:", headers);
      console.log("Sending DELETE request to endpoint:", `https://school-demo-back.point-dev.net/api/${endpoint}/${id}?course_id=4`);
      const response = await axios.delete(`https://school-demo-back.point-dev.net/api/${endpoint}/${id}?course_id=4`, { headers });
      console.log("Response:", response);
      // isDeletedSuccessfully();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response ? error.response.data : error.message);
      } else {
        console.error("Unexpected error:", error);
      }
      // isDeletedError(error);
      throw error;
    }
  }
  

  


// export function useDeletQuery(key: string, endpoint: string,id:number) {
//     const deletData = async () => {
//         const response = await axios(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`);    
//         console.log(response.data);
//         return response.data;
//     };

//     return useQuery({
//         queryKey: [key],    
//         queryFn: deletData,
//     });
// }

