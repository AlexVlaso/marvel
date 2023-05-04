class CharacterService {
  baseUrl = "https://gateway.marvel.com:443/v1/public/";
  apikey = "c609f1b9d796954a7d328f4c9130c80b";

  async getAllCharacters() {
    const serchUrl = `https://gateway.marvel.com:443/v1/public/characters?apikey=c609f1b9d796954a7d328f4c9130c80b`;
    let data = await fetch(serchUrl);
    return await data.json();
  }
}

export default CharacterService;
