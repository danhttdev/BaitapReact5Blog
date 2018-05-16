-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 16, 2018 at 01:08 PM
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
(1, 'danh', '5', 'Danh Tấn', '12 Lạc Long Quân', '01687465465', 1),
(2, 'ninh', 'ninh', 'Ninh Lê', '123 Âu Cơ', '01234375848', 1),
(3, 'tinh', 'tinh', 'Tịnh Phan', '21 Liên Chiểu', '01227467377', 1),
(4, 'phung', 'phung', 'Phụng Nguyễn', '3 Nguyễn Lương Bằng', '0128837847', 1),
(7, 'danhtan', 'danhtan', 'Danh Tan', '12,Lạc Long Quân', '01234267436476', 1),
(8, 'an', 'an', 'Nguyễn Thị An', '123 Hùng Vương', '0132723722', 0),
(9, 'Mia', 'mia', 'Mia Mia', '123 Hùng Vương', '098986766', 0);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `idcomment` int(11) NOT NULL,
  `idnews` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`idcomment`, `idnews`, `iduser`, `content`, `date`) VALUES
(1, 2, 1, 'Ok man', '2018-05-17 00:00:00'),
(2, 2, 2, 'Nghe có vẻ ổn', '2018-05-03 00:00:00'),
(3, 3, 2, 'Thôi được rồi', '2018-05-23 00:00:00'),
(4, 3, 4, 'Chéc hợp lí', '2018-05-02 00:00:00'),
(5, 2, 1, 'Hay =))', '2018-05-11 00:00:00'),
(7785572, 862962229, 1, 'happy', '2018-05-16 08:49:49'),
(65601779, 1333674597, 1, 'hgjhj', '2018-05-15 14:59:45'),
(84248478, 4, 2, 'ttyt', '2018-05-15 11:30:38'),
(84262670, 4, 2, 'ttyyty', '2018-05-15 11:03:13'),
(104319581, 4, 1, 'ii', '2018-05-15 14:32:30'),
(138602775, 4, 2, '5656', '2018-05-15 11:44:49'),
(222726104, 1764444625, 3, 'ooi', '2018-05-15 21:36:33'),
(235630839, 234799599, 1, 'r', '2018-05-16 11:21:02'),
(271169838, 4, 1, '<h3>djhdvj</h3>', '2018-05-15 15:10:35'),
(278094912, 4, 1, '<h4>djdvjdj</h4>', '2018-05-15 15:10:50'),
(291814397, 4, 1, 'huhuhuhuh\n', '2018-05-15 14:17:52'),
(355715803, 234799599, 1, '656', '2018-05-16 11:17:47'),
(401677775, 4, 1, '', '2018-05-15 14:42:24'),
(406740600, 4, 1, '555', '2018-05-15 14:25:20'),
(441845365, 6, 1, 'dg', '2018-05-16 09:02:37'),
(477442209, 4, 2, 'qwqqq', '2018-05-15 11:01:23'),
(516050243, 1764444625, 3, 'vui', '2018-05-15 17:02:34'),
(552123122, 568053449, 7, 'hô hô', '2018-05-15 16:34:37'),
(610716327, 1333674597, 1, 'htbhgbgbv', '2018-05-15 15:00:01'),
(694310480, 4, 1, 'ghtht', '2018-05-15 14:40:54'),
(694933195, 4, 1, 'chiuj thudi', '2018-05-15 14:57:14'),
(704132724, 4, 1, 'gbggbgb', '2018-05-15 14:41:00'),
(740646030, 1764444625, 1, 'haha', '2018-05-16 11:04:08'),
(805776084, 862962229, 1, 'tytty', '2018-05-16 08:52:22'),
(851969051, 979852477, 1, 'hghh', '2018-05-15 14:41:52'),
(878055494, 1170769076, 1, 'gtg', '2018-05-16 08:45:34'),
(913559621, 234799599, 7, 'hô hô\n', '2018-05-15 16:35:51'),
(916081632, 6, 2, '5656', '2018-05-15 11:44:59'),
(944813197, 4, 1, 'gg', '2018-05-15 14:41:11'),
(970697641, 1764444625, 1, 'hh', '2018-05-16 11:08:30'),
(974373724, 1333674597, 1, 'ghjgj', '2018-05-15 14:59:47'),
(999495054, 4, 1, '', '2018-05-15 14:42:22'),
(1004957136, 4, 1, '454365455', '2018-05-15 14:25:13'),
(1025710038, 4, 2, 'fhhf', '2018-05-15 11:43:19'),
(1058692135, 234799599, 7, 'ok con dê', '2018-05-15 16:34:44'),
(1101973961, 4, 2, '67545454', '2018-05-15 11:00:54'),
(1129777275, 467951997, 1, 'grgrg', '2018-05-15 15:05:37'),
(1142203694, 1801354675, 3, 'las las', '2018-05-15 21:36:04'),
(1144798588, 4, 1, '<b>dhsdhhsd</b>', '2018-05-15 15:09:42'),
(1265681054, 1170769076, 9, 'ôi', '2018-05-15 23:50:39'),
(1282217258, 1333674597, 1, 'hgjyhf', '2018-05-15 14:59:54'),
(1308474831, 1333674597, 1, 'hjj', '2018-05-15 14:59:51'),
(1397046812, 4, 2, '6677', '2018-05-15 10:57:41'),
(1416656485, 6, 1, '5656', '2018-05-16 08:46:46'),
(1420918630, 979852477, 2, 'aiaiaia', '2018-05-15 10:31:01'),
(1421923789, 4, 2, '4544', '2018-05-15 11:02:46'),
(1591220681, 4, 2, 'tytyyttyty', '2018-05-15 11:03:17'),
(1609505325, 1170769076, 1, 'tyt', '2018-05-16 08:45:39'),
(1609851459, 4, 1, 'ooo', '2018-05-15 14:32:40'),
(1654094289, 2, 3, 'ty', '2018-05-15 16:48:35'),
(1676096406, 935147774, 7, 'vui', '2018-05-15 16:34:51'),
(1705916161, 1333674597, 1, 'fggfhfgh', '2018-05-15 15:00:04'),
(1821259445, 4, 1, 'chúc mừng năm mới', '2018-05-15 15:14:05'),
(1824339979, 2103167392, 7, 'hahah', '2018-05-15 16:34:56'),
(1833147196, 4, 2, 'chuc mung', '2018-05-15 10:59:53'),
(1869706399, 122282461, 1, 'huhu', '2018-05-16 10:56:47'),
(1956540574, 6, 7, 'la lâl', '2018-05-15 16:35:39'),
(1962181409, 3, 2, 'trhh', '2018-05-15 11:45:18'),
(2021427293, 4, 2, 'gfbgb', '2018-05-15 11:43:25'),
(2084766481, 234799599, 1, '55', '2018-05-16 11:17:54'),
(2098136529, 6, 1, 'nnn', '2018-05-15 16:24:52');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `idlike` int(11) NOT NULL,
  `idnews` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`idlike`, `idnews`, `iduser`, `date`) VALUES
(1, 3, 2, '2018-05-08 00:00:00'),
(3, 5, 2, '2018-05-01 00:00:00'),
(4, 2, 2, '2018-05-24 00:00:00'),
(7, 4, 3, '2018-05-14 00:00:00'),
(101230005, 1295472426, 2, '2018-05-15 16:33:38'),
(108435843, 2103167392, 1, '2018-05-15 16:32:52'),
(167014230, 234799599, 3, '2018-05-15 16:36:43'),
(348732660, 2103167392, 2, '2018-05-15 16:33:17'),
(364919800, 6, 7, '2018-05-15 16:35:43'),
(492796725, 122282461, 2, '2018-05-15 16:33:14'),
(531169175, 568053449, 3, '2018-05-15 21:38:14'),
(565236843, 1295472426, 3, '2018-05-15 16:36:41'),
(580125649, 234799599, 2, '2018-05-15 16:33:13'),
(604090508, 3, 1, '2018-05-15 16:24:30'),
(653437720, 981669956, 1, '2018-05-15 16:32:51'),
(1041062788, 935147774, 2, '2018-05-15 16:33:15'),
(1067891550, 935147774, 7, '2018-05-15 16:33:49'),
(1074045269, 979852477, 1, '2018-05-15 15:04:10'),
(1140565225, 935147774, 1, '2018-05-15 16:32:49'),
(1141562749, 1170769076, 9, '2018-05-15 23:50:34'),
(1253135450, 6, 8, '2018-05-16 09:30:03'),
(1932685426, 122282461, 1, '2018-05-16 10:57:45'),
(1979395761, 4, 1, '2018-05-15 15:03:46'),
(2029057402, 234799599, 1, '2018-05-16 11:49:37'),
(2083009480, 1295472426, 7, '2018-05-15 16:33:47'),
(2089806728, 2, 1, '2018-05-15 14:42:07');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `idnews` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `title` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `date` datetime NOT NULL,
  `views` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`idnews`, `iduser`, `title`, `content`, `date`, `views`) VALUES
(2, 2, 'Kỳ vọng vào một thế hệ cán bộ mới sau Hội nghị Trung ương 7', '(Dân trí) - “Cán bộ là cái gốc của mọi công việc”, “muôn việc thành công hoặc thất bại đều do cán bộ tốt hoặc kém” – lời dạy của Chủ tịch Hồ Chí Minh đã được Tổng Bí thư Nguyễn Phú Trọng một lần nữa nhắc lại tại phiên khai mạc Hội nghị Trung ương 7 khoá XII diễn ra sáng 7/5', '2018-05-03 00:00:00', 24),
(6, 2, 'Kinh hãi món \'cá nhảy\' tanh tách trong cổ họng dân nhậu ở Sơn La\r\n', 'Món cá nhảy được xem là món ăn phổ biến, đặc sản của người Thái ở Sơn La. Món ăn trông có vẻ đơn giản nhưng lại rất kén người ăn, điểm khác biệt của món ăn này chính là ở cách ăn rất lạ lùng, cá vẫn còn nhảy tanh tách trong miệng khi ăn.', '2018-05-04 00:00:00', 17),
(122282461, 1, 'Nắng nóng coi chừng "cháy da"', 'Nắng nóng cũng khiến các bệnh nhân mắc các bệnh về da tăng cao. Theo thống kê của các bác sĩ BV Da liễu Trung ương, trong mùa hè, khoảng 20% bệnh nhi đến khám là do bị sẩn ngứa côn trùng cắn. Bên cạnh đó, tỷ lệ trẻ mắc rôm sảy, viêm da tiếp xúc do dị ứng ánh sáng… cũng gia tăng mạnh.\n\nĐáng chú ý, BV đã từng tiếp nhận một bệnh nhân nam đến khám ở viện trong tình trạng “da cháy”. Trước đó, bệnh nhân kể, anh có tắm biển vào đúng giữa trưa, lúc có cường độ ánh sáng cao nhất. Ngay khi vừa lên bờ, trên da anh xuất hiện ban đỏ, bỏng rát ranh giới rất rõ giữa vùng có và không tiếp xúc ánh sáng. Sau đó, da anh này xuất hiện mụn nước, bọng nước trên nền da đỏ như... tôm luộc. Khi mụn nước, bọng nước vỡ, da bệnh nhân bong vảy da mỏng, khiến da bị tổn thương nặng, bị rát thâm trong thời gian dài.', '2018-05-15 16:32:27', 16),
(234799599, 1, 'Bài viết hay 2', 'Các bác sĩ cảnh báo, vào mùa hè, tình trạng bỏng da liên quan đến ánh nắng thực sự đáng ngại, đặc biệt là những người có nghề nghiệp bắt buộc phải ra nắng thường xuyên trong điều kiện ánh nắng cường độ mạnh như: Công nhân xây dựng, thợ điện… Trong khi đó, một số bệnh da lại có nguyên nhân do ánh nắng hoặc nặng lên khi đi ra nắng. Các bệnh da nhạy cảm ánh sáng như bệnh Lupus ban đỏ, viêm bì cơ nặng lên vào mùa hè. Bệnh porphirin da và pellagra cũng tổn thương nặng hơn khi vào hè. Một số bệnh gây ra do phơi nhiễm nhiều với ánh sáng mặt trời như: bệnh sẩn ngứa đa dạng do ánh sáng, viêm da ánh sáng, khô da sắc tố đều nặng hơn trong mùa hè và tổn thương da thường xuất hiện ở các vùng da hở…\n\nBên cạnh đó, theo BS. Hoàng Văn Tâm - Khoa Điều trị bệnh da nam giới, BV Da liễu Trung ương, nếu tiếp xúc với ánh sáng thường xuyên, liên tục, kéo dài sẽ làm tăng nguy cơ ung thư da, đặc biệt là ung thư tế bào đáy.\n\n"Trong ánh nắng chứa rất nhiều tia cực tím (UVA, UVB), còn gọi là tia tử ngoại khiến da bị tổn thương và dẫn đến ung thư da. Các tia cực tím của ánh nắng cũng gậy tổn thương da và đẩy nhanh tốc độ lão hóa và tăng sắc tố tối màu trên da, dẫn tới sạm da, nếp nhăn, khô da, nám da và tàn nhang trên da... Do đó, việc dùng kem chống nắng là biện pháp tốt để ngăn chặn tác hại của ánh nắng mặt trời"- BS.Tâm khuyến cáo.\n\nĐể hạn chế tác hại do nắng nóng gây ra, các bác sĩ tư vấn người dân không nên đi ra ngoài trời trong những lúc nắng nóng gay gắt để tránh mạch máu bị co giãn đột ngột làm tăng huyết áp.\n\nNếu bắt buộc phải đi ra đường, phải đội mũ, mặc quần áo, đeo kính, khẩu trang… chống nóng. Không để nhiệt độ điều hòa trong phòng quá thấp; không để gió quạt thổi trực tiếp gần vào người. Không nên đột ngột đi từ trong phòng điều hòa ra ngoài trời nắng. Uống đủ nước, nhưng không nên uống nhiều nước đá hoặc nước quá lạnh để tránh bị viêm họng….', '2018-05-16 11:20:27', 30),
(568053449, 7, 'Xóm nghèo xót thương "hiệp sĩ" bị trộm đâm tử vong', 'Dù hai vợ chồng đã ly hôn vì hoàn cảnh, nhưng tôi biết anh ấy còn rất thương mẹ con tôi. Sau đêm bắt cướp, gia đình tôi mới cảm nhận được nỗi đau mất anh mãi mãi”, chị Nguyễn Thị Thanh Dung - vợ cũ “hiệp sĩ” Thôi nghẹn ngào khi đưa thi thể anh về quê.\nChia sẻ trên Fanpage  Chia sẻ bài viết này trên trên Facebook  Chia sẻ bài viết này trên trên G+\nXóm nghèo xót thương\n\nSáng nay (15.5), chiếc xe cứu thương đã đưa thi thể “hiệp sĩ” Nguyễn Văn Thôi (42 tuổi, xã Mỹ Lợi, huyện Phù Mỹ, Bình Định) về quê nhà an táng. Anh Thôi hy sinh trong lúc truy bắt nhóm đối tượng trộm xe SH trên đường Cách Mạng Tháng Tám (TP Hồ Chí Minh) tối 13.5.\n\nTừ sáng sớm, không khí tang thương bao trùm cả xóm nghèo thôn Chánh Khoan Tây (xã Mỹ Lợi). Rất đông người thân, bạn bè và người dân đến nhà riêng của bố mẹ anh Thôi thắp nén nhang, tiễn biệt người “hiệp sĩ” trượng nghĩa nhưng đoản mệnh.', '2018-05-15 16:34:31', 6),
(862962229, 1, 'ty', 'tt', '2018-05-16 08:49:30', 13),
(935147774, 1, 'Hết "bún mắng, cháo chửi" lại đến… "dạy chửi"!', 'Câu chuyện nóng nhất trong ngày 5.5 là video clip của một học viên tại một trung tâm dạy tiếng Anh tại Hà Nội post trên mạng về một nữ giáo viên đã dù......\n\n', '2018-05-15 16:31:54', 1),
(981669956, 1, 'Cán bộ công an mà lại xây công trình trái phép?', 'Tịnh Phan đã đăng vào 2018-05-25 00:00:00 có 43 lượt xem\nLại thêm một “biệt phủ” được phát hiện và lần này là tại Thanh Hoá. Biệt phủ này được xây dựng trên diện tích hàng nghìn m2 với nhiều hạng mục: Có hòn non bộ, cây cảnh giá trị, bể bơi như trong khách sạn, ao cá, vườn cây ăn quả… Tất cả đều to, đẹp, hoành tráng\n\n', '2018-05-15 16:31:28', 1),
(1170769076, 9, 'Vui quá đi', ' vụ việc 5 “hiệp sĩ đường phố” quận Tân Bình bị đâm thương vong khi theo dõi, vây bắt một nhóm đối tượng trộm xe máy trên đường Cách Mạng Tháng 8 (quận 3, TP.HCM) đã gây xôn xao dư luận. Trong đó, có 2 “hiệp sĩ” đã thiệt mạng ngay tại h', '2018-05-15 23:50:29', 21),
(1295472426, 2, 'Cách đây 3 năm, khi đó con trai tôi đang học lớp 10 và chỉ cao 1m62.', 'Tôi là Dũng hiện là giám đốc một cơ sở chế biến hải sản tại huyện Long Điền, tỉnh Bà Rịa – Vũng Tàu. Năm nay tôi 48 tuổi và có đứa con trai 20 tuổi đang học năm 1 Học viện An ninh Nhân dân Hà Nội.\n\nTôi xin kể câu chuyện của tôi và con trai ra đây để các bạn trong hoàn cảnh tương tự có thể học hỏi kinh nghiệm. Biết đâu, câu chuyện sẽ giúp ích cho nhiều bạn đồng cảnh ngộ.\n\nCách đây 3 năm, khi đó con trai tôi đang học lớp 10 và chỉ cao 1m62. Tuy nhiên, mong ước của nó không hề nhỏ bé. Nó muốn trở thành một “người hùng” đời thường thực sự chứ không đơn giản là chỉ là đam mê các siêu anh hùng trong phim bom tấn của Hollywood.', '2018-05-15 16:33:36', 2),
(1764444625, 3, 'Vì sao Công an TP.HCM chưa công nhận các nhóm “hiệp sĩ đường phố”?', 'Vừa qua, vụ việc 5 “hiệp sĩ đường phố” quận Tân Bình bị đâm thương vong khi theo dõi, vây bắt một nhóm đối tượng trộm xe máy trên đường Cách Mạng Tháng 8 (quận 3, TP.HCM) đã gây xôn xao dư luận. Trong đó, có 2 “hiệp sĩ” đã thiệt mạng ngay tại hiện trường và 3 “hiệp sĩ” bị trọng thương đang nằm điều trị tại các bệnh viện.\n\nĐược biết, hoạt động của nhóm “hiệp sĩ” nói trên là tự phát theo phong trào toàn dân bảo vệ an ninh Tổ quốc. Các thành viên trong nhóm thuộc nhiều ngành nghề, có điều kiện kinh tế và cuộc sống khác nhau nhưng cùng chung một mục tiêu là bắt những tên trộm cắp.\nTrả lời câu hỏi của phóng viên về giải pháp quản lý các nhóm “hiệp sĩ đường phố” trên địa bàn TP.HCM hiện nay, thiếu tướng Phan Anh Minh - Phó Giám đốc Công an TP.HCM cho hay, mô “hình hiệp sĩ đường phố” hay “câu lạc bộ phòng chống tội phạm” đã có từ nhiều năm nay. Tuy nhiên, trên cơ sở pháp luật thì Công an TP.HCM chưa có căn cứ để công nhận hay quản lý các nhóm này.\n\n“Tôi cũng biết mô hình phòng chống tội phạm ở tỉnh Bình Dương. \nNhưng mà coi lại hết toàn bộ các quyết định hiện nay về công tác phong trào toàn dân bảo vệ an ninh Tổ quốc, thì chúng ta chưa có quy định gì về mô hình này. Nói về pháp lý thì Công an TP.HCM không tìm thấy căn cứ để công nhận, quản lý. Do đó, 2 năm nay, Công an TP.HCM đang day dứt nghiên cứu, kiến nghị có quy định, quy chuẩn cho đầy đủ”, thiếu tướng Phan Anh Minh nói.\n\n“Mô hình này là đi làm việc nghĩa nhưng có thể xảy ra mất mát, hi sinh.\n Do đó cần được quản lý, cần được công nhận, cần được bồi dưỡng, hỗ trợ về kỹ năng, kiến thức pháp luật, những gì được làm, những gì không được làm, xác định rõ cái giới hạn. Bởi vì ngay cả với công an, không phải tất cả các tội phạm đều được bắt giữ và bắt giữ được ngay”, tướng Minh giải thích.\nVừa qua, vụ việc 5 “hiệp sĩ đường phố” quận Tân Bình bị đâm thương vong khi theo dõi, vây bắt một nhóm đối tượng trộm xe máy trên đường Cách Mạng Tháng 8 (quận 3, TP.HCM) đã gây xôn xao dư luận. Trong đó, có 2 “hiệp sĩ” đã thiệt mạng ngay tại hiện trường và 3 “hiệp sĩ” bị trọng thương đang nằm điều trị tại các bệnh viện.\n\nĐược biết, hoạt động của nhóm “hiệp sĩ” nói trên là tự phát theo phong trào toàn dân bảo vệ an ninh Tổ quốc. Các thành viên trong nhóm thuộc nhiều ngành nghề, có điều kiện kinh tế và cuộc sống khác nhau nhưng cùng chung một mục tiêu là bắt những tên trộm cắp.\nTrả lời câu hỏi của phóng viên về giải pháp quản lý các nhóm “hiệp sĩ đường phố” trên địa bàn TP.HCM hiện nay, thiếu tướng Phan Anh Minh - Phó Giám đốc Công an TP.HCM cho hay, mô “hình hiệp sĩ đường phố” hay “câu lạc bộ phòng chống tội phạm” đã có từ nhiều năm nay. Tuy nhiên, trên cơ sở pháp luật thì Công an TP.HCM chưa có căn cứ để công nhận hay quản lý các nhóm này.\n\n“Tôi cũng biết mô hình phòng chống tội phạm ở tỉnh Bình Dương. \nNhưng mà coi lại hết toàn bộ các quyết định hiện nay về công tác phong trào toàn dân bảo vệ an ninh Tổ quốc, thì chúng ta chưa có quy định gì về mô hình này. Nói về pháp lý thì Công an TP.HCM không tìm thấy căn cứ để công nhận, quản lý. Do đó, 2 năm nay, Công an TP.HCM đang day dứt nghiên cứu, kiến nghị có quy định, quy chuẩn cho đầy đủ”, thiếu tướng Phan Anh Minh nói.\n\n“Mô hình này là đi làm việc nghĩa nhưng có thể xảy ra mất mát, hi sinh.\n Do đó cần được quản lý, cần được công nhận, cần được bồi dưỡng, hỗ trợ về kỹ năng, kiến thức pháp luật, những gì được làm, những gì không được làm, xác định rõ cái giới hạn. Bởi vì ngay cả với công an, không phải tất cả các tội phạm đều được bắt giữ và bắt giữ được ngay”, tướng Minh giải thích.', '2018-05-15 23:08:29', 37),
(1801354675, 3, 'tin', 'Dù hai vợ chồng đã ly hôn vì hoàn cảnh, nhưng tôi biết anh ấy còn rất thương mẹ con tôi. Sau đêm bắt cướp, gia đình tôi mới cảm nhận được nỗi đau mất anh mãi mãi”, chị Nguyễn Thị Thanh Dung - vợ cũ “hiệp sĩ” Thôi nghẹn ngào khi đưa thi thể anh về quê.\nChia sẻ trên Fanpage  Chia sẻ bài viết này trên trên Facebook  Chia sẻ bài viết này trên trên G+\nXóm nghèo xót thương\n\nSáng nay (15.5), chiếc xe cứu thương đã đưa thi thể “hiệp sĩ” Nguyễn Văn Thôi (42 tuổi, xã Mỹ Lợi, huyện Phù Mỹ, Bình Định) về quê nhà an táng. Anh Thôi hy sinh trong lúc truy bắt nhóm đối tượng trộm xe SH trên đường Cách Mạng Tháng Tám (TP Hồ Chí Minh) tối 13.5.\n\nTừ sáng sớm, không khí tang thương bao trùm cả xóm nghèo thôn Chánh Khoan Tây (xã Mỹ Lợi). \nRất đông người thân, bạn bè và người dân đến nhà riêng của bố mẹ anh Thôi thắp nén nhang, \ntiễn biệt người “hiệp sĩ” trượng nghĩa nhưng đoản mệnh.', '2018-05-15 16:40:11', 6),
(2103167392, 1, 'Hà Nội: Cấp cứu nhiều người bị tai biến do nắng nóng', 'Tại BV Đa khoa Nông nghiệp (ở Thanh Trì – Hà Nội), Thầy thuốc ưu tú, BSCKII. Hoàng Thị Hương -Trưởng Khoa Nội Tổng hợp của BV cho biết, trung bình mỗi ngày BV tiếp nhận khoảng 700 bệnh nhân nhưng trong 1 tuần qua, mỗi ngày có hơn 1000 người bệnh đến khám, tăng 30%.\n\nĐáng chú ý trong đó nhiều bệnh nhân huyết áp cao, đái tháo đường, tim mạch bị tai biến phải điều trị nội trú. Điển hình là trường hợp bệnh nhân Bùi Thị Phấn, 86 tuổi ở Thanh Trì, Hà Nội cho biết: "Thời tiết nắng nóng cảm thấy ngột ngạt vô cùng. Tôi bị biến chứng liệt nửa người trái, nhồi máu cơ tim, bác sĩ chữa mấy ngày nay đỡ rồi. Hiện tại đã ngồi dậy và đi lại được, tay có thể cầm nắm tốt...".\n\nCòn bệnh nhân Diệp Kim Mai hơn 60 tuổi cho biết: “Tôi bị huyết áp cao, tiểu đường và xơ vữa động mạch, đi khám thì bác sĩ yêu cầu nằm viện. Nắng nóng thế này trong người mệt mỏi lắm”.', '2018-05-15 16:31:01', 1);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `idcomment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2098136530;
--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `idlike` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2103186836;
--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `idnews` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2103167393;
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
