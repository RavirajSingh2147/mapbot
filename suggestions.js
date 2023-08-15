// function signOut() {
//       var auth2 = gapi.auth2.getAuthInstance();
//       auth2.signOut().then(function() {
//         console.log('User signed out.');
//       });
//     }
    // function init() {
    //   gapi.load('auth2', function() {
    //     gapi.auth2.init({
    //       client_id: '46470906791-aieqkd49qi3bvdmvqsa6d9p9cgibf8lu.apps.googleusercontent.com'
    //     }).then(function() {
    //       console.log('Google API client initialized');
    //     }, function(error) {
    //       console.error('Error initializing Google API client: ' + error);
    //     });
    //   });
    // }
    // function signOut() {
    //     var auth2 = gapi.auth2.getAuthInstance();
    //     auth2.signOut().then(function() {
    //       console.log('User signed out.');
    //       // Redirect the user back to the original page
    //       window.location.href = "http://localhost/quick-chatbot-main/";
    //     });
    //   }


      $(document).ready(function() {
        $('#suggestion-form').submit(function(event) {
          event.preventDefault();
  
          // Get the suggestion from the form
          const suggestion = $('#suggestion').val().trim();
  
          // Check if suggestion is empty
          if (suggestion === '') {
            // Display error message
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please fill out the suggestion field.',
              confirmButtonText: 'OK'
            });
          } else {
            // Clear the form
            $('#suggestion').val('');
  
            // Display success message
            Swal.fire({
              icon: 'success',
              title: 'Thanks for your suggestion!',
              text: 'We appreciate your feedback.',
              confirmButtonText: 'OK'
            });
          }
        });
  
        // Submit form when Enter key is pressed
        $('#suggestion').on('keydown', function(event) {
          if (event.key === 'Enter') {
            event.preventDefault();
            $('#suggestion-form').submit();
          }
        });
      });
   