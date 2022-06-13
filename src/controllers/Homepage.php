<?php

namespace Application\Controllers\Homepage;

require_once('../src/lib/Database.php');

use Application\Lib\Database\DatabaseConnection;

class Homepage
{
    public function execute()
    {
        session_start();

        require('../templates/homepage.php');
    }
}
