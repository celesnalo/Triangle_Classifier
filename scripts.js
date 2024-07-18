document.getElementById("submitBtn").onclick = () => {
    let side1 = parseFloat(document.getElementById("side-1").value);
    let side2 = parseFloat(document.getElementById("side-2").value);
    let side3 = parseFloat(document.getElementById("side-3").value);
    const resultImage = document.getElementById("result-image");

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        document.getElementById("show-results").textContent = "Please enter valid numbers for all sides.";
        resultImage.style.display = "none";
        return;
    }

    if (side1 === side2 && side2 === side3) {
        document.getElementById("show-results").textContent = `Your entered lengths ${side1}, ${side2} and ${side3} show that you have an Equilateral Triangle.`;
        resultImage.src = "assets/equilateral.jpg";
        resultImage.alt = "Equilateral Triangle";
        resultImage.style.display = "block";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        document.getElementById("show-results").textContent = `Your entered lengths ${side1}, ${side2} and ${side3} show that you have an Isosceles Triangle.`;
        resultImage.src = "assets/isosceles.png";
        resultImage.alt = "Isosceles Triangle";
        resultImage.style.display = "block";
    } else {
        document.getElementById("show-results").textContent = `Your entered lengths ${side1}, ${side2} and ${side3} show that you have a Scalene Triangle.`;
        resultImage.src = "assets/scalene.png";
        resultImage.alt = "Scalene Triangle";
        resultImage.style.display = "block";
    }
};
