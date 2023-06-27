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
-- Table structure for table `up_permissions`
--

DROP TABLE IF EXISTS `up_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `up_permissions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `action` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int unsigned DEFAULT NULL,
  `updated_by_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `up_permissions_created_by_id_fk` (`created_by_id`),
  KEY `up_permissions_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `up_permissions_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `up_permissions_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `up_permissions`
--

LOCK TABLES `up_permissions` WRITE;
/*!40000 ALTER TABLE `up_permissions` DISABLE KEYS */;
INSERT INTO `up_permissions` VALUES (1,'plugin::users-permissions.user.me','2023-06-23 08:00:11.881000','2023-06-23 08:00:11.881000',NULL,NULL),(2,'plugin::users-permissions.auth.changePassword','2023-06-23 08:00:11.881000','2023-06-23 08:00:11.881000',NULL,NULL),(3,'plugin::users-permissions.auth.callback','2023-06-23 08:00:11.956000','2023-06-23 08:00:11.956000',NULL,NULL),(4,'plugin::users-permissions.auth.connect','2023-06-23 08:00:11.956000','2023-06-23 08:00:11.956000',NULL,NULL),(5,'plugin::users-permissions.auth.forgotPassword','2023-06-23 08:00:11.956000','2023-06-23 08:00:11.956000',NULL,NULL),(6,'plugin::users-permissions.auth.resetPassword','2023-06-23 08:00:11.956000','2023-06-23 08:00:11.956000',NULL,NULL),(7,'plugin::users-permissions.auth.register','2023-06-23 08:00:11.956000','2023-06-23 08:00:11.956000',NULL,NULL),(8,'plugin::users-permissions.auth.emailConfirmation','2023-06-23 08:00:11.956000','2023-06-23 08:00:11.956000',NULL,NULL),(9,'plugin::users-permissions.auth.sendEmailConfirmation','2023-06-23 08:00:11.956000','2023-06-23 08:00:11.956000',NULL,NULL),(10,'api::banner-topo.banner-topo.find','2023-06-23 10:31:05.717000','2023-06-23 10:31:05.717000',NULL,NULL),(11,'api::banner-topo.banner-topo.findOne','2023-06-23 10:31:05.718000','2023-06-23 10:31:05.718000',NULL,NULL),(12,'api::empreendimento.empreendimento.find','2023-06-23 10:31:05.718000','2023-06-23 10:31:05.718000',NULL,NULL),(13,'api::empreendimento.empreendimento.findOne','2023-06-23 10:31:05.718000','2023-06-23 10:31:05.718000',NULL,NULL),(14,'api::infraesctrutura.infraesctrutura.find','2023-06-23 10:31:05.718000','2023-06-23 10:31:05.718000',NULL,NULL),(15,'api::infraesctrutura.infraesctrutura.findOne','2023-06-23 10:31:05.718000','2023-06-23 10:31:05.718000',NULL,NULL),(16,'api::banner-sobre.banner-sobre.find','2023-06-23 14:20:29.990000','2023-06-23 14:20:29.990000',NULL,NULL),(17,'api::banner-sobre.banner-sobre.findOne','2023-06-23 14:20:29.990000','2023-06-23 14:20:29.990000',NULL,NULL),(18,'api::nosso-numero.nosso-numero.find','2023-06-23 21:48:51.542000','2023-06-23 21:48:51.542000',NULL,NULL),(19,'api::nosso-numero.nosso-numero.findOne','2023-06-23 21:48:51.543000','2023-06-23 21:48:51.543000',NULL,NULL),(20,'api::sobre-content.sobre-content.find','2023-06-24 11:06:29.034000','2023-06-24 11:06:29.034000',NULL,NULL),(21,'api::sobre-content.sobre-content.findOne','2023-06-24 11:06:29.034000','2023-06-24 11:06:29.034000',NULL,NULL),(22,'api::banner-home-content.banner-home-content.find','2023-06-24 11:08:48.163000','2023-06-24 11:08:48.163000',NULL,NULL),(23,'api::banner-home-content.banner-home-content.findOne','2023-06-24 11:08:48.163000','2023-06-24 11:08:48.163000',NULL,NULL),(24,'api::banner-home-content.banner-home-content.find','2023-06-24 11:20:30.534000','2023-06-24 11:20:30.534000',NULL,NULL),(25,'api::banner-home-content.banner-home-content.findOne','2023-06-24 11:20:30.534000','2023-06-24 11:20:30.534000',NULL,NULL),(26,'api::banner-home-content.banner-home-content.create','2023-06-24 11:20:30.534000','2023-06-24 11:20:30.534000',NULL,NULL),(27,'api::banner-home-content.banner-home-content.update','2023-06-24 11:20:30.534000','2023-06-24 11:20:30.534000',NULL,NULL),(28,'api::banner-home-content.banner-home-content.delete','2023-06-24 11:20:30.534000','2023-06-24 11:20:30.534000',NULL,NULL),(29,'api::banner-sobre.banner-sobre.find','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(30,'api::banner-sobre.banner-sobre.findOne','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(31,'api::banner-sobre.banner-sobre.create','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(32,'api::banner-sobre.banner-sobre.update','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(33,'api::banner-sobre.banner-sobre.delete','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(34,'api::banner-topo.banner-topo.find','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(35,'api::banner-topo.banner-topo.findOne','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(36,'api::banner-topo.banner-topo.create','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(37,'api::banner-topo.banner-topo.update','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(38,'api::banner-topo.banner-topo.delete','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(39,'api::empreendimento.empreendimento.find','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(40,'api::empreendimento.empreendimento.findOne','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(41,'api::empreendimento.empreendimento.create','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(42,'api::empreendimento.empreendimento.update','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(43,'api::empreendimento.empreendimento.delete','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(44,'api::infraesctrutura.infraesctrutura.find','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(45,'api::infraesctrutura.infraesctrutura.findOne','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(46,'api::infraesctrutura.infraesctrutura.create','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(47,'api::infraesctrutura.infraesctrutura.update','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(48,'api::infraesctrutura.infraesctrutura.delete','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(49,'api::nosso-numero.nosso-numero.find','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(50,'api::nosso-numero.nosso-numero.findOne','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(51,'api::nosso-numero.nosso-numero.create','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(52,'api::nosso-numero.nosso-numero.update','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(53,'api::nosso-numero.nosso-numero.delete','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(54,'api::sobre-content.sobre-content.find','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(55,'api::sobre-content.sobre-content.findOne','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(56,'api::sobre-content.sobre-content.create','2023-06-24 11:21:32.958000','2023-06-24 11:21:32.958000',NULL,NULL),(57,'api::sobre-content.sobre-content.update','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(58,'api::sobre-content.sobre-content.delete','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(59,'plugin::content-type-builder.components.getComponents','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(60,'plugin::content-type-builder.components.getComponent','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(61,'plugin::content-type-builder.content-types.getContentTypes','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(62,'plugin::content-type-builder.content-types.getContentType','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(63,'plugin::email.email.send','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(64,'plugin::upload.content-api.find','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(65,'plugin::upload.content-api.findOne','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(66,'plugin::upload.content-api.destroy','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(67,'plugin::upload.content-api.upload','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(68,'plugin::users-permissions.auth.callback','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(69,'plugin::users-permissions.auth.resetPassword','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(70,'plugin::users-permissions.auth.connect','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(71,'plugin::users-permissions.auth.forgotPassword','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(72,'plugin::users-permissions.auth.register','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(73,'plugin::users-permissions.auth.emailConfirmation','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(74,'plugin::users-permissions.auth.sendEmailConfirmation','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(75,'plugin::users-permissions.user.create','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(76,'plugin::users-permissions.user.update','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(77,'plugin::users-permissions.user.find','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(78,'plugin::users-permissions.user.findOne','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(79,'plugin::users-permissions.user.count','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(80,'plugin::users-permissions.user.destroy','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(81,'plugin::users-permissions.role.createRole','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(82,'plugin::users-permissions.role.findOne','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(83,'plugin::users-permissions.role.find','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(84,'plugin::users-permissions.role.updateRole','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(85,'plugin::users-permissions.role.deleteRole','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(86,'plugin::users-permissions.permissions.getPermissions','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(87,'plugin::i18n.locales.listLocales','2023-06-24 11:21:32.959000','2023-06-24 11:21:32.959000',NULL,NULL),(88,'api::banner-sobre-content.banner-sobre-content.find','2023-06-27 14:48:15.242000','2023-06-27 14:48:15.242000',NULL,NULL),(89,'api::banner-sobre-content.banner-sobre-content.findOne','2023-06-27 14:48:15.242000','2023-06-27 14:48:15.242000',NULL,NULL);
/*!40000 ALTER TABLE `up_permissions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-27 18:03:16
