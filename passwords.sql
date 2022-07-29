-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Lug 29, 2022 alle 12:23
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
(1, NULL, 'Suca', NULL, 'Scemo', 'c8e39b64dd3e7381ce2e', '?9Sx~??-&?\Z䗊h'),
(2, NULL, 'www.google.com', NULL, 'login', '2fd9b54e23900056', 'S???Fߍ?q#??^??]'),
(3, NULL, 'www.facebook.it', NULL, 'test', '93f0f21041', '?%6)???9i?%?z?'),
(4, 'spotif', 'soppotif.it', 'ciao@spot.it', 'ciao', '635c7d94f8', '???d^~#???E]');

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
