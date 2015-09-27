<?php
$date_file = "data_now.txt";
$counter_file = "counters.txt";
$today = date("d.m.y");
$counters = "322;228;11";
$date_contains = file_get_contents($date_file, true);
if($date_contains == "") {
    file_put_contents($date_file, $today);
}
elseif($date_contains != $today) {
    file_put_contents($date_file, $today);
    file_put_contents($counter_file, $counters);
}
