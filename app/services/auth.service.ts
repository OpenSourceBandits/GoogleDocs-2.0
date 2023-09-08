import ApiService from "./api.service";

class AuthService extends ApiService {
  login = async (email: string, password: string) => {
    const response = await this.post("/auth/login", {
      email,
      password,
    });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  };

  logout = () => {
    localStorage.removeItem("user");
  };

  register = async (name: string, email: string, password: string) => {
    const response = await this.post("/auth/register", {
      name,
      email,
      password,
    });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  };

  getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user") as string);
  };

  checkEmail = async (email: string) => {
    // const response = await this.get(`/auth/checkEmail/${email}`);
    // return response;
    if (email === "kunalvish17360@gmail.com") return true;
    else return false;
  };

  checkPassword = async (password: string) => {
    const response = await this.get(`/auth/checkPassword/${password}`);
    return response;
  };
}

export default new AuthService();
