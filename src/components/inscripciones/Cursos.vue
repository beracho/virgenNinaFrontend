<template>
<div>
  <div>
  <v-toolbar color="secondary" dark>
    <v-icon right>book</v-icon>
    <v-toolbar-title>{{$t('menu.cursos')}}</v-toolbar-title>
    <v-spacer></v-spacer>
      <v-btn color='primary' dark @click.native="dialogNewCourse = true">
        {{$t('courses.newCourse') }}
        <v-icon right dark>add_circle</v-icon>
      </v-btn>
  </v-toolbar>
  <v-card>
    <v-card-title class="headline">
      <v-icon right>search</v-icon>
      <h2 class="headline mb-0">{{$t('registerView.searchParams')}}</h2>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs6>
          <v-text-field :label="$t('courses.gestion')" v-model="buscaCurso.gestion"></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
  <!-- TABLA DE DATOS -->
  <v-data-table v-bind:headers="headersAsinacion" v-bind:items="asignaciones" v-bind:pagination.sync="pagination" :total-items="totalItems" class="elevation-1" :rows-per-page-text="$t('courses.coursesPerPage')">
    <template slot="items" slot-scope="props">
      <td class="text-xs-right">
          <v-btn icon dark color="primary" @click.native="abreDialog(props.item.id_curso)">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn icon dark color="primary" @click.native="listaEstudiantesDialog(props.item.id_curso)">
            <v-icon>visibility</v-icon>
          </v-btn>
      </td>
      <td>{{ props.item.nombre }}</td>
      <td>{{ props.item.paralelo }}</td>
      <td>{{ props.item.gestion }}</td>
      <td>{{ convierteAAños(props.item.edad_minima) + ' - ' + convierteAAños(props.item.edad_maxima) }}</td>
    </template>
  </v-data-table>
  </div>

  <div>
    <!-- VENTANA DE NUEVO CURSO -->
    <v-layout row wrap align-center>
      <v-dialog v-model="dialogNewCourse" persistent width="1200px">
        <!-- <v-btn dark class="seccion" slot="activator">
          Nuevo Curso
          <v-icon right dark>add_circle</v-icon>
        </v-btn> -->
        <v-card>
          <v-card-title class="headline">
            <v-icon right>book</v-icon>
            {{$t('courses.creatingNewCourse') }}
          </v-card-title>
          <v-layout row>
            <v-flex xs10 offset-xs1>
              <v-alert color="primary" icon="label" value="true">
                {{$t('courses.courseData')}}
              </v-alert>
              <form @submit.prevent="agregaCurso()">
                <v-layout row wrap>
                  <v-flex xs4>
                    <v-select 
                    :items="nombresCurso" 
                    :label="$t('courses.name')" 
                    v-model="formularioCreacionCurso.nombre" 
                    :rules="nameRules"></v-select>
                  </v-flex>
                  <v-flex xs4>
                    <v-select
                    :items="paralelosCurso"
                    v-model="formularioCreacionCurso.paralelo"
                    :label="$t('inscriptionRegister.paralel')"
                    :rules="paralelRules"></v-select>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                    :label="$t('courses.gestion')"
                    v-model="formularioCreacionCurso.gestion"
                    :rules="yearRules"></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field v-model="formularioCreacionCurso.maestro" :label="$t('courses.teacher')"></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-select :items="descripcionesCurso" v-model="formularioCreacionCurso.descripcion" :label="$t('entity.crud.description')"></v-select>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field :label="$t('courses.minimalAge')" v-model="formularioCreacionCurso.edad_min"></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field :label="$t('courses.maximalAge')" v-model="formularioCreacionCurso.edad_max"></v-text-field>
                  </v-flex>
                  <v-flex xs4>
                    <v-select :items="discapacidadesCurso" :label="$t('inscriptionRegister.disability')" v-model="formularioCreacionCurso.tipo_discapacidad"></v-select>
                  </v-flex>
                  <v-flex xs4>
                    <v-select :items="gradosCurso" v-model="formularioCreacionCurso.grado" :label="$t('inscriptionRegister.grade')"></v-select>
                  </v-flex>
                </v-layout>
              </form>
            </v-flex>
          </v-layout>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="cancel" dark @click.native="dialogNewCourse = false">{{$t('common.cancel')}}
              <v-icon right>cancel</v-icon>
            </v-btn>
            <v-btn class="primary" flat v-on:click="agregaCurso()">{{$t('common.save')}}
              <v-icon right>done</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

    <!-- VENTANA DE EDICIÓN DE CURSO -->
    <v-layout row>
      <v-dialog v-model="dialogEdicion" width="1200px" persistent>
        <v-card>
          <v-card-title class="headline">
            <v-icon right>book</v-icon>
            {{$t('courses.editCourse')}}
          </v-card-title>
          <v-layout row>
            <v-flex xs10 offset-xs1>
              <v-alert color="primary" icon="label" value="true">
                {{$t('courses.courseData')}}
              </v-alert>
              <form @submit.prevent="editaCurso">
                <v-layout row wrap>
                  <v-flex xs4>
                    <v-select :items="nombresCurso" :label="$t('courses.name')" v-model="formularioEdicionCurso.nombre" :rules="nameRules"></v-select>
                  </v-flex>
                  <v-flex xs4>
                    <v-select :items="paralelosCurso" v-model="formularioEdicionCurso.paralelo" :label="$t('inscriptionRegister.paralel')" :rules="paralelRules"></v-select>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field :label="$t('courses.gestion')" v-model="formularioEdicionCurso.gestion" :rules="yearRules"></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field v-model="formularioEdicionCurso.maestro" :label="$t('courses.teacher')"></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-select :items="descripcionesCurso" v-model="formularioEdicionCurso.descripcion" :label="$t('entity.crud.description')"></v-select>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field :label="$t('courses.minimalAge') + ' (' + $t('inscriptions.months') + ')'" v-model="formularioEdicionCurso.edad_minima" :hint="convierteAAños(formularioEdicionCurso.edad_minima)"></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field :label="$t('courses.maximalAge') + ' (' + $t('inscriptions.months') + ')'" v-model="formularioEdicionCurso.edad_maxima" :hint="convierteAAños(formularioEdicionCurso.edad_maxima)"></v-text-field>
                  </v-flex>
                  <v-flex xs4>
                    <v-select :items="discapacidadesCurso" :label="$t('inscriptionRegister.disability')" v-model="formularioEdicionCurso.tipo_discapacidad"></v-select>
                  </v-flex>
                  <v-flex xs4>
                    <v-select :items="gradosCurso" v-model="formularioEdicionCurso.grado" :label="$t('inscriptionRegister.grade')"></v-select>
                  </v-flex>
                </v-layout>
              </form>
            </v-flex>
          </v-layout>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="seccion" dark @click.native="dialogEdicion = false">{{$t('common.cancel')}}
              <v-icon right>cancel</v-icon>
            </v-btn>
            <v-btn class="primary" dark v-on:click="editarCurso(idCursoAEditar)">{{$t('common.edit')}}
              <v-icon right>done</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

    <!-- VENTANA DE ESTUDIANTES POR CURSO -->
    <v-layout row>
      <v-dialog v-model="vistaEstudiantesDialog" width="1200px" persistent>
        <v-card>
          <v-card-title class="headline">
            <v-icon right>book</v-icon>
            {{$t('courses.studentsPerCourse')}}
          </v-card-title>
          <v-layout row>
            <v-flex xs10 offset-xs1>
              <v-data-table v-bind:headers="headersEstudiantesPorCurso" v-bind:items="asignacionesEstudiantesPorCurso" v-bind:pagination.sync="paginationEstudiantes" :total-items="totalEstudiantes" class="elevation-1" :rows-per-page-text="$t('courses.studentsPerCourse')">
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.codigo }}</td>
                  <td>{{ props.item.nombres }}</td>
                  <td>{{ props.item.primer_apellido }}</td>
                  <td>{{ props.item.segundo_apellido }}</td>
                </template>
              </v-data-table>
            </v-flex>
          </v-layout>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary" dark v-on:click="vistaEstudiantesDialog=false">{{$t('common.accept')}}
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
  /* eslint-disable semi */
  export default {
    // name: 'bandeja-tecnicos',
    mixins: [ Comps ],
    data () {
      return {
        // Variable busqueda de cursos
        buscaCurso: {
          gestion: (new Date()).getFullYear()
        },
        // Variables creación cursos
        dialogNewCourse: false,
        formularioCreacionCurso: {
          'nombre': '',
          'paralelo': '',
          'gestion': '',
          'maestro': '',
          'descripcion': '',
          'edad_minima': '',
          'edad_maxima': '',
          'tipo_discapacidad': '',
          'grado': ''
        },
        nombresCurso: ['AT', 'INI 1', 'INI 2', 'PRI 1', 'PRI 2', 'PRI 3', 'PRI SOC', 'GUARDERIA', 'GUARDERIA 1', 'GUARDERIA 2'],
        gradosCurso: ['ATENCION TEMPRANA', 'INDEPENDENCIA PERSONAL', 'INDEPENDENCIA SOCIAL', 'INICIAL', 'PRIMARIA', 'SECUNDARIA', 'GUARDERIA'],
        paralelosCurso: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        descripcionesCurso: ['APOYO LIMITADO EXTENSO', 'APOYO LIMITADO INTERMITENTE', 'APOYO EXTENSO GENERALIZADO', 'APOYO EXTENSO', 'APOYO LIMITADO', 'GUARDERIA BEBES', 'GUARDERIA NIÑOS'],
        discapacidadesCurso: ['DISCAPACIDAD MULTIPLE', 'DISCAPACIDAD INTELECTUAL', 'NINGUNA'],
        // Variables edición cursos
        dialogEdicion: false,
        formularioEdicionCurso: {
          'nombre': '',
          'paralelo': '',
          'gestion': '',
          'maestro': '',
          'descripcion': '',
          'edad_minima': '',
          'edad_maxima': '',
          'tipo_discapacidad': '',
          'grado': ''
        },
        idCursoAEditar: '',
        // Variables lista de estudiantes
        vistaEstudiantesDialog: false,
        // Variables lista tabla
        roles: [],
        lugarCi: [],
        asignaciones: [],
        totalItems: 0,
        pagination: {
          sortBy: null
        },
        headersAsinacion: [
          {text: this.$t('common.actions'), value: ''},
          {text: this.$t('courses.name'), value: 'nombre'},
          {text: this.$t('inscriptionRegister.paralel'), value: 'paralelo'},
          {text: this.$t('courses.gestion'), value: 'gestion'},
          {text: this.$t('courses.ages'), value: 'edades'}
        ],
        asignacionesEstudiantesPorCurso: [],
        totalEstudiantes: 0,
        paginationEstudiantes: {
          sortBy: null
        },
        headersEstudiantesPorCurso: [
          {text: this.$t('common.code'), value: 'codigo'},
          {text: this.$t('inscriptionRegister.names'), value: 'nombres'},
          {text: this.$t('inscriptionRegister.firstLastName'), value: 'primer_apellido'},
          {text: this.$t('inscriptionRegister.secondLastName'), value: 'segundo_apellido'}
        ],
        // rules
        nameRules: [
          (v) => !!v || this.$t('validate.required'),
          (v) => v.length <= 25 || this.$t('validate.max')
        ],
        paralelRules: [
          (v) => !!v || this.$t('validate.required'),
          (v) => v.length <= 1 || this.$t('validate.max')
        ],
        yearRules: [
          (v) => !!v || this.$t('validate.required'),
          (v) => v.length >= 4 || this.$t('validate.min'),
          (v) => v.length <= 4 || this.$t('validate.max')
        ]
      }
    },
    components: {
    },
    watch: {
      pagination: {
        handler () {
          let sorting = '';
          if (this.pagination.sortBy != null && this.pagination.descending != null) {
            if (this.pagination.descending) {
              sorting = `order=-`;
            } else {
              sorting = `order=`;
            }
            if (this.pagination.sortBy === 'edades') {
              sorting = `${sorting}edad_minima`;
            } else {
              sorting = `${sorting}${this.pagination.sortBy}`;
            }
          }
          let rutaCursos;
          if (this.pagination.rowsPerPage === -1) {
            rutaCursos = sorting === '' ? `cursos` : `cursos?gestion=${this.buscaCurso.gestion}&${sorting}`;
          } else {
            rutaCursos = sorting === '' ? `cursos?gestion=${this.buscaCurso.gestion}&limit=${this.pagination.rowsPerPage}&page=${this.pagination.page}` : `cursos?gestion=${this.buscaCurso.gestion}&limit=${this.pagination.rowsPerPage}&page=${this.pagination.page}&${sorting}`;
          }
          this.$service.get(rutaCursos)
          .then(response => {
            this.asignaciones = response.datos.rows ? response.datos.rows : response.datos;
            this.asignaciones.forEach(function (element) {
              element.ci = element.documento_identidad + ' ' + element.lugar_documento_identidad;
            }, this);
            this.totalItems = response.datos.count ? response.datos.count : response.datos.lenght;
          })
        },
        deep: true
      },
      'buscaCurso.gestion': function (val) {
        this.cargarAsignaciones();
      }
    },
    created () {
    },
    methods: {
      nuevaInscripcion () {
        this.$router.push('registroInscripcion');
      },
      agregaCurso () {
        // valida
        if (this.formularioCreacionCurso.nombre !== '' && this.formularioCreacionCurso.paralelo !== '' && this.formularioCreacionCurso.gestion !== '' &&
        this.formularioCreacionCurso.maestro !== '' && this.formularioCreacionCurso.descripcion !== '' &&
        this.formularioCreacionCurso.criterio_edad !== '' && this.formularioCreacionCurso.tipo_discapacidad !== '' &&
        this.formularioCreacionCurso.grado !== '') {
          // Crea curso
          this.$service.post(`cursos`, {
            'nombre': this.formularioCreacionCurso.nombre,
            'paralelo': this.formularioCreacionCurso.paralelo,
            'gestion': this.formularioCreacionCurso.gestion,
            'maestro': this.formularioCreacionCurso.maestro,
            'descripcion': this.formularioCreacionCurso.descripcion,
            'edad_minima': this.formularioCreacionCurso.edad_minima,
            'edad_maxima': this.formularioCreacionCurso.edad_maxima,
            'tipo_discapacidad': this.formularioCreacionCurso.tipo_discapacidad,
            'grado': this.formularioCreacionCurso.grado
          })
          .then(respuesta => {
            this.formularioCreacionCurso.nombre = '';
            this.formularioCreacionCurso.paralelo = '';
            this.formularioCreacionCurso.gestion = '';
            this.formularioCreacionCurso.maestro = '';
            this.formularioCreacionCurso.descripcion = '';
            this.formularioCreacionCurso.edad_minima = '';
            this.formularioCreacionCurso.edad_maxima = '';
            this.formularioCreacionCurso.tipo_discapacidad = '';
            this.formularioCreacionCurso.grado = '';
            this.dialogNewCourse = false
            this.cargarAsignaciones();
          });
        } else {
          this.$message.error('Debe llenar el formulario para guardar.');
        }
      },
      abreDialog (idCurso) { // Reenvía correo de activación
        this.dialogEdicion = !this.dialogEdicion;
        this.asignaciones.map(valor => {
          if (valor.id_curso === idCurso) {
            this.formularioEdicionCurso.nombre = valor.nombre;
            this.formularioEdicionCurso.paralelo = valor.paralelo;
            this.formularioEdicionCurso.gestion = valor.gestion;
            this.formularioEdicionCurso.maestro = valor.maestro;
            this.formularioEdicionCurso.descripcion = valor.descripcion;
            this.formularioEdicionCurso.edad_minima = valor.edad_minima;
            this.formularioEdicionCurso.edad_maxima = valor.edad_maxima;
            this.formularioEdicionCurso.tipo_discapacidad = valor.tipo_discapacidad;
            this.formularioEdicionCurso.grado = valor.grado;
            this.idCursoAEditar = valor.id_curso;
          }
        })
      },
      convierteAAños (edadEnMeses) {
        const años = Math.floor(edadEnMeses / 12);
        const meses = edadEnMeses % 12;
        let edadConvertida = años ? años === 1 ? años + ' ' + this.$t('common.year') : años + ' ' + this.$t('common.years') : '';
        if (meses) {
          if (edadConvertida !== '') {
            edadConvertida += ', ';
          }
          edadConvertida += meses + ' ' + this.$t('inscriptions.months');
        }
        return edadConvertida;
      },
      editarCurso (idCurso) { // Edita un curso existente
        // valida
        if (this.formularioEdicionCurso.nombre !== '' && this.formularioEdicionCurso.paralelo !== '' && this.formularioEdicionCurso.gestion !== '' && idCurso !== '') {
          // Crea curso
          this.$service.put(`cursos`, {
            'id_curso': idCurso,
            'nombre': this.formularioEdicionCurso.nombre,
            'paralelo': this.formularioEdicionCurso.paralelo,
            'gestion': this.formularioEdicionCurso.gestion,
            'maestro': this.formularioEdicionCurso.maestro,
            'descripcion': this.formularioEdicionCurso.descripcion,
            'edad_minima': this.formularioEdicionCurso.edad_minima,
            'edad_maxima': this.formularioEdicionCurso.edad_maxima,
            'tipo_discapacidad': this.formularioEdicionCurso.tipo_discapacidad,
            'grado': this.formularioEdicionCurso.grado
          }).then(respuesta => {
            this.formularioEdicionCurso.nombre = '';
            this.formularioEdicionCurso.paralelo = '';
            this.formularioEdicionCurso.gestion = '';
            this.formularioEdicionCurso.maestro = '';
            this.formularioEdicionCurso.descripcion = '';
            this.formularioEdicionCurso.edad_minima = '';
            this.formularioEdicionCurso.edad_maxima = '';
            this.formularioEdicionCurso.tipo_discapacidad = '';
            this.formularioEdicionCurso.grado = '';
            this.dialogEdicion = false;
            this.cargarAsignaciones();
          }).catch(error => {
            console.log('da error' + error);
          });
        } else {
          this.$message.error('Debe llenar los datos para guardar.');
        }
      },
      cargarAsignaciones () { // Carga lista de cursos
        this.$service.get(`cursos?gestion=${this.buscaCurso.gestion}&limit=${this.pagination.rowsPerPage}&page=${this.pagination.page}`)
          .then(response => {
            this.asignaciones = response.datos.rows;
            this.count = response.datos.count;
          })
      },
      listaEstudiantesDialog (idCurso) {
        this.vistaEstudiantesDialog = true;
        this.$service.get(`estudiantesCurso?idCurso=${idCurso}`)
          .then(response => {
            this.asignacionesEstudiantesPorCurso = response.datos;
            this.totalEstudiantes = response.datos.length;
            this.paginationEstudiantes.rowsPerPage = response.datos.length;
          })
      }
    }
  }
</script>
