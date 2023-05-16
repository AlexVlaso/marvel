import { useHttp } from "../hooks/http.hook";

const useCharacterService = () => {
  const _baseUrl = "https://gateway.marvel.com:443/v1/public/";
  const _apikey = "c609f1b9d796954a7d328f4c9130c80b";
  const { loading, error, process, request, clearError, setProcess } =
    useHttp();

  function _transformCharData(char) {
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
  function _transformComicsData(comics) {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description
        ? comics.description
        : "No description for this comics was found",
      pageCount: comics.pageCount
        ? `${comics.pageCount} pages`
        : "No information about the number of pages",
      price:
        comics.prices[0]?.price !== 0
          ? `${comics.prices[0]?.price}$`
          : "NOT AVAILABLE",
      thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
      language: comics.textObjects[0]?.language || "en-us",
    };
  }
  async function getCharacter(id) {
    const serchUrl = `${_baseUrl}characters/${id}?apikey=${_apikey}`;
    const res = await request(serchUrl);
    return _transformCharData(res.data.results[0]);
  }
  async function getCharacterByName(name) {
    const serchUrl = `${_baseUrl}characters?name=${name}&apikey=${_apikey}`;
    const res = await request(serchUrl);
    return res.data.results.map(_transformCharData);
  }

  async function getAllCharacters(offset = 302) {
    const serchUrl = `${_baseUrl}characters?limit=9&offset=${offset}&apikey=${_apikey}`;
    const res = await request(serchUrl);
    return res.data.results.map(_transformCharData);
  }
  async function getAllComics(offset = 0) {
    const serchUrl = `${_baseUrl}comics?limit=8&offset=${offset}&apikey=${_apikey}`;
    const res = await request(serchUrl);
    return res.data.results.map(_transformComicsData);
  }
  async function getComic(id) {
    const serchUrl = `${_baseUrl}comics/${id}?&apikey=${_apikey}`;
    const res = await request(serchUrl);
    return _transformComicsData(res.data.results[0]);
  }
  return {
    loading,
    error,
    process,
    setProcess,
    getCharacter,
    getAllCharacters,
    getAllComics,
    getComic,
    clearError,
    getCharacterByName,
  };
};

export default useCharacterService;
