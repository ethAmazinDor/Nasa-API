
let queryUrl = "https://api.nasa.gov/planetary/apod?"
let queryKey = "api_key=iuxySVY1Cx7jNRPvyBaFJfcyPaR7MNT0NwZZew2c"
let queryFull = queryUrl + queryKey

//create an xml request object and save it as a variable 
let xmlhttp = new XMLHttpRequest()

//onready state property to specifiy a fucntion to excute everytime the status of the xmlhttp object changes

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText)

        let copyright = data['copyright']
        let date = data['date']
        let explanation = data['explanation']
        let hdurl = data['hdurl']
        let media_type = data['media_type']
        let title = data['title']
        let url = data['url']

        document.getElementById('img-url').src = url
        document.getElementById('wrapper-title').innerText = title
        document.getElementById('copyright').innerText = copyright
        document.getElementById('wrapper-explanation').innerText = explanation
        document.getElementById('wrapper-hdurl').href = hdurl

    }
}

xmlhttp.open('GET', queryFull, true)
xmlhttp.send()


