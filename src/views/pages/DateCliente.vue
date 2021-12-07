<template>
<v-container>
     <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">datos de cuidador</h3>
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
              <v-btn depressed color="primary" @click="verdeta">Ver</v-btn> 
          </v-card-text>
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
    axios.get("https://apipet18301044.herokuapp.com/users/" + this.$route.query.id).then((result) => {
      this.result = result.data;
    })
  },
  methods: {
  verdeta(){
      this.id = this.$route.query.id,
      this.$router.push(`/pages/mascotas/?id=${this.id}`);
  }
  },
};
</script>
