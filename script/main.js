const cats = [
    {
        name: "Cataline",
        numberOfClicked: 0,
        image: 'image/cataline.jpg',
        age: 40,
        gender: "male"
    },
    {
        name: "Gippy",
        numberOfClicked: 0,
        image: 'image/gippy.jpg',
        age: 120,
        gender: "female"
    },

    {
        name: "Cleo",
        numberOfClicked: 0,
        image: 'image/cleo.jpg',
        age: 120,
        gender: "female"
    },

    {
        name: "Milo",
        numberOfClicked: 0,
        image: 'image/milo.jpg',
        age: 120,
        gender: "female"
    },

    {
        name: "Grey",
        numberOfClicked: 0,
        image: 'image/grey.jpg',
        age: 120,
        gender: "female"
    }
];

const showCatDetail = cat => {
    let content = `
             <div class="item side">
                <img class="cat-image" src="${cat.image}" alt="gippy">
                <div class="item-content">
                    <table>
                        <tr>
                            <td>Name : </td>
                            <th>${cat.name}</th>
                        </tr>
                        <tr>
                            <td>Age : </td>
                            <th>${cat.age} days</th>
                        </tr>
                        <tr>
                            <td>Gender : </td>
                            <th>${cat.gender}</th>
                        </tr>
                        <tr>
                            <td>Clicked : </td>
                            <th>${cat.numberOfClicked} times</th>
                        </tr>
                    </table>
                </div>
            </div>
    `;

    let aside = document.getElementsByTagName('aside')[0];
    console.log(aside);
    aside.innerHTML = content;
    aside.style.display = "initial";

};

const addListener = () => {
    const catImages = document.getElementsByClassName("cat-image");
    const catNames = document.getElementsByClassName("cat-name");

    for (let i = 0; i < catImages.length; i++) {
        catImages.item(i).addEventListener('click', function () {
            cats[i].numberOfClicked++;
            updateView()
        }, false);
    }

    for (let i = 0; i < catNames.length; i++) {
        catNames.item(i).addEventListener("click", function () {
            showCatDetail(cats[i]);
        })
    }
};

const updateView = () => {
    let container = document.getElementsByClassName("container")[0];
    let content = '';
    for (let cat of cats) {
        content += `
            <div class="item">
                <img class="cat-image" src="${cat.image}" alt="${cat.name}">
                <div class="item-content">
                    <h3 class="cat-name">${cat.name}</h3>
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