-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 07, 2019 at 10:16 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wsdcourierservices_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` int(10) NOT NULL,
  `subject` varchar(150) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` varchar(500) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `quote`
--

CREATE TABLE `quote` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `contactNo` varchar(50) NOT NULL,
  `pickupFrom` varchar(10) NOT NULL,
  `pickupTo` varchar(10) NOT NULL,
  `pickupDatetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `vehicleType` varchar(20) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quote`
--
ALTER TABLE `quote`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `quote`
--
ALTER TABLE `quote`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
