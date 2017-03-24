var runningTotal = 0.0;
function addItem()
{
  var newItem;
  newItem = document.getElementById("price").value;
  if(isNaN(newItem))
  {
    console.log("Enter price as a number");
  }
  else{
    Number(newItem);
    runningTotal = parseInt(runningTotal) + parseInt(newItem);
    var dollars = asCurrency(runningTotal);
    document.getElementById("subtotal").innerHtml = dollars;
    document.getElementById("price").value = "";
    setCookie("preTax", runningTotal, 5);
    console.log(runningTotal);
    document.cookie = "userName=preTax; value=runningTotal; expires=Thu, 18 Dec 2017 12:00:00 UTC;"
  }
  // update a cookie called "preTax" with the value of runningTotal
}
function calculateReceipt(){
  var receiptSubtotal = Number(preTax);
  var receiptTax = receiptSubtotal * 0.075;
  var receiptTotal = parseInt(receiptSubtotal) + parseInt(receiptTax);
  document.getElementById("sub").value = receiptSubtotal;
  document.getElementById("tax").value = receiptTax;
  document.getElementById("tot").value = receiptTotal;
}
//takes a number and gives a string with the number displayed as USD currency
function asCurrency(val)
{
  return "$" + val.toFixed(2);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
