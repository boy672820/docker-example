CREATE TABLE `tasks` (
	`ID` INT(11) NOT NULL AUTO_INCREMENT,
	`content` VARCHAR(255) NOT NULL COLLATE 'utf8_general_ci',
	`complete` TINYINT(1) NOT NULL DEFAULT '0',
	PRIMARY KEY (`ID`) USING BTREE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=2
;
