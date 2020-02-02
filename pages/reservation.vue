<template>
  <v-layout>
    <v-flex class="text-center">
      <v-layout row wrap justify-start class="pt-3 pb-3">
        <v-btn>前の一週間</v-btn>
        <v-spacer></v-spacer>
        <v-btn>次の一週間</v-btn>
      </v-layout>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">時間</th>
              <th class="text-center">1<br>(日)</th>
              <th class="text-center">2<br>(月)</th>
              <th class="text-center">3<br>(火)</th>
              <th class="text-center">4<br>(水)</th>
              <th class="text-center">5<br>(木)</th>
              <th class="text-center">6<br>(金)</th>
              <th class="text-center">7<br>(土)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in schedule" :key="item.name">
              <td class="text-center">{{ item.time }}</td>
              <td class="text-center">{{ item.sun }}</td>
              <td class="text-center">{{ item.mon }}</td>
              <td class="text-center">{{ item.tue }}</td>
              <td class="text-center">{{ item.wed }}</td>
              <td class="text-center">{{ item.thu }}</td>
              <td class="text-center">{{ item.fri }}</td>
              <td class="text-center">{{ item.sat }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        schedule: [
          {
            time: '10:00',
            sun: '◎',
            mon: '◎',
            tue: '◎',
            wed: '◎',
            thu: '◎',
            fri: '◎',
            sat: '◎',
          },
          {
            time: '11:00',
            sun: '◎',
            mon: '◎',
            tue: '◎',
            wed: '◎',
            thu: '◎',
            fri: '◎',
            sat: '◎',
          },
          {
            time: '12:00',
            sun: '◎',
            mon: '◎',
            tue: '◎',
            wed: '◎',
            thu: '◎',
            fri: '◎',
            sat: '◎',
          },
          {
            time: '13:00',
            sun: '◎',
            mon: '◎',
            tue: '◎',
            wed: '◎',
            thu: '◎',
            fri: '◎',
            sat: '◎',
          },
          {
            time: '14:00',
            sun: '◎',
            mon: '◎',
            tue: '◎',
            wed: '◎',
            thu: '◎',
            fri: '◎',
            sat: '◎',
          },
          {
            time: '15:00',
            sun: '◎',
            mon: '◎',
            tue: '◎',
            wed: '◎',
            thu: '◎',
            fri: '◎',
            sat: '◎',
          },
          {
            time: '16:00',
            sun: '◎',
            mon: '◎',
            tue: '◎',
            wed: '◎',
            thu: '◎',
            fri: '◎',
            sat: '◎',
          },
          {
            time: '17:00',
            sun: '◎',
            mon: '◎',
            tue: '◎',
            wed: '◎',
            thu: '◎',
            fri: '◎',
            sat: '◎',
          },
          {
            time: '18:00',
            sun: '◎',
            mon: '◎',
            tue: '◎',
            wed: '◎',
            thu: '◎',
            fri: '◎',
            sat: '◎',
          },
          {
            time: '19:00',
            sun: '◎',
            mon: '◎',
            tue: '◎',
            wed: '◎',
            thu: '◎',
            fri: '◎',
            sat: '◎',
          },
        ],
      }
    },
  }
</script>
