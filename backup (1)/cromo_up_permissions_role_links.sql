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
-- Table structure for table `up_permissions_role_links`
--

DROP TABLE IF EXISTS `up_permissions_role_links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `up_permissions_role_links` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `permission_id` int unsigned DEFAULT NULL,
  `role_id` int unsigned DEFAULT NULL,
  `permission_order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `up_permissions_role_links_unique` (`permission_id`,`role_id`),
  KEY `up_permissions_role_links_fk` (`permission_id`),
  KEY `up_permissions_role_links_inv_fk` (`role_id`),
  KEY `up_permissions_role_links_order_inv_fk` (`permission_order`),
  CONSTRAINT `up_permissions_role_links_fk` FOREIGN KEY (`permission_id`) REFERENCES `up_permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `up_permissions_role_links_inv_fk` FOREIGN KEY (`role_id`) REFERENCES `up_roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `up_permissions_role_links`
--

LOCK TABLES `up_permissions_role_links` WRITE;
/*!40000 ALTER TABLE `up_permissions_role_links` DISABLE KEYS */;
INSERT INTO `up_permissions_role_links` VALUES (1,1,1,1),(2,2,1,1),(3,3,2,1),(4,4,2,1),(5,9,2,1),(6,6,2,1),(7,5,2,1),(8,7,2,1),(9,8,2,1),(10,10,2,2),(11,12,2,2),(12,15,2,2),(13,14,2,2),(14,13,2,2),(15,11,2,2),(16,16,2,3),(17,17,2,3),(18,18,2,4),(19,19,2,4),(20,20,2,5),(21,21,2,5),(22,22,2,6),(23,23,2,6),(24,24,1,2),(25,25,1,2),(26,26,1,3),(27,27,1,3),(28,28,1,4),(29,29,1,5),(30,30,1,5),(31,31,1,6),(32,32,1,6),(33,33,1,7),(34,34,1,7),(35,35,1,8),(36,36,1,8),(37,37,1,9),(38,38,1,9),(39,39,1,10),(40,40,1,10),(41,41,1,11),(42,42,1,11),(43,43,1,12),(44,44,1,12),(45,45,1,13),(46,46,1,13),(47,47,1,14),(48,48,1,14),(49,49,1,15),(50,50,1,15),(51,51,1,16),(52,52,1,16),(53,53,1,17),(54,54,1,17),(55,55,1,18),(56,56,1,18),(57,57,1,19),(58,58,1,19),(59,59,1,20),(60,60,1,20),(61,61,1,21),(62,62,1,21),(63,63,1,22),(64,64,1,22),(65,65,1,23),(66,66,1,23),(67,67,1,24),(68,68,1,24),(69,69,1,25),(70,70,1,25),(71,71,1,26),(72,72,1,26),(73,73,1,27),(74,74,1,27),(75,75,1,28),(76,76,1,28),(77,77,1,29),(78,78,1,29),(79,79,1,30),(80,80,1,30),(81,81,1,31),(82,82,1,31),(83,83,1,32),(84,84,1,32),(85,85,1,33),(86,86,1,33),(87,87,1,34),(88,88,2,7),(89,89,2,7);
/*!40000 ALTER TABLE `up_permissions_role_links` ENABLE KEYS */;
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
