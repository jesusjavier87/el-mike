<template>
  <v-container fluid class="down-top-padding">
     <!--esta es la page es de mi perfil(jesus)-->
     <v-row>
      <v-col cols="12" lg="4">
        <v-card>
          <v-card-text class="text-center pa-7">
            <img
              src="https://png.pngtree.com/png-vector/20191003/ourlarge/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
              alt="user"
              width="150px"
              class="img-fluid rounded-circle shadow-sm"
            />
            <h4 class="mt-2 title blue-grey--text text--darken-2 font-weight-regular"></h4>
            <h6 class="subtitle-2 font-weight-light">GoggSys</h6>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="8">
        <v-card>
          <v-card-text>
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Edicion de datos</h3>
            <h6 class="subtitle-2 font-weight-light">Esta seccion es para cambiar datos de perfil</h6>
          </v-card-text>
          <v-card-text>
            <p>ID: {{ result.id }}</p>
            <p>Nombre: {{ result.firstname }}</p>
            <p>Apellido Paterno: {{ result.lastname }}</p>
            <p>Apellido Materno: {{ result.secondname }}</p>
            <p>Sexo: {{ result.Sex }}</p>
            <p>Corre: {{ result.email }}</p>
            <p>Rol: cuidador</p>
          </v-card-text>
          <v-btn depressed color="primary" @click="verdeta(result.id)">Editar perfil</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    result: null
  }),
  created() {
    axios.get("https://apipet18301044.herokuapp.com/users/75").then((result) => {
      this.result = result.data;
    })
  },
   methods: {
    verdeta(id){
                this.$router.push(`/pages/edit-perfil/?id=${id}`);
            },
  },
};
</script>
