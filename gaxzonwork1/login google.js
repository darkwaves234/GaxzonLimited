gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: 'YOUR_CLIENT_ID',
    });
  });
  function onSignIn(googleUser) {
    // You can access user information and perform actions here.
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // User ID
    console.log('Name: ' + profile.getName()); // User's name
    console.log('Email: ' + profile.getEmail()); // User's email
    // You can use this information to log the user in on your website.
  }
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
      