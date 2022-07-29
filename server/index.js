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

db.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

app.get("/post", (req, res) => { //Test
  console.log("Connesso a React");
  res.redirect("/");
});

app.post("/addpassword", (req, res) => { //Richiesta POST, dovrò fare una richiesta API
  const {name, web, mail, user, password} = req.body;
  const hashedPassword = encrypt(password);

  db.query("INSERT INTO Passwords (Name, Web, Mail, User, Password, IV) VALUES (?, ?, ?, ?, ?, ?)", [name, web, mail, user, hashedPassword.password, hashedPassword.iv], (err, result) => { //Faccio la Insert e mi salvo eventuali errori in "err"
    if (err) {
      console.log(err) //Se ci sono errori li mostro in console
    } else {
      res.send("Completato con Successo") //Se NON ci sono errori mando una stringa di Success
    }
  })

});

app.get(`/search`, (req, res) => {
  //const id = 1;
  db.query(`SELECT * FROM Passwords`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result)
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