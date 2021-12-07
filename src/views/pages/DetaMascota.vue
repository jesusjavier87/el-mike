<template>
  <v-container fluid class="down-top-padding">
     
      <v-col>
        <v-card>
          <v-card-text>
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Detalles Mascota</h3>
            <h6 class="subtitle-2 font-weight-light">Esta seccion es ver a detalle una Mascota</h6>
          </v-card-text>
          <div class="content">
          <p>User ID: {{ result.id }}</p>
          <p>Nombre: {{ result.strnombre}}</p>
          <p>Fecha Nacimiento: {{ result.strfechaNaci}}</p>
          <p>Tamaño: {{ result.intSize}}</p>
          <p>Estado: {{ result.catEstadoMascota}}</p>
           </div>
        </v-card>
      </v-col>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    result: null
  }),
  created() {
    axios.get("https://apipet18301044.herokuapp.com/mascotas/"+this.$route.query.id).then((result) => {
      this.result = result.data;
    })
  },
};
</script>