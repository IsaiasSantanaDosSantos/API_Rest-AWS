// import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    res.json("The API Rest is online. Comgratulation!!!");
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

export default new HomeController();
