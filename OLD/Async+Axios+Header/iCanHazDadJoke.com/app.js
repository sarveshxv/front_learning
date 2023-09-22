const h1 = document.querySelector("h1");
const bt = document.querySelector("#next");
let id = 1;

const sw = async () => {
    const header = { headers: { Accept: 'application/json' } }
    const req = await axios.get(`https://icanhazdadjoke.com/`, header)
    h1.innerText = req.data.joke
    console.log(req.data)
}

bt.addEventListener("click", () => {
    sw()
})

sw(id);

