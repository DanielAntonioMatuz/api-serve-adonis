'use strict'
const Habilidad = use('App/models/habilidad');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with habilidads
 */
class HabilidadController {
  /**
   * Show a list of all habilidads.
   * GET habilidads
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Habilidad.all())
  }

  /**
   * Render a form to be used for creating a new habilidad.
   * GET habilidads/create
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
   * Create/save a new habilidad.
   * POST habilidads
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single habilidad.
   * GET habilidads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing habilidad.
   * GET habilidads/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let Habilidada = await Habilidad.find(params.id);
    Habilidada.merge(request.all());
    await Habilidada.save();
  }

  /**
   * Update habilidad details.
   * PUT or PATCH habilidads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let Habilidada = await Habilidad.find(params.id);
    Habilidada.merge(request.all());
    await Habilidada.save();
  }

  /**
   * Delete a habilidad with id.
   * DELETE habilidads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let Habilidada = await Habilidad.find(params.id);
    Habilidada.delete();
  }
}

module.exports = HabilidadController
