export default {
  getMore: function () {
  const fetchSettings = {
    method: 'GET'
  }
  return fetch('https://mic-test-27abd.firebaseio.com/more-articles.json', fetchSettings).then(res => {
    return res.json();
  })
}
}
