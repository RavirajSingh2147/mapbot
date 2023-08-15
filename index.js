function handleCredentialResponse(response){
    console.log("Hann Bhai chal raha hai");

    const responsePayload = decodeJwtResponse(response.credential);
    console.log("ID:" + responsePayload.sub);
    console.log("Full Name: " + responsePayload.name);
    console.log("Given Name: " + responsePayload.given_name);
    console.log("Family Name: " + responsePayload.family_name);
    console.log("Email: " + responsePayload.email);
    window.location = 'http://localhost/quick-chatbot-main/Suggestions.php'
}
//decode jwt
function decodeJwtResponse(data){
    var tokens = data.split(".");
    return JSON.parse(atob(tokens[1]));
}


