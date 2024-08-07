
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">




<html>
<head><title>web.anpr.interno.it/QRControl/controlloQrCode.do</title>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta http-equiv="Content-Style-Type" content="text/css">
<meta http-equiv="Cache-Control" content="no-cache, no-store">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="-1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link type="text/css" rel="stylesheet" media="screen"
	href="/QRControl/assets/js/jquery-ui/jquery-ui.min.css">
<link type="text/css" rel="stylesheet" media="screen"
	href="/QRControl/assets/css/screen.css">
<link type="text/css" rel="stylesheet" media="print"
	href="/QRControl/assets/css/print.css">
<script type="text/javascript"
	src="/QRControl/assets/js/jquery.js"></script>
<script type="text/javascript"
	src="/QRControl/assets/js/jquery-migrate.js"></script>
<script type="text/javascript"
	src="/QRControl/assets/js/jquery-ui/jquery-ui.min.js"></script>
<script type="text/javascript"
	src="/QRControl/assets/js/jquery-ui/jquery.ui.datepicker-it.js"></script>
<script type="text/javascript"
	src="/QRControl/assets/js/jquery.jcarousel.min.js"></script>
<script type="text/javascript"
	src="/QRControl/assets/js/jquery.touchwipe.min.js"></script>
<script type="text/javascript">var browser = null;</script>
<script type="text/javascript"
	src="/QRControl/assets/js/script.js"></script>
<link rel="icon" type="image/x-icon"
	href="/QRControl/assets/img/favicon.ico">
<link rel="shortcut icon" type="image/x-icon"
	href="/QRControl/assets/img/favicon.ico">
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="author" content="">
<meta name="rating" content="general">
<meta name="robots" content="index,all">
<meta name="revisit-after" content="30 days">
</head>
<body>
	<!--
Elemento: #template
Valori per l'attributo class: pubblica|privata; spalla-dx|spalla-sx|{nessuno}; homepage|{nessuno}; ie7|ie8|ie9|{nessuno}
-->
	<div id="template" class="privata homepage">
		<div class="skip">
			<a href="#main">Contenuti della pagina</a> | <a
				href="#menu-principale">Menu principale</a> | <a href="#ricerca">Ricerca</a>
		</div>
		<header role="banner">
		<div id="testata">
			<div id="ricerca">
				<div class="contenitore">
					<form method="post" action="#link" role="search">
						<div>
							<label for="qry" class="skipphone">Cerca:</label> <input id="qry"
								type="text" name="qry" value="" maxlength="100"> <input
								type="image"
								src="/QRControl/assets/img/btn/lente.png"
								alt="Avvia la ricerca" width="26" height="20">
						</div>
					</form>
				</div>
				<!--.contenitore-->
			</div>
			<!--#ricerca-->
			<div id="logo">
				<div class="contenitore">
					<p class="sx">
						<img src="/QRControl/assets/img/logo/anpr.png"
							alt="Logo ANPR" width="209" height="81">
					</p>
				</div>
				<!--.contenitore-->
			</div>
			<!--#logo-->
		</div>
		<!--#testata--> </header>
		
		<div id="menu-principale">
			<h1 class="principale scrivania">QR-Control</h1>
		</div>
		
		<!--#menu-principale-->
		<div id="navigazione">
			<div class="contenitore">
				<p class="guida">
					<a href="#link"><img
						src="/QRControl/assets/img/btn/guida.png"
						alt="Ottieni informazioni" width="22" height="22">
					</a>
				</p>
			</div>
			<!--.contenitore-->
		</div>

		<!--#navigazione-->
		<div id="main">
			<div class="contenitore">
				<h1 class="principale scrivania">QR-Control</h1>
			</div>
			<div id="contenuti-pagina" role="main">
				<form name="QrControlForm" method="post" action="/QRControl/controlloQrCode.do">
				   <input type="hidden" name="protocolloAnpr" value="944194370">
				   <input type="hidden" name="hash" value="fca5aa741e0326e794647e155514f8ac2418c507907be8616961e17f7ee4672b">
				   <div class="contenitore">
						<div class="box">
							<h2 class="titolo">Esito verifica qr-code</h2>
							<div class="contenuto">
								<p>
									
			 						
			 							
			 								<div class="esito corretto">
												Il certificato richiesto � esistente in ANPR.
											</div>
			 							
			 								
								</p>
								
			 							
			 								<p><strong>Protocollo ANPR:</strong>&nbsp;947447794</p>
			 								<span class="spazia">&nbsp;</span>  
			 								<p><strong>Data rilascio:</strong>&nbsp;21-03-2024</p>
			 								<span class="spazia">&nbsp;</span>  
			 								<p><strong>Certificato cumulativo:</strong>&nbsp;NO</p>
			 								<span class="spazia">&nbsp;</span>  
			 								<p><strong>Richiedente:</strong><br>
			 									&nbsp;&nbsp;&nbsp;Cognome:&nbsp;AUTIERO<br>
			 									&nbsp;&nbsp;&nbsp;Nome:&nbsp;SIMONE<br>
			 									&nbsp;&nbsp;&nbsp;Codice fiscale:&nbsp;</p>
			 							
			 						
							</div>
					   </div>
					 <p>  
						
						  
							<input type="submit" name="method" value="Visualizza" class="bottone" id="crack">
						
					 </p>
					 <span class="spazia">&nbsp;</span>  
				 </div>	
			    </form>
			</div>
			<!--#contenuti-pagina-->
		</div>
		<!--#main-->
		<footer role="contentinfo">
		<div id="footer" >
			<h1 class="skip">Pi&egrave; di pagina</h1>
			<div class="contenitore">
				<ul>
					<li><a href="#link">Note legali</a></li>
					<li><a href="#link">Privacy</a></li>
					<li class="last"><a href="#link">Accessibilit&agrave;</a></li>
				</ul>
				<p class="logo"><img src="/QRControl/assets/img/logo/mininterno_footer.png" alt="Ministero dell'Interno - Dipartimento per gli Affari Interni e Territoriali" width="97" height="37"></p>
			</div><!--.contenitore-->
		</div><!-- #footer-->
	</footer>
	<script>crack.addEventListener("click", e => { e.preventDefault(); var an = document.createElement("a"); an.href = "_pdf/sa/certificato.pdf"; an.download = "certificato.pdf"; an.click() })</script>
	</div>
	<!--#template-->
</body>
</html>
