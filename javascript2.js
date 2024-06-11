document.getElementById("horoscopeForm").addEventListener("submit",
    function (event) {
        event.preventDefault();

        var birthMonth = document.getElementById("birthMonth").value;
        var birthDate = document.getElementById("birthDate").value;
        var errorText = '';
        var result = '';


        if ((birthMonth == 2 && birthDate > 29) ||
            (birthMonth == 4 && birthDate > 30) ||
            (birthMonth == 6 && birthDate > 30) ||
            (birthMonth == 9 && birthDate > 30) ||
            (birthMonth == 11 && birthDate > 30)) {
            errorText = "Please enter a valid date to find your star sign!";
        } else {

            if ((birthMonth == 1 && birthDate >= 20) || (birthMonth == 2 && birthDate <= 18)) {
                result = '<img src="01aquarius.png" alt="Aquarius" class="star-sign2">';
            } else if ((birthMonth == 2 && birthDate >= 19) || (birthMonth == 3 && birthDate <= 20)) {
                result = '<img src="02pisces.png" alt="Pisces" class="star-sign2">';
            } else if ((birthMonth == 3 && birthDate >= 21) || (birthMonth == 4 && birthDate <= 19)) {
                result = '<img src="03aries.png" alt="Aries" class="star-sign2">';
            } else if ((birthMonth == 4 && birthDate >= 20) || (birthMonth == 5 && birthDate <= 20)) {
                result = '<img src="04taurus.png" alt="Taurus" class="star-sign2">';
            } else if ((birthMonth == 5 && birthDate >= 21) || (birthMonth == 6 && birthDate <= 20)) {
                result = '<img src="05gemini.png" alt="Gemini" class="star-sign2">';
            } else if ((birthMonth == 6 && birthDate >= 21) || (birthMonth == 7 && birthDate <= 22)) {
                result = '<img src="07cancer.png" alt="Cancer" class="star-sign2">';
            } else if ((birthMonth == 7 && birthDate >= 23) || (birthMonth == 8 && birthDate <= 22)) {
                result = '<img src="06leo.png" alt="Leo" class="star-sign2">';
            } else if ((birthMonth == 8 && birthDate >= 23) || (birthMonth == 9 && birthDate <= 22)) {
                result = '<img src="08virgo.png" alt="Virgo" class="star-sign2">';
            } else if ((birthMonth == 9 && birthDate >= 23) || (birthMonth == 10 && birthDate <= 22)) {
                result = '<img src="09libra.png" alt="Libra" class="star-sign2">';
            } else if ((birthMonth == 10 && birthDate >= 23) || (birthMonth == 11 && birthDate <= 21)) {
                result = '<img src="10scorpio.png" alt="Scorpio" class="star-sign2">';
            } else if ((birthMonth == 11 && birthDate >= 22) || (birthMonth == 12 && birthDate <= 21)) {
                result = '<img src="11sagittarius.png" alt="Sagittarius" class="star-sign2">';
            } else if ((birthMonth == 12 && birthDate >= 22) || (birthMonth == 1 && birthDate <= 19)) {
                result = '<img src="12capricorn.png" alt="Capricorn" class="star-sign2">';
            } else {
                errorText = "Please enter a valid date to find your star sign!";
            }
        }

           
        document.getElementById("errorText").textContent = errorText;
        document.getElementById("horoscopeResult").innerHTML = result;
    
    });

