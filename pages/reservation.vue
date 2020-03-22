<template>
  <v-layout>
    <v-flex class="text-center">
      <v-layout row wrap justify-start class="px-3 py-3">
        <v-btn @click.native="beforeWeek">前の一週間</v-btn>
        <v-spacer></v-spacer>
        <v-btn @click.native="nextWeek">次の一週間</v-btn>
      </v-layout>

      {{ formatDate(baseDate ,'YYYY年MM月') }}
      <br>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">時間</th>
              <th class="text-center" v-for="item in days" :key="item.day">
                {{ item.day }}<br>({{ item.dayOfWeek }})
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reservable in reservableList" :key="reservable.time">
              <td class="text-center">{{ reservable.time }}</td>
              <td class="text-center" v-for="day in days" :key="day.day">
                {{ reservable[day.dayOfWeek] }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      
    </v-flex>
  </v-layout>
</template>

<script>
  import _ from 'lodash'
  import axios from 'axios'
  import constant from '@/static/constant.json'
  import reservationInfo from '@/static/reservationInfo.json'
  import reservationStatus from '@/static/reservationStatus.json'
  import dateUtilsMixin from '@/plugins/dateUtilsMixin'
  export default {
    mixins: [
      dateUtilsMixin,
    ],
    data: () => ({
      baseDate: '',
      days: [],
      reservations: [],
      reservableList: [],
    }),
    async created() {
      this.createReservableList(this.getNow('YYYY-MM-DD'))
    },
    methods: {
      createTimeSchedule(days) {
        return _.cloneDeep(reservationInfo.timeSchedule).map((schedule) => {
          days.forEach((day) => {
            schedule[day.dayOfWeek] = reservationStatus.reservable
          })
          return schedule
        })
      },
      async createReservableList(date) {
        this.baseDate = this.getMoment(date, 'YYYY-MM-DD')
        this.days = this.getDays(this.baseDate, constant.PAGING_DAYS)

        const dateFrom = this.formatDate(this.baseDate, 'YYYY-MM-DD')
        const dateTo = this.formatDate(this.getAddDays(this.baseDate, constant.PAGING_DAYS - 1), 'YYYY-MM-DD')
        await axios({
          method: 'GET',
          url: `${constant.API_URL_HOST}/reservation`,
          params: {
            reservationDateFrom: dateFrom,
            reservationDateTo: dateTo
          }
        }).then((response) => {
          this.reservations = response.data;
        }).catch();

        this.reservableList = this.createTimeSchedule(this.days)

        this.reservations.forEach(async (reservation) => {
          const reservationDateTime = this.getMoment(reservation.reservation_datetime).utc()
          const time = this.formatDate(reservationDateTime, 'HH:mm')
          const dayOfWeek = this.getDayOfWeek(reservationDateTime)
          
          this.reservableList.map((timeSchedule) => {
            if (timeSchedule.time === time) {
              timeSchedule[dayOfWeek] = reservationStatus.notReservable
            };
          });
        })
      },
      beforeWeek() {
        this.createReservableList(this.getSubstractDays(this.baseDate, constant.PAGING_DAYS - 1))
      },
      nextWeek() {
        this.createReservableList(this.getAddDays(this.baseDate, constant.PAGING_DAYS - 1))
      },
    },
  }
</script>
