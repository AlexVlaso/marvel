class CharacterService {
  _baseUrl = "https://gateway.marvel.com:443/v1/public/";
  _apikey = "c609f1b9d796954a7d328f4c9130c80b";
  async _getResponse(url) {
    const response = await fetch(url);
    return await response.json();
  }
  _transformData(char) {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? char.description
        : "No description for this character was found",
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
    };
  }
  async getCharacter(id) {
    const serchUrl = `${this._baseUrl}characters/${id}?apikey=${this._apikey}`;
    const res = await this._getResponse(serchUrl);
    return this._transformData(res.data.results[0]);
  }

  async getAllCharacters() {
    const serchUrl = `${this._baseUrl}characters?limit=9&offset=302&apikey=${this._apikey}`;
    const res = await this._getResponse(serchUrl);
    return res.data.results.map(this._transformData);
  }
}

export default CharacterService;
