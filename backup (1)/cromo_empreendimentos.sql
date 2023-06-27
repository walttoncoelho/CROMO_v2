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
-- Table structure for table `empreendimentos`
--

DROP TABLE IF EXISTS `empreendimentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empreendimentos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `vendido` tinyint(1) DEFAULT NULL,
  `destaque` tinyint(1) DEFAULT NULL,
  `descricao` longtext,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int unsigned DEFAULT NULL,
  `updated_by_id` int unsigned DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `tipo_empreendimento` varchar(255) DEFAULT NULL,
  `quantidade_lote` int DEFAULT NULL,
  `area_lote` decimal(10,2) DEFAULT NULL,
  `status_construcao` varchar(255) DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `empreendimentos_slug_unique` (`slug`),
  KEY `empreendimentos_created_by_id_fk` (`created_by_id`),
  KEY `empreendimentos_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `empreendimentos_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `empreendimentos_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empreendimentos`
--

LOCK TABLES `empreendimentos` WRITE;
/*!40000 ALTER TABLE `empreendimentos` DISABLE KEYS */;
INSERT INTO `empreendimentos` VALUES (2,1,1,'O primeiro loteamento a gente nunca esquece. E o Florença Primeira Etapa marcou o início de uma nova fase da história da Cromo e de Balsas. São 742 lotes de ate 255m², com infraestrutura completa para você construir sua casa ou ponto comercial. As obras estão avançando, com ruas já abertas e recebendo asfalto e perfuração de poços.','2023-06-23 21:17:23.931000','2023-06-27 11:29:03.535000',1,1,'Residencial Florença 1ª Etapa','residencial-florenca-1-etapa','Lotes comerciais & residenciais',742,255.00,'Em construção',-7.517924864411419,-46.04371244738892),(3,1,1,'Depois do sucesso na primeira etapa, o melhor loteamento de Balsas ganhou uma nova etapa, com 355 lotes de até 255m² com a mesma infraestrutura completa da primeira etapa. As primeiras etapas das obras já estão em andamento, com ruas sendo abertas para receber meio-fio e asfalto em breve.','2023-06-25 08:49:54.744000','2023-06-27 11:31:15.511000',1,1,'Residencial Florença 2ª Etapa','residencial-florenca-2-etapa','Lotes comerciais & residenciais',355,255.00,'Em construção',-7.517924864411419,-46.04371244738892),(4,NULL,1,'Entregue em 2016, os Residenciais Veneza I e II são compostos por mil unidades habitacionais do Programa Minha Casa Minha Vida, como parte do Programa Nacional de Habitação Urbana (PNHU) do Governo Federal e construídos em parceria com o Governo do Estado e a Prefeitura Municipal. As casas possuem sala, cozinha, dois quartos, banheiro e área de serviço, em 42,78 m². Há, ainda, unidades com a estrutura adaptada para pessoas com deficiência. Com investimentos no valor de R$ 56,9 milhões, as casas beneficiaram famílias com renda familiar mensal de até R$ 1,6 mil, da região de Balsas.','2023-06-25 09:01:50.098000','2023-06-27 09:09:53.330000',1,1,'Residencial Veneza','residencial-veneza','Lotes comerciais & residenciais',1,42.78,'Obra entregue',NULL,NULL),(5,NULL,0,'A Lavronorte é representante da marca John Deere, a maior fabricante de máquinas agrícolas. Sua sede em Balsas tem 6.067m² de área, construída e reformada pela Cromo Construtora.\n\nEndereço: Av. Gov. Luiz Rocha, Lote 2 - S/N - Setor Industrial Balsas - MA','2023-06-25 09:20:21.719000','2023-06-27 11:30:47.693000',1,1,'Lavronorte','lavronort','Empreendimentos Privados',0,0.00,'Obra entregue',-7.517924864411419,-46.04371244738892),(6,NULL,0,'O prédio da Unibalsas, a faculdade de Balsas, foi construído pela Cromo em 2006. Atualmente, sua estrutura física conta com mais de 9.400 m² de área construída, com salas de aula modernas, laboratórios que fomentam a inovação no contexto de cada curso, possibilitando o alinhamento de recursos tecnológicos à metodologias e práticas que propiciam o protagonismo dos estudantes na aprendizagem. A ampliação da Faculdade está programada em mais de 11.000 m² de novas instalações para absorver outras áreas de graduação pelo acelerado crescimento da região.','2023-06-25 09:29:55.418000','2023-06-27 11:31:31.963000',1,1,'Unibalsas','unibalsas',NULL,0,0.00,'Obra entregue',-7.517924864411419,-46.04371244738892);
/*!40000 ALTER TABLE `empreendimentos` ENABLE KEYS */;
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
