export default {
  getFirstTen: function (data) {
  const fetchSettings = {
    method: 'GET',
    body: data
  }
  console.log(data);
  return fetch('https://mic-test-27abd.firebaseio.com/more-articles.json', fetchSettings).then(res => {
    return res.json();
  })
},
  getSecondTen: function () {
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://final-project-db431.firebaseio.com/favorites.json', fetchSettings).then(res => {
      return res.json();
    })
  }
}
