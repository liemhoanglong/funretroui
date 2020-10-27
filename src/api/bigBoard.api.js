export class bigBoardAPI{
    static async getAllBigBoard(){
        const res = await fetch("https://funretroapi.herokuapp.com/bigBoards", {
            method: "GET"
        })
        const data = await res.json();
        console.log(data);
        return data;
    }
}