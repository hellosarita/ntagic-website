


const scriptURL = 'https://script.google.com/macros/s/AKfycbxji4mWGCLbJULe062n2DgaSUBjva_VYEKHoOQGr0N7wczlkZ9WnEj-vF6s2nn8OqjXSQ/exec';
// const form = document.querySelector("#form1")
// const backbtn = document.querySelector("#back-btn")

// form.addEventListener('submit', e => {
//     e.preventDefault()
   
//     // Loader
//     var loader = document.querySelector(".loader-backdrop")

//     loader.style.display = "";
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {
//         // Show Success Message
//         // Hide Loader
//         form.style.display = "none";
//         loader.style.display = "none";
//         document.querySelector("#success").style.display =""
//     })
//     .catch(error => {
//         // Hide Loader
//         loader.style.display = "none";
//         alert("Something went wrong!")
//     })
//     form.style.display = "none"
// })
//  console.log(form);

// backbtn.addEventListener("click", function() {
//     form.reset()
//     form.style.display = ""; 
//     document.querySelector("#success").style.display ="none"
// })
// console.log (backbtn);
// const scriptURL = 'https://script.google.com/macros/s/AKfycbxoSYsN8JUIm9gSVswIqqcX9cZGturlFFyZa9egY2M8oOWpMOS3Porovp2hbQW3aXWNiA/exec';
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form1');
    var loader = document.querySelector('.loading');
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting normally
      loader.style.display = 'block';
      var formData = new FormData(form);
      
      fetch(scriptURL , {
        method: 'POST',
        body: formData
      })
      .then(function (response) {
        if (response.ok) {
          return response.text();
        }
        throw new Error('Network response was not ok.');
      })
      .then(function (data) {
        loader.style.display = 'none'; 
        // Reset the form
        form.reset();
        
        // Show success message
        var sentMessage = form.querySelector('.sent-message');
        sentMessage.style.display = 'block';
        
        // Hide the message after 3 seconds
        setTimeout(function () {
          sentMessage.style.display = 'none';
        }, 3000);
      })
      .catch(function (error) {
        console.error('There was a problem with your fetch operation:', error);
        // Show error message
        var errorMessage = form.querySelector('.error-message');
        errorMessage.style.display = 'block';
      });
    });
  });