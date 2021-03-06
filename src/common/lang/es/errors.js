export default {
  '400': 'Hubo un error de validación.',
  '401': 'Su sesión ha caducado.',
  '412': 'No se pudo realizar la operación.',
  '403': 'No tiene los permisos necesarios.',
  '404': 'No existe el recurso solicitado.',
  '407': 'Necesita configurar su Proxy para poder usar el sistema.',
  '408': 'El servidor no responde intente más tarde.',
  '409': 'Los datos no son válidos',
  '410': 'El recurso solicitado ya no está disponible y no lo estará de nuevo.',
  '500': 'Se produjo un error en el servidor, inténtelo más tarde.',
  '502': 'El sistema no está disponible en estos momentos, inténtelo más tarde.',
  '503': 'El sistema se encuentra en mantenimiento en estos momentos, vuelva a intentarlo más tarde por favor.',
  // '504': 'Gateway timeout - Tiempo de espera agotado.', // Esto debe ser implementado en el frontend para reintentar las peticiones
  'connection': 'No se pudo establecer conexión con el servidor.',
  'cancelRequest': 'Petición cancelada.',
  'validation': 'Error de validación',
  'unknown': 'Ocurrió un error desconocido, intente más tarde.',
  'sessionExpired': 'Su sesión ha expirado, ingrese nuevamente.',
  // '412': error interno del sistema
  'userSentNotFound': 'No se encontró el usuario enviado.',
  'mustAddPersonInformation': 'Debe agregar datos de persona.',
  'mustAddUserInformation': 'Debe agregar datos de usuario.',
  'mustAddSearchInformation': 'Debe agregar datos de búsqueda.',
  'userUnderage': 'El usuario ingresado es menor de edad.',
  'userRequiredNotFound': 'No se ha encontrado al usuario solicitado.',
  'incorrectCode': 'El código ingresado no es correcto.',
  'codeExpired': 'El código de activación ha caducado.',
  'passwordMinimunCharacter': 'La contraseña debe contar con al menos 8 caracteres.',
  'userExistsAlready': 'Ya existe un usuario ACTIVO asociado a la persona seleccionada. Por favor verifique sus datos.',
  'noData': 'No se encontraron elementos de la busqueda',
  'rudeInUse': 'El RUDE ingresado se encuentra asociado a otro estudiante',
  // Cargado de csv
  'wrongFormat': 'Formato incorrecto, revisar las instrucciones.',
  'noCsvSent': 'No se encontraron los datos relacionados al archivo.',
  'notACsvFile': 'El archivo enviado no se encuentra en formato CSV, leer las instrucciones.',
  'incorrectNumberOfColumns': 'Número de columnas incorrecto',
  // Menu de cursos
  'courseNameRepeated': 'Nombre del curso repetido.',
  'invalidParalelFormat': 'Formato de paralelo incorrecto.',
  'noIdCourseSend': 'No se envió el id del curso.',
  // Registros medicos
  'wrongUrl': 'Ruta incorrecta',
  'noRudeValue': 'Ingrese valor de RUDE',
  'noNamesValue': 'Debe ingresar los nombres',
  'nodocumentNumberValue': 'Debe ingresar documento de identidad',
  'noDocumentPlaceValue': 'Debe ingresar lugar de expedición del documento de identidad',
  'noCityValue': 'Debe ingresar ciudad de nacimiento'
};
