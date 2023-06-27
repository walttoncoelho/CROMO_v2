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
-- Table structure for table `infraesctruturas_empreendimentos_links`
--

DROP TABLE IF EXISTS `infraesctruturas_empreendimentos_links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `infraesctruturas_empreendimentos_links` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `infraesctrutura_id` int unsigned DEFAULT NULL,
  `empreendimento_id` int unsigned DEFAULT NULL,
  `empreendimento_order` double unsigned DEFAULT NULL,
  `infraesctrutura_order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `infraesctruturas_empreendimentos_links_unique` (`infraesctrutura_id`,`empreendimento_id`),
  KEY `infraesctruturas_empreendimentos_links_fk` (`infraesctrutura_id`),
  KEY `infraesctruturas_empreendimentos_links_inv_fk` (`empreendimento_id`),
  KEY `infraesctruturas_empreendimentos_links_order_fk` (`empreendimento_order`),
  KEY `infraesctruturas_empreendimentos_links_order_inv_fk` (`infraesctrutura_order`),
  CONSTRAINT `infraesctruturas_empreendimentos_links_fk` FOREIGN KEY (`infraesctrutura_id`) REFERENCES `infraesctruturas` (`id`) ON DELETE CASCADE,
  CONSTRAINT `infraesctruturas_empreendimentos_links_inv_fk` FOREIGN KEY (`empreendimento_id`) REFERENCES `empreendimentos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `infraesctruturas_empreendimentos_links`
--

LOCK TABLES `infraesctruturas_empreendimentos_links` WRITE;
/*!40000 ALTER TABLE `infraesctruturas_empreendimentos_links` DISABLE KEYS */;
INSERT INTO `infraesctruturas_empreendimentos_links` VALUES (1,5,6,4,2),(2,5,5,3,1),(4,5,3,2,1),(5,5,2,1,1),(6,2,6,4,3),(7,2,5,3,3),(9,2,3,2,4),(10,2,2,1,2),(11,4,6,4,5),(12,4,5,3,5),(14,4,3,2,5),(15,4,2,1,3),(16,3,6,3,1),(17,3,5,2,2),(19,3,3,1,2),(21,1,6,3,4),(22,1,5,2,4),(24,1,3,1,3);
/*!40000 ALTER TABLE `infraesctruturas_empreendimentos_links` ENABLE KEYS */;
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
