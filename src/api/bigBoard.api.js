export class bigBoardAPI{
    static async getAllBigBoard(){
        // const link = "https://funretroapi.herokuapp.com/bigBoards";
        const link = "http://localhost:3000/bigBoards";
        const res = await fetch(link, {
            method: "GET"
        })
        const data = await res.json();
        console.log(data);
        return data;
    }
}