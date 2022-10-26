// Select DOM elements to work with
const welcomeDiv = document.getElementById("WelcomeMessage");
const signInButton = document.getElementById("SignIn");
const signOutButton = document.getElementById("SignOut");
const cardDiv = document.getElementById("card-div");
const cardDivmain = document.getElementById("card-divmain");
const mailButton = document.getElementById("readMail");
const profileButton = document.getElementById("seeProfile");
const profileDiv = document.getElementById("profile-div");

function showWelcomeMessage(username) {
    // Reconfiguring DOM elements
    cardDiv.style.display = 'initial';
    cardDivmain.style.display = 'none';
    welcomeDiv.innerHTML = `Welcome ${username}`;
    signInButton.setAttribute("onclick", "signOut();");
    signInButton.innerHTML = "Sign Out";
}
