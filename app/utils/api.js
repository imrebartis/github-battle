var axios = require('axios');

module.exports = {
  fetchPopularRepos: function (language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');
    // e.g. if your replace language with 'JavaScript', result is:
    // "https://api.github.com/search/repositories?q=stars:%3E1+language:JavaScript&sort=stars&order=desc&type=Repositories"
    
    // axios returns a promise
    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
      });
  }
};