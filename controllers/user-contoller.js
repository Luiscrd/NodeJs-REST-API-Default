const { response, request } = require('express');

const userGet = (req = request, res = response) => {
    const { q, nombre = 'No Name', apiKey, page = 1, limit = 10 } = req.query;
    res.status(200).json({
        msg: 'GET - API - USERGET',
        q,
        page,
        limit,
        nombre,
        apiKey,

    })
}

const userPut = (req = request, res = response) => {
    const id = req.params.id;
    res.status(202).json({
        msg: 'PUT - API - USERPUT',
        id
    })
}

const userPost = (req = request, res = response) => {
    const { nombre, edad } = req.body;
    res.status(201).json({
        msg: 'POST - API - USERPOST',
        nombre,
        edad
    })
}

const userPatch = (req = request, res = response) => {
    res.status(201).json({
        msg: 'PATCH - API - USERPATCH'
    })
}

const userDelete = (req = request, res = response) => {
    res.status(202).json({
        msg: 'DELETE - API - USERDELETE'
    })
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userPatch,
    userDelete
}