-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 05-Jul-2020 às 23:21
-- Versão do servidor: 10.3.16-MariaDB
-- versão do PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `id13831779_phonegap`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `publicacoes`
--

CREATE TABLE `publicacoes` (
  `cod_pub` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `local` varchar(100) DEFAULT NULL,
  `editora_ano` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `publicacoes`
--

INSERT INTO `publicacoes` (`cod_pub`, `id_user`, `titulo`, `local`, `editora_ano`) VALUES
(1, 1, 'OS fubocas do lado', 'uepa xx', 'nunca nem vi'),
(2, 5, 'Programando com Phonegap e php', 'São Paulo', 'Editora Vozes 2018'),
(3, 1, 'Rio de Mineração de dados', 'Rio de Janeiro', 'Editora McGraw hill 2016'),
(4, 5, 'A volta dos que não foram', 'São Paulo', 'Editora que edita 2019'),
(5, 2, 'A volta dos que não foram', 'São Paulo', 'Editora que edita 2019'),
(6, 2, 'Rio de Mineração de dados', 'Rio de Janeiro', 'Editora McGraw hill 2016'),
(10, 52, 'Código Limpo: Habilidades Práticas do Agile Software', 'Rio de Janeiro', '8 setembro 2009'),
(13, 52, 'emerson dev', 'Web', 'ddsds'),
(14, 52, 'emerson dev 2', 'Web mobile', '2020'),
(15, 54, 'emerson dev 2', 'Web mobile', '2020'),
(16, 54, 'emerson dev 2', 'Web mobile', '2020');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `cod` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(15) NOT NULL,
  `perfil` varchar(60) DEFAULT NULL,
  `outros_autores` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`cod`, `nome`, `email`, `senha`, `perfil`, `outros_autores`) VALUES
(1, 'Yuri Ribeiro', 'tads@uepa.br', '123', 'perfil5.jpg', 'Jairo Fadul'),
(2, 'Eng produção', 'ep@uepa.br', '321', 'perfil4.jpg', 'Anderson Costa'),
(5, 'Emerson Gomez', 'emersongr7@gmail.com', '123', 'perfil-redes-sociais.jpg', 'Guti Guti'),
(52, 'Emerson Gomes', 'emerson.dev.fullstaks@gmail.com', '123', 'perfil-redes-sociais.jpg', ''),
(53, 'Emerson Gomes', 'emerson.dev@gmail.com', '123', 'asfasf', 'sdfsfsfs'),
(54, 'Emerson ', 'emerson@gmail.com', '123', 'asfasfhhhhg', 'sdfsfsfshh');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `publicacoes`
--
ALTER TABLE `publicacoes`
  ADD PRIMARY KEY (`cod_pub`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`cod`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `publicacoes`
--
ALTER TABLE `publicacoes`
  MODIFY `cod_pub` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `cod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
