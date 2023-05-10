import { useHttp } from "../hooks/http.hook";

const useCharacterService = () => {
  const _baseUrl = "https://gateway.marvel.com:443/v1/public/";
  const _apikey = "c609f1b9d796954a7d328f4c9130c80b";
  const { loading, error, request } = useHttp();

  function _transformData(char) {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? char.description
        : "No description for this character was found",
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  }
  async function getCharacter(id) {
    const serchUrl = `${_baseUrl}characters/${id}?apikey=${_apikey}`;
    const res = await request(serchUrl);
    return _transformData(res.data.results[0]);
  }

  async function getAllCharacters(offset = 302) {
    const serchUrl = `${_baseUrl}characters?limit=9&offset=${offset}&apikey=${_apikey}`;
    const res = await request(serchUrl);
    return res.data.results.map(_transformData);
  }
  return { loading, error, getCharacter, getAllCharacters };
};

export default useCharacterService;
