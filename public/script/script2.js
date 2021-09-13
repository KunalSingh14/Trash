let config = {};
let user = {};
let uid = localStorage.getItem("uid");
localStorage.removeItem("uid");

const getConfig = async () => {
    const response = await fetch("env.json");
    const data = await response.json();
    config = data;
};
const driver = async () => {
    await getConfig();
    const response = await fetch(config.API_BASE + "getUser?uid=" + uid);
    const data = await response.json();
    if (data.success === false) {
        driver();
        return;
    }
    user = data.result;
    document.getElementById("id101").innerText = "Hi, " + user.fname;
};

driver().catch((err) => console.log(err));
