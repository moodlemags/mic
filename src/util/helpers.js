import axios from 'axios';

export default {
  getFirstTen: function () {
    const axiosSettings = {
      method: 'GET',
    }
    return axios.get('./more-articles.json', axiosSettings).then(res => {
      return res
    })
  }
}
