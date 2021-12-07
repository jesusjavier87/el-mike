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
            <p>Nombre</p>
            <v-text-field v-model="nombre"></v-text-field>
            <p>Apellido Paterno:</p>
            <v-text-field v-model="APeterno"></v-text-field>
            <p>Apellido Materno:</p>
             <v-text-field v-model="AMaterno"></v-text-field>
          </v-card-text>
          <v-row align="center" justify="space-around">
              <v-btn color="success"  @click="verdeta(result.id)"><v-icon left>mdi-pencil</v-icon>Guardar</v-btn>
              <v-btn color="success"  @click="regreso"><v-icon left>mdi-pencil</v-icon>Atras</v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
     result: null,
  }),
  created() {
    axios.get("https://apipet18301044.herokuapp.com/users/75").then((result) => {
      this.result = result.data;
      this.nombre = result.data.firstname,
      this.APeterno = result.data.lastname,
      this.AMaterno = result.data.secondname
    });
    let post = {
    id: this.$route.query.id,
    firstname: this.result.lastname ,
    lastname: 'pacheco',
    secondname: 'ortiz',
    Sex: 'Hombre',
    email: '18300496@uttt.edu.mx',
    password: 'Pentium876!',
    token: 'ff971215faa69ff344dd854c44ec418af86677d2',
    catRolId: 2,
  };
  axios.put("https://apipet18301044.herokuapp.com/users/75", post).then((result) => {
    console.log(result);
  });
  },
   methods: {
    verdeta(id){
                this.$router.push(`/pages/icons/?id=${id}`);
                //funsion put
            },
    regreso(){
                this.$router.push(`/pages/icons/`);
            },
            
  },
};
</script>
