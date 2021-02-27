
function apiData() {

  var userInput = document.getElementById('input')

  fetch('https://api.github.com/users/' + userInput.value)

    .then(function (response) {
      
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      var img = document.getElementById('image');
      img.src = data.avatar_url;

      var Name = document.getElementById('name');
      var userName = document.getElementById('username');
      var bio = document.getElementById('bio');
      var follower = document.getElementById('follower');
      var following = document.getElementById('following');
      var repository = document.getElementById('repository');
      var location = document.getElementById('location');
      var url = document.getElementById('url');

      Name.innerHTML = data.name
      userName.innerHTML = data.login
      bio.innerHTML = data.bio
      follower.innerHTML ="FOLLOWERS" + "<br/>" + data.followers
      following.innerHTML ="FOLLOWING" + "<br/>" + data.following
      repository.innerHTML ="REPOSITORY" + "<br/>" + data.public_repos
      location.innerHTML ="LOCATION" + "<br/>" +data.location
      url.innerHTML = "URL : " + data.url

    })
    .catch(function (error) {
      console.log(error)
    })
}