const cats = [
    {
        name: "Cataline",
        numberOfClicked: 0,
        image: 'image/cataline.jpg'
    },
    {
        name: "Gippy",
        numberOfClicked: 0,
        image: 'image/gippy.jpg'
    }
];

const addListener = () => {
    const items = document.getElementsByClassName("item");
    for(let i = 0; i < items.length; i++) {
        items.item(i).addEventListener('click', function () {
            cats[i].numberOfClicked++;
            updateView()
        }, false)
    }
};

const updateView = () =>{
    let container = document.getElementsByClassName("container")[0];
    let content = '';
    for(let cat of cats) {
        content += `
            <div class="item">
                <img id="catImage" src="${cat.image}" alt="${cat.name}">
                <div class="item-content">
                    <h3>${cat.name}</h3>
                    <p>You have clicked this cat ${cat.numberOfClicked} times</p>
                </div>
            </div>
        `;
    }
    container.innerHTML = content;
    addListener();
};

document.addEventListener('DOMContentLoaded', function () {
    updateView();
});