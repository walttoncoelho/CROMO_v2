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
-- Table structure for table `files_folder_links`
--

DROP TABLE IF EXISTS `files_folder_links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files_folder_links` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `file_id` int unsigned DEFAULT NULL,
  `folder_id` int unsigned DEFAULT NULL,
  `file_order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `files_folder_links_unique` (`file_id`,`folder_id`),
  KEY `files_folder_links_fk` (`file_id`),
  KEY `files_folder_links_inv_fk` (`folder_id`),
  KEY `files_folder_links_order_inv_fk` (`file_order`),
  CONSTRAINT `files_folder_links_fk` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE CASCADE,
  CONSTRAINT `files_folder_links_inv_fk` FOREIGN KEY (`folder_id`) REFERENCES `upload_folders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files_folder_links`
--

LOCK TABLES `files_folder_links` WRITE;
/*!40000 ALTER TABLE `files_folder_links` DISABLE KEYS */;
INSERT INTO `files_folder_links` VALUES (1,6,1,1),(2,7,1,2),(6,8,1,3),(7,9,1,4),(12,11,2,2),(13,12,2,3),(14,13,2,4),(15,15,2,5),(16,14,2,5),(17,16,2,6),(18,17,2,7),(19,18,2,8),(20,19,2,9),(21,20,2,10),(22,21,2,11),(23,5,3,1),(24,4,3,2),(25,3,3,3),(26,2,3,4),(27,1,3,5),(29,22,1,5),(30,23,1,6),(31,24,2,12),(32,25,2,13),(33,26,4,1),(34,28,4,2),(35,27,4,2),(36,29,4,3),(37,30,4,3),(38,31,4,4),(40,33,4,5),(41,34,5,1),(42,35,5,2),(43,36,5,3),(44,37,5,3),(45,38,5,4),(46,39,5,5),(47,40,5,6),(48,41,5,7),(49,42,5,8),(50,43,5,9),(51,44,5,10),(52,45,5,11),(53,46,5,12),(54,47,5,12),(55,48,5,13),(56,49,5,14),(57,50,5,15),(58,51,6,1),(59,52,6,2),(60,53,6,3),(61,54,6,4),(62,55,6,5),(63,56,6,6),(64,57,6,7),(65,58,6,8),(66,59,6,9),(67,60,7,1),(68,61,7,2),(69,62,7,3),(70,63,7,4),(71,64,7,5),(72,65,7,6),(73,66,7,7),(74,67,7,8),(75,68,7,9),(76,69,7,10),(77,70,7,11),(78,71,7,12),(79,72,7,13),(80,73,7,14),(81,74,7,15),(82,75,7,16),(83,76,7,17),(84,77,7,17),(85,78,7,18),(86,79,7,19),(87,80,7,20),(88,81,7,21),(89,82,7,22),(90,83,7,22),(91,84,7,23),(92,85,7,24),(93,86,7,24),(94,87,7,25),(95,88,7,26),(96,89,7,27),(97,90,7,28),(98,91,7,29),(99,92,7,30),(100,93,7,31),(101,94,7,32),(102,95,7,33),(103,96,7,34),(104,97,7,35),(105,98,7,36),(106,99,7,37),(107,100,7,38),(108,101,7,38),(113,103,8,1),(114,104,8,2);
/*!40000 ALTER TABLE `files_folder_links` ENABLE KEYS */;
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
