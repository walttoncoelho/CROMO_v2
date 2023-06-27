-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: cromo
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sobre_contents`
--

DROP TABLE IF EXISTS `sobre_contents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sobre_contents` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) DEFAULT NULL,
  `descricao` longtext,
  `subtitulo` varchar(255) DEFAULT NULL,
  `resumo` longtext,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int unsigned DEFAULT NULL,
  `updated_by_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sobre_contents_created_by_id_fk` (`created_by_id`),
  KEY `sobre_contents_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `sobre_contents_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `sobre_contents_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sobre_contents`
--

LOCK TABLES `sobre_contents` WRITE;
/*!40000 ALTER TABLE `sobre_contents` DISABLE KEYS */;
INSERT INTO `sobre_contents` VALUES (1,'Quem somos','A Cromo Construtora é uma empresa do Grupo Honaiser, formado também pelas empresas: Lavronorte e Unibalsas. Atuamos desde 1989 como construtora e nos tornamos incorporadora em [ano], para ajudar ainda mais Balsas (e o Sul do Maranhão) a caminharem rumo a um futuro de oportunidades. Um de nossos primeiros empreendimentos foi o Residencial Veneza, pelo Minha Casa Minha Vida, entregue em 2015. Um marco na história do município. Agora, uma nova etapa está em andamento, na área de Balsas que mais cresce. Com os lançamentos dos Residenciais Florença Primeira e Segunda Etapa, começa um novo bairro na cidade, cheio de sonhos e oportunidades. E, em breve, mais novidades vão surgir, com a qualidade e a confiança que são a marca da Cromo Construtora.','Controle de qualidade','Um dos diferenciais das obras e empreendimentos da Cromo Construtora é o rígido controle de qualidade, dos insumos aos serviços de construção e infraestrutura. Adquirir um produto Cromo é garantia de investimento confiável, rentável e para a vida toda.','2023-06-24 11:05:20.959000','2023-06-24 11:05:20.959000',1,1);
/*!40000 ALTER TABLE `sobre_contents` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-27 18:03:15
