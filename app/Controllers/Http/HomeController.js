'use strict'
const Home = use('App/models/home');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with homes
 */
class HomeController {
  /**
   * Show a list of all homes.
   * GET homes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Home.all())
  }

  /**
   * Render a form to be used for creating a new home.
   * GET homes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    await Home.create(request.all());
  }

  /**
   * Create/save a new home.
   * POST homes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single home.
   * GET homes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing home.
   * GET homes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let Habilidada = await Home.find(params.id);
    Habilidada.merge(request.all());
    await Habilidada.save();
  }

  /**
   * Update home details.
   * PUT or PATCH homes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let Habilidada = await Home.find(params.id);
    Habilidada.merge(request.all());
    await Habilidada.save();

  }

  /**
   * Delete a home with id.
   * DELETE homes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let Habilidada = await Home.find(params.id);
    Habilidada.delete();
  }
}

module.exports = HomeController
