const api_key='api_key=ERjTFswRbCDVsoFx7JV8Kza4fJhkOpJA';
const url='https://api.giphy.com/v1/gifs/random?';
const GetRandom = async ({setSticker}) =>{   
   const data=await fetch(url+api_key);
   const gifs_json=await data.json();  
   console.log(gifs_json.data.images.original.url);
   setSticker(gifs_json.data);
   
}
export default GetRandom