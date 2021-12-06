<template>
  <v-container fluid class="down-top-padding">
   <!--esta es la page es de agenda(jesus)-->
   <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Lista de Agenda">
            <TableSimpleFixHeight>

            </TableSimpleFixHeight>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TableSimple",

  data: () => ({
  }),
  components: {
      TableSimpleFixHeight: () => import('@/components/vuetifyComponents/tables-simple/TableSimpleFixHeight'),
  }
};
</script>
