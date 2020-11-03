import axiosClient from "./axiosClient";

const userAPI = {
    // getAllBigBoard: () => {
    //     const url = 'bigBoards';
    //     return axiosClient.get(url);
    // },
    
    get: (userId) => {
        const url = `users/${userId}`;
        return axiosClient.get(url);
    },
 
    add: (data) => {
        const url = `users/`;
        return axiosClient.post(url, data);
    },

    edit: (id, data) => {
        const url = `users/${id}`;
        return axiosClient.patch(url, data);
    },
    
    // delete: (id) => {
    //     const url = `bigBoards/${id}`;
    //     return axiosClient.delete(url);
    // },
}

export default userAPI;

