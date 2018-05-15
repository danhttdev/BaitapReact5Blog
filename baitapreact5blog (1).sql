-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 11, 2018 at 10:23 AM
-- Server version: 5.7.22-0ubuntu0.16.04.1
-- PHP Version: 7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baitapreact5blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `fullname` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `address` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `phone` text NOT NULL,
  `gender` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`, `fullname`, `address`, `phone`, `gender`) VALUES
(1, 'danh', 'danh', 'Danh Tấn', '12 Lạc Long Quân', '01687465465', 1),
(2, 'ninh', 'ninh', 'Ninh Lê', '123 Âu Cơ', '01234375848', 1),
(3, 'tinh', 'tinh', 'Tịnh Phan', '21 Liên Chiểu', '01227467377', 1),
(4, 'phung', 'phung', 'Phụng Nguyễn', '3 Nguyễn Lương Bằng', '0128837847', 1),
(7, 'danhtan', 'danhtan', 'Danh Tan', '12,Lạc Long Quân', '01234267436476', 1);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `idcomment` int(11) NOT NULL,
  `idnews` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`idcomment`, `idnews`, `iduser`, `content`, `date`) VALUES
(1, 2, 1, 'Ok man', '2018-05-17'),
(2, 2, 2, 'Nghe có vẻ ổn', '2018-05-03'),
(3, 3, 2, 'Thôi được rồi', '2018-05-23'),
(4, 3, 4, 'Chéc hợp lí', '2018-05-02'),
(5, 2, 1, 'Hay =))', '2018-05-11'),
(8, 2, 2, 'hô hô', '2018-05-03'),
(9, 5, 3, 'la la la', '2018-05-04'),
(15, 6, 3, 'yah, t đi đây', '2018-05-29'),
(16, 7, 2, 'ngon lành', '2018-05-23'),
(17, 5, 4, 'ngon lành nhỉ', '2018-05-06'),
(18, 6, 1, 'ngon lành cành đào', '2018-05-15'),
(19, 3, 4, 'tạm', '2018-05-19');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `idlike` int(11) NOT NULL,
  `idnews` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`idlike`, `idnews`, `iduser`, `date`) VALUES
(1, 3, 2, '2018-05-08'),
(2, 3, 1, '2018-05-06'),
(3, 5, 2, '2018-05-01'),
(4, 2, 2, '2018-05-24'),
(6, 4, 1, '2018-05-02'),
(7, 4, 3, '2018-05-14');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `idnews` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `title` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `date` date NOT NULL,
  `views` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`idnews`, `iduser`, `title`, `content`, `date`, `views`) VALUES
(2, 2, 'Kỳ vọng vào một thế hệ cán bộ mới sau Hội nghị Trung ương 7', '(Dân trí) - “Cán bộ là cái gốc của mọi công việc”, “muôn việc thành công hoặc thất bại đều do cán bộ tốt hoặc kém” – lời dạy của Chủ tịch Hồ Chí Minh đã được Tổng Bí thư Nguyễn Phú Trọng một lần nữa nhắc lại tại phiên khai mạc Hội nghị Trung ương 7 khoá XII diễn ra sáng 7/5', '2018-05-03', 12),
(3, 4, 'Hết "bún mắng, cháo chửi" lại đến… "dạy chửi"!', 'Câu chuyện nóng nhất trong ngày 5.5 là video clip của một học viên tại một trung tâm dạy tiếng Anh tại Hà Nội post trên mạng về một nữ giáo viên đã dùng những lời lẽ rất thô tục để nói với một học viên khác trong lớp học. >> Vụ giáo viên xưng mày tao, chửi học viên là “lợn”: Trung tâm tiếng Anh hoạt động “chui” >> Giáo viên xưng "mày tao", chửi học viên là “lợn”: Trung tâm lên tiếng cáo lỗi?', '2018-05-17', 3),
(4, 3, 'Cán bộ công an mà lại xây công trình trái phép?', 'Lại thêm một “biệt phủ” được phát hiện và lần này là tại Thanh Hoá. Biệt phủ này được xây dựng trên diện tích hàng nghìn m2 với nhiều hạng mục: Có hòn non bộ, cây cảnh giá trị, bể bơi như trong khách sạn, ao cá, vườn cây ăn quả… Tất cả đều to, đẹp, hoành tráng', '2018-05-25', 43),
(5, 1, 'Ngang nhiên trái lệnh Thủ tướng, vẫn còn nhiều cán bộ “to gan” quá!', 'Không bực bội, mệt mỏi sao được khi doanh nghiệp đã nộp thuế vào ngân sách Nhà nước để nuôi bộ máy hành chính. Rồi lại bị cũng chính những cán bộ ăn lương Nhà nước đó làm phiền, nhũng nhiễu, không những về tiền bạc mà còn bị “tham nhũng” thời gian, để lỡ nhiều cơ hội kinh doanh, sản xuất.\r\n\r\n', '2018-05-03', 24),
(6, 2, 'Kinh hãi món \'cá nhảy\' tanh tách trong cổ họng dân nhậu ở Sơn La\r\n', 'Món cá nhảy được xem là món ăn phổ biến, đặc sản của người Thái ở Sơn La. Món ăn trông có vẻ đơn giản nhưng lại rất kén người ăn, điểm khác biệt của món ăn này chính là ở cách ăn rất lạ lùng, cá vẫn còn nhảy tanh tách trong miệng khi ăn.', '2018-05-04', 12),
(7, 4, 'Những món giải nhiệt "ăn vào đến đâu lạnh người tới đó" ở HN không quá 20 nghìn', 'Mùa hè đã về đem theo cái nắng nóng khó chịu đến ngộp thở, còn chờ đợi gì mà không rủ hội bạn đi ăn ngay những món vừa rẻ, vừa mát này để giải nhiệt?', '2018-05-02', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`idcomment`),
  ADD KEY `iduser` (`iduser`),
  ADD KEY `idnews` (`idnews`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`idlike`),
  ADD KEY `idnews` (`idnews`),
  ADD KEY `iduser` (`iduser`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`idnews`),
  ADD KEY `iduser` (`iduser`),
  ADD KEY `iduser_2` (`iduser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `idcomment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `idlike` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `idnews` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2114799957;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`iduser`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`idnews`) REFERENCES `news` (`idnews`);

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`iduser`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`idnews`) REFERENCES `news` (`idnews`);

--
-- Constraints for table `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `news_ibfk_1` FOREIGN KEY (`iduser`) REFERENCES `accounts` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
