<template>
  <div>
    <div>
      <v-toolbar color="secondary" dark>
      <v-icon right>folder_shared</v-icon>
      <v-toolbar-title>{{$t('menu.registrosDireccion')}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <span class="grey--text">{{$t('user.crud.role') + ': ' + this.$store.state.user.rol.nombre}}</span>
      </v-toolbar>
      <v-card>
        <v-card-title class="headline">
          <v-icon right>search</v-icon>
          <h2 class="headline mb-0">{{$t('registerView.searchParams')}}</h2>
          <v-spacer></v-spacer>
          <v-btn icon dark color="primary" @click.native="generalDataPanel?minimize():maximize()">
            <v-icon>{{generalDataPanel?"remove":"add"}}</v-icon>
          </v-btn>
        </v-card-title>
        <v-container fluid v-if="generalDataPanel">
          <v-layout row wrap>
            <v-flex xs12>
              <h4>{{$t('charts.searchStudent') }}</h4>
            </v-flex>
            <v-flex xs6>
              <v-select
                v-bind:items="tiposDocumento"
                item-text="text"
                item-value="value"
                v-model="buscaPersona.documento"
                :label="$t('inscriptionRegister.documentTipe')"
              ></v-select>
            </v-flex>
            <v-flex xs6>
              <v-text-field v-if="buscaPersona.documento == 'ci'" :label="$t('inscriptionRegister.documentNumber')" v-model="buscaPersona.carnet"></v-text-field>
              <v-text-field v-if="buscaPersona.documento == 'codigo'" :label="$t('common.code')" v-model="buscaPersona.codigo"></v-text-field>
            </v-flex>
            <v-flex xs8>
              <v-text-field :label="$t('inscriptionRegister.names')" v-model="buscaPersona.nombres"></v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-btn class="primary" block flat v-on:click="buscaEstudiante()">{{$t('common.search')}}
                <v-icon right> search </v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs12>
              <h4>{{$t('common.filters') }}</h4>
            </v-flex>
            <v-flex xs10>
              <v-select
                v-bind:items="estudiantes"
                item-text="text"
                item-value="value"
                v-model="search.estudiante"
                :label="$t('charts.studentsFound')"
              ></v-select>
            </v-flex>
            <v-flex xs2>
              <v-btn :disabled="search.estudiante === '' || search.estudiante === 'noData'" block color="primary" @click.native="mostrarDatos()">{{$t('charts.view')}}
                <v-icon>visibility</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <v-select
                v-bind:items="areas"
                item-text="text"
                item-value="value"
                v-model="search.area"
                :label="$t('registerView.area')"
              ></v-select>
            </v-flex>
            <v-flex xs6>
              <v-select
                v-bind:items="tiposInforme"
                item-text="text"
                item-value="value"
                v-model="search.tipo"
                :label="$t('charts.reportType')"
              ></v-select>
            </v-flex>
            <v-flex xs6>
              <v-menu
                ref="menu"
                v-model="fechaInicio"
                lazy
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-right="40"
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    slot="activator"
                    :label="$t('charts.fromDate')"
                    v-model="search.fechaInicial"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker 
                  v-model="search.fechaInicial" 
                  locale="es"
                  :allowed-dates="fechaInicialValida"
                  no-title scrollable actions>
                </v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs6>
              <v-menu
                ref="menu"
                v-model="fechaFinal"
                lazy
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-right="40"
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    slot="activator"
                    :label="$t('charts.toDate')"
                    v-model="search.fechaFinal"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker 
                  v-model="search.fechaFinal" 
                  locale="es" 
                  :allowed-dates="fechaFinalValida"
                  no-title scrollable actions>
                </v-date-picker>
              </v-menu>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <br>
      <!-- TABLA DE DATOS -->
      <v-card>
        <v-card-title class="headline">
          <v-icon right>list</v-icon>
          <h2 class="headline mb-0">{{$t('registerView.files')}}</h2>
        </v-card-title>
        <v-data-table :headers="headersAsinacion" :items="registros" v-bind:pagination.sync="pagination" :total-items="totalItems" class="elevation-1" :rows-per-page-text="$t('inscriptions.studentsPerPage')">
          <template slot="items" slot-scope="props">
            <td>{{ getDate(props.item._fecha_creacion) }}</td>
            <td>{{ props.item.usuario.nombre_completo }}</td>
            <td>{{ props.item.tipo === 'simple' ? 'seguimiento' : props.item.tipo }}</td>
            <td class="text-xs-right">
              <!-- <v-btn icon dark color="primary" @click.native="verRegistro(props.item)">
                <v-icon>filter_none</v-icon>
              </v-btn> -->
              <v-btn icon dark color="primary" @click.native="printFile(props.item)">
                <v-icon>filter_none</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card>
    </div>
    <div>
      <v-layout row wrap align-center>
        <!-- VENTANA DE VISTA DE DATOS -->
        <v-dialog v-model="dialogVistaDatos" persistent width="1200px">
          <v-card>
            <v-card-title class="headline">
              <v-icon right>subject</v-icon>
              <h2 class="headline mb-0">{{$t('generalFollowUp.generalData')}}</h2>
            </v-card-title>
            <v-container fluid>
              <v-layout row wrap>
                <v-flex xs6>
                  <b>{{ this.$t('inscriptionRegister.names') }}: </b> {{consulta.nombres ? consulta.nombres : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6></v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('inscriptionRegister.firstLastName') }}: </b> {{consulta.primer_apellido ? consulta.primer_apellido : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('inscriptionRegister.secondLastName') }}: </b> {{consulta.segundo_apellido ? consulta.segundo_apellido : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('inscriptionRegister.ci') }}: </b> {{consulta.documento_identidad ? consulta.documento_identidad + ' ' +consulta.lugar_documento_identidad : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('entity.crud.code') }}: </b> {{consulta.estudiante && consulta.estudiante.codigo ? consulta.estudiante.codigo : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('usuarios.bornDate') }}: </b> {{consulta.fecha_nacimiento ? getDate(consulta.fecha_nacimiento) : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('generalFollowUp.age') }}: </b> {{consulta.fecha_nacimiento ? getAge(consulta.fecha_nacimiento) : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('usuarios.gender') }}: </b> {{consulta.genero ? consulta.genero : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('inscriptionRegister.cellphone') }}: </b> {{consulta.telefono ? consulta.telefono : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('inscriptionRegister.community') }}: </b> {{ consulta.direccion && consulta.direccion.comunidad ? consulta.direccion.comunidad : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('inscriptionRegister.zona') }}: </b> {{ consulta.direccion && consulta.direccion.zona ? consulta.direccion.zona : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('inscriptionRegister.street') }}: </b> {{ consulta.direccion && consulta.direccion.calle ? consulta.direccion.calle : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('inscriptionRegister.number') }}: </b> {{ consulta.direccion && consulta.direccion.numero ? consulta.direccion.numero : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('inscriptionRegister.telefon') }}: </b> {{ consulta.direccion && consulta.direccion.telefono ? consulta.direccion.telefono : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('inscriptionRegister.cellphone') }}: </b> {{ consulta.direccion && consulta.direccion.celular ? consulta.direccion.celular : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('inscriptionRegister.country') }}: </b> {{consulta.direccion && consulta.direccion.pais ? getPais(consulta.direccion.pais) : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('inscriptionRegister.departamento') }}: </b> {{consulta.direccion && consulta.direccion.departamento ? getDepartamento(consulta.direccion.departamento) : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('inscriptionRegister.provincia') }}: </b> {{consulta.direccion && consulta.direccion.provincia ? getProvincia(consulta.direccion.provincia) : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
                <v-flex xs6>
                  <b>{{ this.$t('inscriptionRegister.municipio') }}: </b> {{consulta.direccion && consulta.direccion.municipio ? getMunicipio(consulta.direccion.municipio) : this.$t('generalFollowUp.notRegistered')}}
                </v-flex>
              </v-layout>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="primary" flat v-on:click="dialogVistaDatos = false">{{$t('common.accept')}}
                <v-icon right>done</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- VENTANA DE REGISTRO DE SEGUIMIENTO -->
        <v-dialog v-model="dialogRegistroSeguimiento" persistent width="1200px">
          <v-card>
            <vista-simple></vista-simple>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="primary" flat v-on:click="dialogRegistroSeguimiento = false">{{$t('common.accept')}}
                <v-icon right>done</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- VENTANA DE TRABAJO SOCIAL -->
        <v-dialog v-model="dialogRegistroTrabajoSocial" persistent width="1200px">
          <v-card>
            <vista-trabajo-social></vista-trabajo-social>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="primary" flat v-on:click="dialogRegistroTrabajoSocial = false">{{$t('common.accept')}}
                <v-icon right>done</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- VENTANA DE TERAPIA OCUPACIONAL -->
        <v-dialog v-model="dialogRegistroTerapiaOcupacional" persistent width="1200px">
          <v-card>
            <vista-terapia-ocupacional></vista-terapia-ocupacional>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="primary" flat v-on:click="dialogRegistroTerapiaOcupacional = false">{{$t('common.accept')}}
                <v-icon right>done</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </div>
  </div>
</template>

<script>
  import Comps from '../comps';
  import RegistroSimple from '@/components/vistaRegistros/simple.vue';
  import RegistroEvalTrabajoSocial from '@/components/vistaRegistros/evalTrabajoSocial.vue';
  import RegistroEvaluacionTerapiaOcupacional from '@/components/vistaRegistros/evalTerapiaOcupacional.vue';
  import StudentData from '@/common/util/StudentData.vue';
  /* eslint-disable semi */
  export default {
    mixins: [ Comps ],
    data () {
      return {
        headers: {'access-token': '<your-token>'},
        generalDataPanel: true,
        deleteData: {},
        areaView: '',
        // Vista Datos de Estudiante
        consulta: {},
        paisLista: [],
        departamentoLista: [],
        provinciaLista: [],
        municipioLista: [],
        // Registro Seguimiento
        dialogVistaDatos: false,
        dialogRegistroSeguimiento: false,
        dialogRegistroTrabajoSocial: false,
        dialogRegistroTerapiaOcupacional: false,
        dialogRegistroSemestral: false,
        // Opciones de area
        areas: [
          {
            value: 'psicomotricidad',
            text: 'Psicomotricidad'
          },
          {
            value: 'fisioterapia',
            text: 'Fisioterapia'
          },
          {
            value: 'fonoaudiologia',
            text: 'Fonoaudiología'
          },
          {
            value: 'nutricion',
            text: 'Nutrición'
          },
          {
            value: 'psicologia',
            text: 'Psicología'
          },
          {
            value: 'odontologia',
            text: 'Odontología'
          },
          {
            value: 'psicopedagogia',
            text: 'Psicopedagogía'
          },
          {
            value: 'medicina general',
            text: 'Medicina General'
          },
          {
            value: 'trabajo social',
            text: 'Trabajo Social'
          },
          {
            value: 'educacion',
            text: 'Educación'
          },
          {
            value: 'terapia ocupacional',
            text: 'Terapia ocupacional'
          },
          {
            value: 'todos',
            text: this.$t('charts.all')
          }
        ],
        // Busqueda de datos
        tiposInforme: [{
          value: 'simple',
          text: this.$t('charts.followUp')
        }, {
          value: 'especialidad',
          text: this.$t('charts.evaluation')
        }, {
          value: 'todos',
          text: this.$t('charts.all')
        }],
        tiposDocumento: [{
          value: 'codigo',
          text: this.$t('common.code')
        }, {
          value: 'ci',
          text: this.$t('usuarios.id')
        }],
        estudiantes: [{
          value: 'noData',
          text: this.$t('charts.noStudentsMatchSearchParams')
        }],
        buscaPersona: {
          nombres: '',
          carnet: '',
          codigo: '',
          documento: 'codigo'
        },
        search: {
          estudiante: 'noData',
          area: 'todos',
          tipo: 'todos',
          fechaInicial: '',
          fechaFinal: ''
        },
        // Listado de estudiantes
        datosEstudiante: {},
        registros: [],
        asignaciones: [],
        totalItems: 0,
        pagination: {
          sortBy: null
        },
        headersAsinacion: [
          {text: 'Fecha', value: '_fecha_creacion'},
          {text: 'Doctor', value: '_usuario_creacion'},
          {text: 'Tipo', value: 'tipo'},
          {text: this.$t('common.actions'), value: ''}
        ],
        // rules
        nameRules: [
          (v) => !!v || 'El nombre es requerido',
          (v) => v.length <= 25 || 'Name must be less than 25 characters'
        ],
        emailRules: [
          (v) => !!v || 'El correo electrónico es requerido',
          (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'No es un correo electrónico válido'
        ]
      }
    },
    components: {
      'vista-simple': RegistroSimple,
      'vista-trabajo-social': RegistroEvalTrabajoSocial,
      'vista-terapia-ocupacional': RegistroEvaluacionTerapiaOcupacional,
      'student-data': StudentData
    },
    watch: {
      'search.estudiante': function () {
        this.getTableData();
      },
      'search.area': function () {
        this.getTableData();
      },
      'search.tipo': function () {
        this.getTableData();
      },
      'search.fechaInicial': function (val) {
        this.getTableData();
      },
      'search.fechaFinal': function (val) {
        this.getTableData();
      },
      pagination: {
        handler () {
        },
        deep: true
      }
    },
    created () {
      this.headers = {'Authorization': `Bearer ${this.$storage.get('token')}`};
      this.datosEstudiante = this.$storage.get('nino');
      let areaActual = this.$storage.get('user');
      this.areas.forEach(area => {
        if (area.text.toLowerCase() === areaActual.rol.area.toLowerCase()) {
          this.search.area = area.value;
        }
      });
      var d = new Date();
      d.setDate(d.getDate() + 1);
      this.search.fechaFinal = this.dateFormat(d);
      d.setDate(d.getDate() - 6);
      this.search.fechaInicial = this.dateFormat(d);
    },
    methods: {
      buscaEstudiante () {
        let rutaEstudiantes = 'estudiantes?list=true&';
        if (this.buscaPersona.nombres !== '' || this.buscaPersona.carnet !== '' || this.buscaPersona.codigo !== '') {
          let readyToAdd = true;
          if (this.buscaPersona.nombres !== '') {
            if (!readyToAdd) {
              rutaEstudiantes += '&';
            }
            rutaEstudiantes += 'nombres=' + this.buscaPersona.nombres;
            readyToAdd = false;
          }
          if (this.buscaPersona.documento !== '') {
            if (!readyToAdd) {
              rutaEstudiantes += '&';
            }
            rutaEstudiantes += 'tipobusqueda=' + this.buscaPersona.documento;
            readyToAdd = false;
          }
          if (this.buscaPersona.codigo !== '' && this.buscaPersona.documento === 'codigo') {
            if (!readyToAdd) {
              rutaEstudiantes += '&';
            }
            rutaEstudiantes += 'buscar=' + this.buscaPersona.codigo;
            readyToAdd = false;
          }
          if (this.buscaPersona.carnet !== '' && this.buscaPersona.documento === 'ci') {
            if (!readyToAdd) {
              rutaEstudiantes += '&';
            }
            rutaEstudiantes += 'buscar=' + this.buscaPersona.carnet;
            readyToAdd = false;
          }
        }
        this.$service.get(rutaEstudiantes)
        .then(response => {
          let listaEstudiante = response.datos.rows;
          if (response.datos.count === 0) {
            this.estudiantes = [{
              value: 'noData',
              text: this.$t('charts.noStudentsMatchSearchParams')
            }]
          } else {
            this.estudiantes = [];
            this.buscaPersona.estudiante = '';
            listaEstudiante.forEach(studentItem => {
              const aux = {
                value: studentItem.codigo,
                text: this.primeraLetraMayuscula(studentItem.nombres + ' ' + studentItem.primer_apellido + ' ' + studentItem.segundo_apellido)
              }
              this.estudiantes.push(aux);
            });
          }
          if (this.estudiantes.length === 1) {
            this.search.estudiante = this.estudiantes[0].value;
          }
        })
      },
      printFile (item) {
        this.loading = true;
        let datosEstudiante = this.$storage.get('nino');
        this.$service.get(`imprimirRegistro?idRegistro=${item.id_registro}&estudiante=${datosEstudiante.codigo}`)
        .then(response => {
          if (response && response.datos) {
            window.open('data:application/pdf;base64,' + response.datos);
          }
          this.loading = false;
        });
      },
      mostrarDatos () {
        this.headers = {'Authorization': `Bearer ${this.$storage.get('token')}`};
        this.$service.get(`dpaNivel?nivel=1`)
        .then(respuesta => {
          this.paisLista = respuesta.datos;
        });
        this.$service.get(`dpaNivel?nivel=2`)
        .then(respuesta => {
          this.departamentoLista = respuesta.datos;
        });
        this.$service.get(`dpaNivel?nivel=3`)
        .then(respuesta => {
          this.provinciaLista = respuesta.datos;
        });
        this.$service.get(`dpaNivel?nivel=4`)
        .then(respuesta => {
          this.municipioLista = respuesta.datos;
        });
        this.$service.get(`estudiantes?codigo=${this.search.estudiante}`)
        .then(respuesta => {
          if (!respuesta) {
            return;
          }
          if (respuesta.datos.length === 1) {
            this.consulta = respuesta.datos[0];
          }
        });
        this.dialogVistaDatos = true;
      },
      fechaInicialValida (value) {
        if (this.search.fechaFinal) {
          return new Date(value) < new Date(this.search.fechaFinal);
        }
      },
      fechaFinalValida (value) {
        if (this.search.fechaInicial) {
          return new Date(value) > new Date(this.search.fechaInicial);
        }
      },
      getTableData () {
        let rutaRegistros = 'registros';
        if (this.search.estudiante !== '' || this.search.area !== '' || this.search.tipo !== '' || this.search.fechaInicial !== '' || this.search.fechaFinal !== '') {
          rutaRegistros += '?';
          let readyToAdd = true;
          if (this.search.estudiante !== '') {
            if (!readyToAdd) {
              rutaRegistros += '&';
            }
            rutaRegistros += 'estudiante=' + this.search.estudiante;
            readyToAdd = false;
          }
          if (this.search.area !== '' && this.search.area !== 'todos') {
            if (!readyToAdd) {
              rutaRegistros += '&';
            }
            rutaRegistros += 'area=' + this.search.area;
            readyToAdd = false;
          }
          if (this.search.tipo !== '' && this.search.tipo !== 'todos') {
            if (!readyToAdd) {
              rutaRegistros += '&';
            }
            rutaRegistros += 'tipo=' + this.search.tipo;
            readyToAdd = false;
          }
          if (this.search.fechaInicial !== '') {
            if (!readyToAdd) {
              rutaRegistros += '&';
            }
            rutaRegistros += 'fechaInicial=' + this.search.fechaInicial;
            readyToAdd = false;
          }
          if (this.search.fechaFinal !== '') {
            if (!readyToAdd) {
              rutaRegistros += '&';
            }
            rutaRegistros += 'fechaFinal=' + this.search.fechaFinal;
            readyToAdd = false;
          }
        }
        this.$service.get(rutaRegistros)
        .then(response => {
          this.registros = response.datos.rows ? response.datos.rows : response.datos;
        })
      },
      minimize () {
        this.generalDataPanel = false;
      },
      maximize () {
        this.generalDataPanel = true;
      },
      getDate (dateString) {
        let date = dateString ? new Date(dateString) : new Date();
        return (date.getDate() + ' - ' + this.$t('months[' + date.getMonth() + ']') + ' - ' + date.getFullYear());
      },
      getAge (dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      },
      getPais (itemPais) {
        let response = 'No registrado';
        this.paisLista.forEach(element => {
          if (element.id_dpa === itemPais) {
            response = element.nombre;
          }
        });
        return response;
      },
      getDepartamento (itemDepartamento) {
        let response = 'No registrado';
        this.departamentoLista.forEach(element => {
          if (element.id_dpa === itemDepartamento) {
            response = element.nombre;
          }
        });
        return response;
      },
      getProvincia (itemProvincia) {
        let response = 'No registrado';
        this.provinciaLista.forEach(element => {
          if (element.id_dpa === itemProvincia) {
            response = element.nombre;
          }
        });
        return response;
      },
      getMunicipio (itemMunicipio) {
        let response = 'No registrado';
        this.municipioLista.forEach(element => {
          if (element.id_dpa === itemMunicipio) {
            response = element.nombre;
          }
        });
        return response;
      },
      verRegistro (item) {
        switch (item.tipo) {
          case 'simple':
            const datosRegistro = {
              idRegistro: item.id_registro,
              fecha: this.getDate(item._fecha_creacion),
              area: item.area,
              autor: item.usuario.nombre + ' ' + item.usuario.primer_apellido + ' ' + item.usuario.segundo_apellido,
              observacion: item.registros_simple.observacion,
              intervencion: item.registros_simple.intervencion
            }
            this.$store.state.simpleRegisterView = datosRegistro;
            this.dialogRegistroSeguimiento = true;
            break;
          case 'especialidad':
            switch (item.area) {
              case 'Trabajo social':
                this.areaView = 'Trabajo social';
                const datosTrabajoSocial = {
                  idRegistro: item.id_registro,
                  fecha: this.getDate(item._fecha_creacion),
                  area: item.area,
                  autor: item.usuario.nombre + ' ' + item.usuario.primer_apellido + ' ' + item.usuario.segundo_apellido,
                  tipoDeFamilia: item.reg_tb.tipo_de_familia,
                  observacionGrupoFamiliar: item.reg_tb.observacion_grupo_familiar,
                  dinamicaFamiliar: item.reg_tb.dinamica_familiar,
                  procesoSocial: item.reg_tb.proceso_social,
                  relatoDiscapacidad: item.reg_tb.relato_discapacidad,
                  diagnosticoSocial: item.reg_tb.diagnostico_social,
                  conclusionSugerencia: item.reg_tb.conclusion_sugerencia
                };
                this.$store.state.socialWorkRegisterView = datosTrabajoSocial
                this.dialogRegistroTrabajoSocial = true;
                break;
              case 'Terapia Ocupacional':
                this.areaView = 'Terapia ocupacional';
                const datosTerapiaOcupacional = {
                  idRegistro: item.id_registro,
                  fecha: this.getDate(item._fecha_creacion),
                  area: item.area,
                  autor: item.usuario.nombre + ' ' + item.usuario.primer_apellido + ' ' + item.usuario.segundo_apellido,
                  ducha_realiza: item.reg_to.ducha_realiza,
                  ducha_observacion: item.reg_to.ducha_observacion,
                  controlEsfinter_realiza: item.reg_to.controlEsfinter_realiza,
                  controlEsfinter_observacion: item.reg_to.controlEsfinter_observacion,
                  vestidoDesvestido_realiza: item.reg_to.vestidoDesvestido_realiza,
                  vestidoDesvestido_observacion: item.reg_to.vestidoDesvestido_observacion,
                  masticarTragar_realiza: item.reg_to.masticarTragar_realiza,
                  masticarTragar_observacion: item.reg_to.masticarTragar_observacion,
                  comerSolo_realiza: item.reg_to.comerSolo_realiza,
                  comerSolo_observacion: item.reg_to.comerSolo_observacion,
                  movilidadFuncional_realiza: item.reg_to.movilidadFuncional_realiza,
                  movilidadFuncional_observacion: item.reg_to.movilidadFuncional_observacion,
                  higienePersonalAseo_realiza: item.reg_to.higienePersonalAseo_realiza,
                  higienePersonalAseo_observacion: item.reg_to.higienePersonalAseo_observacion,
                  higieneInodoro_realiza: item.reg_to.higieneInodoro_realiza,
                  higieneInodoro_observacion: item.reg_to.higieneInodoro_observacion,
                  comprension_realiza: item.reg_to.comprension_realiza,
                  comprension_observacion: item.reg_to.comprension_observacion,
                  expresion_realiza: item.reg_to.expresion_realiza,
                  expresion_observacion: item.reg_to.expresion_observacion,
                  interaccionSocial_realiza: item.reg_to.interaccionSocial_realiza,
                  interaccionSocial_observacion: item.reg_to.interaccionSocial_observacion,
                  solProblemas_realiza: item.reg_to.solProblemas_realiza,
                  solProblemas_observacion: item.reg_to.solProblemas_observacion,
                  memoria_realiza: item.reg_to.memoria_realiza,
                  memoria_observacion: item.reg_to.memoria_observacion,
                  atencion_realiza: item.reg_to.atencion_realiza,
                  atencion_observacion: item.reg_to.atencion_observacion,
                  orientacion_realiza: item.reg_to.orientacion_realiza,
                  orientacion_observacion: item.reg_to.orientacion_observacion,
                  reconocimiento_realiza: item.reg_to.reconocimiento_realiza,
                  reconocimiento_observacion: item.reg_to.reconocimiento_observacion,
                  secuenciacion_realiza: item.reg_to.secuenciacion_realiza,
                  secuenciacion_observacion: item.reg_to.secuenciacion_observacion,
                  calculo_realiza: item.reg_to.calculo_realiza,
                  calculo_observacion: item.reg_to.calculo_observacion,
                  lenguaje_realiza: item.reg_to.lenguaje_realiza,
                  lenguaje_observacion: item.reg_to.lenguaje_observacion,
                  escritura_realiza: item.reg_to.escritura_realiza,
                  escritura_observacion: item.reg_to.escritura_observacion,
                  sedestacion_realiza: item.reg_to.sedestacion_realiza,
                  sedestacion_equilibrio: item.reg_to.sedestacion_equilibrio,
                  sedestacion_estatico: item.reg_to.sedestacion_estatico,
                  sedestacion_dinamico: item.reg_to.sedestacion_dinamico,
                  bipedestacion_realiza: item.reg_to.bipedestacion_realiza,
                  bipedestacion_equilibrio: item.reg_to.bipedestacion_equilibrio,
                  bipedestacion_estatico: item.reg_to.bipedestacion_estatico,
                  bipedestacion_dinamico: item.reg_to.bipedestacion_dinamico,
                  marcha_realiza: item.reg_to.marcha_realiza,
                  marcha_observacion: item.reg_to.marcha_observacion,
                  marcha_dinamico: item.reg_to.marcha_dinamico,
                  observacionesMovilidadFuncional: item.reg_to.observacionesMovilidadFuncional,
                  pinzaGruesa_cilindricaDerecha: item.reg_to.pinzaGruesa_cilindricaDerecha,
                  pinzaGruesa_cilindricaIzquierda: item.reg_to.pinzaGruesa_cilindricaIzquierda,
                  pinzaGruesa_esfericaDerecha: item.reg_to.pinzaGruesa_esfericaDerecha,
                  pinzaGruesa_esfericaIzquierda: item.reg_to.pinzaGruesa_esfericaIzquierda,
                  pinzaGruesa_engancheDerecha: item.reg_to.pinzaGruesa_engancheDerecha,
                  pinzaGruesa_engancheIzquierda: item.reg_to.pinzaGruesa_engancheIzquierda,
                  pinzaGruesa_observaciones: item.reg_to.pinzaGruesa_observaciones,
                  pinzaFina_subTerminalDerecha: item.reg_to.pinzaFina_subTerminalDerecha,
                  pinzaFina_subTerminalIzquierda: item.reg_to.pinzaFina_subTerminalIzquierda,
                  pinzaFina_terminoTerminalDerecha: item.reg_to.pinzaFina_terminoTerminalDerecha,
                  pinzaFina_terminoTerminalIzquierda: item.reg_to.pinzaFina_terminoTerminalIzquierda,
                  pinzaFina_lateralDerecha: item.reg_to.pinzaFina_lateralDerecha,
                  pinzaFina_lateralIzquierda: item.reg_to.pinzaFina_lateralIzquierda,
                  pinzaFina_tripodeDerecha: item.reg_to.pinzaFina_tripodeDerecha,
                  pinzaFina_tripodeIzquierda: item.reg_to.pinzaFina_tripodeIzquierda,
                  pinzaFina_interdigitalDerecha: item.reg_to.pinzaFina_interdigitalDerecha,
                  pinzaFina_interdigitalIzquierda: item.reg_to.pinzaFina_interdigitalIzquierda,
                  pinzaFina_lateroLateralDerecha: item.reg_to.pinzaFina_lateroLateralDerecha,
                  pinzaFina_lateroLateralIzquierda: item.reg_to.pinzaFina_lateroLateralIzquierda,
                  pinzaFina_multipulparDerecha: item.reg_to.pinzaFina_multipulparDerecha,
                  pinzaFina_multipulparIzquierda: item.reg_to.pinzaFina_multipulparIzquierda,
                  pinzaFina_observaciones: item.reg_to.pinzaFina_observaciones,
                  barrerasArquitectonicas: item.reg_to.barrerasArquitectonicas,
                  objetivosIntervención_objetivos: item.reg_to.objetivosIntervención_objetivos,
                  objetivosIntervención_observaciones: item.reg_to.objetivosIntervención_observaciones
                };
                this.$store.state.occupationalTherapyRegisterView = datosTerapiaOcupacional;
                this.dialogRegistroTerapiaOcupacional = true;
                break;
              default:
                break;
            }
            break;
          case 'semestral':
            this.dialogRegistroSemestral = true;
            break;
          default:
            break;
        }
      }
    }
  }
</script>
