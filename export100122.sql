-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: devis
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.21.10.1

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
-- Table structure for table `categories_devis_provider`
--

DROP TABLE IF EXISTS `categories_devis_provider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories_devis_provider` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` int NOT NULL,
  `position` int NOT NULL,
  `alias` varchar(255) NOT NULL,
  `parent` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `pages_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categories_pages_id_idx` (`pages_id`),
  CONSTRAINT `categories_devis_provider_pages_id` FOREIGN KEY (`pages_id`) REFERENCES `pages` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_devis_provider`
--

LOCK TABLES `categories_devis_provider` WRITE;
/*!40000 ALTER TABLE `categories_devis_provider` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories_devis_provider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conditions`
--

DROP TABLE IF EXISTS `conditions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conditions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text_category` varchar(45) NOT NULL,
  `text` varchar(255) NOT NULL,
  `position` int NOT NULL,
  `visible` int NOT NULL,
  `pages_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `conditions_pages_id_idx` (`pages_id`),
  CONSTRAINT `conditions_pages_id` FOREIGN KEY (`pages_id`) REFERENCES `pages` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conditions`
--

LOCK TABLES `conditions` WRITE;
/*!40000 ALTER TABLE `conditions` DISABLE KEYS */;
/*!40000 ALTER TABLE `conditions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text_category` varchar(45) NOT NULL,
  `text` varchar(255) NOT NULL,
  `position` int NOT NULL,
  `visible` int NOT NULL,
  `pages_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `contact_pages_id_idx` (`pages_id`),
  CONSTRAINT `contact_pages_id` FOREIGN KEY (`pages_id`) REFERENCES `pages` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `devis`
--

DROP TABLE IF EXISTS `devis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `devis` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `category_id` int NOT NULL,
  `status` int NOT NULL,
  `type` int NOT NULL,
  `goal` int NOT NULL,
  `objective` int NOT NULL,
  `details` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_devis_user1_idx` (`user_id`),
  KEY `fk_asked_devis_category_idx` (`category_id`),
  CONSTRAINT `fk_asked_devis_category` FOREIGN KEY (`category_id`) REFERENCES `categories_devis_provider` (`id`),
  CONSTRAINT `fk_asked_devis_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `devis`
--

LOCK TABLES `devis` WRITE;
/*!40000 ALTER TABLE `devis` DISABLE KEYS */;
/*!40000 ALTER TABLE `devis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faq` (
  `id` int NOT NULL AUTO_INCREMENT,
  `position` int NOT NULL,
  `visible` int NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL,
  `pages_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `faq_pages_id_idx` (`pages_id`),
  CONSTRAINT `faq_pages_id` FOREIGN KEY (`pages_id`) REFERENCES `pages` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faq`
--

LOCK TABLES `faq` WRITE;
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `footer`
--

DROP TABLE IF EXISTS `footer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `footer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(10) NOT NULL,
  `visible` int NOT NULL,
  `text` varchar(45) NOT NULL,
  `pages_id` int DEFAULT NULL,
  `position` int NOT NULL,
  `section` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pages_id_idx` (`pages_id`),
  CONSTRAINT `footer_pages_id` FOREIGN KEY (`pages_id`) REFERENCES `pages` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `footer`
--

LOCK TABLES `footer` WRITE;
/*!40000 ALTER TABLE `footer` DISABLE KEYS */;
INSERT INTO `footer` VALUES (1,'titre',1,'Comment ça marche ?',NULL,1,'list1'),(2,'titre',1,'Menu',NULL,2,'list2'),(3,'lien',1,'Mode d\'emploi',1,1,'list1'),(4,'lien',1,'Foire aux questions',8,2,'list1'),(5,'lien',0,'FAQ',8,2,'list1'),(6,'lien',1,'Conditions d\'utilisations',7,3,'list1'),(7,'lien',1,'Mentions Légales',6,4,'list1'),(8,'lien',1,'Accueil',1,1,'list2'),(9,'lien',0,'Homepage',1,1,'list2'),(10,'lien',1,'Demander un devis',3,2,'list2'),(11,'lien',1,'Les plus demandés',5,3,'list2');
/*!40000 ALTER TABLE `footer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formulaire_devis`
--

DROP TABLE IF EXISTS `formulaire_devis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formulaire_devis` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `type_question` varchar(45) NOT NULL,
  `question` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `formulaire_devis_category_id_idx` (`category_id`),
  CONSTRAINT `formulaire_devis_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories_devis_provider` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formulaire_devis`
--

LOCK TABLES `formulaire_devis` WRITE;
/*!40000 ALTER TABLE `formulaire_devis` DISABLE KEYS */;
/*!40000 ALTER TABLE `formulaire_devis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formulaire_join_answer`
--

DROP TABLE IF EXISTS `formulaire_join_answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formulaire_join_answer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `formulaire_id` int NOT NULL,
  `answer_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_formulaire_join_answer_1_idx` (`formulaire_id`),
  KEY `fk_formulaire_join_answer_2_idx` (`answer_id`),
  CONSTRAINT `fk_formulaire_join_answer_1` FOREIGN KEY (`formulaire_id`) REFERENCES `formulaire_devis` (`id`),
  CONSTRAINT `fk_formulaire_join_answer_2` FOREIGN KEY (`answer_id`) REFERENCES `formulaire_possible_answer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formulaire_join_answer`
--

LOCK TABLES `formulaire_join_answer` WRITE;
/*!40000 ALTER TABLE `formulaire_join_answer` DISABLE KEYS */;
/*!40000 ALTER TABLE `formulaire_join_answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formulaire_possible_answer`
--

DROP TABLE IF EXISTS `formulaire_possible_answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formulaire_possible_answer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `answer` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formulaire_possible_answer`
--

LOCK TABLES `formulaire_possible_answer` WRITE;
/*!40000 ALTER TABLE `formulaire_possible_answer` DISABLE KEYS */;
/*!40000 ALTER TABLE `formulaire_possible_answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_devis`
--

DROP TABLE IF EXISTS `home_devis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_devis` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text_category` varchar(45) NOT NULL,
  `text` varchar(255) NOT NULL,
  `position` int NOT NULL,
  `visible` int NOT NULL,
  `page_section` varchar(45) NOT NULL,
  `pages_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `home_devis_pages_id_idx` (`pages_id`),
  CONSTRAINT `home_devis_pages_id` FOREIGN KEY (`pages_id`) REFERENCES `pages` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_devis`
--

LOCK TABLES `home_devis` WRITE;
/*!40000 ALTER TABLE `home_devis` DISABLE KEYS */;
INSERT INTO `home_devis` VALUES (1,'title','Pour faire votre demande, sélectionnez une des catégories ci-dessous',1,1,'title',NULL),(2,'button','Rechercher',1,1,'button',NULL),(3,'title','Besoin de faire appel à un artisan ?',1,1,'right card',NULL),(4,'title','Devis67 est la solution',1,1,'right_card',NULL),(5,'title','Comment est ce que ça fonctionne',1,1,'right_card',NULL),(6,'notice','Faites votre demande de devis.',1,1,'right_card',NULL),(7,'notice','Recevez <b>gratuitement</b> des devis sur mesures.',2,1,'right_card',NULL),(8,'notice','Comparez et sélectionnez l\'artisan de votre choix.',3,1,'right_card',NULL),(9,'notice','Choisissez le devis qui vous convient',3,0,'right_card',NULL),(10,'banniere','Simple + Rapide + Gratuit = Satisfaction Garantie !',1,1,'banniere',NULL),(11,'banniere','Simple, Gratuit et Facile: Satisfaction garantie',1,0,'banniere',NULL),(12,'title','Quelques Témoignages',1,1,'temoignage',NULL),(13,'text','Bon service, et gratuit en plus. Bien',1,1,'temoignages',NULL),(14,'text','Facile d\'utilisation et rapide.',2,1,'temoignages',NULL),(15,'text','J\'ai obtenu 4 devis pour la rénovation de mon toit. Cool',3,1,'temoignages',NULL),(16,'person',' Boubakira H. 67800 Hoenheim ',1,1,'temoignages',NULL),(17,'person','Antoine M. 67800 Hoenheim ',2,1,'temoignages',NULL),(18,'person','Etienne, Vitry',3,0,'temoignages',NULL);
/*!40000 ALTER TABLE `home_devis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `legal`
--

DROP TABLE IF EXISTS `legal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `legal` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text_category` varchar(45) NOT NULL,
  `position` int NOT NULL,
  `visible` int NOT NULL,
  `text` varchar(255) NOT NULL,
  `pages_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `legal_pages_id_idx` (`pages_id`),
  CONSTRAINT `legal_pages_id` FOREIGN KEY (`pages_id`) REFERENCES `pages` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `legal`
--

LOCK TABLES `legal` WRITE;
/*!40000 ALTER TABLE `legal` DISABLE KEYS */;
/*!40000 ALTER TABLE `legal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subject` varchar(45) NOT NULL,
  `text` varchar(1000) NOT NULL,
  `created_at` datetime NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `message_user_id_idx` (`user_id`),
  CONSTRAINT `message_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `navbar`
--

DROP TABLE IF EXISTS `navbar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `navbar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `position` int NOT NULL,
  `text` varchar(45) NOT NULL,
  `visible` int NOT NULL,
  `pages_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pages_id_idx` (`pages_id`),
  CONSTRAINT `navbar_pages_id` FOREIGN KEY (`pages_id`) REFERENCES `pages` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `navbar`
--

LOCK TABLES `navbar` WRITE;
/*!40000 ALTER TABLE `navbar` DISABLE KEYS */;
INSERT INTO `navbar` VALUES (1,1,'Accueil',1,1),(2,2,'Demander un Devis',1,2),(3,3,'Mode d\'emploi',1,9),(4,4,'Besoin d\'aide?',1,4),(5,3,'Utilisation',0,9);
/*!40000 ALTER TABLE `navbar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notice`
--

DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text_category` varchar(45) NOT NULL,
  `text` varchar(255) NOT NULL,
  `position` int NOT NULL,
  `visible` int NOT NULL,
  `pages_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notice_pages_id_idx` (`pages_id`),
  CONSTRAINT `notice_pages_id` FOREIGN KEY (`pages_id`) REFERENCES `pages` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notice`
--

LOCK TABLES `notice` WRITE;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pages`
--

DROP TABLE IF EXISTS `pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` int NOT NULL,
  `url` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `keywords` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pages`
--

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
INSERT INTO `pages` VALUES (1,1,'/','Devis67.fr | Trouvez l&#39;artisan dont vous avez besoin près de chez vous au meilleur prix','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(2,1,'/contact','Devis67.fr | Vous avez des questions ? Contactez-nous','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(3,1,'/devis','Devis67.fr | Demander un devis','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(4,1,'/aide','Devis67.fr | Section Aide, Comment trouver les meilleurs devis d&#39;artisans dans votre région','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(5,1,'/top-devis','Devis67.fr | Le top des devis demandés par les utilisateurs','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(6,1,'/aide/mentions-legales','Devis67.fr | Mentions Légales','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(7,1,'/aide/conditions-utilisations','Devis67.fr | Nos conditions d&#39;utilisations','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(8,1,'/aide/foire-aux-questions','Devis67.fr | La foire aux questions','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(9,1,'/aide/mode-emploi','Devis67.fr | Le mode d&#39;emploi','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(10,1,'/devis/renovation-interieure','Devis67.fr | Devis Rénovation | Devis travaux Rénovation en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(11,1,'/devis/facade-ravalement-enduit','Devis67.fr | Devis Ravalement de Façade, Crépi | Devis travaux Ravalement de Façade, Enduit et Crépis en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(12,1,'/devis/plafond-cloison-platre','Devis67.fr | Devis Platrerie | Devis travaux Platrerie, Plafond et Cloisons en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(13,1,'/devis/maconnerie-demolition','Devis67.fr | Devis Maçonnerie, Démolition | Devis travaux Maçonnerie et Démolition en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(14,1,'/devis/amenagement-interieur','Devis67.fr | Devis Aménagement des Combles | Devis travaux Aménagement des Combles en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(15,1,'/devis/isolation-thermique-et-acoustique','Devis67.fr | Devis Isolation Extérieur et Intérieur | Devis travaux Isolation Extérieure et Intérieure en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(16,1,'/devis/peinture-tapisserie','Devis67.fr | Devis Peinture | Devis travaux Peinture et Tapisserie en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(17,1,'/devis/fenetres','Devis67.fr | Devis Fenêtres | Devis travaux Fenêtres en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(18,1,'/devis/construction-extension','Devis67.fr | Devis Construction, Extension| Devis travaux Construction et Extension en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(19,1,'/devis/chauffage-chaudiere','Devis67.fr | Devis Chauffage, Chaudière| Devis travaux Chauffage et Chaudière en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(20,1,'/devis/menuiseries','Devis67.fr | Devis Menuiseries | Devis travaux Menuiseries en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(21,1,'/devis/toiture-charpente-couverture','Devis67.fr | Devis Toiture, Charpente, Couverture | Devis travaux Toiture, Charpente et Couverture en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(22,1,'/devis/climatisation-ventilation','Devis67.fr | Devis Climatisation, Ventilation| Devis travaux Climatisation et Ventilation en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(23,1,'/devis/electricite-courant-faible','Devis67.fr | Devis Electricité, Courant faible | Devis travaux Electricite et Courant Faible en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(24,1,'/devis/architecture-expertise','Devis67.fr | Devis Architecture, Expertise| Devis travaux Architecture et Expertise en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(25,1,'/devis/salle-de-bains-wc-spa','Devis67.fr | Devis Salle de bains, WC, SPA | Devis travaux Salle de Bain, WC et SPA en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(26,1,'/devis/cuisine','Devis67.fr | Devis Cuisine | Devis travaux Cuisine en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(27,1,'/devis/plomberie','Devis67.fr | Devis Plomberie | Devis travaux Plomberie en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(28,1,'/devis/sols-interieurs','Devis67.fr | Devis Sols intérieurs | Devis travaux Sols Intérieurs en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(29,1,'/devis/sols-exterieurs','Devis67.fr | Devis Sols extérieurs | Devis travaux Sols Extérieurs en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(30,1,'/devis/piscine-abri-piscine','Devis67.fr | Devis Piscine, Abris piscine | Devis travaux Piscine et Abri de Piscine en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(31,1,'/devis/assainissement-terrassement','Devis67.fr | Devis Assainissement, Terrassement| Devis travaux Assainissement et Terrassement en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(32,1,'/devis/veranda-pergola-verriere','Devis67.fr | Devis Véranda, Pergola, Verrière | Devis travaux Veranda, Pergola et Verrières en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(33,1,'/devis/diagnostics-traitements','Devis67.fr | Devis Diagnostics, Traitements | Devis travaux Diagnostics et Traitements en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(34,1,'/devis/jardin-cloture-portail','Devis67.fr | Devis Jardin, Clôture, Portail | Devis travaux Jardin, Clôture et Protail en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(35,1,'/devis/escalier-garde-corps','Devis67.fr | Devis Escalier, Garde corps | Devis travaux Escalier et Garde Corps en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(36,1,'/devis/cheminee-et-accessoires','Devis67.fr | Devis Cheminée et accessoires| Devis travaux Cheminées et Accessoires en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur'),(37,1,'/devis/devis-divers','Devis67.fr | Devis divers | Devis travaux Divers en ligne à Strasbourg et alentours','Obtenez des devis gratuitement de la part de professionnels bas-rhinois pour les travaux que vous souhaitez engager chez vous.','devis, gratuit, bas-rhin, 67, artisan, entreprise, travaux, renovation, amenagement, batiment, appartement, maison, interieur, exterieur');
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pages_content`
--

DROP TABLE IF EXISTS `pages_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pages_content` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page_name` varchar(45) NOT NULL,
  `visible` int NOT NULL,
  `page_section` varchar(45) NOT NULL,
  `text_type` varchar(45) NOT NULL,
  `position` int NOT NULL,
  `text` varchar(1000) NOT NULL,
  `pages_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_content_pages_id_idx` (`pages_id`),
  CONSTRAINT `fk_content_pages_id` FOREIGN KEY (`pages_id`) REFERENCES `pages` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pages_content`
--

LOCK TABLES `pages_content` WRITE;
/*!40000 ALTER TABLE `pages_content` DISABLE KEYS */;
INSERT INTO `pages_content` VALUES (1,'conditions',1,'title','title',1,'Condition d\'utilisations',NULL),(2,'conditions',1,'title','subtitle',1,'Les conditions d\'utilisations qui régissent Devis67',NULL),(3,'conditions',0,'title','subtitle',0,'Nos conditions d\'utilisations',NULL),(4,'conditions',1,'chapterTitle','title',1,'Définitions',NULL),(5,'conditions',1,'text','text',2,'<b>Les utilisateurs</b>: particuliers, sociétés, artisans, commerçants, architectes, syndic de copropriété, collectivités locales, administrations qui recherchent un ou plusieurs prestataires pour faire réaliser des prestations de services (travaux de construction, rénovation, aménagement, décoration, etc.).',NULL),(6,'conditions',1,'text','text',3,'<b>Les prestataires</b>: tout professionnel pouvant répondre à une demande de devis émise par un utilisateur.',NULL),(7,'conditions',1,'chapterTitle','title',4,'Description du service',NULL),(8,'conditions',1,'text','text',5,'Le site devis67 propose un service de mise en relation clients/prestataires. <br> Pour être mis en relation gratuitement avec un ou plusieurs prestataires, l\'utilisateur doit remplir le formulaire de demande de devis correspondant aux prestations qu\'il souhaite faire réaliser. <br> Les prestataires intéressés par une demande de devis se mettent ensuite directement en contact avec le client pour lui établir son devis et, le cas échéant, réaliser la ou les prestations demandées. <br> Le site devis67 ne permet pas d\'obtenir un devis automatiquement par email. Les devis sont réalisés par des professionnels bas-rhinois. Dans la majorité des cas, un contact téléphonique et physique est nécessaire entre l\'utilisateur et le prestataire afin que ce dernier puisse établir un devis précis.',NULL);
/*!40000 ALTER TABLE `pages_content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provider`
--

DROP TABLE IF EXISTS `provider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provider` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` int NOT NULL,
  `type` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `address` varchar(45) NOT NULL,
  `phone` int DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `zipcode` int NOT NULL,
  `city` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provider`
--

LOCK TABLES `provider` WRITE;
/*!40000 ALTER TABLE `provider` DISABLE KEYS */;
/*!40000 ALTER TABLE `provider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provider_join_category`
--

DROP TABLE IF EXISTS `provider_join_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provider_join_category` (
  `id` int NOT NULL,
  `provider_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_provider_has_category_provider1_idx` (`provider_id`),
  KEY `fk_provider_category_idx` (`category_id`),
  CONSTRAINT `fk_category_provider` FOREIGN KEY (`provider_id`) REFERENCES `provider` (`id`),
  CONSTRAINT `fk_provider_category` FOREIGN KEY (`category_id`) REFERENCES `categories_devis_provider` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provider_join_category`
--

LOCK TABLES `provider_join_category` WRITE;
/*!40000 ALTER TABLE `provider_join_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `provider_join_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions_anwers`
--

DROP TABLE IF EXISTS `questions_anwers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions_anwers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `questions` varchar(100) NOT NULL,
  `answers` varchar(255) NOT NULL,
  `devis_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `question_devis_id_idx` (`devis_id`),
  CONSTRAINT `question_devis_id` FOREIGN KEY (`devis_id`) REFERENCES `devis` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions_anwers`
--

LOCK TABLES `questions_anwers` WRITE;
/*!40000 ALTER TABLE `questions_anwers` DISABLE KEYS */;
/*!40000 ALTER TABLE `questions_anwers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `top_ten`
--

DROP TABLE IF EXISTS `top_ten`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `top_ten` (
  `id` int NOT NULL AUTO_INCREMENT,
  `position` int NOT NULL,
  `visible` int NOT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `top_ten_category_id_idx` (`category_id`),
  CONSTRAINT `top_ten_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories_devis_provider` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `top_ten`
--

LOCK TABLES `top_ten` WRITE;
/*!40000 ALTER TABLE `top_ten` DISABLE KEYS */;
/*!40000 ALTER TABLE `top_ten` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `mail` varchar(60) NOT NULL,
  `phone` int DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `postal-code` int NOT NULL,
  `city` varchar(100) NOT NULL,
  `hashedpassword` varchar(45) NOT NULL,
  `status` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-10 11:29:04
