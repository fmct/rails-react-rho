# README

This README documents whatever steps are necessary to get the
application up and running on ubuntu:
	
	1. Firstly, you have to check if you have ruby, sqlite3 and rails installed on your ubuntu, if not you can follow this tutorial:
		https://guides.rubyonrails.org/getting_started.html
	2. You may need to install zlib before install rails, for that you can use 'sudo apt-get install zlib1g-dev'
	3. Now in the dir of the project - 'rails-react-rho':
		3.1 Update bundler to the lastest version installed on your system in sudo by running 'bundle update --bundler' and then install the missing version with 'gem install bundler:1.17.2'
		3.2 Run 'bundler install'  to install everything 
		 3.2.1 If needed install or update yarn
		3.3 Then just run 'rails server -p 3000' and on your browser go to link http://localhost:3000
