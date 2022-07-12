const express = require('express');
const app = express();
const cors = require('cors');
//const PORT = 3001;
const port = process.env.PORT || 3000;
const {encrypt, decrypt} = require("./EncryptionHandler")

app.use(cors())
app.use(express.json());

const mysql = require('mysql')
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'PasswordManager'
});

app.post("/addpassword", (req, res) => { //Richiesta POST, dovrò fare una richiesta API
  const {password, title} = req.body;
  const hashedPassword = encrypt(password);

  db.query("INSERT INTO Passwords (Password, Title, IV) VALUES (?, ?, ?)", [hashedPassword.password, title, hashedPassword.iv], (err, result) => { //Faccio la Insert e mi salvo eventuali errori in "err"
    if (err) {
      console.log(err) //Se ci sono errori li mostro in console
    } else {
      res.send("Completato con Successo") //Se NON ci sono errori mando una stringa di Success
    }
  })

});

app.get('/showpassword', (req, res) => {
  db.query('SELECT * FROM Passwords;', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result)
    }
  })
});

// Mostra il Messaggio che il Server è Attivo su una specifica Porta
app.listen(port, () => console.log(`In ascolto sulla Porta ${port}`));

// crea un Percorso GET
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});