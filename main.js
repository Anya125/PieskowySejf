$(document).ready(function () {
    $('.output').css({
        backgroundColor: "#ffc0cba6",
        padding: "50px",
        border: "1px solid #e6549e",
        width: "500px",
        textAlign: "center",
        fontSize: "1.5rem",

    })

    $('.btn1, .btn').css({
        backgroundColor: "pink",
        padding: "15px 50px",
        fontSize: "1.5rem",
        color: "#8c2165",
        textAlign: "center",
        border: "1px solid #e6549e",
        cursor: "pointer",
    })

    $('.btn1').css({
        width: "500px",
    })

    $('.small1, .small2').css({
        padding: "10px",
    })

    $('input').css({
        padding: "20px",
        margin: "1rem",
        fontSize: "2rem",
        textAlign: "center",
        border: "1px solid #e6549e",


    })

    $('.output').hide();
    $('#start').click(startGame);
    let ourSecretNum = '';

    function startGame() {
        $('.output').show();
        $('#start').hide();
        for (x = 0; x < $('input[type="number"]').length; x++) {
            $('input[type="number"]').eq(x).val('5');
        }
        $('.small1').html('Blue is too high ').css('color', '#0955c5');
        $('.small2').html('Violet is too low').css('color', '#631463');

        ourSecretNum = SecretNum(100, 999).toString();
        console.log(ourSecretNum);
    }

    function SecretNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $('#check').click(function () {
        let lock1 = $('input[name="lock1"]').val();
        console.log('lock1 value = ' + lock1);

        if (lock1 == ourSecretNum[0]) {
            $('input[name="lock1"]').css({
                backgroundColor: "#5fec5fa3",
                color: "#348e34a3",
                border: "1px solid #348e34a3",
            });

        } else if (lock1 < ourSecretNum[0]) {
            $('input[name="lock1"]').css({
                backgroundColor: "#631463",
                color: "#fff",
                border: "1px solid #6b016b",

            });

        } else {
            $('input[name="lock1"]').css({
                backgroundColor: "#0955c5",
                color: "#fff",
                border: "1px solid #0000ab",
            });
        }

        let lock2 = $('input[name="lock2"]').val();
        console.log('Lock2 value = ' + lock2);

        if (lock2 == ourSecretNum[1]) {
            $('input[name="lock2"]').css({
                backgroundColor: "#5fec5fa3",
                color: "#348e34a3",
                border: "1px solid #348e34a3",
            });
        } else if (lock2 < ourSecretNum[1]) {
            $('input[name="lock2"]').css({
                backgroundColor: "#631463",
                color: "#fff",
                border: "1px solid #6b016b",

            });
        } else {
            $('input[name="lock2"]').css({
                backgroundColor: "#0955c5",
                color: "#fff",
                border: "1px solid #0000ab",
            });
        }

        let lock3 = $('input[name="lock3"]').val();
        console.log('lock3 value = ' + lock3);


        console.log('1st number in our secret num is ' + ourSecretNum[0])
        console.log('2nd number in our secret num is ' + ourSecretNum[1])
        console.log('3rd number in our secret num is ' + ourSecretNum[2])
    })


})