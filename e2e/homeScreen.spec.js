const {reloadApp} = require("detox-expo-helpers")

const getElementById = (id) => element(by.id(id)) // eslint-disable-line

describe("Home Screen on load", () => {
  beforeEach(async() => {
    await reloadApp()
  })

  // it("should be empty, with no keys selected, and three select fields", async() => {
  //   await expect(getElementById("homeScreen")).toBeVisible()
  //   await expect(getElementById("noneSelected__empty")).toBeVisible()
  //   await expect(getElementById("noneSelected__empty__text")).toBeVisible()

  //   await expect(getElementById("homeScreenSelect__0__view")).toBeVisible()
  //   await expect(getElementById("homeScreenSelect__1__view")).toBeVisible()
  //   await expect(getElementById("homeScreenSelect__2__view")).toBeVisible()

  //   // check the existing value? // to have value ""
  //   // await expect(getElementById("homeScreenSelect__0__view")).toBeVisible()
  // })

  it("should be able to change the value of a select, and change the contents", async() => {
    await expect(getElementById("homeScreenSelect__0__view")).toBeVisible()
    await getElementById("homeScreenSelect__0__view").tap()
    await element(by.type("UIPickerView")).setColumnToValue(0, "c")
    // await getElementById("done_button").tap()

    // // not be able to find the empty div? noneSelected__empty

    // await expect(getElementById("selectKey__c")).toBeVisible()
    // await expect(getElementById("selectKey__d")).toBeVisible()
    // await expect(getElementById("selectKey__e")).toBeVisible()
    // await expect(getElementById("selectKey__f")).toBeVisible()
    // await expect(getElementById("selectKey__g")).toBeVisible()
    // await expect(getElementById("selectKey__a")).toBeVisible()
    // await expect(getElementById("selectKey__b")).toBeVisible()
  })

  // it("should be able to reset the contents back to an empty state", async() => {
  //   await expect(getElementById("homeScreenSelect__0__view")).toBeVisible()
  //   await getElementById("homeScreenSelect__0__view").tap()
  //   await element(by.type("UIPickerView")).setColumnToValue(0, "c")
  //   await getElementById("done_button").tap()

  //   await expect(getElementById("reset_button")).toBeVisible()
  //   await getElementById("reset_button").tap()

  //   await expect(getElementById("noneSelected__empty")).toBeVisible()
  //   await expect(getElementById("noneSelected__empty__text")).toBeVisible()
  // })

  // it("should be able to change screen when clicking on a key", async() => {
  //   await expect(getElementById("homeScreenSelect__0__view")).toBeVisible()
  //   await getElementById("homeScreenSelect__0__view").tap()
  //   await element(by.type("UIPickerView")).setColumnToValue(0, "c")
  //   await getElementById("done_button").tap()

  //   await expect(getElementById("selectKey__c")).toBeVisible()
  //   await getElementById("selectKey__c").tap()
  //   await expect(getElementById("keyScreen__c")).toBeVisible()

  //   // swipe back?
  // })
})
