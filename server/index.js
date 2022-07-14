const express = require('express')
 
const path = require('path')
 
const app = express()
 
const PORT = process.env.PORT || 5000
 
app.use(express.static(path.join(__dirname + "/public")))

const cors = require('cors');

const {encrypt, decrypt} = require("./EncryptionHandler")

app.use(cors())
app.use(express.json());
var router = express.Router();

const mysql = require('mysql')
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'PasswordManager'
});

app.post("/post", (req, res) => {
  console.log("Connesso a React");
  res.redirect("/");
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

app.post('/decryptpassword', (req, res) => {
  res.send(decrypt(req.body))
});

// Mostra il Messaggio che il Server è Attivo su una specifica Porta
app.listen(PORT, () => console.log(`In ascolto sulla Porta ${PORT}`));

// crea un Percorso GET
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});