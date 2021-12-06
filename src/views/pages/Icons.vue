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
          <v-divider></v-divider>
          <v-card-text>
            <v-text-field
              v-model="txtnombre"
              label="Nombre:"
              filled
              background-color="transparent"
            ></v-text-field>
             <v-text-field
              v-model="txtape1"
              label="Apellido Paterno:"
              filled
              background-color="transparent"
            ></v-text-field>
            <v-text-field
              v-model="txtape2"
              label="Apellido Materno:"
              filled
              background-color="transparent"
            ></v-text-field>
            <div class="mt-4">
              <v-select :items="items" filled label="Selecciona un sexo" background-color="transparent"></v-select>
            </div>
            <v-btn class="text-capitalize mt-5 element-0" color="success">Enviar</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    txtnombre: "jesus javier",
    txtnomtitle: "jesus javier",
    txtape1: "pacheco",
    txtape2: "ortiz",
    show1: false,
    items: ["Hombre", "Mujer"]
  }),
  components: {}
};
</script>
