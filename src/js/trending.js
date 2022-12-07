const api_key='api_key=ERjTFswRbCDVsoFx7JV8Kza4fJhkOpJA';
const url='https://api.giphy.com/v1/gifs/trending?';
let limit=20;
const GetTrending = async ({setTrend}) =>{   
   const data=await fetch(url+api_key+'&limit='+limit);
   const gifs_json=await data.json();
   console.log(gifs_json.data);
   setTrend(gifs_json.data);
}
export default GetTrending