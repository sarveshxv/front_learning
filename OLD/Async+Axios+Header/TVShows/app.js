const form = document.querySelector("#form");
const imagesDiv = document.querySelector(".images");
const clear = document.querySelector("input")

form.addEventListener('submit', async function (e) {
    imagesDiv.innerHTML = '';
    e.preventDefault();
    let query = form.elements.q.value;
    const config = { paramas: {q: query}}
    const req = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
    addImgElement(req.data)
    console.dir(form)
    form.elements.q.value = ''
})

const addImgElement = function (arr) {
    for (let a of arr){
        if (a.show.image){
            const imgEl = document.createElement('IMG');
            imgEl.src = a.show.image.medium
            imagesDiv.append(imgEl)
        }
    }

} 