import { Router } from "express";
import userController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Não deveria existir
// router.get("/", userController.index); // Lista usuários
// router.get("/:id", userController.show); // Lista usuário

// router.post("/", userController.store);

router.post("/", loginRequired, userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;

/**
 Em cada controller até 5 metódos:

 index → lista todos os ususários → GET
 store/create → cria um novo usuário → POST
 delete → apaga um usuário → DELETE
 show → mostra um usuário → GET
 update → atualiza um usuário → PATCH (pega só um valor) ou PUT (substitui o objeto todo)

 */
