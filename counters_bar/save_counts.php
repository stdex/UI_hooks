<?php
$counter_file = "counters.txt";

if ( isset($_POST['count1']) && isset($_POST['count2']) && isset($_POST['count3']) ) {
    $stringData = intval($_POST['count1']) . ';' . intval($_POST['count2']). ';' . intval($_POST['count3']);
    file_put_contents($counter_file,$stringData);
}
