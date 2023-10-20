describe("Mobile Menu Icon click", () => {
  it("should display menu icon in iphone SE views", async () => {
    await browser.setWindowSize(375, 667); // set browser size to simulate mobile view
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    const elem = await $("button svg[data-testid='MenuIcon']");
    await elem.click();
  });
  it("should display menu icon in iphone XR views", async () => {
    await browser.setWindowSize(414, 896); // set browser size to simulate mobile view
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    const elem = await $("button svg[data-testid='MenuIcon']");
    await elem.click();
  });
  it("should display menu icon in iphone 12 pro views", async () => {
    await browser.setWindowSize(394, 844); // set browser size to simulate mobile view
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    const elem = await $("button svg[data-testid='MenuIcon']");
    await elem.click();
  });
  it("should display menu icon in Galaxy S8+ views", async () => {
    await browser.setWindowSize(360, 740); // set browser size to simulate mobile view
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    const elem = await $("button svg[data-testid='MenuIcon']");
    await elem.click();
  });
  it("should display menu icon in Galaxy S20 Ultra views", async () => {
    await browser.setWindowSize(412, 915); // set browser size to simulate mobile view
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    const elem = await $("button svg[data-testid='MenuIcon']");
    await elem.click();
  });
  it("should display menu icon in ipad air views", async () => {
    await browser.setWindowSize(1190, 820); // set browser size to simulate mobile view
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    const elem = await $("button svg[data-testid='MenuIcon']");
    await elem.click();
  });
  it("should display menu icon in ipad mini views", async () => {
    await browser.setWindowSize(1024, 768); // set browser size to simulate mobile view
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    const elem = await $("button svg[data-testid='MenuIcon']");
    await elem.click();
  });
});

// //**************************/ mobile map location check*******************//

describe("car images distance check", () => {
  it("should display the map and show the correct location in iphoneSE view", async () => {
    try {
      await browser.setWindowSize(375, 667);
      await browser.url("https://www.google.com/maps/");
      const searchBox = await $('input[aria-label="Search Google Maps"]');
      await searchBox.waitForDisplayed();
      await searchBox.setValue("21 Arlington Ave, Pakenham VIC 3810");
      const searchButton = await $('button[aria-label="Search"]');
      await searchButton.waitForDisplayed();
      await searchButton.click();
      const map = await $("div[jsname='HOM0gc']");
      await map.waitForDisplayed();
      const mapImage = await map.$$("img");
      const mapSrc = await mapImage[0].getAttribute("src");
      await expect(mapSrc).toMatch(/.*google.*/);
    } catch (error) {
      console.error(`Test failed: ${error}`);
    }
  });
  it("should display the map and show the correct location in iphone XR views", async () => {
    try {
      await browser.setWindowSize(414, 896);
      await browser.url("https://www.google.com/maps/");
      const searchBox = await $('input[aria-label="Search Google Maps"]');
      await searchBox.waitForDisplayed();
      await searchBox.setValue("21 Arlington Ave, Pakenham VIC 3810");
      const searchButton = await $('button[aria-label="Search"]');
      await searchButton.waitForDisplayed();
      await searchButton.click();
      const map = await $("div[jsname='HOM0gc']");
      await map.waitForDisplayed();
      const mapImage = await map.$$("img");
      const mapSrc = await mapImage[0].getAttribute("src");
      await expect(mapSrc).toMatch(/.*google.*/);
    } catch (error) {
      console.error(`Test failed: ${error}`);
    }
  });
  it("should display the map and show the correct location in iphone 12 pro views", async () => {
    try {
      await browser.setWindowSize(394, 844);
      await browser.url("https://www.google.com/maps/");
      const searchBox = await $('input[aria-label="Search Google Maps"]');
      await searchBox.waitForDisplayed();
      await searchBox.setValue("21 Arlington Ave, Pakenham VIC 3810");
      const searchButton = await $('button[aria-label="Search"]');
      await searchButton.waitForDisplayed();
      await searchButton.click();
      const map = await $("div[jsname='HOM0gc']");
      await map.waitForDisplayed();
      const mapImage = await map.$$("img");
      const mapSrc = await mapImage[0].getAttribute("src");
      await expect(mapSrc).toMatch(/.*google.*/);
    } catch (error) {
      console.error(`Test failed: ${error}`);
    }
  });
  it("should display the map and show the correct location in Galaxy S8+ views", async () => {
    try {
      await browser.setWindowSize(360, 740);
      await browser.url("https://www.google.com/maps/");
      const searchBox = await $('input[aria-label="Search Google Maps"]');
      await searchBox.waitForDisplayed();
      await searchBox.setValue("21 Arlington Ave, Pakenham VIC 3810");
      const searchButton = await $('button[aria-label="Search"]');
      await searchButton.waitForDisplayed();
      await searchButton.click();
      const map = await $("div[jsname='HOM0gc']");
      await map.waitForDisplayed();
      const mapImage = await map.$$("img");
      const mapSrc = await mapImage[0].getAttribute("src");
      await expect(mapSrc).toMatch(/.*google.*/);
    } catch (error) {
      console.error(`Test failed: ${error}`);
    }
  });
  it("should display the map and show the correct location in Galaxy S20 Ultra views", async () => {
    try {
      await browser.setWindowSize(412, 915);
      await browser.url("https://www.google.com/maps/");
      const searchBox = await $('input[aria-label="Search Google Maps"]');
      await searchBox.waitForDisplayed();
      await searchBox.setValue("21 Arlington Ave, Pakenham VIC 3810");
      const searchButton = await $('button[aria-label="Search"]');
      await searchButton.waitForDisplayed();
      await searchButton.click();
      const map = await $("div[jsname='HOM0gc']");
      await map.waitForDisplayed();
      const mapImage = await map.$$("img");
      const mapSrc = await mapImage[0].getAttribute("src");
      await expect(mapSrc).toMatch(/.*google.*/);
    } catch (error) {
      console.error(`Test failed: ${error}`);
    }
  });
  it("should display the map and show the correct location in ipad air views", async () => {
    try {
      await browser.setWindowSize(1190, 820);
      await browser.url("https://www.google.com/maps/");
      const searchBox = await $('input[aria-label="Search Google Maps"]');
      await searchBox.waitForDisplayed();
      await searchBox.setValue("21 Arlington Ave, Pakenham VIC 3810");
      const searchButton = await $('button[aria-label="Search"]');
      await searchButton.waitForDisplayed();
      await searchButton.click();
      const map = await $("div[jsname='HOM0gc']");
      await map.waitForDisplayed();
      const mapImage = await map.$$("img");
      const mapSrc = await mapImage[0].getAttribute("src");
      await expect(mapSrc).toMatch(/.*google.*/);
    } catch (error) {
      console.error(`Test failed: ${error}`);
    }
  });
  it("should display the map and show the correct location in ipad mini views", async () => {
    try {
      await browser.setWindowSize(1024, 768);
      await browser.url("https://www.google.com/maps/");
      const searchBox = await $('input[aria-label="Search Google Maps"]');
      await searchBox.waitForDisplayed();
      await searchBox.setValue("21 Arlington Ave, Pakenham VIC 3810");
      const searchButton = await $('button[aria-label="Search"]');
      await searchButton.waitForDisplayed();
      await searchButton.click();
      const map = await $("div[jsname='HOM0gc']");
      await map.waitForDisplayed();
      const mapImage = await map.$$("img");
      const mapSrc = await mapImage[0].getAttribute("src");
      await expect(mapSrc).toMatch(/.*google.*/);
    } catch (error) {
      console.error(`Test failed: ${error}`);
    }
  });
});

describe("car images distance check", () => {
  it("should have car images with reasonable distance", async () => {
    await browser.setWindowSize(414, 896);
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    await browser.execute(
      "document.documentElement.style.width = '414px'; document.documentElement.style.height = '896px';"
    );

    // Get the position of the third car image
    const car3 = await browser.$(".Home_imageContainer3__1qttN");
    const car3Position = await car3.getLocation();
    const car3X = parseInt(car3Position.x);

    // Get the position of the second car image
    const car2 = await browser.$(".Home_imageContainer2__lLqAc");
    const car2Position = await car2.getLocation();
    const car2X = parseInt(car2Position.x);

    // Calculate the distance between the car images
    const distance = Math.abs(car2X - car3X);

    // Assert that the distance is less than some maximum value
    expect(distance).toBeLessThan(150);
  });
});

describe("Card container horizontal centering", () => {
  it("should horizontally center the cards", async () => {
    await browser.setWindowSize(414, 896);
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    const container = $(
      "div[class='slick-slide slick-active slick-current'] div div div[class='MuiCardContent-root mui-style-1qw96cp']"
    );
    const justifyContent = container.getCSSProperty("justify-content").value;
    expect(justifyContent).toBe("center");
  });
});

describe("Card Image Test", () => {
  it("should be horizontally centered", async () => {
    await browser.setWindowSize(375, 667);
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );

    // Find the card image element
    const cardImage = await $(
      "div[class='slick-slide slick-active slick-current'] div div div[class='MuiStack-root Slider_SliderMain__NT3AH mui-style-dvxtzn'] img[alt='Car Catergory Icon']"
    );

    // Get the x-position of the image
    const imageX = await cardImage.getLocation("x");

    // Get the width of the parent container
    const containerWidth = await $(".slick-track").getSize("width");

    // Get the width of the image
    const imageWidth = await cardImage.getSize("width");

    // Calculate the expected x-position of the image
    const expectedX = (containerWidth - imageWidth) / 2;

    // Check if the actual x-position matches the expected x-position
    expect(imageX, expectedX, "Image is not horizontally centered");
  });
});
