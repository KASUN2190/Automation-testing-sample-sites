describe("Ebay automation testing", () => {
  it("should open the main URL and verify the title", () => {
    browser.url("http://www.ebay.com/");
    expect(browser).toHaveTitle("Tlt");
  });

  it("Should search product & verify text value", async () => {
    const searchInput = await $("#gh-ac");
    const searchBtn = await $("#gh-btn");

    await searchInput.waitForExist({ timeout: 5000 }); // Wait for the search input field to exist
    await searchInput.setValue("keyboard"); // Set the value of the search input field
    await searchBtn.click(); // Click the search button

    await expect(searchInput).toHaveValue("keyboard"); // Verify the value of the search input field
  });
  it("should redirect to the new page and verify the title", () => {
    expect(browser).toHaveTitle("keyboard for sale | eBay");
  });

  it("Should update the search category", async () => {
    const category = $("#gh-cat option:nth-child(1)");
    await expect(category).toHaveText("All Categories");
  });
});

describe("Computers & Accessories screen", () => {
  it("Should show the banner container", async () => {
    await browser.url(
      "https://www.ebay.com/b/Computers-Tablets-Network-Hardware/58058/bn_1865247"
    );
    const banner = await $("section.b-promobanner");

    await expect(banner).toBeDisplayed();
  });

  it("Should show the banner title", async () => {
    const bannerTitle = await $(".b-promobanner__info-title");

    await expect(bannerTitle).toHaveText("To play");
  });

  it("Should contain link in banner buton verify it clickable", async () => {
    const techBtn = await $(".b-promobanner__info-btn");

    await expect(techBtn).toHaveLinkContaining(
      "https://www.ebay.com/e/_electronics/best-of-tech-deals"
    );
    await expect(techBtn).toBeClickable();
  });

  it("Should click the button and have new url", async () => {
    const techBtn = await $(".b-promobanner__info-btn");
    await techBtn.click();
    await expect(browser).toHaveUrl(
      "https://www.ebay.com/e/_electronics/best-of-tech-deals"
    );
  });
});

//#######################################################################################//

import { expect as chaiExpect } from "chai";
describe("Computers & Accessories screen", () => {
  it("Should show the banner container", async () => {
    await browser.url(
      "https://www.ebay.com/b/Computers-Tablets-Network-Hardware/58058/bn_1865247"
    );
    const banner = await $("section.b-promobanner");

    await expect(banner).toBeDisplayed();
  });

  it("Should show the banner title", async () => {
    const bannerTitle = await $(".b-promobanner__info-title");

    await expect(bannerTitle).toHaveText("To play");
  });

  it("Should contain link in banner buton verify it clickable", async () => {
    const techBtn = await $(".b-promobanner__info-btn");

    await expect(techBtn).toHaveLinkContaining(
      "https://www.ebay.com/e/_electronics/best-of-tech-deals"
    );
    await expect(techBtn).toBeClickable();
  });

  it("Should click the button and have new url", () => {
    const techBtn = $("//a[@class='b-promobanner__info-btn btn fake-btn']");
    techBtn.click();

    const url = browser.getUrl();
    chaiExpect(url).to.include("/Auto/");
    expect(browser).toHaveUrl(
      "https://www.ebay.com/b/Auto-Parts-Accessories/6028/bn_569479"
    );
  });
});
