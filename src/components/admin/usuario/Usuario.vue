<template>
<div>
  <v-toolbar color="secondary" dark>
      <v-icon right>group</v-icon>
      <v-toolbar-title>{{$t('menu.usuarios')}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn color='primary' dark @click.native="dialog = true">
      {{$t('usuarios.newUser') }}
      <v-icon right dark>add_circle</v-icon>
    </v-btn>
  </v-toolbar>
  <!-- TABLA DE DATOS -->
  <v-data-table v-bind:headers="headersAsinacion" v-bind:items="asignaciones" v-bind:pagination.sync="pagination" :total-items="totalItems" class="elevation-1" :rows-per-page-text="$t('usuarios.usersPerPage')">
    <!-- <template slot="headerCell" scope="props">
      <span v-tooltip:bottom="{ 'html': props.header.text }">
        {{ props.header.text }}
      </span>
    </template> -->
    <template slot="items" slot-scope="props">
      <td class="text-xs-right">
        <!-- <v-tooltip bottom> -->
          <v-btn icon dark color="primary" @click.native="abreDialog(props.item.id_usuario)">
            <v-icon>edit</v-icon>
          </v-btn>
          <!-- <span>Editar usuario</span>
        </v-tooltip>
        <v-tooltip bottom> -->
          <v-btn v-if="props.item.estado !== 'ACTIVO'" icon dark color="primary" @click.native="reenviarCorreo(props.item.id_usuario, props.item.email)">
            <v-icon>send</v-icon>
          </v-btn>
          <!-- <span>Reenviar activación</span>
        </v-tooltip> -->
      </td>
      <td>{{ props.item.persona.nombres }}</td>
      <td>{{ props.item.persona.primer_apellido }}</td>
      <td>{{ props.item.persona.segundo_apellido }}</td>
      <td>{{ props.item.email}}</td>
      <td>{{ props.item.usuarios_roles[0].rol.nombre}}</td>
      <td>{{ props.item.estado}} </td>
    </template>
  </v-data-table>

  <!-- <div> -->
    <!-- VENTANA DE NUEVO USUARIO -->
    <v-layout row wrap align-center>
      <v-dialog v-model="dialog" persistent width="1200px">
        <!-- <v-btn dark class="seccion" slot="activator">
          Nuevo Usuario
          <v-icon right dark>add_circle</v-icon>
        </v-btn> -->
        <v-card>
          <v-card-title class="headline">
            <v-icon right>account_circle</v-icon>
            {{$t('usuarios.adding') }}
          </v-card-title>
          <v-layout row>
            <v-flex xs10 offset-xs1>
              <v-alert color="primary" icon="account_box" value="true">
                <strong>{{$t('usuarios.personalData') }}</strong><br>
                {{$t('usuarios.enterPersonalData') }}
              </v-alert>
              <v-form v-model="validForm" ref="form" lazy-validation>
                <v-layout row wrap>
                  <v-flex xs4>
                    <v-text-field :label="$t('common.firstLastName')" v-model="form.persona.primer_apellido"></v-text-field>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field :label="$t('common.secondLastName')" v-model="form.persona.segundo_apellido"></v-text-field>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field :label="$t('common.names')" v-model="form.persona.nombres"></v-text-field>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field :label="$t('usuarios.id')" v-model="form.persona.ci" @keydown.native="$filter.numeric($event)" required></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <v-select v-bind:items="lugarCi" v-model="form.persona.lugar" :label="$t('usuarios.place')" item-text="codigo_ine" item-value="abreviacion"></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-radio-group v-model="form.persona.genero" :label="$t('usuarios.gender')" :mandatory="true" row>
                      <v-radio :label="$t('usuarios.male')" value="M"></v-radio>
                      <v-radio :label="$t('usuarios.female')" value="F"></v-radio>
                    </v-radio-group>
                  </v-flex>
                  <v-flex xs4>
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="form.persona.fecha_nacimiento"
                          :label="$t('usuarios.bornDate')"
                          prepend-icon="event"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        ref="picker"
                        v-model="date"
                        :max="new Date().toISOString().substr(0, 10)"
                        @change="save"
                      ></v-date-picker>
                    </v-menu>
                  </v-flex>
                  <v-flex xs12>
                    <v-alert color="primary" icon="label" value="true">
                      <strong>{{$t('usuarios.userData')}}</strong><br>
                      {{$t('usuarios.enterUserData')}}
                    </v-alert>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field :label="$t('usuarios.email')" v-model="form.email" :rules="emailRules"></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-select v-bind:items="roles" v-model="form.tipo" :label="$t('usuarios.rol')" item-text="descripcion" item-value="id_rol"></v-select>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-flex>
          </v-layout>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="cancel" dark @click.native="dialog = false">{{$t('common.cancel')}}
              <v-icon right>cancel</v-icon>
            </v-btn>
            <v-btn class="primary" flat :disabled="!validForm" @click="agregaUsuario">{{$t('common.save')}}
              <v-icon right>done</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

    <!-- VENTANA DE EDICIÓN DE USUARIO -->
    <v-layout row>
      <v-dialog v-model="dialogEdicion" width="1200px">
        <v-card>
          <v-card-title class="headline">
            <v-icon right>account_circle</v-icon>
            {{$t('usuarios.modifying')}}
          </v-card-title>
          <v-layout row>
            <v-flex xs10 offset-xs1>
              <v-alert color="primary" icon="label" value="true">
                {{$t('usuarios.userData')}}
              </v-alert>
              <form @submit.prevent="editaUsuario">
                <v-layout row wrap>
                  <v-flex xs4>
                    <v-text-field :label="$t('usuarios.email')" v-model="form1.email"></v-text-field>
                  </v-flex>
                  <v-flex xs4>
                    <v-select v-bind:items="roles" v-model="form1.tipo" :label="$t('usuarios.rol')" item-text="descripcion" item-value="id_rol"></v-select>
                  </v-flex>
                  <v-flex xs4>
                    <v-switch
                      v-model="form1.estado"
                      :label="form1.estado?$t('common.active'):$t('common.inactive')"
                    ></v-switch>
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
            <v-btn class="primary" dark v-on:click="editarUsuario(idUsuario)">{{$t('common.edit')}}
              <v-icon right>done</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
  import Comps from '../../comps';
  /* eslint-disable semi */
  export default {
    mixins: [ Comps ],
    data () {
      return {
        // Variables creación usuarios
        dialog: false,
        validForm: true,
        menu: false,
        form: {
          persona: {
            'ci': '',
            'lugar': '',
            'fecha_nacimiento': '',
            'nombres': '',
            'primer_apellido': '',
            'segundo_apellido': '',
            'genero': ''
          },
          'email': '',
          'tipo': ''
        },
        // Variables edición usuarios
        dialogEdicion: false,
        form1: {
          'email': '',
          'tipo': '',
          'estado': false
        },
        idusuario: '',
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
          {text: this.$t('common.names'), value: 'nombres'},
          {text: this.$t('common.firstLastName'), value: 'primer_apellido'},
          {text: this.$t('common.secondLastName'), value: 'segundo_apellido'},
          {text: this.$t('usuarios.email'), value: 'email'},
          {text: this.$t('usuarios.rol'), value: 'rol'},
          {text: this.$t('common.status'), value: 'estado'}
        ],
        // rules
        // nameRules: [
        //   (v) => !!v || 'El nombre es requerido',
        //   (v) => v.length <= 25 || 'Name must be less than 25 characters'
        // ],
        emailRules: [
          (v) => !!v || this.$t('usuarios.emailRequired'),
          (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || this.$t('usuarios.emailValid')
        ]
      }
    },
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
      pagination: {
        handler () {
          let sorting = '';
          if (this.pagination.sortBy != null && this.pagination.descending != null) {
            if (this.pagination.descending) {
              sorting = `&order=-${this.pagination.sortBy}`
            } else {
              sorting = `&order=${this.pagination.sortBy}`;
            }
          }
          const rutaUsuarios = (this.pagination.rowsPerPage === -1) ? `usuarios` : `usuarios?limit=${this.pagination.rowsPerPage}&page=${this.pagination.page}${sorting}`;
          this.$service.get(rutaUsuarios) // TODO Apagar el incendio
          .then(response => {
            this.asignaciones = response.datos.rows ? response.datos.rows : response.datos;
            this.totalItems = response.datos.count ? response.datos.count : response.datos.lenght;
          })
        },
        deep: true
      }
    },
    created () {
      this.$service.get(`roles`)
      .then(response => {
        this.roles = response.datos;
        return this.$service.get(`codigoDeptos`);
      })
      .then(response => {
        this.lugarCi = response.datos;
      })
      this.cargarAsignaciones();
    },
    methods: {
      agregaUsuario () {
        // valida
        if (this.form.email !== '' && this.form.tipo !== '' && this.form.persona.ci !== '' &&
        this.form.persona.fecha_nacimiento !== '' && this.form.persona.nombres !== '' &&
        this.form.persona.primer_apellido !== '' && this.form.persona.segundo_apellido !== '' &&
        this.form.persona.genero !== '') {
          // Crea usuario
          this.$service.post(`usuarios`, {
            'usuario': {
              'email': this.form.email,
              'fid_rol': this.form.tipo
            },
            'persona': {
              'ci': this.form.persona.ci,
              'lugar': this.form.persona.lugar.codigo_ine,
              'fecha_nacimiento': this.form.persona.fecha_nacimiento,
              'genero': this.form.persona.genero,
              'nombres': this.form.persona.nombres,
              'primer_apellido': this.form.persona.primer_apellido,
              'segundo_apellido': this.form.persona.segundo_apellido
            }
          }).then(respuesta => {
            this.form.persona.ci = '';
            this.form.persona.fecha_nacimiento = '';
            this.form.persona.nombres = '';
            this.form.persona.primer_apellido = '';
            this.form.persona.segundo_apellido = '';
            this.form.persona.lugar = '';
            this.form.persona.genero = '';
            this.form.email = '';
            this.form.tipo = '';
            this.dialog = false
            this.cargarAsignaciones();
          });
        } else {
          this.$message.error(this.$t('usuarios.errorFillForm'));
        }
      },
      abreDialog (idUser) { // Reenvía correo de activación
        this.idUsuario = idUser;
        this.dialogEdicion = !this.dialogEdicion;
        let emailUsuario = '';
        let rolUsuario = '';
        let estadoUsuario = false;
        this.asignaciones.map(valor => {
          if (valor.id_usuario === idUser) {
            emailUsuario = valor.email;
            rolUsuario = valor.fid_rol;
            estadoUsuario = valor.estado === 'ACTIVO';
          }
        })
        this.form1.email = emailUsuario;
        this.form1.tipo = rolUsuario;
        this.form1.estado = estadoUsuario;
      },
      editarUsuario (idUsuario) { // Edita un usuario existente
        // valida
        if (this.form1.email !== '' && this.form1.tipo !== '') {
          // Crea usuario
          this.$service.put(`usuarios/${idUsuario}`, {
            'usuario': {
              'fid_rol': this.form1.tipo,
              'email': this.form1.email,
              'estado': this.form1.estado
            }
          }).then(respuesta => {
            this.form1.email = '';
            this.form1.tipo = '';
            this.dialogEdicion = false
            this.cargarAsignaciones();
          });
        } else {
          this.$message.error(this.$t('usuarios.errorFillForm'));
        }
      },
      reenviarCorreo (idUsuario, email) { // Reenvía correo de activación
        this.$service.post(`usuarios/reenviar`, {
          'usuario': {
            'id_usuario': idUsuario
          }
        }).then(respuesta => {
          this.$message.success(this.$t('usuarios.successSendEmail') + email);
        }).catch(() => {
          this.$message.error(this.$t('usuarios.errorSendEmail'));
        });
      },
      cargarAsignaciones () { // Carga lista de usuarios
        this.$service.get(`usuarios?limit=5&page=1`) // TODO Apagar el incendio
          .then(response => {
            this.asignaciones = response.datos.rows;
            this.count = response.datos.count;
          })
      },
      save (date) {
        this.$refs.menu.save(date)
        this.form.persona.fecha_nacimiento = date;
      }
    }
  }
</script>
