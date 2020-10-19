const form = document.querySelector('.form');
const input = document.querySelector('#ImageUploadInput');

const imageName = document.querySelector('.image-name');
const image = document.querySelector('.image');

const loadingWrapper = document.querySelector('.loading-wrapper');
const loadingBar = document.querySelector('.loading-bar');
const loadingNumber = document.querySelector('.loading-number');

// show image name after choosing one
let imageData;
input.addEventListener('change', e => {
  if (e.target.files.length) {
    imageData = e.target.files[0];
    imageName.style.display = 'block';
    imageName.innerText = imageData.name;
  }
});

// Form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  //Link
  const api_link = '...';

  // Data 
  const formData = new FormData();
  formData.append('image', imageData);

  //config
  const config = {
    // show Loading Bar while Uploading
    onUploadProgress: progressEvent => {
      const { loaded, total } = progressEvent;
      const presentege = Math.round((loaded * 100) / total);
      loadingWrapper.style.display = "block";
      loadingBar.style.width = presentege + '%';
      loadingNumber.innerText = presentege + '%';
    },
    // telling the server what type of content we send
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }
  //request
  axios.patch(api_link, formData, config).then(res => {
    // show image after uploading
    image.style.display = "block";
    image.setAttribute('src', res.data.user.newAvatar);
    // Hide progress bar after uploading
    loadingWrapper.style.display = "none";
  });
});
