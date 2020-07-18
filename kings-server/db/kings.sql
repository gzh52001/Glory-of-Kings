/*
 Navicat Premium Data Transfer

 Source Server         : MYSQL
 Source Server Type    : MySQL
 Source Server Version : 50730
 Source Host           : localhost:3306
 Source Schema         : kings

 Target Server Type    : MySQL
 Target Server Version : 50730
 File Encoding         : 65001

 Date: 18/07/2020 22:01:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '账号名',
  `pwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '密码',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '真实姓名',
  `age` int(8) NULL DEFAULT NULL COMMENT '年龄',
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '电话',
  `pay` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '薪资',
  `entryTime` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '入职时间，自动获取当前系统时间',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '住址',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'koukou', '123456', '赵子龙', 18, '110', '9998', '2020-07-18 09:40:01', '广西精神小伙');
INSERT INTO `admin` VALUES (5, 'qqq', '123', '测试', 11, '112', '998', '2020-07-18 13:56:45', '广西精神小伙');
INSERT INTO `admin` VALUES (6, 'www', '123', '测试2', 11, '122', '998', '2020-07-18 13:56:58', '广西精神小伙');
INSERT INTO `admin` VALUES (7, 'eee', '123', '测试3', 12, '123', '998', '2020-07-18 13:57:07', '广西精神小伙');
INSERT INTO `admin` VALUES (8, 'rrr', '123', '测试4', 12, '123', '98', '2020-07-18 13:57:15', '广西精神小伙');
INSERT INTO `admin` VALUES (9, 'ttt', '123', '测试5', 42, '123', '998', '2020-07-18 13:57:22', '广西精神小伙');
INSERT INTO `admin` VALUES (10, 'yyy', '123', '测试6', 22, '123', '998', '2020-07-18 13:57:32', '广西精神小伙');

SET FOREIGN_KEY_CHECKS = 1;
