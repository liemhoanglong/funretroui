export class bigBoardAPI{
    static async getAllBigBoard(){
        // const link = "https://funretroapi.herokuapp.com/bigBoards";
        // const link = "http://localhost:3000/bigBoards";
        let link = process.env.REACT_APP_API_URL + "bigBoards";
        const res = await fetch(link, {
            method: "GET"
        })
        const data = await res.json();
        console.log(data);
        return data;
    }
}