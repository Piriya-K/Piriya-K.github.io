function validateFirstName() {
    var firstname = document.getElementById("firstname").value;
    var reg = /[<>#@!()_+=*&^/%$0-9]{1,25}/;

    if (firstname.length < 1 || firstname.length > 30) {

        alert("Your first name is not correct");

        document.getElementById("firstname").style.border = '5px solid red';

    } else if (reg.test(firstname) == true) {

        alert("Your first name does not follow the correct format");

        document.getElementById("firstname").style.border = '5px solid red';

    } else {

        document.getElementById("firstname").style.border = '5px solid green';
        validateLastName();
    }
}

function validateLastName() {
    var lastname = document.getElementById("lastname").value;
    var reg = /[<>#@!()_+=*&^/%$0-9]{1,25}/;

    if (lastname.length < 1 || lastname.length > 30) {

        alert("Your last name is not correct");

        document.getElementById("lastname").style.border = '5px solid red';

    } else if (reg.test(lastname) == true) {

        alert("Your last name does not follow the correct format");

        document.getElementById("lastname").style.border = '5px solid red';

    } else {

        document.getElementById("lastname").style.border = '5px solid green';
        validatePostalCode();
    }
}

function validatePostalCode() {
    var postalcode = document.getElementById("postalcode").value;
    var reg = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

    if (postalcode.length < 1 || postalcode.length > 7) {

        alert("Your postal code is not correct");

        document.getElementById("postalcode").style.border = '5px solid red';

    } else if (reg.test(postalcode) == false) {

        alert("Your postal code does not follow the correct format");

        document.getElementById("postalcode").style.border = '5px solid red';

    } else {

        document.getElementById("postalcode").style.border = '5px solid green';
        validatePhone();
    }
}

function validatePhone() {
    var phone = document.getElementById("phone").value;
    var reg = /\d{3} \d{3} \d{4}/;

    if (phone.length < 1 || phone.length > 30) {

        alert("Your phone number is not correct");

        document.getElementById("phone").style.border = '5px solid red';

    } else if (reg.test(phone) == false) {

        alert("Your phone number does not follow the correct format");

        document.getElementById("phone").style.border = '5px solid red';

    } else {

        document.getElementById("phone").style.border = '5px solid green';
        validateEmail();
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (email.length < 1 || email.length > 30) {

        alert("Your email is not correct");

        document.getElementById("email").style.border = '5px solid red';

    } else if (reg.test(email) == false) {

        alert("Your email does not follow the correct format");

        document.getElementById("email").style.border = '5px solid red';

    } else {

        document.getElementById("email").style.border = '5px solid green';
        if (document.querySelector('input[name=cakeType]:checked').value == "Sheet Cake") {
            validatecakeWidth();
        } else {
            validateRadius();
        }
    }
}

function validatecakeWidth() {
    var reg = document.getElementById("cakeWidth").value;

    if (parseInt(reg) < 30 || parseInt(reg) > 45) {
        alert("Cake Width has to be between 30 and 45");
    } else {
        validatecakeLength();
    }
}

function validatecakeLength() {
    var reg = document.getElementById("cakeLength").value;

    if (parseInt(reg) < 30 || parseInt(reg) > 60) {
        alert("Cake Length has to be between 30 and 60");
    } else {
        submit();
    }
}

function validateRadius() {
    var reg = document.getElementById("radius").value;

    if (parseInt(reg) < 15 || parseInt(reg) > 30) {
        alert("Radius has to be between 15 and 30");
    } else {
        submit();
    }
}

//disable radius
function picksheetCake() {
    document.getElementById("radius").disabled = true;
    document.getElementById("cakeWidth").disabled = false;
    document.getElementById("cakeLength").disabled = false;
}

//disabel cakeWidth and cakeLength inputs
function pickroundCake() {
    document.getElementById("cakeWidth").disabled = true;
    document.getElementById("cakeLength").disabled = true;
    document.getElementById("radius").disabled = false;
}

//Personal Information

function submit() {
    var resultmessage = "";
    var name = document.getElementById("firstname").value + " " + document.getElementById("lastname").value;
    var address = document.getElementById("address").value;
    var postalcode = document.getElementById("postalcode").value;
    var phone = (document.getElementById("phone").value).substring(0, 3) + "-" + (document.getElementById("phone").value).substring(5, 3) + "-" + (document.getElementById("phone").value).substring(8, 4);
    var email = document.getElementById("email").value;

    //shared attributes
    var cakeType = document.querySelector('input[name=cakeType]:checked').value; // either sheet or round cakes
    var selectedLayer = parseInt(document.querySelector('input[name=selectedLayer]:checked').value); // either 1, 2, or 3
    var baseLayer = parseInt(1);
    var additionalLayer = parseInt(selectedLayer - baseLayer);
    var dimensionIncreaseCost = parseFloat(0.02);

    //sheetCake
    var cakeLength = document.getElementById("cakeLength").value;
    var cakeWidth = document.getElementById("cakeWidth").value;
    var sheetCakeArea = parseFloat(cakeWidth) * parseFloat(cakeLength);
    var sheetCakeMinArea = parseInt(900);
    var sheetCakeAddArea = sheetCakeArea - sheetCakeMinArea;
    var sheetCakeBasePrice = parseFloat(18);
    var sheetCakePriceIncrease = sheetCakeAddArea * dimensionIncreaseCost;
    var sheetCakeIniCost = sheetCakeBasePrice + sheetCakePriceIncrease;
    var sheetCakeMessage = "";

    //roundCake
    var radius = document.getElementById("radius").value;
    var PI = 3.14;
    var roundCakeMinArea = parseInt(707);
    var roundCakeArea = radius * radius * PI;
    var roundCakeAddArea = roundCakeArea - roundCakeMinArea;
    var roundCakeBasePrice = parseFloat(15);
    var roundCakePriceIncrease = roundCakeAddArea * dimensionIncreaseCost;
    var roundCakeIniCost = roundCakeBasePrice + roundCakePriceIncrease;
    var roundCakeMessage = "";

    //Additional Choices
    var creamcheese = document.getElementById("creamcheese");
    var fruitalmond = document.getElementById("fruitalmond");
    var fruitjam = document.getElementById("fruitjam");
    var choiceArray = [];
    var priceChoice = 0;
    var choiceMessage = "";

    if (cakeType == "Sheet Cake") {
        roundCakeIniCost = parseInt(0);
        sheetCakeMessage = cakeType + " " + cakeLength + " by " + cakeWidth + "cm with " + selectedLayer + " layers: ";
        roundCakeMessage = "";
    } else if (cakeType == "Round Cake") {
        sheetCakeIniCost = parseInt(0);
        sheetCakeMessage = "";
        roundCakeMessage = cakeType + " " + radius + "cm with " + selectedLayer + " layers: ";
    }

    if (creamcheese.checked == true) {
        choiceMessage += "Cream Cheese icing             $5" + "<br>";
        priceChoice += 5;
        choiceArray[0] = creamcheese;
    }
    if (fruitalmond.checked == true) {
        choiceMessage += "Fruit and Almond topping       $7" + "<br>";
        priceChoice += 7;
        choiceArray[1] = fruitalmond;
    }
    if (fruitjam.checked == true) {
        choiceMessage += "Fruit Jam filling              $4" + "<br>";
        priceChoice += 4;
        choiceArray[2] = fruitjam;
    }

    var layerCost = (additionalLayer * (sheetCakeIniCost / 2)) + (additionalLayer * (roundCakeIniCost / 2));
    var finalPrice = parseFloat(roundCakeIniCost + sheetCakeIniCost + layerCost + priceChoice);

    resultmessage += name + "<br>";
    resultmessage += address + "<br>";
    resultmessage += postalcode + "<br>";
    resultmessage += phone + "<br>";
    resultmessage += email + "<br><br>";
    resultmessage += "Your order:" + "<br><br>";
    resultmessage += sheetCakeMessage + roundCakeMessage + "$" + parseFloat(roundCakeIniCost + sheetCakeIniCost + layerCost).toFixed(2) + "<br>";
    resultmessage += choiceMessage;
    resultmessage += "Total: $" + finalPrice.toFixed(2) + "<br><br>";

    document.getElementById("result").innerHTML = resultmessage;
    
}

//resets all user input and border colors, and hides the order summary
function reset() {

    document.getElementById("myform").reset();
    // var resultmessage = "";
    // document.getElementById("result").innerHTML = resultmessage;
}
