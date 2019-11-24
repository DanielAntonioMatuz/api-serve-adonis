'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('home','HomeController.index');
Route.get('home/:id','HomeController.show');
Route.post('home','HomeController.store');
Route.put('home/:id','HomeController.update');
Route.delete('home/:id','HomeController.destroy');

Route.get('detalle','DetalleController.index');
Route.get('detalle/:id','DetalleController.show');
Route.post('detalle','DetalleController.store');
Route.put('detalle/:id','DetalleController.update');
Route.delete('detalle/:id','DetalleController.destroy');

Route.get('experiencia','ExperienciaController.index');
Route.get('experiencia/:id','ExperienciaController.show');
Route.post('experiencia','ExperienciaController.store');
Route.put('experiencia/:id','ExperienciaController.update');
Route.delete('experiencia/:id','ExperienciaController.destroy');

Route.get('educacion','EducacionController.index');
Route.get('educacion/:id','EducacionController.show');
Route.post('educacion','EducacionController.store');
Route.put('educacion/:id','EducacionController.update');
Route.delete('educacion/:id','EducacionController.destroy');

Route.get('proyecto','ProyectoController.index');
Route.get('proyecto/:id','ProyectoController.show');
Route.post('proyecto','ProyectoController.store');
Route.put('proyecto/:id','ProyectoController.update');
Route.delete('proyecto/:id','ProyectoController.destroy');

Route.get('headerHabilidad','HeaderHabilidadController.index');
Route.get('headerHabilidad/:id','HeaderHabilidadController.show');
Route.post('headerHabilidad','HeaderHabilidadController.store');
Route.put('headerHabilidad/:id','HeaderHabilidadController.update');
Route.delete('headerHabilidad/:id','HeaderHabilidadController.destroy');

Route.get('habilidad','HabilidadController.index');
Route.get('habilidad/:id','HabilidadController.show');
Route.post('habilidad','HabilidadController.store');
Route.put('habilidad/:id','HabilidadController.update');
Route.delete('habilidad/:id','HabilidadController.destroy');

Route.get('habilidadTitulo','HabilidadTituloController.index');
Route.get('habilidadTitulo/:id','HabilidadTituloController.show');
Route.post('habilidadTitulo','HabilidadTituloController.store');
Route.put('habilidadTitulo/:id','HabilidadTituloController.update');
Route.delete('habilidadTitulo/:id','HabilidadTituloController.destroy');

Route.get('contacto','contactoController.index');
Route.get('contacto/:id','contactoController.show');
Route.post('contacto','contactoController.store');
Route.put('contacto/:id','contactoController.update');
Route.delete('contacto/:id','contactoController.destroy');
