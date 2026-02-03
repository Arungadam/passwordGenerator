 let recent=[];
 function GeneratePassword(){
            length=parseInt(document.getElementById("lngth").value);
            if (isNaN(length) || length <= 0) {
        alert("Please enter a valid password length!");
        return; // stop execution
    }

            const lowerCase = "abcdefghijklmnopqrstuvwxyz";
            const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const number = "1234567890";
            const symbol = "!@#$%^&*()_+=?/";
            const allowedchar = lowerCase + upperCase + number + symbol;
            let password = "";
            for (let i=0;i<length;i++){
                const randomIndex = Math.floor(Math.random()*allowedchar.length);
                password+=allowedchar[randomIndex];
            }
        document.getElementById("Password").innerHTML=password;
        recent.push(password);
        let list = "";
            for (let p of recent) {
                list += `<li>${p}</li>`;
            }
            document.getElementById("rec").innerHTML = list;
            
        
        }
        function recents(){
            document.getElementById("recents").style.display="block";
        }