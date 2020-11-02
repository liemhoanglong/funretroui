import axiosClient from "./axiosClient";

const bigBoardAPI = {
    getAllBigBoard: () => {
        const url = 'bigBoards';
        return axiosClient.get(url);
    },
    
    get: (id) => {
        const url = `bigBoards/${id}`;
        return axiosClient.get(url);
    }
}

export default bigBoardAPI;

