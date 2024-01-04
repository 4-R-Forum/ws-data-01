input.onButtonPressed(Button.A, function () {
    if (tx_power < 7) {
        tx_power += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (tx_power > 0) {
        tx_power += -1
    }
})
let data_string = ""
let tx_power = 0
let period = 60000
tx_power = 7
radio.setTransmitPower(tx_power)
radio.setGroup(1)
radio.setFrequencyBand(0)
weatherbit.startWeatherMonitoring()
weatherbit.startWindMonitoring()
weatherbit.startRainMonitoring()
loops.everyInterval(period, function () {
    data_string = "" + convertToText(weatherbit.temperature() / 100) + "," + convertToText(weatherbit.humidity() / 1024) + "," + convertToText(Math.round(weatherbit.pressure() / 25600)) + "," + convertToText(weatherbit.windSpeed()) + "," + weatherbit.windDirection()
    radio.sendString(data_string)
    basic.showString(data_string)
})
