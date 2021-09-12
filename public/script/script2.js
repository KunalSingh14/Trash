let config = {};
let user = {};
let uid = localStorage.getItem("uid");
localStorage.removeItem("uid");

const getConfig = async () => {
    const response = await fetch("env.json");
    const data = await response.json();
    config = data;
};

const getUserData = async () => {
    const response = await fetch(config.API_BASE + "getUser?uid=" + uid);
    const data = await response.json();
    if (data.success === false) {
        getUserData();
        return;
    }
    user = data.result;
    document.getElementById("id101").innerText = "Hi, " + user.fname;
};

const getCityData = async () => {
    const response = await fetch(config.API_BASE + "getCities");
    const data = await response.json();
    if (data.success === false) {
        getCityData();
        return;
    }
    cities = data.result;
    let i = 1;
    cities.forEach((city) => {
        document.getElementById("c" + i).innerText = city.name;
        document.getElementById("s" + i).innerText = city.score;
    });
};

const getData = async () => {
    getCityData();
    await getUserData();
};

const driver = async () => {
    await getConfig();
    await getData();
};

driver().catch((err) => console.log(err));
