<?php
session_start();
?>
<?php

$curl = curl_init();

$url = "http://localhost:8000/data/alljs";

curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

curl_setopt($curl, CURLOPT_URL, $url);


$response = curl_exec($curl);

$decode = json_decode($response, true);

curl_close($curl);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All datas</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    <h1>Welcome user -
        <?php echo $_SESSION['log']; ?>
    </h1>
    <h2><a href="logout.php">Logout</a></h2>
    <h1 align="center">Product Managment</h1>
    <table border="3" align="center">        
        <thead>            
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>            
        </thead>
        <?php
        foreach ($decode as $row) {
            ?>
            <tr>
                <td>
                    <?php echo $row['pname'] ?>
                </td>
                <td>
                    <?php echo $row['cname'] ?>
                </td>
                <td>
                    <?php echo $row['price'] ?>
                </td>
                <td><img src="../../public/uploads/<?php echo $row['image'] ?>" width="300px" height="150px"
                        alt="not found"></td>            
            </tr>
            <?php
        }
        ?>
    </table>
</body>

</html>