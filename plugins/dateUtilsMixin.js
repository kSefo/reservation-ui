import moment from 'moment-timezone';

export default {
  methods: {
    // formatStr
    //   YYYY-MM-DD
    //   YYYY-MM-DD HH:mm:ss
    //   YYYY-MM-DDTHH:mm:ss.SSS000Z(ISO)
    formatDate(targetDate, formatStr) {
      if (!targetDate || !formatStr) return '';
      return moment(targetDate).format(formatStr);
    },
    isBefore(targetDate, baseDate, yearMonthDay) {
      if (!targetDate || !baseDate) return '';
      return yearMonthDay ? moment(targetDate).isBefore(baseDate, yearMonthDay) : moment(targetDate).isBefore(baseDate);
    },
    isAfter(targetDate, baseDate, yearMonthDay) {
      if (!targetDate || !baseDate) return '';
      return yearMonthDay ? moment(targetDate).isAfter(baseDate, yearMonthDay) : moment(targetDate).isAfter(baseDate);
    },
    isSame(targetDate, baseDate, yearMonthDay) {
      if (!targetDate || !baseDate) return '';
      return yearMonthDay ? moment(targetDate).isSame(baseDate, yearMonthDay) : moment(targetDate).isSame(baseDate);
    },
    isSameOrBefore(targetDate, baseDate) {
      if (!targetDate || !baseDate) return '';
      return moment(targetDate).isSameOrBefore(baseDate);
    },
    isSameOrAfter(targetDate, baseDate) {
      if (!targetDate || !baseDate) return '';
      return moment(targetDate).isSameOrAfter(baseDate);
    },
    isBetween(targetDate, fromDate, toDate) {
      if (!targetDate || !fromDate || !toDate) return '';
      return moment(targetDate).isBetween(fromDate, toDate);
    },
    getMoment(date, formatStr) {
      return moment(date, formatStr);
    },
    getNow(formatStr) {
      return this.formatDate(moment(), formatStr);
    },
    getAddDays(baseDate, addDays) {
      // cloneでコピーした値に日を加算して返す（自身のデータを変更してしまうため）
      return baseDate.clone().add(addDays, 'days');
    },
    getSubstractDays(baseDate, minusDays) {
      // cloneでコピーした値に日を減算して返す（自身のデータを変更してしまうため）
      return baseDate.clone().subtract(minusDays, 'days');
    },
    getDayOfWeek(moment) {
      return ['sun','mon','tue','wed','thu','fri','sat'][moment.day()];
    },
    getDays(baseDate, days) {
      // 基準日から指定日数分の日と曜日を返す
      return [...Array(days)].map((_, days) => (
        {
          day : days ? this.getAddDays(baseDate, days).date() : baseDate.date(),
          dayOfWeek : days ? this.getDayOfWeek(this.getAddDays(baseDate, days)) : this.getDayOfWeek(baseDate)
        }
      ))
    }
  },
};
