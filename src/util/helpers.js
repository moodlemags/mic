export default {
  getMore: function () {
  const fetchSettings = {
    method: 'GET',
    // body: JSON.stringify(data)
  }
  return fetch('https://mic-test-27abd.firebaseio.com/more-articles.json', fetchSettings).then(res => {
    return res.json();
  })
}
}
