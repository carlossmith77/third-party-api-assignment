var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
// Text hour var
// var nineAm = $("#9am");
// var tenAm = $("#10am");
// var elevenAm = $("#11am");
// var twelvePm = $("#12pm");
// var onePm = $("#13pm");
// var twoPm = $("#14pm");
// var threePm = $("#15pm");
// var fourPm = $("#16pm");
// var fivePm = $("#17pm");
// var sixPm = $("#18pm");
// var sevenPm = $("#19pm");



$('#div9').val(localStorage.getItem('Entry9'));
$('#div10').val(localStorage.getItem('Entry10'));
$("#div11").val(localStorage.getItem('Entry11'));
$("#div12").val(localStorage.getItem('Entry12'));
$("#div1").val(localStorage.getItem('Entry1'));
$("#div2").val(localStorage.getItem('Entry2'));
$("#div3").val(localStorage.getItem('Entry3'));
$("#div4").val(localStorage.getItem('Entry4'));
$("#div5").val(localStorage.getItem('Entry5'));

let button9 = $('#btn9');
let button10 = $('#btn10');
let button11 = $('#btn11');
let button12 = $('#btn12');
let button1 = $('#btn1');
let button2 = $('#btn2');
let button3 = $('#btn3');
let button4 = $('#btn4');
let button5 = $('#btn5');
let clearBtn = $('#clearBtn');

var timeNow = parseInt(moment().format('HH'));

function clear() {
    localStorage.clear();

    $('#div9').val('');
    // box2.val('');
    // box3.val('');
    $("#div12").val('');
    $("#div1").val('');
    $("#div2").val('');
    // box10.val('');
    // box11.val('');
    // box12.val('');
}

function tick() {

    $('#dayEl').text(moment().format('LL'));
    $('#timeEl').text(moment().format('hh:mm:ssA'));

}

  function checkTime() {

    //   if (parseInt(box12.attr('data-hour')) > timeNow) {
    //       box12.removeClass('past present future');
    //       box12.addClass('future');

    //   } else if (parseInt(box12.attr('data-hour')) === timeNow) {
    //       box12.removeClass('past present future');
    //       box12.addClass('present');


    //   } else {

    //       box12.removeClass('past present future');
    //       box12.addClass('past');

    //   }

      if (parseInt(box1.attr('data-hour')) > timeNow) {
          box1.removeClass('past present future');
          box1.addClass('future')

      } else if (parseInt($('#div9').attr('data-hour')) === timeNow) {
          $('#div9').removeClass('past present future');
          $('#div9').addClass('present');


      } else {

          $('#div9').removeClass('past present future');
          $('#div9').addClass('past');

      }

    //   if (parseInt(box2.attr('data-hour')) > timeNow) {
    //       box2.removeClass('past present future');
    //       box2.addClass('future');

    //   } else if (parseInt(box2.attr('data-hour')) === timeNow) {
    //       box2.removeClass('past present future');
    //       box2.addClass('present');


    //   } else {

    //       box2.removeClass('past present future');
    //       box2.addClass('past');

    //   }

    //   if (parseInt(box3.attr('data-hour')) > timeNow) {
    //       box3.removeClass('past present future');
    //       box3.addClass('future');

    //   } else if (parseInt(box3.attr('data-hour')) === timeNow) {
    //       box3.removeClass('past present future');
    //       box3.addClass('present');


    //   } else {
    //       box3.removeClass('past present future');
    //       box3.addClass('past');

    //   }

      if (parseInt(box4.attr('data-hour')) > timeNow) {
        box4.removeClass('past present future');
        box4.addClass('future');

      } else if (parseInt($("#div4").attr('data-hour')) === timeNow) {
        $("#div12").removeClass('past present future');
        $("#div12").addClass('present');

       } else {
        $("#div12").removeClass('past present future');
        $("#div12").addClass('past');
           $("#div12")
       }

    //   if (parseInt(box5.attr('data-hour')) > timeNow) {
    //       box5.removeClass('past present future');
    //       box5.addClass('future');
    //   } else if (parseInt(box5.attr('data-hour')) === timeNow) {
    //       box5.removeClass('past present future');
    //       box5.addClass('present');


    //   } else {
    //       box5.removeClass('past present future');
    //       box5.addClass('past');

    //   }

    //   if (parseInt(box9.attr('data-hour')) > timeNow) {
    //       box9.removeClass('past present future');
    //       box9.addClass('future');
    //   } else if (parseInt(box9.attr('data-hour')) === timeNow) {
    //       box9.removeClass('past present future');
    //       box9.addClass('present');


    //   } else {
    //       box9.removeClass('past present future');
    //       box9.addClass('past');

    //   }

    //   if (parseInt(box10.attr('data-hour')) > timeNow) {
    //       box10.removeClass('past present future');
    //       box10.addClass('future');
    //   } else if (parseInt(box10.attr('data-hour')) === timeNow) {
    //       box10.removeClass('past present future');
    //       box10.addClass('present');


    //   } else {
    //       box10.removeClass('past present future');
    //       box10.addClass('past');

    //   }

    //   if (parseInt(box11.attr('data-hour')) > timeNow) {
    //       box11.removeClass('past present future');
    //       box11.addClass('future');
    //   } else if (parseInt(box11.attr('data-hour')) === timeNow) {
    //       box11.removeClass('past present future');
    //       box11.addClass('present');


    //   } else {
    //       box11.removeClass('past present future');
    //       box11.addClass('past');

    //   }

  }

tick();
setInterval(tick, 1000);
setInterval(checkTime, 600000);
clearBtn.on('click', clear);

button9.on('click', function () {
    if ($('#div9').val() != '') {
        localStorage.setItem('Entry9', $('#div9').val());
    }
});

button10.on('click', function () {
    if ($('#div10').val() != '') {
        localStorage.setItem('Entry10', $('#div10').val());
    }
});

button11.on('click', function () {
    if ($("#div11").val() != '') {
        localStorage.setItem('Entry11', $("#div11").val());
    }
});

 button12.on('click', function () {
     event.preventDefault();
     if ($("#div12").val() !== '') {
         localStorage.setItem('Entry12', $("#div12").val());

     }
 });

 button1.on('click', function () {
    event.preventDefault();
    if ($("#div1").val() !== '') {
        localStorage.setItem('Entry1', $("#div1").val());

    }

 });

 button2.on('click', function () {
     if ($("#div2").val() !== '') {
        localStorage.setItem('Entry2', $("#div2").val());

     }

 });

 button3.on('click', function () {
    
    if ($("#div3").val() !== '') {
        localStorage.setItem('Entry3', $("#div3").val());

    }

 });

 button4.on('click', function () {
     if ($("#div4").val() != '') {
        localStorage.setItem('Entry4', $("#div4").val());

    }

 });

 button5.on('click', function () {
     event.preventDefault();

   if ($("#div5").val() !== '') {
        localStorage.setItem('Entry5', $("#div5").val());

   }

 });

// checkTime();
