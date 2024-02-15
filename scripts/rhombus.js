function rhombusAreaMeasurement() {
    const rhombusLength = document.getElementById('rhombus-length');
    const rhombusLengthValue = parseFloat(rhombusLength.value);
    const rhombusHeight = document.getElementById('rhombus-height');
    const rhombusHeightValue = parseFloat(rhombusHeight.value);
    const Area = rhombusLengthValue * rhombusHeightValue;
    console.log(Area)

    const rombusArea = document.getElementById('rombusArea')
    rombusArea.innerText = Area;
}