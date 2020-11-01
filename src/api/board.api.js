export class boardAPI{
    static async getAllBoard(){
        // const link = "https://funretroapi.herokuapp.com/boards";
        // const link = "http://localhost:3000/boards";
        let link = process.env.REACT_APP_API_URL + "boards";
        const res = await fetch(link, {
            method: "GET"
        })
        const data = await res.json();
        console.log(data);
        return data;
    }
}