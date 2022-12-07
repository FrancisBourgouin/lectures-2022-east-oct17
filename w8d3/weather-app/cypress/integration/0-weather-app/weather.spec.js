/// <reference types="cypress" />

const fakeLocation = (latitude, longitude) => {
  return {
    onBeforeLoad(win) {
      cy.stub(win.navigator.geolocation, "getCurrentPosition", (cb, err) => {
        if (latitude && longitude) {
          return cb({ coords: { latitude, longitude } });
        }
        throw err({ code: 1 }); // 1: rejected, 2: unable, 3: timeout
      });
    },
  };
};

describe("Weather App!", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("https://api.openweathermap.org/data/2.5/*", {
      fixture: "weather.json",
    });
  });

  xit("User can enter a city in the form and view the weather", () => {
    // ...

    // cy.get(".App p code").should("have.text", "src/App.js");

    // User types city name
    cy.get("form.CityForm input").type("Toronto", { delay: 200 });
    cy.get("form.CityForm button").click();

    // We should see a button with Toronto
    cy.get(".CityHistoryList ul li button").should("have.text", "Toronto");

    // We should see current weather for Toronto
    cy.contains("Weather for Toronto").should("exist");

    // Intercepted data

    cy.get(".CurrentWeather p:first-of-type").should("have.text", "mist");
    cy.get(".CurrentWeather p:last-of-type").should("have.text", "106°C");
  });
  xit("User can click on a button and view the weather", () => {
    cy.contains("Super weather App!").should("exist");
    cy.get(".CityHistoryList button").should("not.exist");
    // User types city name
    cy.get("form.CityForm input").type("Toronto", { delay: 200 });
    cy.get("form.CityForm button").click();
    // User types city name
    cy.get("form.CityForm input").type("Montréal", { delay: 200 });
    cy.get("form.CityForm button").click();

    cy.contains("Weather for Toronto").should("not.exist");

    cy.get(".CityHistoryList ul li:last-of-type button").click();

    cy.contains("Weather for Toronto").should("exist");
  });
  xit("User can see their local weather on first load (STRETCH)", () => {
    cy.visit("/", fakeLocation(45.537504, -73.629893));
    // ...
    cy.contains("Super weather App!").should("exist");

    cy.contains("Weather for your position").should("exist");
  });

  xit("is a dumb test", () => {
    cy.visit("https://google.com");

    cy.get(".gLFyf").type("Einsten-Rosen Bridge{enter}");

    cy.contains("Wormhole").should("exist");
  });
});
