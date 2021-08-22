const moment = require("moment")
const daysOfWeek = require("../../config/daysOfWeek")

class Store {
    constructor(openingTimes) {
        this.openingTimes = openingTimes;
    }

    isOpen() {
        const currentTime = moment();
        const currentDay = daysOfWeek[currentTime.day()]

        if (this.openingTimes.hasOwnProperty(currentDay)) {
            const open = this.openingTimes[currentDay].open
            const openingHour = open.split (":")[0];
            const openingMinute = open.split(":")[1];

            const close = this.openingTimes[currentDay].close
            const closingHour = close.split (":")[0];
            const closingMinute = close.split(":")[1];

            const openingMoment = moment().set("hours", openingHour).set("minutes", openingMinute).set("seconds", 0)
            const closingMoment = moment().set("hours", closingHour).set("minutes", closingMinute).set("seconds", 0)

            console.log("OPENING MOMENT: ", openingMoment.format())
            console.log("CLOSING MOMENT: ", closingMoment.format())
            console.log("CURRENT TIME: ", currentTime.format())


            return currentTime.isBetween(openingMoment, closingMoment, "[)")
        } else {
            return false;   
        }

    }
}

module.exports = Store