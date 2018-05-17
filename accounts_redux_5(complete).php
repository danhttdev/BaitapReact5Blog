<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function login($username,$password){    ///ok
    $response = new StdClass();
    $conn = mysqli_connect('localhost', 'root', '12345678', 'baitapreact5blog') or die ('Không thể kết nối tới database');
    mysqli_set_charset($conn, 'utf8');
    $sqlSubmit = " SELECT * FROM accounts WHERE username='$username'";
    if ($result = mysqli_query($conn,$sqlSubmit)){
        $row = mysqli_fetch_assoc($result);
        if ($row['password'] == $password ) {
            $response->key="LOGIN_COMPLETED";

            $account = new stdClass();
            $account->id= intval($row['id']);
            $account->username=$username;
            $account->password=$password;
            $account->fullname=$row['fullname'];
            $account->address=$row['address'];
            $account->phone=$row['phone'];
            $account->gender=intval($row['gender']);
            $response->account = $account;
            $json = json_encode($response);
            echo $json;
        }
        else echo "LOGIN_UNCOMPLETED";
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function signup($username,$password,$fullname,$address,$phone, $gender){    //ok
    $conn = mysqli_connect('localhost', 'root', '12345678', 'baitapreact5blog') or die ('Không thể kết nối tới database');
    mysqli_set_charset($conn, 'utf8');
    $sqlSubmit = "INSERT INTO accounts (id,username,password,fullname,address,phone,gender) VALUES (null,'$username','$password','$fullname','$address','$phone','$gender')";
    $sqlCheckExist = "SELECT * FROM accounts WHERE username='$username'";
    if ($result = mysqli_query($conn,$sqlCheckExist)){
        $row = mysqli_fetch_assoc($result);
        if ($row['username'] != "" ) echo "SIGNUP_UNCOMPLETED";
        else {
            if ($result2 = mysqli_query($conn,$sqlSubmit)){
                echo "SIGNUP_COMPLETED";
            }
        }
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addnews($iduser,$title,$content,$date){ //ok
    $conn = mysqli_connect('localhost', 'root', '12345678', 'baitapreact5blog') or die ('Không thể kết nối tới database');
    mysqli_set_charset($conn, 'utf8');
    $ran = rand();
    $sqlSubmit = "INSERT INTO news (idnews, iduser,title,content, date,views) VALUES ('$ran','$iduser','$title','$content','$date',0)";
    if ($result2 = mysqli_query($conn,$sqlSubmit)){
        $data = new stdClass();
        $data->key="ADDED";
        $data->id=$ran;
        echo json_encode($data);
    }
    else echo "UN_ADDED";

}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getData_news() {       //ok
    $conn = mysqli_connect('localhost','root', '12345678','baitapreact5blog') or die ('Khong ket noi dc');
    mysqli_set_charset($conn, 'utf8');
    $sqlGetdata = "SELECT * FROM news INNER JOIN accounts ON news.iduser=accounts.id";
    $resultGetRecord = mysqli_query($conn, $sqlGetdata);
    $data_news = array();
    while($row = mysqli_fetch_assoc($resultGetRecord))
    {
        $itemnews = new stdClass();
        $itemnews->idnews= intval($row['idnews']);
        $itemnews->iduser= intval($row['iduser']);
        $itemnews->title=$row['title'];
        $itemnews->fullname=$row['fullname'];
        $itemnews->content= $row['content'];
        $itemnews->date=$row['date']; 
        $itemnews->views=intval($row["views"]);
        $itemnews->arrLikes=[];
        $itemnews->arrComments=[];
        array_push($data_news, $itemnews );
    }
    return $data_news;	
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function getData_likes() {  //ok
    $conn = mysqli_connect('localhost','root', '12345678','baitapreact5blog') or die ('Khong ket noi dc');
    mysqli_set_charset($conn, 'utf8');
    $sqlGetdata = " SELECT * FROM likes 
                    INNER JOIN accounts ON likes.iduser=accounts.id
                    ";
    $resultGetRecord = mysqli_query($conn, $sqlGetdata);
    $data_likes = array();
    while($row = mysqli_fetch_assoc($resultGetRecord))
    {
        $itemlikes = new stdClass();
        $itemlikes->idlike= intval($row['idlike']) ;
        $itemlikes->iduser= intval($row['iduser']);
        $itemlikes->date=$row['date'];
        $itemlikes->fullname=$row['fullname'];
        $itemlikes->idnews= intval($row['idnews']);
        array_push($data_likes, $itemlikes );
    }
    return $data_likes;		
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getData_comments() { //ok
    $conn = mysqli_connect('localhost','root', '12345678','baitapreact5blog') or die ('Khong ket noi dc');
    mysqli_set_charset($conn, 'utf8');

    $sqlGetdata = " SELECT comments.*, accounts.fullname FROM comments 
                    INNER JOIN accounts ON comments.iduser=accounts.id
                    INNER JOIN news ON comments.idnews=news.idnews
                    ";
    $resultGetRecord = mysqli_query($conn, $sqlGetdata);
    $data_comments = array();
    while($row = mysqli_fetch_assoc($resultGetRecord))
    {
        $itemcomments = new stdClass();
        $itemcomments->idcomment= intval($row['idnews']) ;
        $itemcomments->idnews= intval($row['idnews']);
        $itemcomments->iduser= intval($row['iduser']);
        $itemcomments->content=$row['content'];
        $itemcomments->date= $row['date'];
        $itemcomments->fullname=$row['fullname']; 
        array_push($data_comments, $itemcomments );
    }
    return $data_comments;	
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getData(){   //ok
    $data = new stdClass();
    $arr_news=getData_news();
    $arr_likes=getData_likes();
    $arr_comments=getData_comments();
    $arr_accounts=getData_accounts();
    for ($i=0;$i<count($arr_news); $i++){
        $arr_tmp=array();
        for ($j=0;$j<count($arr_likes); $j++){
            if (intval($arr_news[$i]->idnews) == intval($arr_likes[$j]->idnews)){
                $item = new stdClass();
                $item->idlike= intval($arr_likes[$j]->idlike );
                $item->iduser= intval($arr_likes[$j]->iduser);
                $item->date=$arr_likes[$j]->date;
                $item->fullname=$arr_likes[$j]->fullname;
                $item->idnews= intval($arr_likes[$j]->idnews);
                array_push($arr_tmp,$item);
            }
        }
        $arr_news[$i]->arrLikes = $arr_tmp;
    }
    for ($i=0;$i<count($arr_news); $i++){
        $arr_tmp=array();
        for ($j=0;$j<count($arr_comments); $j++){
            if (intval($arr_news[$i]->idnews) == intval($arr_comments[$j]->idnews)){
                $item = new stdClass();
                $item->idcomment= intval($arr_comments[$j]->idcomment) ;
                $item->idnews= intval($arr_comments[$j]->idnews);
                $item->iduser= intval($arr_comments[$j]->iduser);
                $item->content=$arr_comments[$j]->content;
                $item->date= $arr_comments[$j]->date;
                $item->fullname=$arr_comments[$j]->fullname; 
                array_push($arr_tmp,$item);
            }
        }
        $arr_news[$i]->arrComments = $arr_tmp;
    }
    $data->news=$arr_news;
    $data->accounts=$arr_accounts;
    echo json_encode($data);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getData_accounts() {  //ok
    $conn = mysqli_connect('localhost','root', '12345678','baitapreact5blog') or die ('Khong ket noi dc');
    mysqli_set_charset($conn, 'utf8');
    $sqlGetdata = "SELECT * FROM accounts ";
    $resultGetRecord = mysqli_query($conn, $sqlGetdata);
    $data_account = array();
    while($row = mysqli_fetch_assoc($resultGetRecord))
    {
        $item_account = new stdClass();
        $item_account->id= intval($row['id']) ;
        $item_account->username=$row['username'];
        $item_account->fullname=$row['fullname'];
        $item_account->address= $row['address'];
        $item_account->phone=$row['phone']; 
        $item_account->gender=intval($row["gender"]);
        array_push($data_account, $item_account );
    }
    return $data_account;	
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getData_news_a_news( $idNewGetFull) {      
    $conn = mysqli_connect('localhost','root', '12345678','baitapreact5blog') or die ('Khong ket noi dc');
    mysqli_set_charset($conn, 'utf8');
    $sqlGetdata = "SELECT * FROM news INNER JOIN accounts ON news.iduser=accounts.id WHERE news.idnews='$idNewGetFull'";
    $resultGetRecord = mysqli_query($conn, $sqlGetdata);
    while($row = mysqli_fetch_assoc($resultGetRecord))
    {
        $itemnews = new stdClass();
        $itemnews->idnews= intval($row['idnews']);
        $itemnews->iduser= intval($row['iduser']);
        $itemnews->title=$row['title'];
        $itemnews->fullname=$row['fullname'];
        $itemnews->content= $row['content'];
        $itemnews->date=$row['date']; 
        $itemnews->views=intval($row["views"]);
        $itemnews->arrLikes=[];
        $itemnews->arrComments=[];
    }
    $data = new stdClass();
    $arr_likes=getData_likes();
    $arr_comments=getData_comments();
    $arr_accounts=getData_accounts();

    $arr_tmp=array();
    for ($j=0;$j<count($arr_likes); $j++){
        if (intval($itemnews->idnews) == intval($arr_likes[$j]->idnews)){
            $item = new stdClass();
            $item->idlike= intval($arr_likes[$j]->idlike );
            $item->iduser= intval($arr_likes[$j]->iduser);
            $item->date=$arr_likes[$j]->date;
            $item->fullname=$arr_likes[$j]->fullname;
            $item->idnews= intval($arr_likes[$j]->idnews);
            array_push($arr_tmp,$item);
        }
    }
    $itemnews->arrLikes = $arr_tmp;
    
    $arr_tmp2=array();
    for ($j=0;$j<count($arr_comments); $j++){
        if (intval($itemnews->idnews) == intval($arr_comments[$j]->idnews)){
            $item = new stdClass();
            $item->idcomment= intval($arr_comments[$j]->idcomment) ;
            $item->idnews= intval($arr_comments[$j]->idnews);
            $item->iduser= intval($arr_comments[$j]->iduser);
            $item->content=$arr_comments[$j]->content;
            $item->date= $arr_comments[$j]->date;
            $item->fullname=$arr_comments[$j]->fullname; 
            array_push($arr_tmp2,$item);
        }
    }
    $itemnews->arrComments = $arr_tmp2;
    
    $data->news=$itemnews;
    echo json_encode($data);


}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function updateNews($id,$title,$content,$date){//ok
    $conn = mysqli_connect('localhost','root', '12345678','baitapreact5blog') or die ('Khong ket noi dc');
    mysqli_set_charset($conn, 'utf8');
    $sqlUpdateLike = "UPDATE news SET title = '$title' , content='$content', date='$date' WHERE idnews='$id'";
    if (mysqli_query($conn,$sqlUpdateLike)){
        echo "EDITED";
    }
    else echo "kkkkk";
}

function add_comment($idNewsComment,$iduser,$content,$date){ //ok
    $conn = mysqli_connect('localhost', 'root', '12345678', 'baitapreact5blog') or die ('Không thể kết nối tới database');
    mysqli_set_charset($conn, 'utf8');
    $ran = rand();
    $sqlSubmit = "INSERT INTO comments ( idcomment,	idnews,	iduser,	content,	date) VALUES ('$ran','$idNewsComment','$iduser','$content','$date')";
    if ($result2 = mysqli_query($conn,$sqlSubmit)){
        $data_add_cmt = new stdClass();
        $data_add_cmt->key="ADDED_COMMENT";
        $data_add_cmt->id=$ran;
        echo json_encode($data_add_cmt);
    }
    else echo "UN_ADDED_COMMENT";
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function news_like($idnews,$iduser,$date){ //ok
    $conn = mysqli_connect('localhost', 'root', '12345678', 'baitapreact5blog') or die ('Không thể kết nối tới database');
    $ran = rand();
    $sqlSubmit = "INSERT INTO likes ( idlike, idnews, iduser, date) VALUES ('$ran','$idnews','$iduser','$date')";
    if ($result2 = mysqli_query($conn,$sqlSubmit)){
        $data_add_cmt = new stdClass();
        $data_add_cmt->key="LIKED";
        $data_add_cmt->id=$ran;
        echo json_encode($data_add_cmt);
    }
    else echo "ERR_LIKE";
}

function news_unlike($idlike) { //ok
    $sqlDeleteLike = " DELETE FROM likes WHERE idlike='$idlike'";
    $conn = mysqli_connect('localhost','root', '12345678','baitapreact5blog') or die ('Khong ket noi dc');
    if (mysqli_query($conn,$sqlDeleteLike) ){
        echo "UNLIKE";
    }
    else echo "ERR_UNLIKE";
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////

function update_view($idnewsView){//ok
    $conn = mysqli_connect('localhost','root', '12345678','baitapreact5blog') or die ('Khong ket noi dc');
    mysqli_set_charset($conn, 'utf8');
    $sqlUpdateView = "UPDATE news SET views = views + 1  WHERE idnews='$idnewsView'";
    if (mysqli_query($conn,$sqlUpdateView)){
        echo "VIEWED";
    }
    else echo "UN_VIEWED";
}

function updateAccount($idAccountUpdate, $username,$password,$fullname,$address,$phone, $gender){//ok
    $conn = mysqli_connect('localhost','root', '12345678','baitapreact5blog') or die ('Khong ket noi dc');
    mysqli_set_charset($conn, 'utf8');
    $sqlUpdateLike = "UPDATE accounts SET username = '$username' , password='$password', fullname='$fullname', address='$address', phone='$phone', gender='$gender' WHERE id='$idAccountUpdate'";
    if (mysqli_query($conn,$sqlUpdateLike)){
        echo "UPDATED";
    }
    else echo "UN_UPDATED";
}
// function deletenews($id) {
//     $sqlDeleteNews = " DELETE FROM news WHERE idnews='$id'";
//     $conn = mysqli_connect('localhost','root', '12345678','baitapreact5blog') or die ('Khong ket noi dc');
//     if (mysqli_query($conn,$sqlDeleteNews)){
//         echo "DELETED";
//     }
// }

function deletenews($idDelete) {
    $sqlDeleteNews = " DELETE FROM news WHERE idnews='$idDelete'";
    $sqlDeleteLike = " DELETE FROM likes WHERE idnews='$idDelete'";
    $sqlDeleteComments = " DELETE FROM comments WHERE idnews='$idDelete'";

    $conn = mysqli_connect('localhost','root', '12345678','baitapreact5blog') or die ('Khong ket noi dc');
    if (mysqli_query($conn,$sqlDeleteNews) && mysqli_query($conn,$sqlDeleteLike) && mysqli_query($conn,$sqlDeleteComments)){
        echo "DELETED";
    }
}

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'PUT':
        break;
    case 'GET':
        getData();
        break;
    case 'POST':
        $body = file_get_contents('php://input');
        $data = json_decode($body);

        $username       = $data->username;
        $password       = $data->password;

        $repassword      = $data->repassword;
        $fullname        = $data->fullname;
        $address         = $data->address;
        $phone           = $data->phone;
        $gender          = $data->gender;

        $content            = $data->content;
        $iduser             = $data->iduser;
        $title              = $data->title;
        $date               = $data->date;

        $idDelete           = $data->idDelete;
        $idNewGetFull       = $data->idNewGetFull;
        $idNewsEdit         = $data->id;
        $idNewsComment      = $data->idNewsComment;
        $idnewsForLike      = $data->idnewsForLike;
        $idnewsForUnlike    = $data->idnewsForUnlike;
        $idnewsView         = $data->idnewsView;
        $idAccountUpdate    = $data->idAccountUpdate;

        if ( $password!="" && $repassword=="") login($username,$password); //ok
        else if ( $idAccountUpdate != "") updateAccount($idAccountUpdate, $username,$password,$fullname,$address,$phone, $gender);
        else if ( $idnewsForLike != "") news_like($idnewsForLike,$iduser,$date);//ok
        else if ( $idnewsForUnlike != "") news_unlike($idnewsForUnlike); //ok
        else if ( $idnewsView !="" ) update_view($idnewsView);

        else if ( $password == $repassword && $password!="") signup($username,$password,$fullname,$address,$phone, $gender);//ok
        else if ( $idNewsEdit !="" )  updateNews($idNewsEdit,$title,$content,$date);//ok
        else if ( $idNewsComment !="") add_comment($idNewsComment,$iduser,$content,$date); //ok

        else if ( $content != "")  addnews($iduser,$title,$content,$date); //ok
        else if ( $idDelete != "") deletenews($idDelete);//ok
        else if ( $idNewGetFull != "") getData_news_a_news($idNewGetFull);//ok

        break;
    case 'DELETE':
        break;
    default:
        break;
}
sleep(0.5);

mysqli_close($connect); 
?> 
