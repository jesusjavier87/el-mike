<template>
    <v-container fluid class="down-top-padding">
       <div>
        <v-list-item-subtitle class="text-wrap">
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-simple-table height="500px">
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">id</th>
                    <th class="text-left">fecha de inicio</th>
                    <th class="text-left">fecha final</th>
                    <th class="text-left">hora</th>
                    <th class="text-left">acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in data" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.dtDiaAgenda }}</td>
                    <td>{{ item.dtFechaCuidar }}</td>
                    <td>{{ item.hora }}</td>
                    <td>
                      <v-btn depressed color="primary" @click="verdeta(item.id)">Ver</v-btn>
                    </td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
        </div>
    </div>
    </v-container>
</template>
 
 
 

 <script>
import axios from "axios";
export default {
  name: "Current",
  data: () => ({
    items: ["albums", "todos", "posts"],
    selected: "",
    data:[],
    id:0,
  }),

  methods: {
    getData() {
      axios
        .get("https://apipet18301044.herokuapp.com/agendar" + this.selected ,{dataType: "json"})
        .then((response) => { this.data = response.data;
        })
        .catch((err) => alert(err));
    },
    verdeta(id){
                this.$router.push(`/pages/deta-agenda/?id=${id}`);
            },
  },
  mounted() {
    this.getData();
  }

};
</script>

