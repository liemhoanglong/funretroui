export class boardAPI{
    static async getAllBoard(){
        // const link = "https://funretroapi.herokuapp.com/boards";
        const link = "http://localhost:3000/boards";
        const res = await fetch(link, {
            method: "GET"
        })
        const data = await res.json();
        console.log(data);
        return data;
    }
}