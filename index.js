function changeImg(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {
        if(response.ok){
            response.json()
        } else {
            console.log("Error. We are sorry!!!")
        }
    })
    .then(data => {
        document.getElementById("testImg").src = data.message;
    })
    .catch(console.error());
}