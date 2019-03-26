import error from './errors';
import validate from './validates';
import menu from './menu';

export default {
  error,
  validate,
  menu,
  app: {
    title: 'Sistema Virgen Niña',
    account: 'Mi cuenta',
    settings: 'Configuración',
    logOut: 'Cerrar sesión'
  },
  login: {
    title: 'Inicia tu sesión',
    user: 'Nombre de usuario',
    password: 'Contraseña',
    rememberMe: 'Recuérdame',
    forgotPass: '¿Olvidó su contraseña?',
    login: 'Ingresar',
    noAccount: '¿No tienes una cuenta?',
    signUp: 'Registrate aquí'
  },
  loginAdmin: {
    title: 'Inicia sesión de Administrador',
    user: 'Nombre de usuario',
    password: 'Contraseña',
    rememberMe: 'Recuérdame',
    forgotPass: '¿Olvidó su contraseña?',
    login: 'Ingresar',
    noAccount: '¿No tienes una cuenta?',
    signUp: 'Registrate aquí'
  },
  newPassword: {
    title: 'Reiniciar contraseña',
    email: 'Correo electrónico',
    send: 'Enviar',
    backToLogin: 'Volver a login'
  },
  usuarios: {
    newUser: 'Nuevo Usuario',
    usersPerPage: 'Usuarios por página',
    adding: 'Agregando usuario',
    personalData: 'Datos Personales.',
    enterPersonalData: 'Ingrese los datos personales para agregarlo al sistema.',
    id: 'Cédula de identidad',
    place: 'Lugar',
    gender: 'Género',
    male: 'Masculino',
    female: 'Femenino',
    bornDate: 'Fecha de nacimiento',
    userData: 'Datos de la cuenta de usuario.',
    enterUserData: 'Asigne un correo electrónico y un rol a la persona.',
    email: 'Correo Electrónico',
    rol: 'Rol de usuario',
    emailRequired: 'El correo electrónico es requerido',
    emailValid: 'No es un correo electrónico válido',
    errorFillForm: 'Debe llenar el formulario para guardar.',
    successSendEmail: 'Hemos enviado un correo de activación de cuenta a ',
    errorSendEmail: 'Fallo al enviar correo.'
  },
  confirm: {
    title: 'Por favor, ingrese su nueva contraseña',
    password: 'Contraseña',
    confirmPassword: 'Repita contraseña',
    home: 'Volver',
    accept: 'Actualizar contraseña',
    errorFieldsNotEqual: 'Los campos de contraseña no son iguales.',
    errorFieldRequired: 'El campo de contraseña es requerido.',
    errorFieldMinLength: 'La contraseña debe tener como mínimo 8 caracteres.',
    errorFieldMaxLength: 'La contraseña debe tener como máximo 20 caracteres.'
  },
  courses: {
    newCourse: 'Nuevo curso',
    name: 'Nombre',
    gestion: 'Gestión',
    ages: 'Edades',
    coursesPerPage: 'Cursos por página',
    creatingNewCourse: 'Creando curso nuevo',
    editCourse: 'Editando curso',
    courseData: 'Datos del curso',
    studentsPerCourse: 'Estudiantes por curso',
    teacher: 'Maestro',
    minimalAge: 'Edad mínima',
    maximalAge: 'Edad máxima',
    ageRange: 'Rango de edad',
    thisYearCourses: 'Cursos de la gestión actual'
  },
  inscriptions: {
    newStudent: 'Nuevo estudiante',
    loadCsv: 'Carga archivo CSV',
    stepLoad: 'Pasos para subir el archivo CSV',
    csv: 'Cargar CSV',
    uploadingCsv: 'Subiendo archivo.',
    courseAssignation: 'Asignación de curso',
    studentData: 'Datos del estudiante',
    studentsPerPage: 'Estudiantes por página',
    noData: 'Sin datos'
  },
  inscriptionRegister: {
    createNew: 'Crear nueva',
    createNewSchool: 'Crear nueva Unidad Educativa',
    tittle: 'Registro de inscripción de estudiantes',
    subtitle1: 'Datos de la unidad educativa',
    dependency: 'Dependencia de la unidad educativa',
    sie: 'Código SIE',
    errorNameField: 'Debe llenar el campo de "Nombre"',
    public: 'pública',
    comunitary: 'comunitaria',
    convein: 'de convenio',
    private: 'privada',
    educativeDistrit: 'Distrito educativo',
    subNames: 'Nombres y apellidos',
    subBorn: 'Lugar y fecha de nacimiento',
    firstLastName: 'Primer apellido',
    secondLastName: 'Segundo apellido',
    names: 'Nombres',
    relation: 'Parentezco',
    country: 'Pais',
    provincia: 'Provincia',
    municipio: 'Municipio',
    departamento: 'Departamento',
    localidad: 'Localidad',
    zona: 'Villa / Zona',
    street: 'Calle / Avenida',
    number: 'N° de domicilio',
    telefon: 'Teléfono',
    cellphone: 'Celular',
    bornDate: 'Fecha de nacimiento',
    identity: 'Documento de identificación',
    documentNumber: 'Número de documento',
    documentTipe: 'Tipo de documento',
    ci: 'Cédula de identidad',
    passport: 'Pasaporte',
    documentPlace: 'Lugar de documento',
    rude: 'Código estudiantil RUDE',
    procedenceUnit: 'Unidad educativa de procedencia',
    bornCertificate: 'Certificado de nacimiento',
    codRude: 'RUDE',
    codSie: 'Código SIE',
    nameEducativeUnit: 'Nombre de la unidad educativa',
    civilRegistryNumber: 'Oficialia N°',
    bookNumber: 'Libro N°',
    matchNumber: 'Partida N°',
    folioNumber: 'Folio N°',
    level: 'Nivel',
    initial: 'Inicial',
    primary: 'Primaria',
    secondary: 'Secundaria',
    lag: 'Rezago',
    grade: 'Grado',
    nivelation: 'Nivelación de rezago',
    paralel: 'Paralelo',
    turn: 'Turno',
    morning: 'Mañana',
    afternoon: 'Tarde',
    evening: 'Noche',
    tutorData: 'Datos del padre o tutor',
    language: 'Idioma',
    motherLanguage: 'Idioma materno',
    originaryPopulation: 'Pueblo indígena originario campesino',
    languageRegion: 'Idioma o pertenencia',
    health: 'salud',
    healthAvailability: '¿Existe un centro de salud en su comunidad?',
    frecuency: '¿Cuántas veces fue al centro el año pasado?',
    oneToTwo: 'Una o dos veces',
    threeToFive: 'Tres a cinco veces',
    fiveOrMore: 'Seis o más veces',
    never: 'Nunca',
    disability: 'Tipo de discapacidad',
    subDisability: 'Subtipo de discapacidad',
    disabilityTipe: 'La discapacidad es:',
    born: 'De nacimiento',
    adquired: 'Adquirida',
    inherited: 'Heredada',
    none: 'Ninguna',
    basicServicesAcces: 'Acceso a servicios básicos',
    waterProcedence: 'El agua de su casa proviene de:',
    electricityService: '¿Cuenta con energía electríca en su vivienda?',
    drain: 'El desague de su casa va a:',
    work: 'Empleo',
    workActivity: '¿Realizó una actividad?',
    workDays: 'Dias trabajados',
    payWork: 'Recibió salario',
    communicationTransport: 'Acceso a medios de comunicación y transporte',
    internetAccess: 'Accede a internet en:',
    internetFrecuency: '¿Con qué frecuencia?',
    transportWay: 'Medio de transporte',
    transportTime: 'Tiempo de transporte',
    profession: 'Profesión',
    maxEducation: 'Nivel de educación',
    tutor: 'Tutor',
    subtitle3: 'Datos de la inscripción en la gestión actual',
    messageSubtitle3: '',
    subtitle4: 'Dirección del estudiante',
    messageSubtitle4: '',
    subtitle5: 'Aspectos sociales',
    messageSubtitle5: '',
    subtitle6: 'Datos del padre, madre o tutor del estudiante',
    messageSubtitle6: ''
  },
  parameters: {
    agricultureIndustry: 'Trabajó en agricultura o agroindustria',
    familyAgriculture: 'Ayudó a familiares en agricultura o ganadería',
    domesticAid: 'Ayudó en el hogar en labores domésticas, comercio o ventas',
    babySister: 'Trabajó como trabajadora del hogar o niñera',
    minery: 'Trabajó en minería',
    construction: 'Trabajó en construcción',
    publicTransport: 'Trabajó en transporte público',
    none: 'No trabajó',
    netConexion: 'Conexión de red',
    publicWater: 'Pileta pública',
    deliveryCar: 'Carro repartidor',
    well: 'Pozo',
    river: 'Rio, lago, laguna, etc',
    other: 'Otro',
    sewer: 'Alcantarilla',
    septicTank: 'Cámara séptica',
    blindWell: 'Pozo ciego',
    street: 'Calle / Avenida',
    foot: 'A pie',
    car: 'En vehiculo de transporte',
    bicycle: 'En bicicleta',
    train: 'En tren',
    daily: 'Diariamente',
    onceAWeek: 'Más de una vez a la semana',
    onceAMonth: 'Una vez al mes o menos',
    halfHour: 'Menos de media hora',
    oneHour: 'Entre media hora y una hora',
    twoHours: 'Entre una a dos horas',
    twoOrMore: 'Dos horas o más'
  },
  disability: {
    visual: 'Visual',
    auditory: 'Auditiva',
    intellectual: 'Intelectual',
    phisic: 'Físico/Motora',
    multiple: 'Múltiple',
    auditoryLow: 'Pérdida auditiva leve',
    auditoryMedium: 'Pérdida auditiva moderada',
    auditoryHigh: 'Pérdida auditiva severa',
    auditoryDeep: 'Sordera profunda',
    blind: 'Ceguera total',
    lowVision: 'Baja visión',
    downSyndrome: 'Sindrome de down',
    autism: 'Autismo',
    cerebralParalysis: 'Paralisis cerebral',
    traumatism: 'Traumatismo',
    congenitalMalformation: 'Malformaciones Congénitas',
    deafblindness: 'Sordoceguera',
    physicalIntellectual: 'Físico intelectual sensorial',
    visualPhysics: 'Físico visual',
    auditoryPhysique: 'Físico auditivo',
    auditoryIntellectual: 'Auditivo intelectual',
    visualIntellectual: 'Visual intelectual',
    other: 'Otros'
  },
  generalFollowUp: {
    searchBy: 'Busqueda por',
    searchText: 'Texto de busqueda',
    date: 'Fecha',
    newStandartRegistry: 'Nuevo registro simple',
    observation: 'Obervaciones',
    intervention: 'Intervenciones',
    notRegistered: 'No registrado',
    address: 'Dirección',
    age: 'Edad'
  },
  common: {
    add: 'Agregar',
    required: 'Campo obligatorio',
    cancel: 'Cancelar',
    save: 'Guardar',
    accept: 'Aceptar',
    select: 'Seleccionar',
    close: 'Cerrar',
    yes: 'Si',
    no: 'No',
    code: 'Código',
    rowsPage: 'Filas por página',
    updateList: 'Actualizar esta lista',
    filters: 'Filtros/búsqueda',
    of: 'de',
    search: 'Buscar',
    change: 'Cambiar',
    active: 'Activo',
    edit: 'Editar',
    status: 'Estado',
    actions: 'Acciones',
    firstLastName: 'Primer apellido',
    secondLastName: 'Segundo apellido',
    names: 'Nombres',
    description: 'Descripción',
    clear: 'Limpiar'
  },
  entity: {
    title: 'Entidades',
    add: 'Agregar nueva entidad',
    crud: {
      edit: 'Editar',
      code: 'Código',
      acronym: 'Sigla',
      description: 'Descripción',
      status: 'Estado',
      addEnt: 'Agregar entidad',
      editEnt: 'Editar entidad'
    }
  },
  account: {
    title: 'Cuentas',
    add: 'Agregar nueva cuenta',
    select: 'Seleccione una entidad para ver sus cuentas',
    crud: {
      edit: 'Editar',
      accountNumber: 'Nro. de cuenta',
      status: 'Estado',
      entity: 'Entidad',
      addAc: 'Agregar cuenta',
      editAc: 'Editar cuenta'
    }
  },
  user: {
    title: 'Usuarios',
    add: 'Agregar nuevo usuario',
    crud: {
      edit: 'Editar',
      user: 'Usuario',
      userData: 'Datos del usuario',
      entity: 'Entidad',
      role: 'Rol',
      status: 'Estado',
      addUser: 'Agregar usuario',
      editUser: 'Editar usuario'
    }
  },
  months: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
};
