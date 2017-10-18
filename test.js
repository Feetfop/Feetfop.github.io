var num1;
var num2;
var funct;
var ans;

function calculate() {

    num1 = parseFloat($('input:text[name=number1]').val());
    num2 = parseFloat($('input:text[name=number2]').val());
    funct = parseInt($('input[name="funct"]:checked').val());

    switch (funct) {
        case 0:
            ans = num1 + num2;
            break;
        case 1:
            ans = num1 - num2;
            break;

        case 2:
            ans = num1 * num2;
            break;

        case 3:
            if (num2 != 0) {
                ans = num1 / num2;
            }
            else {
                alert("DIVIDE BY ZERO ERROR!!!!!!!!!!!!!!!!")
            }
            break;
    }

    $("span").html(ans);
    
    $(function() {
	// Get page title
  	var pageTitle = $("Feetfop~Home").text();

	// Change page title on blur
	$(window).blur(function() {
	  $("~Feetfop~").text("Don't forget to read this...");
	});

	// Change page title back on focus
	$(window).focus(function() {
	  $("~Feetfop~Home~").text(pageTitle);
	});
});