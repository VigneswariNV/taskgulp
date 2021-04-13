function change_year(){
    document.getElementById('text1').innerHTML='Per Year';
    document.getElementById('text2').innerHTML='Per Year';
    document.getElementById('text3').innerHTML='Per Year';

    document.getElementById('price1').innerHTML='$100';
    document.getElementById('price2').innerHTML='$200';
    document.getElementById('price3').innerHTML='$300';
}
function change_month(){
    document.getElementById('text1').innerHTML='Per Month';
    document.getElementById('text2').innerHTML='Per Month';
    document.getElementById('text3').innerHTML='Per Month';

    document.getElementById('price1').innerHTML='$10';
    document.getElementById('price2').innerHTML='$29';
    document.getElementById('price3').innerHTML='$49';

}

document.getElementById("sideopen").onclick = function () { openNav() };
    function openNav() {
        document.getElementById("side").style.width = "100%";
    }

    document.getElementById("sideclose").onclick = function () { closeNav() };
    function closeNav() {
        document.getElementById("side").style.width = "0";
    }