"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = process.env.APP_PORT;

_app2.default.listen(port);

// fetch('https://blog.drmeducacao.com.br/wp-json/wp/v2/media/').then(response => response.json()).then(alunos => console.log(alunos))
