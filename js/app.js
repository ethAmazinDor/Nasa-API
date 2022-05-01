document.querySelector('button').addEventListener('click', getMedia)
document.querySelector('iframe').style.display = 'none'
document.getElementById('img-url').style.display = 'none'




function getMedia() {
    const choice = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=qoemZgNaYZbUN53SI1SPx3pGdr94L7txEhpGoGg2&date=${choice}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.media_type === 'image') {

                document.getElementById('img-url').src = data.url
                document.getElementById('wrapper-title').innerText = data.title
                document.getElementById('wrapper-explanation').innerText = data.explanation
                document.querySelector('iframe').style.display = 'none'
                document.getElementById('img-url').style.display = 'block'


            } else if (data.media_type === 'video') {
                document.getElementById('img-url').style.display = 'none'
                document.querySelector('iframe').style.display = 'block'
                document.querySelector('iframe').src = data.url
                document.getElementById('wrapper-title').innerText = data.title
                document.getElementById('wrapper-explanation').innerText = data.explanation


            }

        })
        .catch(err => {
            console.log(err)
        })

}