//WENSAH
var select = document.getElementById('camat');
document.getElementById("daftar").onclick = function(){
    var value = select.value;
    if (value == "Ranowulu")
    {
        window.location.href = "Ranowulu.php";
    }
    else if (value == "Matuari")
    {
        window.location.href = "Matuari.php";
    }
    else if (value == "Girian")
    {
        window.location.href = "Girian.php/";
    }
	else if (value == "Madidir")
    {
        window.location.href = "Madidir.php";
    }
	else if (value == "Maesa")
    {
        window.location.href = "Maesa.php";
    }
	else if (value == "Aertembaga")
    {
        window.location.href = "Aertembaga.php";
    }
	else if (value == "Lesat")
    {
        window.location.href = "Lesat.php";
    }
	else if (value == "Lembut")
    {
        window.location.href = "Lembut.php";
    }
	
};
