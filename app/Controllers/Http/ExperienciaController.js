'use strict'
const Experiencia = use('App/models/experiencia');


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with experiencias
 */
class ExperienciaController {
  /**
   * Show a list of all experiencias.
   * GET experiencias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Experiencia.all())
  }

  /**
   * Render a form to be used for creating a new experiencia.
   * GET experiencias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    await Experiencia.create(request.all());
  }

  /**
   * Create/save a new experiencia.
   * POST experiencias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single experiencia.
   * GET experiencias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing experiencia.
   * GET experiencias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let Experiencia = await Experiencia.find(params.id);
    Experiencia.merge(request.all());
    await Experiencia.save();
  }

  /**
   * Update experiencia details.
   * PUT or PATCH experiencias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let Habilidada = await Experiencia.find(params.id);
    Habilidada.merge(request.all());
    await Habilidada.save();
  }

  /**
   * Delete a experiencia with id.
   * DELETE experiencias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let Experiencia = await Experiencia.find(params.id);
    Experiencia.delete();
  }
}

module.exports = ExperienciaController
