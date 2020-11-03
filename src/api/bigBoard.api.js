import axiosClient from "./axiosClient";

const bigBoardAPI = {
    // getAllBigBoard: () => {
    //     const url = 'bigBoards';
    //     return axiosClient.get(url);
    // },
    
    get: (userId) => {
        const url = `bigBoards/${userId}`;
        return axiosClient.get(url);
    },
 
    add: (data) => {
        const url = `bigBoards/`;
        return axiosClient.post(url, data);
    },

    edit: (id, data) => {
        const url = `bigBoards/${id}`;
        return axiosClient.patch(url, data);
    },
    
    delete: (id) => {
        const url = `bigBoards/${id}`;
        return axiosClient.delete(url);
    },
}

export default bigBoardAPI;

