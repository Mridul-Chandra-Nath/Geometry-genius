function calculateRectangle(){
    const rectangleLengthText=document.getElementById('rectangle-length');
    const LengthValue=parseFloat(rectangleLengthText.value);

    const rectangleWidthText=document.getElementById('rectangle-height');
    const WidthValue=parseFloat(rectangleLengthText.value);


    const Area=LengthValue * WidthValue;

    const area=document.getElementById('rectangle-area');

    area.innerText=Area;





}