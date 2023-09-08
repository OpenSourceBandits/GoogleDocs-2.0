import axios from "axios";

class ApiService {
  get = async (url: string) => {
    const response = await axios({
      method: "GET",
      url: url,
    });
    return response;
  };

  post = async (url: string, data: any) => {
    const response = await axios({
      method: "POST",
      url: url,
      data: data,
    });
    return response;
  };

  put = async (url: string, data: any) => {
    const response = await axios({
      method: "PUT",
      url: url,
      data: data,
    });
    return response;
  };

  patch = async (url: string, data: any) => {
    const response = await axios({
      method: "PATCH",
      url: url,
      data: data,
    });
    return response;
  };

  delete = async (url: string) => {
    const response = await axios({
      method: "DELETE",
      url: url,
    });
    return response;
  };
}

export default ApiService;