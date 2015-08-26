function calc2() { 
			var type_obpl = document.getElementById("type_obpl"); 
			var type_mont = document.getElementById("type_mont"); 
			var type_kr = document.getElementById("type_kr"); 
			var type_vnot = document.getElementById("type_vnot"); 
			var type_nrot = document.getElementById("type_nrot"); 
			var type_ytpl = document.getElementById("type_ytpl"); 
			var type_pol = document.getElementById("type_pol"); 
			var type_okno = document.getElementById("type_okno");
			var type_oknopvx = document.getElementById("type_oknopvx");
			var type_metvst = document.getElementById("type_metvst");
			var type_dverv = document.getElementById("type_dverv");
			var type_dvermdf = document.getElementById("type_dvermdf");
			var type_krovat1 = document.getElementById("type_krovat1");
			var type_krovat2 = document.getElementById("type_krovat2");
			var type_dno = document.getElementById("type_dno");
			var type_electric = document.getElementById("type_electric");
			var type_konvektor = document.getElementById("type_konvektor");
			var type_poddon = document.getElementById("type_poddon");
			var type_ynitaz = document.getElementById("type_ynitaz");
			var type_rakovina = document.getElementById("type_rakovina");
			var type_pisyar = document.getElementById("type_pisyar");
			var type_boler = document.getElementById("type_boler");
			var type_lesv = document.getElementById("type_lesv");
			var type_lesn = document.getElementById("type_lesn");
			
	 
	  
			//Result
			var result = document.getElementById("result_obpl"); 
			var result = document.getElementById("result_vnot"); 
			var result = document.getElementById("result_nrot"); 
			var result = document.getElementById("result_ytpl"); 
			var result = document.getElementById("result_pol");
			var result = document.getElementById("result_okno");
			var result = document.getElementById("type_oknopvx");
			var result = document.getElementById("type_metvst");
			var result = document.getElementById("type_dverv");
			var result = document.getElementById("type_dvermdf");
			var result = document.getElementById("type_krovat1");
			var result = document.getElementById("type_krovat2");
			var result = document.getElementById("type_dno");
			var result = document.getElementById("type_electric");
			var result = document.getElementById("type_konvektor");
			var result = document.getElementById("type_poddon");
			var result = document.getElementById("type_ynitaz");
			var result = document.getElementById("type_rakovina");
			var result = document.getElementById("type_pisyar");
			var result = document.getElementById("type_boler");
			var result = document.getElementById("type_lesv");
			var result = document.getElementById("type_lesn");
			var result = document.getElementById("result");
			
			var price_o = 0;
			var price_obpl = 0;
			var price_vnot = 0;
			var price_nrot = 0;
			var price_ytpl = 0;
			var price_pol = 0;
			var price_okno = 0;
			var price_oknopvx = 0;
			var price_metvst = 0;
			var price_dverv = 0;
			var price_dvermdf = 0;
			var price_krovat1 = 0;
			var price_krovat2 = 0;
			var price_dno = 0;
			var price_electric = 0;
			var price_konvektor = 0;
			var price_poddon = 0;
			var price_ynitaz = 0;
			var price_rakovina = 0;
			var price_pisyar = 0;
			var price_boler = 0;
			var price_lesv = 0;
			var price_lesn = 0;
			var price_m = 0;
			var price_mont = 0;
			var price_kr = 0;
			var price = 0;
 
			price_o += parseInt(type_obpl.options[type_obpl.selectedIndex].value);
			price_obpl += price_o*55200;
			price_vnot += parseInt(type_vnot.options[type_vnot.selectedIndex].value)*price_o;
			price_nrot += parseInt(type_nrot.options[type_nrot.selectedIndex].value)*price_o;
			price_ytpl += parseInt(type_ytpl.options[type_ytpl.selectedIndex].value)*price_o;
			price_pol += parseInt(type_pol.options[type_pol.selectedIndex].value)*price_o;
			price_okno += parseInt(type_okno.options[type_okno.selectedIndex].value)*price_o;
			price_oknopvx += parseInt(type_oknopvx.value)*5500;
			price_metvst += parseInt(type_metvst.value)*4000;
			price_dverv += (type_dverv.checked == true) ? parseFloat(type_dverv.value) : 0;
			price_dvermdf += parseInt(type_dvermdf.value)*5000;
			price_krovat1 += parseInt(type_krovat1.value)*3000;
			price_krovat2 += parseInt(type_krovat2.value)*4500;
			price_dno += parseInt(type_dno.value)*9000;
			price_electric += parseInt(type_electric.options[type_electric.selectedIndex].value)*price_o;
			price_konvektor += parseInt(type_konvektor.value)*4500;
			price_poddon += parseInt(type_poddon.value)*12000;
			price_ynitaz += parseInt(type_ynitaz.value)*5500;
			price_rakovina += parseInt(type_rakovina.value)*5000;
			price_pisyar += parseInt(type_pisyar.value)*5000;
			price_boler += parseInt(type_boler.value)*10000;
			price_lesv += parseInt(type_boler.value)*27000;
			price_lesn += parseInt(type_boler.value)*27000;
			
			
			price_m=price_obpl + price_vnot + price_nrot + price_ytpl + price_pol + price_okno + price_oknopvx + price_metvst + price_dverv + price_dvermdf + price_krovat1 + price_krovat2 + price_dno + price_electric + price_konvektor  + price_poddon + price_ynitaz + price_rakovina + price_pisyar + price_boler + price_lesv + price_lesn;
			price_mont += Math.round((type_mont.checked == true) ? parseFloat(type_mont.value)*price_m-price_m : 0);
			price_kr += Math.round((type_kr.checked == true) ? parseFloat(type_kr.value)*price_o : 0);
			price=price_m + price_mont + price_kr;

			
			result.innerHTML = price*4;
		}
