import axiosClient from "./axiosClient";

const boardAPI = {
    // getAllBoard: () => {
    //     const url = '/boards';
    //     return axiosClient.get(url);
    // },
    
    get: (bigBoardId) => {
        const url = `boards/${bigBoardId}`;
        return axiosClient.get(url);
    },
 
    add: (data) => {
        const url = `boards/`;
        return axiosClient.post(url, data);
    },

    edit: (id, data) => {
        const url = `boards/${id}`;
        return axiosClient.patch(url, data);
    },
    
    delete: (id) => {
        const url = `boards/${id}`;
        return axiosClient.delete(url);
    },
}

export default boardAPI;