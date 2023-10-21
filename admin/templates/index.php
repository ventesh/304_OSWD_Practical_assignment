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

<?php

$cl = curl_init();

$ur = "http://localhost:8000/data/allctjs";

curl_setopt($cl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($cl, CURLOPT_URL, $ur);

$res = curl_exec($cl);
$data = json_decode($res, true);

curl_close($cl);
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
    <h1>Welcome admin - <?php echo $_SESSION['log']; ?></h1>
    <h2><a href="../logout.php">Logout</a></h2>
    <h1 align="center">Product Managment</h1>
    <table border="3" align="center">
        <h2 align="center"><a href="">insert product</a></h2>
        <thead>
            <th>ID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th>Options</th>
        </thead>
        <?php
        foreach ($decode as $row) {
            ?>
            <tr>
                <td>
                    <?php echo $row['_id'] ?>
                </td>
                <td>
                    <?php echo $row['pname'] ?>
                </td>
                <td>
                    <?php echo $row['cname'] ?>
                </td>
                <td>
                    <?php echo $row['price'] ?>
                </td>
                <td><img src="../../public/uploads/<?php echo $row['image'] ?>" width="200px" height="100px" alt="not found"></td>
                <td><a href=""><button type="button" class="btn btn-warning">Update</button></a>&nbsp;&nbsp;
                    <a href=""><button type="button" class="btn btn-danger">Delete</button></a>
                </td>
            </tr>
        <?php
        }
        ?>
    </table>

    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    <h1 align="center">Category Managment</h1>
    <table border="3" align="center">
        <h2 align="center"><a href="insertcat.php">insert category</a></h2>
        <thead>
            <th>ID</th>
            <th>Category Name</th>
            <th>Options</th>
        </thead>
        <?php
        foreach ($data as $row) {
            ?>
            <tr>
                <td>
                    <?php echo $row['_id'] ?>
                </td>
                <td>
                    <?php echo $row['name'] ?>
                </td>                                
                <td><a href=""><button type="button" class="btn btn-warning">Update</button></a>&nbsp;&nbsp;
                    <a href=""><button type="button" class="btn btn-danger">Delete</button></a>
                </td>
            </tr>
        <?php
        }
        ?>
    </table>
</body>

</html>