<template>
  <div>
    <v-card-title class="headline">
      <v-icon right>book</v-icon>
      {{$t('generalFollowUp.standartRegistry') }}
      <v-spacer></v-spacer>
      <v-btn :disabled="loading" class="primary" flat v-on:click="printFile()">{{$t('generalFollowUp.print')}}
        <v-icon right>print</v-icon>
      </v-btn>
    </v-card-title>
    <v-layout row>
      <v-flex xs10 offset-xs1>
        <v-alert color="primary" icon="label" value="true">
          {{$t('generalFollowUp.generalData')}}
        </v-alert>
        <v-layout row wrap>
          <v-flex xs4 offset-xs8>
            <b>{{$t('registerView.creationDate')}}: </b>{{$store.state.socialWorkRegisterView.fecha}}
          </v-flex>
          <v-flex xs12>
            <b>{{$t('registerView.area')}}: </b>{{$store.state.socialWorkRegisterView.area}}
          </v-flex>
          <v-flex xs12>
            <b>{{$t('registerView.createdBy')}}: </b>{{$store.state.socialWorkRegisterView.autor}}
          </v-flex>
          <v-flex xs10 offset-xs1>
            <br><b>{{$t('socialWork.familyType')}}: </b>{{$store.state.socialWorkRegisterView.tipoDeFamilia}}
          </v-flex>
          <v-flex xs10 offset-xs1>
            <br><b>{{$t('socialWork.groupFamilyObservation')}}: </b><br>{{$store.state.socialWorkRegisterView.observacionGrupoFamiliar}}
          </v-flex>
          <v-flex xs10 offset-xs1>
            <br><b>{{$t('socialWork.familyDinamic')}}: </b><br>{{$store.state.socialWorkRegisterView.dinamicaFamiliar}}
          </v-flex>
          <v-flex xs10 offset-xs1>
            <br><b>{{$t('socialWork.socialProces')}}: </b><br>{{$store.state.socialWorkRegisterView.procesoSocial}}
          </v-flex>
          <v-flex xs10 offset-xs1>
            <br><b>{{$t('socialWork.disabilityStory')}}: </b><br>{{$store.state.socialWorkRegisterView.relatoDiscapacidad}}
          </v-flex>
          <v-flex xs10 offset-xs1>
            <br><b>{{$t('socialWork.socialDiagnostics')}}: </b><br>{{$store.state.socialWorkRegisterView.diagnosticoSocial}}
          </v-flex>
          <v-flex xs10 offset-xs1>
            <br><b>{{$t('socialWork.conclusionSuggestion')}}: </b><br>{{$store.state.socialWorkRegisterView.conclusionSugerencia}}
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
  export default {
    name: 'vista-trabajo-social',
    // props: ['visibility'],
    data () {
      return {
        loading: false
      };
    },
    created () {
      this.headers = {'Authorization': `Bearer ${this.$storage.get('token')}`};
    },
    methods: {
      printFile () {
        this.loading = true;
        let datosEstudiante = this.$storage.get('nino');
        this.$service.get(`imprimirRegistro?idRegistro=${this.$store.state.socialWorkRegisterView.idRegistro}&estudiante=${datosEstudiante.codigo}`)
        .then(response => {
          if (response && response.datos) {
            window.open('data:application/pdf;base64,' + response.datos);
          }
          this.loading = false;
        });
      }
    },
    watch: {
    }
  };
</script>
