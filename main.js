const main = document.getElementById("main")
const ShowPhonesButton = document.getElementById("phones")
const ShowTabletsButton = document.getElementById("tablets")
const ShowLaptopsButton = document.getElementById("laptops")
const ClearButton = document.getElementById("cleaner")


const ElectronicArticles = [
  {
    id: 10001,
    name: "samsung galaxy s24 ultra",
    price: 0,
    type: "phone",
    gamma: "top",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-dqc0ymlRvTn7sxgdsQEkxqp8N-iiSnnSdQ&s",
  },
  {
    id: 10002,
    name: "samsung galaxy a52",
    price: 0,
    type: "phone",
    gamma: "medium",
    img: "https://i5.walmartimages.com/seo/Pre-Owned-Samsung-Galaxy-A52-5G-Fully-Unlocked-128GB-Black-6-5-in-Refurbished-Good_e3d7be43-b559-41f4-a1a0-f136df049b29.994ec42956a69ec75cbd95b98925a58c.jpeg",
  },
  {
    id: 10003,
    name: "xiaomi redmi note 11 pro",
    price: 0,
    type: "phone",
    gamma: "medium",
    img: "https://xiaomionline.cl/media/catalog/product/C/E/CE503XIA11_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=549&width=549&canvas=549:549",
  },
  {
    id: 10004,
    name: "iphone 14 pro max",
    price: 0,
    type: "phone",
    gamma: "top",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGfkrU4OK4p1p6xjuHHvLEewgy3rv94rjfQ&s",
  },
  {
    id: 10005,
    name: "ipad pro m1",
    price: 0,
    type: "tablet",
    gamma: "top",
    img: "https://home.ripley.cl/store/Attachment/WOP/D113/2000383533346/2000383533346-1.jpg",
  },
  {
    id: 10006,
    name: "samsung galaxy tab s4 lite",
    price: 0,
    type: "tablet",
    gamma: "top",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR53ztfb7WJcx4H7AnTyfELHAsy-D8dKqhpeQ&s",
  },
  {
    id: 10007,
    name: "huawei matebook x pro",
    price: 0,
    type: "laptop",
    gamma: "medium",
    img: "https://img01.huaweifile.com/sg/ms/cl/pms/uomcdn/CL_HW_B2C/pms/202405/gbom/6942103120619/428_428_06DAFFFAE988DAE572780746DB2AF4B1mp.png",
  },
  {
    id: 10008,
    name: "hp probook 430 i3",
    price: 0,
    type: "laptop",
    gamma: "low",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJlp3xyGGHGOFrZE1_GEzH69IYvRNSXTkCg&s",
  },
  {
    id: 10009,
    name: "lenovo thinkpad x1 carbon i7",
    price: 0,
    type: "laptop",
    gamma: "top",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwDhWuy9mimJWpsMJeHCm-jrkeMR1xtBR5A&s",
  },
  {
    id: 10010,
    name: "macbook pro m4",
    price: 0,
    type: "laptop",
    gamma: "top",
    img: "https://centrale.cl/wp-content/uploads/Apple-Macbook-Pro-16-Chip-M3-Pro-Cpu-12Core-y-Gpu-18Core-36Gb-Ram-512Gb_VTjKn4V.webp",
  },
  {
    id: 10011,
    name: "dell xps 13 i7",
    price: 0,
    type: "laptop",
    gamma: "top",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PaRztu52C5KFK71BQi6h0BJn526OGo49Ag&s",
  },
  {
    id: 10012,
    name: "microsoft surface laptop 3 ryzen 7",
    price: 0,
    type: "laptop",
    gamma: "top",
    img: "https://www.elcontainer.cl/25704-thickbox_default/notebook-surface-laptop-3-intel-core-i7-1065g7-16gb-ram-256gb-ssd.jpg",
  },
];

const FormatItemForEach = (TypeDevice) => {
  TypeDevice.forEach(el => {
    const ejemploCard = `
    <div class="contenedor">
        <h3>${el.name}</h3>
        <img src="${el.img}"/>
        <p>Price: ${el.price}</p>
        <p>Type: ${el.type}</p>
        <button class="AddButton">Get</button>
        <br>
    </div>
    
    `
    main.innerHTML += ejemploCard
  })
}

const SortDevice = () => {
  main.innerHTML = ''
  const Form = `
    <h1>Formulario de Registro</h1>
    <form id="registroForm">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="edad">Edad:</label>
        <input type="number" id="edad" name="edad" required min="1" max="120">

        <label for="direccion">Dirección:</label>
        <textarea id="direccion" name="direccion" rows="4" required></textarea>

        <button type="submit">Enviar</button>
    </form>
  `
  main.innerHTML += Form
}
//const AddButton = document.getElementsByClassName("AddButton")
//AddButton.addEventListener("click", SortDevice)


function SearchPhones() {
  main.innerHTML = ''
  const phones = ElectronicArticles.filter(el => el.type == "phone")
  FormatItemForEach(phones)
}
ShowPhonesButton.addEventListener("click", SearchPhones)



function SearchTablets() {
  main.innerHTML = ''
  const tablets = ElectronicArticles.filter(el => el.type == "tablet")
  FormatItemForEach(tablets)
}
ShowTabletsButton.addEventListener("click", SearchTablets)



function SearchLaptops() {
  main.innerHTML = '';
  const laptops = ElectronicArticles.filter(el => el.type == "laptop");
  FormatItemForEach(laptops)
}
ShowLaptopsButton.addEventListener("click", SearchLaptops)


const Clear = () => main.innerHTML = ''
ClearButton.addEventListener("click", Clear)


const AddButton = document.getElementsByClassName("AddButton")
AddButton.addEventListener("click", SortDevice)




