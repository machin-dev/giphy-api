const api_key='api_key=ERjTFswRbCDVsoFx7JV8Kza4fJhkOpJA';
const url='https://api.giphy.com/v1/gifs/search?';
let limit=10;
let category='dogs';
const GetData = async (categ, {setResult}) =>{
    category=categ;
    console.log(category);
   const data=await fetch(url+api_key+'&q='+category+'&limit='+limit);
   const gifs_json=await data.json();
   console.log(gifs_json.data);
   setResult(gifs_json.data);
}
export default GetData
