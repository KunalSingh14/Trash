let config = {};
let user = {};
let uid = localStorage.getItem("uid");
// localStorage.removeItem("uid");

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
    console.log(cities);
    cities.forEach((city) => {
        document.getElementById("c" + i).innerText = city.name;
        document.getElementById("c_i" + i).innerText = city.score;
        if (city.rankChange > 0)
            document.getElementById(
                "c" + i + "_ind"
            ).innerHTML = `<span class="material-icons-outlined up">
                            expand_less
                            </span>`;
        else if (city.rankChange < 0)
            document.getElementById(
                "c" + i + "_ind"
            ).innerHTML = `<span class="material-icons-outlined down">
                            expand_more
                            </span>`;
        else if (city.rankChange === 0)
            document.getElementById(
                "c" + i + "_ind"
            ).innerHTML = `<span class="material-icons-outlined constant">
                            minimize
                            </span>`;
        i++;
    });
};
const getStateData = async () => {
    const response = await fetch(config.API_BASE + "getStates");
    const data = await response.json();
    if (data.success === false) {
        getStateData();
        return;
    }
    states = data.result;
    let i = 1;
    console.log(states);
    states.forEach((state) => {
        document.getElementById("c" + i).innerText = state.name;
        document.getElementById("c_i" + i).innerText = state.score;
        if (state.rankChange > 0)
            document.getElementById(
                "c" + i + "_ind"
            ).innerHTML = `<span class="material-icons-outlined up">
                            expand_less
                            </span>`;
        else if (state.rankChange < 0)
            document.getElementById(
                "c" + i + "_ind"
            ).innerHTML = `<span class="material-icons-outlined down">
                            expand_more
                            </span>`;
        else if (state.rankChange === 0)
            document.getElementById(
                "c" + i + "_ind"
            ).innerHTML = `<span class="material-icons-outlined constant">
                            minimize
                            </span>`;
        i++;
    });
};
const getData = async () => {
    await getCityData();
    await getUserData();
};

const driver = async () => {
    await getConfig();
    await getData();
    // If user selects state from drop down
    document
        .getElementById("state-city-selector")
        .addEventListener("mouseup", async () => {
            await getStateData();
        });
};

driver().catch((err) => console.log(err));

// pie-chart
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        // title: {
        //     text: "Email Categories",
        //     horizontalAlign: "left"
        // },
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 17,
            // indexLabel: "{label} - #percent%",
            // toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                // { y: 67 },
                // { y: 28 },
                // { y: 10 },
                // { y: 7 },
                // { y: 15 },
                // { y: 6 }
                { y: 67, label: "Compensation" },
                { y: 28, label: "Waste disposal" },
                { y: 5, label: "Vehicle Maintainance" }
            ]
        }]
    });
    chart.render();

}
