<template>
  <v-container fluid class="down-top-padding">
     <!--esta es la page es de mi perfil(jesus)-->
      <v-col>
        <v-card>
          <v-card-text>
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Detalles Agenda</h3>
            <h6 class="subtitle-2 font-weight-light">Esta seccion es ver a detalle una agenda</h6>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
              <v-text-field
              v-model="id"
              label="id:"
              filled
              disabled = "false"
              background-color="transparent"
            >
            </v-text-field>
            <v-text-field
              v-model="dtDiaAgenda"
              label="dtDiaAgenda:"
              filled
               disabled = "false"
              background-color="transparent"
            ></v-text-field>
             <v-text-field
              v-model="dtFechaCuidar"
              label="dtFechaCuidar:"
              filled
               disabled = "false"
              background-color="transparent"
            ></v-text-field>
            <v-text-field
              v-model="hora"
              label="hora:"
              filled
               disabled = "false"
              background-color="transparent"
            ></v-text-field>
             <v-text-field
              v-model="strDescripcion"
              label="strDescripcion:"
              filled
               disabled = "false"
              background-color="transparent"
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
          id: this.$route.query.id,
        };
      },
}
</script>