'use strict'
const Header = use('App/models/headerHabilidad');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with headerhabilidads
 */
class HeaderHabilidadController {
  /**
   * Show a list of all headerhabilidads.
   * GET headerhabilidads
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Header.all())
  }

  /**
   * Render a form to be used for creating a new headerhabilidad.
   * GET headerhabilidads/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    await Header.create(request.all());
  }

  /**
   * Create/save a new headerhabilidad.
   * POST headerhabilidads
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single headerhabilidad.
   * GET headerhabilidads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing headerhabilidad.
   * GET headerhabilidads/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let Habilidada = await Header.find(params.id);
    Habilidada.merge(request.all());
    await Habilidada.save();
  }

  /**
   * Update headerhabilidad details.
   * PUT or PATCH headerhabilidads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let Habilidada = await Header.find(params.id);
    Habilidada.merge(request.all());
    await Habilidada.save();
  }

  /**
   * Delete a headerhabilidad with id.
   * DELETE headerhabilidads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let Habilidada = await Header.find(params.id);
    Habilidada.delete();
  }
}

module.exports = HeaderHabilidadController
