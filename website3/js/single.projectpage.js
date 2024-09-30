fetch(`http://localhost:3000/single`)
.then((res) => {
    return res.json();
})
.then((res) => {
    if (Array.isArray(res)) {
        document.querySelector(".main2").innerHTML = view(res[0]);
    } else {
        document.querySelector(".main2").innerHTML = view(res);
    }
})
.catch((err) => {
    console.log(err);
});

function view(product) {
    let name = "Unknown";
    let age = "Unknown";

    // Check if product.image is a valid URL before parsing
    try {
        const params = new URL(product.image).searchParams;
        name = params.get("name") || name; // Fallback to "Unknown" if not found
        age = parseInt(params.get("age")) || age;
    } catch (error) {
        console.error("Invalid image URL:", error);
    }

    // Return HTML content
    return `
        <div>
            <p>Product Name: ${name}</p>
            <p>Age: ${age}</p>
            <img src="${product.image}" alt="${name}">
        </div>
    `;
}
