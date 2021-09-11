const uids = [783104, 289394, 579320, 109573];
const otps = [123, 345, 234, 765, 456];
let uid;

const submitForm = async () => {
    let myForm = document.getElementById("signUp");
    uid = myForm.elements["UID"].value;
    if (!uids.includes(parseInt(uid))) {
        document.getElementById("temp1").innerHTML = `Please enter valid UID`;
        return;
    }
    myForm.innerHTML = `<label for="UID" class="uid_name">Enter OTP</label>
                    <br>
                    <input type="password" name="UID" id="UID_2" class="uid_no"
                        placeholder="  - - - -">
                    <br>
                    <h4 id="temp2">OTP has been sent to registerd<br> mobile number</h4>
                    <br>
                    <script>
                        document.getElementById("UID").onkeydown = (e) => {
                        console.log("HEYYEYE");
                        if (e.key === "Enter") submitForm();
                        };
                    </script>
                    <button type="submit" disabled style="display: none" aria-hidden="true" ></button>
                    <input type="button" value="Resend OTP" id="submit2" class="btn_resend" />
                    <input type="button" value="Verify" id="verify" class="btn_verify" />`;

    document.getElementById("verify").addEventListener("click", async () => {
        let myForm = document.getElementById("signUp");
        const otp = myForm.elements["UID"].value;
        let temp;
        uids.forEach((item, index) => {
            if (item === parseInt(uid)) temp = index;
        });
        if (otps[temp] === parseInt(otp)) {
            localStorage.setItem("uid", uid);
            document.getElementById(
                "mainContainer"
            ).innerHTML = `<img src="images/modi.png" width = "100% height="100%"></img>`;
            window.location.href = "http://localhost:3000/dashboard";
        } else {
            document.getElementById("temp2").innerHTML = `Invalid OTP`;
            return;
        }
    });
    document.getElementById("UID_2").onkeydown = (e) => {
        // console.log("hey");
        if (e.key === "Enter") {
            myForm = document.getElementById("signUp");
            const otp = myForm.elements["UID"].value;
            let temp;
            uids.forEach((item, index) => {
                if (item === parseInt(uid)) temp = index;
            });
            if (otps[temp] === parseInt(otp)) {
                localStorage.setItem("uid", uid);
                document.getElementById(
                    "mainContainer"
                ).innerHTML = `<img src="images/modi.png" width = "100% height="100%"></img>`;
                window.location.href = "http://localhost:3000/dashboard";
            } else {
                document.getElementById("temp2").innerHTML = `Invalid OTP`;
                return;
            }
        }
    };
};
document.getElementById("submit1").addEventListener("click", submitForm);
document.getElementById("UID").onkeydown = (e) => {
    // console.log("HEYYEYE");
    if (e.key === "Enter") submitForm();
};
