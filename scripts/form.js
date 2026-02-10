const products = [
    { id: "p1", name: "UltraWidget 3000" },
    { id: "p2", name: "MegaGadget Pro" },
    { id: "p3", name: "SuperTool X" },
    { id: "p4", name: "WonderDevice 2.0" },
    { id: "p5", name: "AlphaGear Prime" }
];

const productSelect = document.getElementById("product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;       
    option.textContent = product.name; 
    productSelect.appendChild(option);
});
