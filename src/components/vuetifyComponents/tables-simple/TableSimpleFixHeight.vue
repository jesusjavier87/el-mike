<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TableSimpleFixHeight -->
    <!-- ----------------------------------------------------------------------------- -->
     <div>
        <v-list-item-subtitle class="text-wrap">
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-simple-table height="300px">

                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">Id</th>
                    <th class="text-left">Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>2</td>
                    </tr>
                </tbody>
                </template>

            </v-simple-table>
        </div>
    </div>
</template>
 
 
 

<script>
import axios from "axios";
export default {
  name: "Current",
  data: () => ({
    items: ["albums", "todos", "posts"],
    selected: "",

    headers: [
      { text: "ID", value: "id" },
      { text: "firstname", value: "firstname" },
    ],
    data:[],
  }),

  methods: {
    getData() {
      axios
        .get("https://apipet18301044.herokuapp.com/users" + this.selected ,{dataType: "json"})
        .then((response) => { this.data = response.data;})
        .catch((err) => alert(err));
    },
  },

  mounted() {
    this.getData();
  }

};
</script>
 