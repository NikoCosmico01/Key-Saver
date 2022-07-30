-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Lug 30, 2022 alle 12:32
-- Versione del server: 10.4.24-MariaDB
-- Versione PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `passwordmanager`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `passwords`
--

CREATE TABLE `passwords` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Web` varchar(45) NOT NULL,
  `Mail` varchar(45) DEFAULT NULL,
  `User` varchar(45) NOT NULL,
  `Password` varchar(225) NOT NULL,
  `IV` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `passwords`
--

INSERT INTO `passwords` (`ID`, `Name`, `Web`, `Mail`, `User`, `Password`, `IV`) VALUES
(7, 'Facebook', 'www.Facebook.It', 'info@pollame.it', 'FacePoll', '3057d507acff31fbdce5b09cd0dd9f20', '9dc712992d10b6e1b36f4daa4f238e02'),
(8, 'Spotify', 'www.spotify.it', 'lecosebelle@gmail.com', 'siamoBelli', '93c4c5a82c8f7d7f40b11a567cc784975aad0ed3f104d533', '2afe16fb7a62d4256111d59884f7eb40'),
(9, 'Google', 'www.google.it', 'sucabliet@gmail.com', 'IBliettosi', '4521f7be5c3ccf3ee47d4f6471330dd6b0c49699', '72a393049ba7631808ced7fa90746aba'),
(10, 'GitHub', 'www.github.com', 'lebellesanterelle@gmail.com', 'VaaDaViaelCiu', '1286892a83f83c58b4', 'f8a4c57f61e77e052ce8262746786caa');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `passwords`
--
ALTER TABLE `passwords`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `passwords`
--
ALTER TABLE `passwords`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
