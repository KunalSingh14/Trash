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
    const response = await fetch(config.API_BASE + "getUser");
    user = await response.json();
    document.getElementById("id101").innerText = "Hi, " + data.name;
};

driver().catch((err) => console.log(err));
