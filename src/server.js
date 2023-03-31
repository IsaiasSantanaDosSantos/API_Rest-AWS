import app from "./app";

const port = process.env.APP_PORT;

app.listen(port);

// fetch('https://blog.drmeducacao.com.br/wp-json/wp/v2/media/').then(response => response.json()).then(alunos => console.log(alunos))
