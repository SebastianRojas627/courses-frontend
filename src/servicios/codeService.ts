import axios, { Axios, AxiosResponse } from "axios";

const axioscursos =  axios.create({
     baseURL: "http://localhost:1337/api",
   // baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const courseService = {
    async getCodes(): Promise<AxiosResponse<any[]>> {
        const url = "/cursos";
        const response = await axioscursos.get(url, {
            withCredentials: true,
            params: {
                'populate': '*',     
            }
        });
        return response.data;
    },
}