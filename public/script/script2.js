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



//dropdown
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
