import error from './errors';
import validate from './validates';
import menu from './menu';

export default {
  error,
  validate,
  menu,
  app: {
    title: 'App',
    account: 'My account',
    settings: 'Settings',
    logOut: 'Logout'
  },
  login: {
    title: 'Login',
    user: 'Username',
    password: 'Password',
    rememberMe: 'Remember me',
    forgotPass: 'Forgot password?',
    login: 'Login',
    noAccount: 'Dont have an account?',
    signUp: 'Signup here'
  },
  loginAdmin: {
    title: 'Start session',
    user: 'Username',
    password: 'Password',
    rememberMe: 'Remember me',
    forgotPass: 'Forgot your password?',
    login: 'Login',
    noAccount: 'No account?',
    signUp: 'Sign up'
  },
  newPassword: {
    title: 'Reset password',
    email: 'Email address',
    send: 'Send',
    backToLogin: 'Return to login'
  },
  usuarios: {
    newUser: 'New user',
    usersPerPage: 'Users per page',
    adding: 'Add user',
    personalData: 'Personal data.',
    enterPersonalData: 'Input personal information.',
    id: 'Identity card number',
    place: 'Place',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    bornDate: 'Date of birth',
    userData: 'User account information.',
    enterUserData: 'Assign an email and a rol to the user.',
    email: 'Email',
    rol: 'User rol',
    emailRequired: 'The email field iss required',
    emailValid: 'Not a valid email',
    errorFillForm: 'Must fill required fields before saving.',
    successSendEmail: 'An email has been sent to ',
    errorSendEmail: 'Email failed.'
  },
  confirm: {
    title: 'Por favor, ingrese su contraseña',
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
    newCourse: 'New course',
    name: 'Name',
    gestion: 'Year',
    ages: 'Ages',
    coursesPerPage: 'Courses per page',
    creatingNewCourse: 'Create new course',
    editCourse: 'Edit course',
    courseData: 'Course information',
    studentsPerCourse: 'Students per course',
    teacher: 'Teacher',
    minimalAge: 'Minimum age',
    maximalAge: 'Maximum age',
    ageRange: 'Age range',
    thisYearCourses: 'Current year courses'
  },
  inscriptions: {
    newStudent: 'New student',
    loadCsv: 'Load CSV file',
    stepLoad: 'Steps to load a CSV file',
    csv: 'Load CSV',
    uploadingCsv: 'Uploading file.',
    courseAssignation: 'Course assignment',
    studentData: 'Student information',
    studentsPerPage: 'Students per page',
    noData: 'No data'
  },
  inscriptionRegister: {
    createNew: 'Create new',
    createNewSchool: 'Create new educational unit',
    tittle: 'Student registration',
    subtitle1: 'Educational unit information',
    dependency: 'Educational unit dependency',
    sie: 'SIE code',
    errorNameField: 'Must fill "Name" field',
    public: 'public',
    comunitary: 'community',
    convein: 'agreement',
    private: 'private',
    educativeDistrit: 'Educational district',
    subNames: 'First and last names',
    subBorn: 'Place and date of birth',
    firstLastName: 'First last name',
    secondLastName: 'Second last name',
    names: 'Names',
    relation: 'Relationship',
    country: 'Country',
    provincia: 'Province',
    municipio: 'Municipality',
    departamento: 'Department',
    localidad: 'Localidad',
    zona: 'Neighborhood',
    street: 'Street / Avenue',
    number: 'Address number',
    telefon: 'Telephone number',
    cellphone: 'Cellphone number',
    bornDate: 'Date of birth',
    identity: 'Identification document',
    documentNumber: 'Document number',
    documentTipe: 'Document type',
    ci: 'Identity card',
    passport: 'Passport',
    documentPlace: 'Document place',
    rude: 'Student Code RUDE',
    procedenceUnit: 'Educational unit of origin',
    bornCertificate: 'Birth certificate',
    codRude: 'RUDE',
    codSie: 'SIE code',
    nameEducativeUnit: 'Educational Unit name',
    civilRegistryNumber: 'Official N°',
    bookNumber: 'Book N°',
    matchNumber: 'Match N°',
    folioNumber: 'Folio N°',
    level: 'Level',
    initial: 'Initial',
    primary: 'Primary',
    secondary: 'High School',
    lag: 'Delay',
    grade: 'Degree',
    nivelation: 'Delay nivelation',
    paralel: 'Paralel',
    turn: 'Round',
    morning: 'Morning',
    afternoon: 'Afternoon',
    evening: 'Night',
    tutorData: 'Information of the parent or guardian',
    language: 'Language',
    motherLanguage: 'Mother tongue',
    originaryPopulation: 'Native indigenous population',
    languageRegion: 'Language or belonging',
    health: 'Health',
    healthAvailability: 'Is there a health center in your community?',
    frecuency: 'How many times did you go to the center last year?',
    oneToTwo: 'Once or twice',
    threeToFive: 'Three or five times',
    fiveOrMore: 'Six or more times',
    never: 'Never',
    disability: 'Type of disability',
    subDisability: 'Disability subtype',
    disabilityTipe: 'The disability is:',
    born: 'From birth',
    adquired: 'Acquired',
    inherited: 'Inherited',
    none: 'None',
    basicServicesAcces: 'Basic services access',
    waterProcedence: 'Your house water comes from:',
    electricityService: 'Do you have electricity in your home?',
    drain: 'The drain of your house goes to:',
    work: 'Job',
    workActivity: 'Did the student do any activity?',
    workDays: 'Worked days',
    payWork: 'Received salary',
    communicationTransport: 'Access to means of communication and transport',
    internetAccess: 'Access the internet at:',
    internetFrecuency: 'On which frecuency?',
    transportWay: 'Means of transportation',
    transportTime: 'Time of transportation',
    profession: 'Profession',
    maxEducation: 'Level of education',
    tutor: 'Tutor',
    subtitle3: 'Current year inscription information',
    messageSubtitle3: '',
    subtitle4: 'Student address',
    messageSubtitle4: '',
    subtitle5: 'Social information',
    messageSubtitle5: '',
    subtitle6: 'Information of the students father, mother or guardian',
    messageSubtitle6: ''
  },
  parameters: {
    agricultureIndustry: 'Worked in agriculture or agro-industry',
    familyAgriculture: 'Helped family members in agriculture or livestock',
    domesticAid: 'Helped at home at dmestic chores, trades or sales',
    babySister: 'Worked as a domestic worker or babysitter',
    minery: 'Worked in mining',
    construction: 'Worked in construction',
    publicTransport: 'Worked in public transportation',
    none: 'Did not work',
    netConexion: 'Network connection',
    publicWater: 'Public pool',
    deliveryCar: 'Delivery truck',
    well: 'Well',
    river: 'River, lake, lagoon, etc',
    other: 'Other',
    sewer: 'Sewer',
    septicTank: 'Septic tank',
    blindWell: 'Cesspool',
    street: 'Street / Avenue',
    foot: 'By foot',
    car: 'In transport vehicule',
    bicycle: 'Cycling',
    train: 'By train',
    daily: 'Daily',
    onceAWeek: 'More than once a week',
    onceAMonth: 'Once a month or less',
    halfHour: 'Less than half an hour',
    oneHour: 'Between half and one hour',
    twoHours: 'Between one and two hours',
    twoOrMore: 'Two hours or more'
  },
  disability: {
    visual: 'Visual',
    auditory: 'Auditory',
    intellectual: 'Intellectual',
    phisic: 'Physical/Motor',
    multiple: 'Multiple',
    auditoryLow: 'Mild hearing loss',
    auditoryMedium: 'Moderate hearing loss',
    auditoryHigh: 'Severe hearing loss',
    auditoryDeep: 'Deep deafness',
    blind: 'Total blindness',
    lowVision: 'Low vision',
    downSyndrome: 'Sindrome de down',
    autism: 'Autism',
    cerebralParalysis: 'Cerebral paralysis',
    traumatism: 'Trauma',
    congenitalMalformation: 'Congenital malformations',
    deafblindness: 'Deafblindness',
    physicalIntellectual: 'Sensory intellectual physicist',
    visualPhysics: 'Visual physicist',
    auditoryPhysique: 'Auditory physicist',
    auditoryIntellectual: 'Auditory intellectual',
    visualIntellectual: 'Visual intellectual',
    other: 'Others'
  },
  generalFollowUp: {
    searchBy: 'Search by',
    searchText: 'Search text',
    date: 'Date',
    newStandartRegistry: 'New follow up registry',
    generalData: 'Standart items',
    standartRegistry: 'Follow up registry',
    print: 'Print',
    observation: 'Observation',
    intervention: 'Intervention',
    notRegistered: 'Not registered',
    address: 'Address',
    age: 'Age',
    registerCreationSuccessfull: 'Creation successfull',
    registerCreationUnsuccessfull: 'Error on register creation'
  },
  common: {
    add: 'Add',
    required: 'Required',
    cancel: 'Cancel',
    save: 'Save',
    accept: 'Ok',
    select: 'Select',
    close: 'Close',
    yes: 'Yes',
    no: 'No',
    code: 'Code',
    rowsPage: 'Rows per page',
    updateList: 'Update list',
    filters: 'Filters/Search',
    of: 'of',
    search: 'Search',
    change: 'Change',
    active: 'Active',
    edit: 'Edit',
    status: 'State',
    actions: 'Actions',
    firstLastName: 'Surname',
    secondLastName: 'Second surname',
    names: 'Names',
    description: 'Description',
    clear: 'Clear'
  },
  entity: {
    title: 'Entities',
    add: 'Add new entity',
    crud: {
      edit: 'Edit',
      code: 'Code',
      acronym: 'Acronym',
      description: 'Description',
      status: 'Status',
      addEnt: 'Add entity',
      editEnt: 'Edit entity'
    }
  },
  registerView: {
    searchParams: 'Search parameters',
    files: 'Files',
    creationDate: 'Creation date',
    area: 'Area',
    createdBy: 'Created by'
  },
  psicomotricity: {
    evaluationDate: 'Evaluation date',
    sentDiagnosis: 'Send diagnosis',
    educationCenter: 'Education center',
    schoolGrade: 'School grade',
    perinatal: 'Perinatal',
    prenatal: 'Prenatal',
    postnatal: 'Postnatal',
    cephalicControl: 'Cephalic control',
    sitting: 'Sitting',
    drag: 'Drag',
    crawl: 'Crawl',
    standing: 'Standing',
    walk: 'Walk',
    consultationReason: 'Consultation reason',
    psychomotorEvaluation: 'Psychomotor evaluation',
    motor: 'Mothor',
    cognitive: 'Cognitive',
    socioAffective: 'Socio affective'
  },
  socialWork: {
    admissionDate: 'Admission date',
    readmissionDate: 'Readmission date',
    addFamilyMember: 'Add family member',
    selectOrCreate: 'Select an option or create a new one',
    civilState: 'Civil status',
    monthSalary: 'Month salary',
    closeFolder: 'Close folder',
    familyDinamicDetail: 'Family dynamic detail',
    familyInformation: 'Family information',
    familyType: 'Family type',
    groupFamilyObservation: 'Family group observations',
    familyDinamic: 'Family dynamic',
    familyDinamicPlaceholder: 'What activities do the family members do and at what time do they interact with each other',
    socialProces: 'Social process',
    socialProcesPlaceholder: 'Why does the family require the services given by the institution',
    disabilityStory: 'Disability story',
    socialDiagnostics: 'Social diagnosis',
    socialDiagnosticsPlaceholder: 'How is the family at the moment of admission',
    conclusionSuggestion: 'Conclusions and suggestions',
    conclusionSuggestionPlaceholder: 'What teraphy does the family need to improve their life quality'
  },
  account: {
    title: 'Accounts',
    add: 'Add new account',
    select: 'Choose an entity to see its accounts',
    crud: {
      edit: 'Edit',
      accountNumber: 'Account number',
      status: 'Status',
      entity: 'Entity',
      addAc: 'Add account',
      editAc: 'Edit account'
    }
  },
  user: {
    title: 'Users',
    add: 'Add new user',
    crud: {
      edit: 'Edit',
      user: 'User',
      userData: 'User info',
      entity: 'Entity',
      role: 'Role',
      status: 'Status',
      addUser: 'Add user',
      editUser: 'Edit user'
    }
  },
  months: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
};
