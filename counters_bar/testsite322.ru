<VirtualHost *:80>
  ServerAlias testsite322.ru www.testsite322.ru
  DocumentRoot /var/www/testsite322.ru
  <Directory var/www/testsite322.ru/>
    AllowOverride All
  </Directory>
</VirtualHost>
