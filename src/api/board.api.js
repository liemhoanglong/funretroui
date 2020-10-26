export class boardAPI{
    static async getAllBoard(){
        const res = await fetch("http://localhost:3000/boards", {
            method: "GET"
        })
        const data = await res.json();
        console.log(data);
        return data;
    }
}