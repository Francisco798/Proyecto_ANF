import PouchDB from 'pouchdb-browser';

// Conexión a CouchDB remota
// Reemplaza usuario, contraseña y host con tus datos
const db = new PouchDB('http://admin:admin@localhost:5984/proyecto_anf2025');

// Opcional: sincronización bidireccional con la base remota
const remoteDB = new PouchDB('http://admin:admin@localhost:5984/proyecto_anf2025');
// Sincronización bidireccional
db.sync(remoteDB, {
  live: true,  // sincronización en tiempo real
  retry: true  // reintenta automáticamente si hay fallos
})
  .on('change', info => console.log('Cambio detectado:', info))
  .on('paused', err => console.log('Sincronización pausada:', err))
  .on('active', () => console.log('Sincronización activa'))
  .on('denied', err => console.warn('Documento denegado:', err))
  .on('complete', info => console.log('Sincronización completa:', info))
  .on('error', err => console.error('Error de sincronización:', err));

export default db;
