<template>
    <v-container fluid class="down-top-padding">
    <!--esta es la page es de mi perfil(jesus)-->
        <v-row>
            <v-col cols="12" lg="8">
                <v-card>
                    <v-card-text>
                        <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Edicion de datos</h3>
                        <h6 class="subtitle-2 font-weight-light">Esta seccion es para cambiar datos de perfil</h6>
                    </v-card-text>
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
    
}
</script>