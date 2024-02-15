function calculateTriangle() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    console.log(height);
    



    const area = 0.5 * height * base;

    const triangleAreaText=document.getElementById('triangle-area');
    triangleAreaText.innerText=area;
    // console.log('The area of triangle is',area)
}