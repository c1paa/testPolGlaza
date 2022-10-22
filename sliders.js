//slider 1
let offset = 0;
let paint = 0;
let width_art = document.querySelector('.img_test').offsetWidth;

const sliderLine = document.querySelector('.slider-line');
check();
centering_butts();  
document.querySelector('.slider-next').addEventListener('click', function(){
    width_art = document.querySelector('.img_test').offsetWidth;
    offset += width_art;
    if (offset > width_art * 3){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    check();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    width_art = document.querySelector('.img_test').offsetWidth;
    offset -= width_art;
    if (offset < 0){
        offset = width_art * 3;
    }
    sliderLine.style.left = -offset + 'px'; 
    check();
});
document.querySelector('.slider-1').addEventListener('click', function () {
    width_art = document.querySelector('.img_test').offsetWidth;
    offset = 0;
    sliderLine.style.left = -offset + 'px';
    check();
    // console.log(width_art)
});
document.querySelector('.slider-2').addEventListener('click', function () {
    width_art = document.querySelector('.img_test').offsetWidth;
    offset = width_art;
    sliderLine.style.left = -offset + 'px';
    check();
});
document.querySelector('.slider-3').addEventListener('click', function () {
    width_art = document.querySelector('.img_test').offsetWidth;
    offset = width_art * 2;
    sliderLine.style.left = -offset + 'px';
    check();
});
document.querySelector('.slider-4').addEventListener('click', function () {
    width_art = document.querySelector('.img_test').offsetWidth;
    offset = width_art * 3;
    sliderLine.style.left = -offset + 'px';
    check();
});
function check() {
    // console.log("check")
    // console.log(offset)
    if (offset == 0) {
        paint = 0;
        document.getElementsByClassName('slider-prev')[0].style.opacity = 0;
        document.getElementsByClassName("slider-prev")[0].style.pointerEvents = "none";
    }
    else{
        document.getElementsByClassName('slider-prev')[0].style.opacity = 1;
        document.getElementsByClassName("slider-prev")[0].style.pointerEvents = "auto";
    }
    if (offset == width_art) {
        paint = 1;
    }
    if (offset == width_art * 2) {
        paint = 2;
    }
    if (offset == width_art * 3) {
        paint = 3;
        document.getElementsByClassName('slider-next')[0].style.opacity = 0;
        document.getElementsByClassName("slider-next")[0].style.pointerEvents = "none";
    }
    else{
        document.getElementsByClassName('slider-next')[0].style.opacity = 1;
        document.getElementsByClassName("slider-next")[0].style.pointerEvents = "auto";
    }
    if (paint == 0) {
        //document.getElementsByClassName('name_slider')[0].style.border.color = "black";
        document.getElementsByClassName('slider-1')[0].style.background = "black";
        // document.getElementsByClassName('slider-1')[0].style.bordercolor = "black";
        document.getElementsByClassName('slider-2')[0].style.background = "white";
        // document.getElementsByClassName('slider-2')[0].style.bordercolor = "#646464";
        document.getElementsByClassName('slider-3')[0].style.background = "white";
        // document.getElementsByClassName('slider-3')[0].style.bordercolor = "#646464";
        document.getElementsByClassName('slider-4')[0].style.background = "white";
        // document.getElementsByClassName('slider-4')[0].style.bordercolor = "#646464";
    }
    if (paint == 1) {
        document.getElementsByClassName('slider-1')[0].style.background = "white";
        // document.getElementsByClassName('slider-1')[0].style.border = "#646464";
        document.getElementsByClassName('slider-2')[0].style.background = "black";
        // document.getElementsByClassName('slider-2')[0].style.border = "black";
        document.getElementsByClassName('slider-3')[0].style.background = "white";
        // document.getElementsByClassName('slider-3')[0].style.border = "#646464";
        document.getElementsByClassName('slider-4')[0].style.background = "white";
        // document.getElementsByClassName('slider-4')[0].style.border = "#646464";
    }
    if (paint == 2) {
        document.getElementsByClassName('slider-1')[0].style.background = "white";
        document.getElementsByClassName('slider-2')[0].style.background = "white";
        document.getElementsByClassName('slider-3')[0].style.background = "black";
        document.getElementsByClassName('slider-4')[0].style.background = "white";
    }
    if (paint == 3) {
        document.getElementsByClassName('slider-1')[0].style.background = "white";
        document.getElementsByClassName('slider-2')[0].style.background = "white";
        document.getElementsByClassName('slider-3')[0].style.background = "white";
        document.getElementsByClassName('slider-4')[0].style.background = "black";

    }
}

//slider 2

let offset_two = 0;
let paint_two = 0;
let width_art_two = document.querySelector('.img_test').offsetWidth;
const sliderLine_two = document.querySelector('.slider-line_two');
check_two();
centering_butts();
document.querySelector('.slider-next_two').addEventListener('click', function(){
    width_art_two = document.querySelector('.img_test').offsetWidth;
    offset_two += width_art_two;
    if (offset_two > width_art_two * 3){
        offset_two = 0;
    }
    sliderLine_two.style.left = -offset_two + 'px';
    check_two();
});

document.querySelector('.slider-prev_two').addEventListener('click', function () {
    width_art_two = document.querySelector('.img_test').offsetWidth;
    offset_two -= width_art_two;
    if (offset_two < 0){
        offset_two = width_art_two * 3;
    }
    sliderLine_two.style.left = -offset_two + 'px'; 
    check_two();
});
document.querySelector('.slider-1_two').addEventListener('click', function () {
    width_art_two = document.querySelector('.img_test').offsetWidth;
    // console.log("fff")
    offset_two = 0;
    sliderLine_two.style.left = -offset_two + 'px';
    check_two();
});
document.querySelector('.slider-2_two').addEventListener('click', function () {
    width_art_two = document.querySelector('.img_test').offsetWidth;
    offset_two = width_art_two;
    sliderLine_two.style.left = -offset_two + 'px';
    check_two();
});
document.querySelector('.slider-3_two').addEventListener('click', function () {
    width_art_two = document.querySelector('.img_test').offsetWidth;
    offset_two = width_art_two * 2;
    sliderLine_two.style.left = -offset_two + 'px';
    check_two();
});
document.querySelector('.slider-4_two').addEventListener('click', function () {
    width_art_two = document.querySelector('.img_test').offsetWidth;
    offset_two = width_art_two * 3;
    sliderLine_two.style.left = -offset_two + 'px';
    check_two();
});
function check_two() {
    // console.log("check")
    // console.log(offset_two)
    if (offset_two == 0) {
        paint_two = 0;
        document.getElementsByClassName('slider-prev_two')[0].style.opacity = 0;
        document.getElementsByClassName("slider-prev_two")[0].style.pointerEvents = "none";
    }
    else{
        document.getElementsByClassName('slider-prev_two')[0].style.opacity = 1;
        document.getElementsByClassName("slider-prev_two")[0].style.pointerEvents = "auto";
    }
    if (offset_two == width_art_two) {
        paint_two = 1;
    }
    if (offset_two == width_art_two * 2) {
        paint_two = 2;
    }
    if (offset_two == width_art_two * 3) {
        paint_two = 3;
        document.getElementsByClassName('slider-next_two')[0].style.opacity = 0;
        document.getElementsByClassName("slider-next_two")[0].style.pointerEvents = "none";
    }
    else{
        document.getElementsByClassName('slider-next_two')[0].style.opacity = 1;
        document.getElementsByClassName("slider-next_two")[0].style.pointerEvents = "auto";
    }
    if (paint_two == 0) {
        document.getElementsByClassName('slider-1_two')[0].style.background = "black";
        document.getElementsByClassName('slider-2_two')[0].style.background = "white";
        document.getElementsByClassName('slider-3_two')[0].style.background = "white";
        document.getElementsByClassName('slider-4_two')[0].style.background = "white";
    }
    if (paint_two == 1) {
        document.getElementsByClassName('slider-1_two')[0].style.background = "white";
        document.getElementsByClassName('slider-2_two')[0].style.background = "black";
        document.getElementsByClassName('slider-3_two')[0].style.background = "white";
        document.getElementsByClassName('slider-4_two')[0].style.background = "white";
    }
    if (paint_two == 2) {
        document.getElementsByClassName('slider-1_two')[0].style.background = "white";
        document.getElementsByClassName('slider-2_two')[0].style.background = "white";
        document.getElementsByClassName('slider-3_two')[0].style.background = "black";
        document.getElementsByClassName('slider-4_two')[0].style.background = "white";
    }
    if (paint_two == 3) {
        document.getElementsByClassName('slider-1_two')[0].style.background = "white";
        document.getElementsByClassName('slider-2_two')[0].style.background = "white";
        document.getElementsByClassName('slider-3_two')[0].style.background = "white";
        document.getElementsByClassName('slider-4_two')[0].style.background = "black";
    }
}

window.onresize = function centering_butts() {
    let height_art_two = document.querySelector('.img_test').offsetHeight - document.querySelector('.slider-next').offsetHeight;  
    document.getElementsByClassName("slider-next_two")[0].style.marginTop = height_art_two / 2 +'px';
    document.getElementsByClassName("slider-prev_two")[0].style.marginTop = height_art_two / 2 +'px';
    document.getElementsByClassName("slider-next")[0].style.marginTop = height_art_two / 2 +'px';
    document.getElementsByClassName("slider-prev")[0].style.marginTop = height_art_two / 2 +'px';
    width_art_two = document.querySelector('.img_test').offsetWidth;
    width_art = document.querySelector('.img_test').offsetWidth;
    console.log(offset);
    console.log(offset_two);
    offset = paint * width_art;
    offset_two = paint_two * width_art_two;
    console.log(offset);
    console.log(offset_two);
    sliderLine.style.left = -offset + 'px';
    sliderLine_two.style.left = -offset_two + 'px';
    // console.log(height_art_two / 2);
    // console.log(height_art_two);
    // console.log("resize_window")\
    // console.log(offset);
    // console.log(offset_two);
    // console.log(paint);
};

function centering_butts() {
    let height_art_two = document.querySelector('.img_test').offsetHeight - document.querySelector('.slider-next').offsetHeight;  
    document.getElementsByClassName("slider-next_two")[0].style.marginTop = height_art_two / 2 +'px';
    document.getElementsByClassName("slider-prev_two")[0].style.marginTop = height_art_two / 2 +'px';
    document.getElementsByClassName("slider-next")[0].style.marginTop = height_art_two / 2 +'px';
    document.getElementsByClassName("slider-prev")[0].style.marginTop = height_art_two / 2 +'px';
    // offset = (paint - 1) * width_art;
    // offset_two = (paint_two - 1) * width_art_two;
    // console.log(height_art_two / 2);
    // console.log(height_art_two);
    //console.log("resize_window")
}