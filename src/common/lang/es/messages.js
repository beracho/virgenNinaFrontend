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
    successSendEmail: 'Hemos enviado un correo de activación de cuenta a',
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
  charts: {
    reportPerArea: 'Reportes por área',
    reportType: 'Tipo de informe',
    fromDate: 'De fecha',
    toDate: 'A fecha',
    followUp: 'Seguimiento',
    evaluation: 'Evaluación',
    all: 'Todos',
    frecuency: 'Frecuencia',
    day: 'Día',
    week: 'Semana',
    month: 'Mes',
    year: 'Año',
    followUpReport: 'Estadísticas de seguimiento por área',
    evaluationReport: 'Estadísticas de evaluación por área',
    noMatches: 'No hay resultados',
    disability: 'Discapacidad',
    withDisability: 'Con discapacidad',
    withoutDisability: 'Sin discapacidad',
    both: 'ambos',
    getStudentsBy: 'Obtener estudiantes por',
    course: 'Curso',
    maleOrFemale: 'Masculino o femenino',
    searchStudent: 'Buscar estudiante',
    studentsFound: 'Estudiantes encontrados',
    noStudentsMatchSearchParams: 'No se encontraron estudiantes con los parámetros',
    view: 'Ver'
  },
  areas: {
    medicalDoctor: 'Medicina general',
    socialWork: 'Trabajo social',
    occupationalTherapy: 'Terapia ocupacional',
    psychomotor: 'Psicomotricidad',
    physiotherapy: 'Fisioterapia',
    psycology: 'Psicología',
    phonoaudiology: 'Fonoaudiología',
    nutrition: 'Nutrición',
    education: 'Educación'
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
    noData: 'Sin datos',
    months: 'meses'
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
    community: 'comunidad',
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
    messageSubtitle6: '',
    updateIdData: 'Actualizar CI'
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
    newStandartRegistry: 'Nuevo registro de seguimiento',
    generalData: 'Datos generales',
    standartRegistry: 'Registro de seguimiento',
    print: 'Imprimir',
    observation: 'Observación',
    intervention: 'Intervención',
    notRegistered: 'No registrado',
    address: 'Dirección',
    age: 'Edad',
    registerCreationSuccessfull: 'Registro creado exitosamente',
    registerCreationUnsuccessfull: 'Error an la creación del registro',
    registerEditionSuccessfull: 'Registro editado exitosamente',
    registerEditionUnsuccessfull: 'Error en la edición del registro',
    registerRemovalSuccessfull: 'Registro eliminado exitosamente',
    registerRemovalUnsuccessfull: 'Error en la eliminación del registro',
    confirmDeletion: 'Confirmar eliminación',
    deleteWarning: 'Está seguro que quiere eliminar este archivo, los datos no podrán ser recuperados'
  },
  common: {
    add: 'Agregar',
    required: 'Campo obligatorio',
    cancel: 'Cancelar',
    save: 'Guardar',
    accept: 'Aceptar',
    select: 'Seleccionar',
    close: 'Cerrar',
    yes: 'Sí',
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
    clear: 'Limpiar',
    year: 'año',
    years: 'años'
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
  registerView: {
    searchParams: 'Parámetros de búsqueda',
    files: 'Documentos',
    creationDate: 'Fecha de creación',
    area: 'Área',
    createdBy: 'Creado por'
  },
  psicomotricity: {
    evaluationDate: 'Fecha de evaluación',
    sentDiagnosis: 'Diagnostico de envío',
    educationCenter: 'Centro educativo',
    schoolGrade: 'Grado escolar',
    cephalicControl: 'Control cefálico',
    sitting: 'Sedestación',
    drag: 'Arrastre',
    standing: 'Bipedestación',
    walk: 'Marcha',
    consultationReason: 'Motivo de la consulta',
    psychomotorEvaluation: 'Evaluación Psicomotriz',
    motor: 'Motor',
    cognitive: 'Cognitivo',
    socioAffective: 'Socio afectivo',
    anamnesis: 'Anamnesis',
    familyBackground: 'Antecedentes familiares',
    pathologicalBackground: 'Antecedentes patológicos',
    gynecologicalBackground: 'Antecedentes ginecológicos',
    developmentBackground: 'Antecedentes de desarrollo',
    perinatal: 'Perinatal',
    prenatal: 'Prenatal',
    postnatal: 'Postnatal',
    psicomotrizEvaluation: 'Evaluación Psicomotriz',
    headUpright: 'Cabeza erguida',
    movesHead: 'Mueve la cabeza',
    holdsObjects: 'Sostiene objetos',
    playsFeetAndHands: 'Juega con pies y manos',
    locateSounds: 'Localiza sonidos',
    babbles: 'Balbucea',
    gutturalSounds: 'Realiza sonidos guturales',
    stimulusSmile: 'Sonríe a un estimulo',
    recognicesMother: 'Reconoce a la madre',
    mouthSounds: 'Emite sonidos bucales',
    liftHead: 'Levanta la cabeza',
    ulnaChange: 'Cambia de cúbitos',
    picksCloseObjects: 'Coge objetos cercanos',
    makesSounds: 'Emite sonidos',
    callsForAttention: 'Llama la atención',
    repeatsSyllables: 'Repite silabas',
    smilesToExtrangers: 'Sonríe a conocidos',
    recognicesCaretaker: 'Reconoce a quien lo cuida',
    sitsWithoutSupport: 'Se sienta sin apoyo',
    drags: 'Se arrastra',
    picksAndHitsObjects: 'Coge objetos y los golpea',
    takesFoodToMouth: 'Se lleva alimentos a la boca',
    likesSongs: 'Muestra agrado a canciones',
    searchsSounds: 'Busca sonidos',
    recognicesObjects: 'Reconoce objetos',
    criesBeforeExtrangers: 'Llora ante extraños',
    imitatesMovements: 'Imita movimientos',
    sitsWithSupport: 'Se sienta con apoyo',
    crawl: 'Gatea',
    discoversObjects: 'Descubre objetos',
    walksWithSupport: 'Camina con apoyo',
    wordsWithMeaning: 'Emite palabras con significado',
    embraceAdultChild: 'Abraza al adulto o niño',
    answersToName: 'Responde a su nombre',
    meetsSimpleOrders: 'Cumple órdenes simples',
    jumpsWithBothFeet: 'Salta con ambos pies',
    throwsBall: 'Lanza la pelota',
    UndressHimself: 'Se quita la ropa solo',
    useForkCup: 'Usa el tenedor o taza',
    makesNounVerbPhrases: 'Hace frases sustantivo más verbo',
    useNegatives: 'Usa negaciones',
    answerQuestions: 'Responde preguntas',
    bigAndSmallDifferences: 'Diferencia grande o pequeño',
    singChildrenSongs: 'Entona canciones infantiles',
    exploreEnvironment: 'Explora el entorno',
    recognicesPhotographs: 'Reconoce fotografías – personas',
    playsSmallGroups: 'Juega en pequeños grupos',
    greetsOnCommand: 'Saluda al indicarle',
    performManualActivities: 'Realiza actividades manuales',
    runsJumps: 'Corre y salta',
    copyLinesAndCircles: 'Copia líneas o círculos',
    identifiesEspatialConcepts: 'Identifica conceptos espaciales',
    acknowledgeHisSex: 'Dice su sexo',
    gerundPluralArticleDifference: 'Diferencia gerundio, plural y articulo',
    articlePhonemes: 'Articula fonemas',
    gestureCommunication: 'Usa gestos para comunicarse',
    talksFirstPerson: 'Habla en primera persona – YO',
    useOralLanguage: 'Utiliza lenguaje oral',
    showsPersonalPreferences: 'Tiene preferencias personales',
    likesChildAndAnimals: 'Muestra afecto a niños o animales',
    joinsSmallTeams: 'Integra pequeños grupos',
    motorArea: 'Área motora',
    movementPatterns: 'Patrones de movimiento',
    thickMotricity: 'Motricidad gruesa',
    laterality: 'Lateralidad',
    thinMotricity: 'Motricidad fina',
    run: 'Carrera',
    jump: 'Salto',
    throw: 'Lanzar',
    kick: 'Patear',
    initial: 'inicial',
    elementary: 'elemental',
    mature: 'maduro',
    staticDinamicBalance: 'Equilibrio dinámico y estático',
    staticBalance: 'Equilibrio estático',
    partialDisociation: 'Disociación segmentaria',
    generalCoordination: 'Coordinación dinámica general',
    achievement: 'Logro',
    process: 'Proceso',
    start: 'Inicio',
    eye: 'Ojo',
    ear: 'Oído',
    hand: 'Mano',
    feet: 'Pie',
    scrash: 'Rasgar',
    button: 'Abotonar',
    cut: 'Cortar',
    makeTower: 'Hacer una torre',
    threadingNeedle: 'Enhebrar una aguja',
    drawsHumanFigure: 'Dibuja la figura humana',
    nameHumanParts: 'Nombra partes del cuerpo',
    compleateHumanFigure: 'Completa la figura humana',
    bodyImage: 'Imagen corporal',
    loadPhoto: 'Cargar foto',
    uploadingPhoto: 'Cargando foto',
    spatialNotions: 'Nociones espaciales',
    timeNotions: 'Nociones temporales',
    inflateBalloon: 'Infla globo',
    incubateEggs: 'Encuba huevos',
    seedFlower: 'Planta flores',
    communication: 'Comunicación',
    prelinguisticLevel: 'Nivel prelingüistico',
    undifferentiatedCrying: 'Llanto Indiferenciado',
    socialSmile: 'Sonrisa Social',
    vocalGame: 'Juego Vocal',
    babbleReflection: 'Balbuceo Reflejo',
    gutturalSound: 'Sonidos Guturales',
    gestures: 'Gestos',
    phraseWord: 'Palabra frase',
    linguisticLevel: 'Nivel lingüistico',
    intentionalSyllable: 'Monosílabo Intencional',
    juxtaposedWord: 'Palabra Yuxtapuesta',
    simplePhrase: 'Frase Simple',
    languageInteriorization: 'Interiorización Del Lenguaje',
    verbUse: 'Uso Se Verbos',
    waitTurn: 'Espera Turnos',
    completePhrase: 'Frase Compleja',
    firstStage: 'Primera etapa',
    makeComplexeSentences: 'Realiza oraciones complejas',
    beginReadingWriting: 'Inicio de la lectoescritura',
    usePreposition: 'Uso de preposiciones',
    useAdjectives: 'Uso de adjetivos',
    secondeStage: 'Segunda etapa',
    gramaticalElemmentUse: 'Uso de elementos gramaticales',
    slangLanguage: 'Uso de jergas',
    useAdjectivesAdverbs: 'Uso de adjetivos y adverbios',
    fullfillComplexOrder: 'Cumple ordenes complejas',
    fluidCommunication: 'Comunicación fluida',
    plays: 'Juega',
    proposeGame: 'Propone juegos',
    leaderInGames: 'Líder en los juegos',
    acceptAnothersGame: 'Acepta el juego de otro',
    acceptIt: 'Lo acepta',
    searchIt: 'Lo busca',
    provokesIt: 'Lo provoca',
    thanksHim: 'Le agradece',
    waitGrownUpApprovation: 'Espera aprobación de adulto',
    waitOrders: 'Espera órdenes-consignas',
    collaborateWithAdult: 'Colabora con adulto',
    cognitiveArea: 'Area cognitiva',
    socioAffectiveArea: 'Area socio afectiva',
    bodyOutline: 'Esquema corporal',
    attitudeBeforeGame: 'Actitud ante el juego',
    relationTowardsAdult: 'El sujeto en relación con el adulto',
    psychomotorDiagnosis: 'Diagnóstico psicomotor',
    recomendation: 'Recomendaciones'
  },
  physiotherapy: {
    medicalDiagnosys: 'Diagnóstico médico',
    actualDeceaseBackground: 'Antecedentes de la enfermedad actual',
    gestationalBackground: 'Antecedentes gestacionales',
    pregnancyNumber: 'Numero de embarazo',
    childrenNumber: 'Numero de hijos',
    antenatalFollowup: 'Control prenatal',
    hospital: 'Hospital',
    pregnancyComplications: 'Problemas durante el embarazo',
    gestationalTime: 'Tiempo gestacional',
    birth: 'Parto',
    birthTipe: 'Tipo de parto',
    position: 'Posición',
    cry: 'Llanto',
    movements: 'Movimientos',
    cyanosis: 'Cianosis',
    oxygen: 'Oxigeno',
    incubator: 'Incubadora',
    incubatorTime: 'Tiempo de incubadora',
    cesarean: 'Cesarea',
    eutocic: 'Eutosico',
    immediate: 'inmediato',
    belated: 'tardio',
    pathologicalAndFamilyBackground: 'Antecedentes patológicos y familiares',
    posturalPhysicalExploration: 'Exploración postural y física',
    anteriorPlan: 'Plano anterior',
    posteriorPlan: 'Plano posterior',
    lateralPlan: 'Plano lateral',
    respiration: 'Respiración',
    type: 'Tipo',
    pattern: 'Patrón',
    orthopedicTest: 'Pruebas Ortopédicas',
    foldAsymmetry: 'Asimetría de pliegues',
    measurements: 'Mensuras',
    tone: 'Tono',
    trophism: 'Trofismo',
    modifiedAshworthScale: 'Escala de Ashworth modificada',
    ashworthOption1: 'Tono muscular normal. No hay espasticidad.',
    ashworthOption2: 'Leve incremento del tono muscular. Resistencia mínima al final del arco articular al estirar pasivamente el grupo muscular considerado',
    ashworthOption3: 'Leve incremento del tono muscular. Resistencia a la elongación en menos de la  mitad del arco.',
    ashworthOption4: 'Incremento del tono mayor. Resistencia a la elongación en casi todo el arco articular. Extremidad movilizable fácilmente.',
    ashworthOption5: 'Considerable incremento del tono. Es difícil la movilización pasiva de la extremidad.',
    ashworthOption6: 'Hipertonía de las extremidades en flexión  o en extensión.(aducción, abducción etc.)',
    reflexes: 'Reflejos',
    suctionReflection: 'Reflejo de succión',
    TRIPLEEXTFLX: 'TRIPLE EXT/FLX',
    RTCA: 'RTCA',
    RTCS: 'RTCS',
    RTL: 'RTL',
    RMORO: 'R. MORO',
    RBABINSKI: 'R. BABINSKI',
    REXTCRUZADA: 'R. EXT. CRUZADA',
    GALANT: 'GALANT',
    LANDAU: 'LANDAU',
    DEFENSA: 'DEFENSA',
    RPALMAR: 'R. PALMAR',
    RPLANTAR: 'R. PLANTAR',
    RPOSITIVODEAPOYO: 'R. POSITIVO DE APOYO',
    RPARACAIDAS: 'R. PARACAIDAS',
    straighteningReactions: 'Reacciones de enderazamiento',
    laberinthStraighteningReaction: 'Reacción de enderezamiento laberíntico',
    straighteningReactionsOnEyes: 'Reacción de enderezamiento sobre los ojos',
    spontaneousMotorActivity: 'Actividad motora espontánea',
    dorsalDecubitus: 'Decúbito dorsal',
    ventralDecubitus: 'Decúbito ventral',
    positionChanges: 'Cambios de posición',
    rolido: 'Rolido',
    drag: 'Arrastre',
    sedentary: 'Sedente',
    crawl: 'Gateo',
    kneeBended: 'Arrodillado',
    biped: 'Bípedo',
    structured: 'Estructurado',
    inProgress: 'En proceso',
    good: 'Bueno',
    deficient: 'Deficiente',
    absent: 'Ausente',
    corporalConcept: 'Concepto corporal',
    spatialEstructuration: 'Estructuración espacial',
    temporalEstructuration: 'Estructuración temporal',
    dinamicBalance: 'Equilibrio dinámico',
    thickCoordination: 'Coordinación gruesa',
    thinCoordination: 'Coordinación fina',
    eyeHandCoordination: 'Coordinación ojo-mano',
    eyeFeetCoordination: 'Coordinación ojo-pie',
    dailyLifeActivities: 'Actividades de la vida diaria',
    hygiene: 'Higiene',
    feeding: 'Alimentación',
    clothing: 'Vestimenta',
    independent: 'Independiente',
    withHelp: 'Con ayuda',
    dependent: 'Dependiente',
    present: 'Presente',
    affectivePattern: 'Muestras afectivas',
    oralCommunication: 'Comunicación oral',
    alternateCommunication: 'Comunicación alternativa',
    socialRelationship: 'Relacionamiento social',
    collaborate: 'Colabora',
    doesntCollaborate: 'No colabora',
    understand: 'Comprende',
    doesntUnderstand: 'No comprende',
    associatedAlterations: 'Alteraciones asociadas',
    vision: 'Visión',
    audition: 'Audición',
    convulsiveSyndrome: 'Sindrome Convulsivo',
    longTermMemory: 'Memoria largo plazo',
    shortTermMemory: 'Memoria corto plazo',
    emotionalStatus: 'Estado emocional',
    nutritionalStatus: 'Estado nutricional',
    sensitivity: 'Sensibilidad',
    esteriotypes: 'Estereotipos',
    normal: 'Normal',
    altered: 'Alterado',
    hearingLoss: 'Hipoacusia',
    deafness: 'Sordera',
    understandable: 'Comprensible',
    notUnderstandable: 'No comprensible',
    alternative: 'Alternativo',
    withTreatment: 'Con tratamiento',
    withoutTreatment: 'Sin tratamiento',
    regular: 'Regular',
    bad: 'Mala',
    stable: 'Estable',
    quiet: 'Tranquilo',
    changing: 'Cambiante',
    aggressive: 'Agresivo',
    overweight: 'Sobrepeso',
    obesity: 'Obesidad',
    undernourished: 'Desnutrido',
    hyposensitive: 'Hiposensible',
    hypersensitive: 'Hipersensible',
    conclusions: 'Conclusiones',
    diagnosis: 'Diagnóstico',
    treatment: 'Tratamiento',
    objectives: 'Objetivos',
    treatmentPlan: 'Plan de tratamiento'
  },
  frecuency: {
    always: 'siempre',
    frequently: 'frecuentemente',
    ocasionally: 'ocasionalmente',
    never: 'nunca'
  },
  spatialUbication: {
    up: 'Arriba',
    down: 'Abajo',
    front: 'Delante',
    back: 'Detrás',
    inside: 'Dentro',
    outside: 'Fuera',
    left: 'Izquierda',
    right: 'Derecha'
  },
  socialWork: {
    admissionDate: 'Fecha de ingreso',
    readmissionDate: 'Fecha de reingreso',
    addFamilyMember: 'Agregar Familiar',
    selectOrCreate: 'Seleccione una opción o cree una nueva',
    civilState: 'Estado civil',
    monthSalary: 'Salario mensual',
    closeFolder: 'Cerrar archivador',
    familyDinamicDetail: 'Detalle de dinámica familiar',
    familyInformation: 'Información de la familia',
    familyType: 'Tipo de familia',
    groupFamilyObservation: 'Observaciones al grupo familiar',
    familyDinamic: 'Dinámica familiar',
    familyDinamicPlaceholder: 'Qué actividades realiza cada uno de los miembros de la familia y en qué momento interactúan',
    socialProces: 'Proceso social',
    socialProcesPlaceholder: 'Por qué la familia necesita los servicios que brinda la institución',
    disabilityStory: 'Relato de la discapacidad',
    socialDiagnostics: 'Diagnóstico social',
    socialDiagnosticsPlaceholder: 'Cómo está la familia al momento del ingreso a la institución',
    conclusionSuggestion: 'Conclusiones y sugerencias',
    conclusionSuggestionPlaceholder: 'Cómo se debe trabajar con la familia para mejorar la calidad de vida'
  },
  occupationalTherapy: {
    avd: 'AVD',
    shower: 'Ducha',
    sfinterControl: 'Control de esfinter',
    dressedUndressed: 'Vestido y desvestido',
    swallowAndChew: 'Masticar y tragar',
    eatAlone: 'Comer solo',
    functionalMovility: 'Movilidad funcional',
    personalHygiene: 'Higiene personal y aseo',
    toiletHygiene: 'Higiene en inodoro',
    comunicacionSocialCognitivo: 'Comunicación - Destreza Social - Cognitivo',
    understand: 'Comprensión',
    expresion: 'Expresión',
    socialInteraction: 'Interacción social',
    problemSolucion: 'Solución de problemas',
    memory: 'Memoria',
    atention: 'Atención',
    orentation: 'Orientación',
    recognizement: 'Reconocimiento',
    secuence: 'Secuenciación',
    mathSkill: 'Cálculo',
    language: 'Lenguaje',
    writting: 'Escritura',
    physicalExam: 'Examen físico',
    balance: 'Equilibrio',
    static: 'Estático',
    dinamic: 'Dinámico',
    manualFunction: 'Función manual',
    thickMovility: 'Pinza gruesa',
    fineMovility: 'Pinza fina',
    cylindrical: 'Cilíndrica',
    spherical: 'Esférica',
    coupling: 'Enganche',
    subTerminal: 'Sub-terminal',
    termTerminal: 'Termino-terminal',
    lateral: 'Lateral',
    tripod: 'Trípode',
    interdigital: 'Interdigital',
    latLateral: 'Latero-lateral',
    multipulp: 'Multipulpar',
    right: 'derecha',
    left: 'izquierda',
    architecturalBarriers: 'Barreras arquitectónicas',
    interventionObjectives: 'Objetivos de intervención'
  },
  account: {
    title: 'Cuentas',
    add: 'Agregar nueva cuenta',
    select: 'Seleccione una opción',
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
