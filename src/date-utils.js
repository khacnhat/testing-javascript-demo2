function DateUtils() {
    this.isLeapYear = function(year) {
        return false;
    },

    this.getDaysOfMonth = function(month, year) {
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            case 2:
                if (this.isLeapYear(year)) {
                    return 29;
                }
                return 28;
        }
    }
}
module.exports = DateUtils;

