const uids = [783104, 289394, 579320, 109573];
const otps = [123, 345, 234, 765, 456];
let uid;
document.getElementById("UID").autocomplete = "on";
document.getElementById("submit1").addEventListener("click", async () => {
    let myForm = document.getElementById("signUp");
    uid = myForm.elements["UID"].value;
    if (!uids.includes(parseInt(uid))) {
        document.getElementById("temp1").innerHTML = `Please enter valid UID`;
        return;
    }
    myForm.innerHTML = `<label for="UID" class="uid_name">Enter OTP</label>
                    <br>
                    <input type="password" name="UID" id="UID" class="uid_no" minlength="12" maxlength="12" pattern=[0-9]
                        placeholder="  - - - -">
                    <br>
                    <h4 id="temp2">OTP has been sent to registerd<br> mobile number</h4>
                    <br>
                    <input type="button" value="Resend OTP" id="submit2" class="btn_resend" />
                    <input type="button" value="Verify" id="verify" class="btn_verify" />`;

    document.getElementById("verify").addEventListener("click", async () => {
        let myForm = document.getElementById("signUp");
        const otp = myForm.elements["UID"].value;
        let temp;
        uids.forEach((item, index) => {
            if (item === parseInt(uid)) temp = index;
        });
<<<<<<< HEAD
        if (otps[temp] === parseInt(otp)) alert("Login Successful!!!");
        else {
            document.getElementById("temp2").innerHTML = `Invalid OTP`;
            return;
        }
=======
        console.log(temp);
        if (otps[temp] === parseInt(otp)) {
            alert("Login Successful!!!");
            window.open("dashboard")
        }
        else alert("Invalid OTP!!!");
>>>>>>> cff6ecc824192cfb749806c2b28397b26e5653aa
    });
});
