import axios from "axios";
import { isupdateSuccesfuly } from "../../assets/alarmes";
import { isupdateError } from "../../assets/alarmes";

async function urlToFile(url: string, filename: string, mimeType: string): Promise<File> {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  return new File([buffer], filename, { type: mimeType });
}

export async function updateQuery(endpoint: string, token: string, data: { id: number; name: any; image: any; _method: string }, id: number) {
  const headers = {
    'Authorization': `Bearer ${token}`,
    'x-cycle-id': 1,
    'x-branch-id': 1,
    'x-term-id': 1
  };

  data._method = "PUT";
  data.id = id;
  console.log(data, "this is the data");

  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('id', data.id.toString());
  formData.append('_method', data._method);

  if (typeof data.image === 'string') {
    const file = await urlToFile(data.image, 'image.jpg', 'image/jpeg');
    formData.append('image', file);
  } else if (data.image instanceof File) {
    formData.append('image', data.image);
  }

  try {
    const response = await axios.post(`https://school-demo-back.point-dev.net/api/${endpoint}/${id}?course_id=4`, formData, {
      headers,
    });
    isupdateSuccesfuly();
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response ? error.response.data : error.message);
      isupdateError(error);
    } else {
      console.error("Unexpected error:", error);
      isupdateError(error);
    }
    throw error;
  }
}
