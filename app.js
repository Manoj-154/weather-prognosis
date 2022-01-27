let weather = {
    apiKey: "f64c74b022d98cd1941e888fd32c7fb1",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp } = data.main;
      
      document.querySelector(".city").innerText = "" + name;
      document.querySelector(".icon").src =
        "https://logicbroker.com/wp-content/uploads/2013/09/the-cloud.jpg";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3okOqxjc6ckJZi2prZ656gicdljE4_RtHtA&usqp=CAU')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".textBox").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".textBox")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });