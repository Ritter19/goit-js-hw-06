const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ul = document.querySelector(".gallery");

for (let image of images) {
  let li = document.createElement("li");
  li.innerHTML = `<img src="${image.url}" alt="${image.alt}" />`;
  ul.appendChild(li);
}

ul.style.display = "flex";
ul.style.flexWrap = "wrap";
ul.style.justifyContent = "center";
ul.style.gap = "30px";
ul.style.listStyle = "none";
ul.style.padding = "20px";
ul.style.background = "#ADD8E6";

const allImages = ul.querySelectorAll("img");
allImages.forEach((img) => {
  img.style.width = "600px";
  img.style.height = "400px";
  img.style.objectFit = "cover";
  img.style.border = "4px solid #222";
  img.style.borderRadius = "12px";
  img.style.boxShadow = "4px 8px 20px rgba(0, 0, 0, 0.3)";
});
