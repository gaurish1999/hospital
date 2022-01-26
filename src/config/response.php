<?php

require 'connection.php';

$sql = "INSERT INTO `healthCare` (`patientName`, `address`, `age`, `sex`, `weightAtBirth`, `diagnosis`, `dateOfAdmission`, `weightAdmission`, `dateofDischarge`, `weightDischarge`) 
VALUES ('cuseem', 'qwertyu', '13', 'Female', '2.4', 'juhbhgv', '2022-01-25 19:02:34.000000', '34', '2022-01-26 19:02:34.000000', '2.6');";


if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  $conn->close();
?>