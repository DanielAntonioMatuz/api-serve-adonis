'use strict'
const Proyecto = use('App/models/proyecto');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with proyectos
 */
class ProyectoController {
  /**
   * Show a list of all proyectos.
   * GET proyectos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Proyecto.all())

  }

  /**
   * Render a form to be used for creating a new proyecto.
   * GET proyectos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    await Proyecto.create(request.all());

  }

  /**
   * Create/save a new proyecto.
   * POST proyectos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single proyecto.
   * GET proyectos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing proyecto.
   * GET proyectos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let Habilidada = await Proyecto.find(params.id);
    Habilidada.merge(request.all());
    await Habilidada.save();
  }

  /**
   * Update proyecto details.
   * PUT or PATCH proyectos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let Habilidada = await Proyecto.find(params.id);
    Habilidada.merge(request.all());
    await Habilidada.save();
  }

  /**
   * Delete a proyecto with id.
   * DELETE proyectos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let Habilidada = await Proyecto.find(params.id);
    Habilidada.delete();
  }
}

module.exports = ProyectoController
