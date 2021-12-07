<template>
  <v-container fluid class="down-top-padding">
     <!--esta es la page es de mi perfil(jesus)-->
     <v-row v-if="!alert">
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
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="alert">
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
              <v-btn color="success"  @click="guardar"><v-icon left>mdi-pencil</v-icon>Guardar</v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-btn @click="alert = true,  actualizar()">Editar </v-btn>
    <v-btn @click="alert = false, actualizar()" >Ver </v-btn>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
     result: null,
     alert: false,
     form: {
            firstname: "",
            lastname: "",
            secondname: "",
            Sex: "",
            email: "",
            password: "",
            token: "",
            catRolId: "",
     }
  }),
created() {
    axios.get("https://apipet18301044.herokuapp.com/users/75").then((result) => {
      this.result = result.data;
      this.strnom = result.data.firstname,
      this.nombre = result.data.firstname,
      this.APeterno = result.data.lastname,
      this.AMaterno = result.data.secondname
    })
  },
   methods: {
        guardar() {
          axios.get("https://apipet18301044.herokuapp.com/users/75").then((result) => {
            this.result = result.data;
            console.log(result.data.firstname);
            this.form.firstname = this.nombre;
            this.form.lastname = this.APeterno;
            this.form.secondname = this.AMaterno;
            this.form.Sex = result.data.Sex;
            this.form.email = result.data.email;
            this.form.password = result.data.password;
            this.form.token = result.data.token;
            this.form.catRolId = result.data.catRolId;
            console.log(this.form);
            const respuesta = axios.put("https://apipet18301044.herokuapp.com/users/75",this.form)
            console.log(respuesta);
         })
         //no se toca de arriba 
        },
        actualizar (){
          axios.get("https://apipet18301044.herokuapp.com/users/75").then((result) => {
            this.result = result.data;
            this.result = result.data;
            this.strnom = result.data.firstname,
            this.nombre = result.data.firstname,
            this.APeterno = result.data.lastname,
             this.AMaterno = result.data.secondname
          })
        }
      },
};
</script>
