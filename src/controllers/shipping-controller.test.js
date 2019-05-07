// tests/shipping-controller.test.js
var ShippingController = require('../src/controllers/shipping-controller')

describe('Shipping controller', function () {
  var shippingCtrl = new ShippingController()

  it('Should calculate correct shipping ', async function () {
    let shipping = await shippingCtrl.getItemShipping({ id: 1, type: 'standard' })
    expect(shipping).toBe(0.5)
  })

it('Should calculate correct overnight shipping ', async function () {
    let shipping = await shippingCtrl.getItemShipping({ id: 1, type: 'overnight' })
    expect(shipping).toBe(5)
})
})