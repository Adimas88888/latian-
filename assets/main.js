
var db_user = [
	['Muhamad Alichwan', 'L200200100', 'assets/img/team/alichwan.jpg'],
	['Bayu Fedra Abdullah', 'L200200115', 'assets/img/team/bayu.jpg'],
	['Diva Ramadhan Radityatama', 'L200200078', 'assets/img/team/diva.jpg']
];

var db_topAnime = [
	['Fullmetal Alchemist: Brotherhood', '9.22', '64', 'top-anime/Fullmetal-Alchemist-Brotherhood.html'],
	['Steins;Gate', '9.12', '24', 'top-anime/Steins-Gate.html'],
	['Hunter x Hunter (2011)', '9.11', '148', 'top-anime/Hunter-x-Hunter-2011.html'],
	['Ginga Eiyuu Densetsu', '9.10', '110', 'top-anime/Ginga-Eiyuu-Densetsu.html'],
	['Gintama°', '9.09', '51', 'top-anime/Gintama.html']
];

var db_sosmed = [
	['fa-facebook-official', 'Top Anime List ID'],
	['fa-instagram', 'topanime.id'],
	['fa-twitter', 'topanime_id'],
	['fa-youtube-play', 'Top Anime List ID'],
	['fa-whatsapp', '0891337313337'],
	['fa-location-arrow', 'Internet'],
];


index = function() {
	content = '';
	content += '<div class="container">'
	content += '<div class="col-md"><h1 style="font-size: 72px; text-align: right">Top Anime List</h1></div>';
	content += '<div class="col-md" style="padding-top: 19%;"><font style="font-size:24px;">Simple and light website for searching reccomendation of anime</font></div>';
	content += '</div>';
	content += '<div style="padding-top: 7%; text-align: center;"><button class="btn" href="#" onclick="page(\'topanime\');return false;">Check Top Anime</button></div>'
	return content;
}

contact = function(){
	content = '';
	content += '<center><h1>Contact</h1><font style="font-size:24px;">Silahkan kontak dan follow kami juga di:</font></center>';
	content += '<table>';

	for (var i = 0; i < db_sosmed.length; i++) {
		content += '<tr>'
		content += '<td><i class="fa ' + db_sosmed[i][0] + '"></i>';
		content += '<td style="text-align: left;">' + db_sosmed[i][1] + '</td></td>';
		content += '</tr>';
	}

	content += '</table>';

	return content;
}

about = function(){
	content = '';
	content += '<center><h1>About Top Anime List</h1></center>';
	content += '<div style="padding-left: 3%; padding-right: 3%; text-align: justify;"><font style="font-size:14px;">Top Anime List adalah situs fanshare yang menyediakan berbagai macam informasi, dimana anda bisa mencari sebuah rating, genre dan sinopsis dari berbagai anime yang kami dapatkan dari sebuah fansub dan memudahkan pengguna device Komputer dan ponsel dalam mencari serta membaca informasi anime yang terdapat pada situs kami dikarenakan memiliki desain yang sederhana dan ringan sehingga tidak membebani pengguna situs kami.</font></div>';
	content += '<div class="team"><h1>Our Team</h1>';

	for (var i = 0; i < db_user.length; i++) {
		content += '<div class="column">';
		content += '<img src="' + db_user[i][2] + '" class="tim"><br>';
		content += '<p id="nama">' + db_user[i][0] + '</p>';
		content += '<p id="nim">[ ' + db_user[i][1] + ' ]</p>';
		content += '</div>';
	}

	content += '</div>';

	return content;
}

topAnime = function(){
	content = '';
	content += '<center><br><font style="font-size:36px; font-weight: bold;">Top Anime List</font><br></center>';
	content += '<table>';
	content += '<thead><tr><th style="width: 7%">No</th><th>Title</th><th>Score</th><th>Episode</th><th>Synopsis</th></tr></thead>';
	content += '<tbody>';
	
	for (var i = 0; i < db_topAnime.length; i++) {
		content += '<tr>';
		content += '<td>' + (i+1) + '</td>';
		content += '<td class="title">' + db_topAnime[i][0] + '</td>';
		content += '<td>' + db_topAnime[i][1] + '</td>';
		content += '<td>' + db_topAnime[i][2] + '</td>';
		content += '<td><a href="' + db_topAnime[i][3] + '">Click Here</a></td>';
		content += '</tr>';
	}
	
	content += '</tbody>';
	content += '</table>';

	return content;
}

getContent = function(page){
	if (page == 'index') {
		return index();
	} else if (page == 'contact'){
		return contact();
	} else if (page == 'about'){
		return about();
	} else if (page == 'topanime'){
		return topAnime();
	} else {
		return index();
	}
}

afterRedirect = function(page){
	if (document.URL.indexOf('?') > -1){
		var param = document.URL.split('?').pop();

		if (param == 'index'){
			return index();
		} else if (param == 'topanime') {
			return topAnime();
		} else if (param == 'contact') {
			return contact();
		} else if (param == 'about') {
			return about();
		} else {
			return false;
		}
	}
}

page = function(p){
	content = getContent(p);
	document.getElementById('content').innerHTML = content;
}

var content = '';
if (content == ''){
	document.getElementById('content').innerHTML = index();
}

var redirected = afterRedirect();
if (redirected){
	document.getElementById('content').innerHTML = redirected;
}
