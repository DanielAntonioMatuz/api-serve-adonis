'use strict'
const Titulo = use('App/models/habilidadTitulo');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with habilidadtitulos
 */
class HabilidadTituloController {
  /**
   * Show a list of all habilidadtitulos.
   * GET habilidadtitulos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Titulo.all())
  }

  /**
   * Render a form to be used for creating a new habilidadtitulo.
   * GET habilidadtitulos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    await Titulo.create(request.all());

  }

  /**
   * Create/save a new habilidadtitulo.
   * POST habilidadtitulos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single habilidadtitulo.
   * GET habilidadtitulos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing habilidadtitulo.
   * GET habilidadtitulos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let Habilidada = await Titulo.find(params.id);
    Habilidada.merge(request.all());
    await Habilidada.save();
  }

  /**
   * Update habilidadtitulo details.
   * PUT or PATCH habilidadtitulos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let Habilidada = await Titulo.find(params.id);
    Habilidada.merge(request.all());
    await Habilidada.save();
  }

  /**
   * Delete a habilidadtitulo with id.
   * DELETE habilidadtitulos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let Tituloa = await Titulo.find(params.id);
    Tituloa.delete();
  }
}

module.exports = HabilidadTituloController
