import axios from 'axios';

class ContentService {
  constructor() {
    this.api = 'https://sheetdb.io/api/v1/xne6ljy3acya4';
    this.wordpressApi = 'https://epicycloidal-suppre.000webhostapp.com/wp-json/wp/v2';
  }

  getHomeData() {
    return axios.get(`${this.api}`);
  }

  getProject(id) {
    return axios.get(`${this.wordpressApi}/posts/${id}`).then((response) => response.data);
  }

  getImg(url) {
    return axios.get(url).then((response) => response.data.guid.rendered);
  }

  getProjects() {
    return axios.get(`${this.wordpressApi}/posts`).then((response) => response.data);
  }
}

const contentService = new ContentService();

export default contentService;
