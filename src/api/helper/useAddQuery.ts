import axios from "axios";
import { isAddedSuccesfuly, isAddedError } from "../../assets/alarmes"
// import { string } from "yup";




export async function addQuery(endpoint: string, token: string, data: { name: string; teacher: string; image: File }) {
  console.log(1);
  
    const headers = {
      'Authorization': `Bearer ${token}`,
      "x-cycle-id": 1,
      "x-branch-id": 1,
      "x-term-id": 1
    };
  
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('image', data.image);
    formData.append('teacher', data.teacher);
  
    try {
      console.log("Sending request with headers:", headers);
      console.log("Sending request to endpoint:", `https://school-demo-back.point-dev.net/api/${endpoint}?course_id=4`);
      const response = await axios.post(`https://school-demo-back.point-dev.net/api/${endpoint}?course_id=4`, formData, { headers });
      console.log("Response:", response);
      isAddedSuccesfuly();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response ? error.response.data : error.message);
      } else {
        console.error("Unexpected error:", error);
      }
      isAddedError(error);
      throw error;
    }
  }

           
               
    // const addData = async () => {
    //     await axios.post(`https://school-demo-back.point-dev.net/api/${endpoint}?course_id=4`, { data }, { headers })
    //         .then((response) => {
    //             console.log("i am after then");
                
    //             isAddedSuccesfuly();
    //             console.log(response);

    //         })
    //         .catch((error) => {
    //             console.log("i am after error");
    //             isAddedError(error);
    //             throw error;
    //         });
    // };
    // return useQuery({
    //     queryKey: [key],
    //     queryFn: addData,
    // });    
// } 