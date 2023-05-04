class CharacterService {
  _baseUrl = "https://gateway.marvel.com:443/v1/public/";
  _apikey = "c609f1b9d796954a7d328f4c9130c80b";
  async _getResponse(url) {
    const response = await fetch(url);
    return await response.json();
  }
  _transformData(char) {
    return {
      name: char.name,
      description: char.description,
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
    };
  }
  async getCharacter(id) {
    const serchUrl = `${this._baseUrl}characters/${id}?apikey=${this._apikey}`;
    const res = await this._getResponse(serchUrl);
    return this._transformData(res);
  }

  async getAllCharacters() {
    const serchUrl = `${this._baseUrl}characters?apikey=${this._apikey}`;
    const res = await this._getResponse(serchUrl);
    return res.map(this._transformData);
  }
}

export default CharacterService;
