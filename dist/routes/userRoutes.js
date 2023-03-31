"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveria existir
// router.get("/", userController.index); // Lista usuários
// router.get("/:id", userController.show); // Lista usuário

// router.post("/", userController.store);

router.post("/", _loginRequired2.default, _UserController2.default.store);
router.put("/", _loginRequired2.default, _UserController2.default.update);
router.delete("/", _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/**
 Em cada controller até 5 metódos:

 index → lista todos os ususários → GET
 store/create → cria um novo usuário → POST
 delete → apaga um usuário → DELETE
 show → mostra um usuário → GET
 update → atualiza um usuário → PATCH (pega só um valor) ou PUT (substitui o objeto todo)

 */
