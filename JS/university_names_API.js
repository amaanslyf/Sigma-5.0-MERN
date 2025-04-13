let url = "https://universities.hipolabs.com/search?country=";
let btn = document.querySelector("#fetch-universities");

btn.addEventListener("click", async function () {
    let country = document.querySelector("#country").value;
    console.log(country);
    let universities = await getUniversities(country);
    show(universities);
});

async function getUniversities(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}

function show(universities) {
    let list = document.querySelector("#university-list");
    list.innerHTML = ""; // Clear previous results

    for (university of universities) {
        console.log(university.name);

        let listitem = document.createElement("li");
        listitem.innerHTML = university.name;
        list.appendChild(listitem);

    }

}
