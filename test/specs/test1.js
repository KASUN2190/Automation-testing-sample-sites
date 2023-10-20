describe("CHCar Web", async () => {
  it("home page", async () => {
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    await browser.maximizeWindow();
    await expect(browser).toHaveTitleContaining("CH Car Rental");
  });
  //************************Header-Logo Testing************************//
  it("should open the homepage in a new window when the logo is right-clicked", () => {
    browser.url("http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/");
    const logo = $('img[alt="CH Car Rental Logo"]');
    logo.click({ button: "right" });
    const menuItem = $(".//*[text()='Open Link in New Window']");
    menuItem.click();
    // switch to the new window using the window handle of the current window
    const newWindowHandle = browser.getWindowHandle();
    browser.switchWindow(newWindowHandle);
    expect(browser.getUrl()).toEqual(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com"
    );
    // close the new window and switch back to the original window
    browser.closeWindow();
    browser.switchWindow(browser.getWindowHandles()[0]);
  });
  it("should navigate to the homepage and verify the logo is displayed", () => {
    browser.url("http://cr-car-rental.s3-website.ap-south-1.amazonaws.com");
    const logo = $('img[(alt = "CH Car Rental Logo")]');
    expect(logo).toBeDisplayed();
  });
  //************************Social-Icon Testing************************//
  it("social icon clicking check", async () => {
    await (await $("svg#FacebookIcon")).isClickable();
    await (await $("svg#TwitterIcon")).isClickable();
    await (await $("svg#InstagramIcon")).isClickable();
  });
  it("social icon navigation check", async () => {
    await (await $("svg#FacebookIcon")).click();
    await expect(browser).toHaveUrl("https://www.facebook.com/");
    await browser.back();
    await (await $("svg#TwitterIcon")).click();
    await expect(browser).toHaveUrl("https://twitter.com/");
    await browser.back();
    await (await $("svg#InstagramIcon")).click();
    await expect(browser).toHaveUrl("https://www.instagram.com/");
    await browser.back();
  });
  //************************NavigationBar Testing************************//
  // it("navigation bar screen names check", async () => {
  //   const link1 = await $(
  //     "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > p:nth-child(1)"
  //   );
  //   await expect(link1).toHaveText("Home");
  //   await expect(link1).toHaveAttribute(
  //     "href",
  //     "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com"
  //   );
  //   const link2 = await $(
  //     "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1) > p:nth-child(1)"
  //   );
  //   await expect(link2).toHaveText("Find Us");
  //   await expect(link2).toHaveAttribute(
  //     "href",
  //     "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/#findUsSection"
  //   );
  //   const link3 = await $(
  //     "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1) > p:nth-child(1)"
  //   );
  //   await expect(link3).toHaveText("About");
  //   await expect(link3).toHaveAttribute(
  //     "href",
  //     "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/about"
  //   );
  // });
  it("navigation bar About screen names check", async () => {
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    const elem = await $(
      "(//p[@class='MuiTypography-root MuiTypography-body1 NavBar_linkText__ZK_P_ mui-style-x5p3ta'][normalize-space()='About'])[1]"
    );
    await elem.click();
  });
  it("navigation bar FindUs screen names check", async () => {
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    const elem = await $(
      "//p[@class='MuiTypography-root MuiTypography-body1 NavBar_linkText__ZK_P_ mui-style-x5p3ta'][normalize-space()='Find Us']"
    );
    await elem.click();
  });
  //*******************Booknow button Testing********************//
  it("booknow button check", async () => {
    await $(".MuiButton-root").click();
    const link4 = await $("//button[normalize-space()='Book Now']");
    await expect(link4).toHaveText("Book Now");
    await expect(link4).toHaveAttribute(
      "href",
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/Booknow"
    );
  });
  //***************calling number testing****************//
  it("calling number check", async () => {
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    const elem = await $("//a[normalize-space()='0468 834 526']");
    await elem.click();
  });
  //***************Rentnow button testing****************//
  it("rentnow button check for hatchback", async () => {
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    const rentnow = await $(
      "(//button[@type='button'][normalize-space()='Rent Now'])[1]"
    );
    await rentnow.click();
  });
  it("rentnow button check for Sedan", async () => {
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    const rentnow = await $(
      "(//button[@type='button'][normalize-space()='Rent Now'])[2]"
    );
    await rentnow.click();
  });
  it("rentnow button check for SUV", async () => {
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    const rentnow = await $(
      "(//button[@type='button'][normalize-space()='Rent Now'])[3]"
    );
    await rentnow.click();
  });
  //********************Image Testing********************//
  it("should load all images correctly", async () => {
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    const images = browser.$$("[src]");
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const naturalWidth = browser.execute((el) => el.naturalWidth, image);
      const naturalHeight = browser.execute((el) => el.naturalHeight, image);
      await expect(naturalWidth).to.be.greaterThan(0);
      await expect(naturalHeight).to.be.greaterThan(0);
    }
  });
  //************************Map Testing************************//
  it("should display the map and show the correct location", async () => {
    try {
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
  it("should display the map with the correct location", async () => {
    try {
      await browser.url(
        "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/#findUsSection"
      );
      await browser.pause(5000); // Wait for map to load
      const mapContainer = await browser.$(
        "//section[@id='findUsSection']//div[@class='MuiContainer-root MuiContainer-maxWidthLg mui-style-1qsxih2']"
      );
      const mapImg = await mapContainer.$("div[jsname='HOM0gc']");
      const mapSrc = await mapImg.getAttribute("src");
      expect(mapSrc).to.match(/.*google.*/);
      const marker = await browser.$(
        "//img[@src='https://maps.gstatic.com/mapfiles/transparent.png']"
      );
      const markerPosition = await marker.getLocation();
      expect(markerPosition.x).to.equal(550); // Update x,y values with the new position of the marker
      expect(markerPosition.y).to.equal(312);
    } catch (error) {
      console.error(`Test failed: ${error}`);
    }
  });
  // //************************Footer Testing************************//
  //*Footer-Logo Testing*//
  it("should navigate to the homepage and verify the footer logo is displayed", () => {
    browser.url("http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/");
    const logo = $('img[alt="Logo"]');
    // Override the click method on the logo element to open a new window
    logo.addCommand("click", function (button = 0) {
      this.waitUntil(
        () => {
          return this.isClickable();
        },
        5000,
        "Logo element not clickable"
      );
      this.moveTo();
      this.buttonDown(button);
      this.buttonUp(button);
      browser.pause(1000);
      const windows = browser.getWindowHandles();
      if (Array.isArray(windows)) {
        const newWindow = windows[windows.length - 1];
        browser.switchToWindow(newWindow);
      }
    });
    // Right-click on the logo to open it in a new window
    browser.execute((logoSelector) => {
      const logo = document.querySelector(logoSelector);
      logo.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        logo.click(2);
      });
    }, logo.selector);
    // Wait for the new window to load
    browser.waitUntil(
      () => {
        return browser.getUrl() !== "about:blank";
      },
      {
        timeout: 5000,
        timeoutMsg: "Expected a new window to be opened",
      }
    );
    // Verify the URL of the new window
    expect(browser.getUrl()).toMatch(
      /http:\/\/cr-car-rental\.s3-website\.ap-south-1\.amazonaws\.com\//
    );
    // Switch back to the original window
    const windows = browser.getWindowHandles();
    if (Array.isArray(windows)) {
      browser.switchToWindow(windows[0]);
    }
    // Verify the logo is displayed on the homepage
    expect(logo).toBeDisplayed();
  });
});
import assert from "assert";
describe("CategorySlider component", () => {
  it("should show one card at a time in mobile view", async () => {
    // Set the viewport size to simulate mobile view
    await browser.setWindowSize(375, 667);
    await browser.url(
      "http://cr-car-rental.s3-website.ap-south-1.amazonaws.com/"
    );
    // Get the number of visible cards
    const visibleCards = $$(
      "div[class='slick-slide slick-active slick-current'] div div div[class='MuiGrid-root MuiGrid-container mui-style-1rq542z']"
    ).filter((card) => card.isDisplayed()).length;
    // Verify that only one card is visible
    assert.strictEqual(
      visibleCards,
      1,
      "Expected only one card to be visible in mobile view"
    );
  });
});
