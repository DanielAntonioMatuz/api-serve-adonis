'use strict'
const Educacion = use('App/models/educacion');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with educacions
 */
class EducacionController {
  /**
   * Show a list of all educacions.
   * GET educacions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Educacion.all())
  }

  /**
   * Render a form to be used for creating a new educacion.
   * GET educacions/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    await Habilidad.create(request.all());
  }

  /**
   * Create/save a new educacion.
   * POST educacions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single educacion.
   * GET educacions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing educacion.
   * GET educacions/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let Educacion = await Educacion.find(params.id);
    Educacion.merge(request.all());
    await Educacion.save()
  }

  /**
   * Update educacion details.
   * PUT or PATCH educacions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let Habilidada = await Educacion.find(params.id);
    Habilidada.merge(request.all());
    await Habilidada.save();
  }

  /**
   * Delete a educacion with id.
   * DELETE educacions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let Educacion = await Educacion.find(params.id);
    Educacion.delete();
  }
}

module.exports = EducacionController
