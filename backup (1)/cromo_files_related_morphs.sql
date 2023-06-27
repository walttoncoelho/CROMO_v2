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
-- Table structure for table `files_related_morphs`
--

DROP TABLE IF EXISTS `files_related_morphs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files_related_morphs` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `file_id` int unsigned DEFAULT NULL,
  `related_id` int unsigned DEFAULT NULL,
  `related_type` varchar(255) DEFAULT NULL,
  `field` varchar(255) DEFAULT NULL,
  `order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `files_related_morphs_fk` (`file_id`),
  KEY `files_related_morphs_order_index` (`order`),
  KEY `files_related_morphs_id_column_index` (`related_id`),
  CONSTRAINT `files_related_morphs_fk` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=445 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files_related_morphs`
--

LOCK TABLES `files_related_morphs` WRITE;
/*!40000 ALTER TABLE `files_related_morphs` DISABLE KEYS */;
INSERT INTO `files_related_morphs` VALUES (7,6,1,'api::banner-topo.banner-topo','banner_1920x744_Desktop',1),(8,7,1,'api::banner-topo.banner-topo','banner_375x512_Mobile',1),(9,6,1,'api::banner-topo.banner-topo','banner_Desktop',1),(13,9,1,'api::banner-sobre.banner-sobre','banner_Desktop',1),(14,8,1,'api::banner-sobre.banner-sobre','banner_mobile',1),(35,6,3,'api::banner-topo.banner-topo','banner_desktop',1),(36,7,3,'api::banner-topo.banner-topo','banner_mobile',1),(37,9,4,'api::banner-sobre.banner-sobre','banner_desktop',1),(38,8,4,'api::banner-sobre.banner-sobre','banner_mobile',1),(42,22,1,'api::banner-home-content.banner-home-content','banner_Desktop',1),(43,23,1,'api::banner-home-content.banner-home-content','banner_Mobile',1),(316,5,5,'api::infraesctrutura.infraesctrutura','imagem',1),(318,2,2,'api::infraesctrutura.infraesctrutura','imagem',1),(319,4,4,'api::infraesctrutura.infraesctrutura','imagem',1),(320,3,3,'api::infraesctrutura.infraesctrutura','imagem',1),(321,1,1,'api::infraesctrutura.infraesctrutura','imagem',1),(326,1,1,'api::infraesctrutura.infraesctrutura','imagem_infra',1),(327,1,1,'api::infraesctrutura.infraesctrutura','Img_infra',1),(328,4,4,'api::infraesctrutura.infraesctrutura','imagem_infra',1),(329,4,4,'api::infraesctrutura.infraesctrutura','Img_infra',1),(330,2,2,'api::infraesctrutura.infraesctrutura','imagem_infra',1),(331,2,2,'api::infraesctrutura.infraesctrutura','Img_infra',1),(332,3,3,'api::infraesctrutura.infraesctrutura','imagem_infra',1),(333,3,3,'api::infraesctrutura.infraesctrutura','Img_infra',1),(334,5,5,'api::infraesctrutura.infraesctrutura','imagem_infra',1),(335,5,5,'api::infraesctrutura.infraesctrutura','Img_infra',1),(348,49,4,'api::empreendimento.empreendimento','capa_home',1),(349,50,4,'api::empreendimento.empreendimento','planta_baixa',1),(350,48,4,'api::empreendimento.empreendimento','galeria_empreendimento',1),(351,47,4,'api::empreendimento.empreendimento','galeria_empreendimento',2),(352,46,4,'api::empreendimento.empreendimento','galeria_empreendimento',3),(353,45,4,'api::empreendimento.empreendimento','galeria_empreendimento',4),(354,44,4,'api::empreendimento.empreendimento','galeria_empreendimento',5),(355,43,4,'api::empreendimento.empreendimento','galeria_empreendimento',6),(356,42,4,'api::empreendimento.empreendimento','galeria_empreendimento',7),(357,41,4,'api::empreendimento.empreendimento','galeria_empreendimento',8),(358,102,4,'api::empreendimento.empreendimento','logo_empreendimento',1),(407,12,2,'api::empreendimento.empreendimento','capa_home',1),(408,11,2,'api::empreendimento.empreendimento','planta_baixa',1),(409,13,2,'api::empreendimento.empreendimento','galeria_empreendimento',1),(410,15,2,'api::empreendimento.empreendimento','galeria_empreendimento',2),(411,14,2,'api::empreendimento.empreendimento','galeria_empreendimento',3),(412,16,2,'api::empreendimento.empreendimento','galeria_empreendimento',4),(413,17,2,'api::empreendimento.empreendimento','galeria_empreendimento',5),(414,18,2,'api::empreendimento.empreendimento','galeria_empreendimento',6),(415,19,2,'api::empreendimento.empreendimento','galeria_empreendimento',7),(416,20,2,'api::empreendimento.empreendimento','galeria_empreendimento',8),(417,21,2,'api::empreendimento.empreendimento','galeria_empreendimento',9),(418,25,2,'api::empreendimento.empreendimento','logo_empreendimento',1),(419,51,5,'api::empreendimento.empreendimento','capa_home',1),(420,59,5,'api::empreendimento.empreendimento','galeria_empreendimento',1),(421,58,5,'api::empreendimento.empreendimento','galeria_empreendimento',2),(422,57,5,'api::empreendimento.empreendimento','galeria_empreendimento',3),(423,56,5,'api::empreendimento.empreendimento','galeria_empreendimento',4),(424,52,5,'api::empreendimento.empreendimento','galeria_empreendimento',5),(425,53,5,'api::empreendimento.empreendimento','galeria_empreendimento',6),(426,54,5,'api::empreendimento.empreendimento','galeria_empreendimento',7),(427,55,5,'api::empreendimento.empreendimento','galeria_empreendimento',8),(428,51,5,'api::empreendimento.empreendimento','galeria_empreendimento',9),(429,102,5,'api::empreendimento.empreendimento','logo_empreendimento',1),(430,31,3,'api::empreendimento.empreendimento','capa_home',1),(431,33,3,'api::empreendimento.empreendimento','planta_baixa',1),(432,31,3,'api::empreendimento.empreendimento','galeria_empreendimento',1),(433,30,3,'api::empreendimento.empreendimento','galeria_empreendimento',2),(434,29,3,'api::empreendimento.empreendimento','galeria_empreendimento',3),(435,27,3,'api::empreendimento.empreendimento','galeria_empreendimento',4),(436,28,3,'api::empreendimento.empreendimento','galeria_empreendimento',5),(437,26,3,'api::empreendimento.empreendimento','logo_empreendimento',1),(438,60,6,'api::empreendimento.empreendimento','capa_home',1),(439,102,6,'api::empreendimento.empreendimento','planta_baixa',1),(440,61,6,'api::empreendimento.empreendimento','galeria_empreendimento',1),(441,60,6,'api::empreendimento.empreendimento','galeria_empreendimento',2),(442,102,6,'api::empreendimento.empreendimento','logo_empreendimento',1),(443,104,1,'api::banner-sobre-content.banner-sobre-content','bannerDesktop',1),(444,103,1,'api::banner-sobre-content.banner-sobre-content','banner_mobile',1);
/*!40000 ALTER TABLE `files_related_morphs` ENABLE KEYS */;
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
