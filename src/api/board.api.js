export class boardAPI{
    static async getAllBoard(){
        const res = await fetch("https://funretroapi.herokuapp.com/boards", {
            method: "GET"
        })
        const data = await res.json();
        console.log(data);
        return data;
    }
}