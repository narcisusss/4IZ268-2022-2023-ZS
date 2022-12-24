document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
var dogForm = document.querySelector('#pokemon-form');
var addButton = document.querySelector('#add-button');
var dogInput = document.querySelector('#dog-name');
var dogList = document.querySelector('#dog-list');
var selecteddog = document.querySelector('#selected-dog');
var fetchDogStats = function (dogName, statsContainer, loader) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.api-ninjas.com/v1/dogs' + dogName.toLowerCase() + '/');
    xhr.addEventListener('load', function () {
      var data = JSON.parse(xhr.responseText);
      //console.log(data);
      var id = document.createElement('p');
      id.innerHTML = 'ID: <strong>' + data.id + '</strong>';
      var max_height = document.createElement('p');
      max_height.innerHTML = 'Max_height: <strong>' + data.max_height + '</strong>';
      var max_weight = document.createElement('p');
      max_weight.innerHTML = 'Max_height: <strong>' + data.max_weight + '</strong>';
      var type = document.createElement('p');
      var dogTypes = data.types.map(function (type) {
        return type.type.name;
      }).join(', ')
      type.innerHTML = 'Type(s): <strong>' + dogTypes + '</strong>';
      
      statsContainer.appendChild(id);
      statsContainer.appendChild(type);
      statsContainer.appendChild(max_height);
      statsContainer.appendChild(max_weight);
  
      statsContainer.removeChild(loader);
    });
    xhr.addEventListener('error', function (e) {
      console.error('XHR error', e);
    });
    xhr.send();
  };