<template>
    <v-container fluid class="down-top-padding">
    <!--esta es la page es de mi perfil(jesus)-->
        <v-row>
            <v-col cols="12" lg="8">
                <v-card>
                    <v-card-text>
                        <v-card-text>
                            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Pedido #1028</h3>
                        </v-card-text>
                        
                        <v-alert
                        border="left"
                        color="indigo"
                        dark
                        >
                            Estado: Pendiente
                        </v-alert>
                    </v-card-text>
                </v-card>
                <v-card>
                    <v-card-text>
                        <v-card-text>
                            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Pedido #1029</h3>
                        </v-card-text>
                        
                        <v-alert
                        border="left"
                        color="succes"
                        dark
                        >
                            Estado: finalizado
                        </v-alert>
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