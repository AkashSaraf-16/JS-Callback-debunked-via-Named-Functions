// Way to avoid the callbackhell

getUser(1, displayUser);

function getUser(id, callback) {
  console.log('Fetching the user...');
  setTimeout(() => {
    callback({ id: id, name: 'Akash' });
  }, 2000);
}
function displayUser(user) {
  console.log(user.name);
  getPhotos(user.name, displayPhotos);
}
function getPhotos(photos, callback) {
  console.log('Fetching the photos of user...');
  setTimeout(() => {
    callback(['with mom', 'beach', 'with her', 'at LA']);
  }, 2000);
}
function displayPhotos(photos) {
  console.log('Photos: ' + photos);
  getDetails(photos[0], displayDetails);
}
function getDetails(details, callback) {
  console.log('Fetching the details...');
  setTimeout(() => {
    callback('Ready for the trip with ....');
  }, 2000);
}
function displayDetails(details) {
  console.log('Last detail is :', details);
}

