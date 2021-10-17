const get_all_products = require("./get_all_products")
// @ponicode
describe("get_all_products", () => {
    test("0", async () => {
        await get_all_products("https://accounts.google.com/o/oauth2/revoke?token=%s", { status: () => 400 }, () => " ")
    })

    test("1", async () => {
        await get_all_products("http://www.croplands.org/account/confirm?t=", { status: () => 404 }, () => " ")
    })

    test("2", async () => {
        await get_all_products("ponicode.com", { status: () => 500 }, () => " ")
    })

    test("3", async () => {
        await get_all_products("https://api.telegram.org/", { status: () => 500 }, () => " ")
    })

    test("4", async () => {
        await get_all_products("http://base.com", { status: () => 400 }, () => " ")
    })

    test("5", async () => {
        await get_all_products(undefined, { status: () => -Infinity }, undefined)
    })
})
