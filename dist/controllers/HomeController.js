"use strict";Object.defineProperty(exports, "__esModule", {value: true});// import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    res.json("IndexX");
  }
}
// class HomeController {
//   async index(req, res) {
//     const novoAluno = await Aluno.create({
//       nome: "Isaias ",
//       sobrenome: "Silva Silva",
//       email: "maria@maria.com",
//       idade: 22,
//       peso: 46,
//       altura: 1.43,
//     });
//     res.json(novoAluno);
//   }
// }

exports. default = new HomeController();
