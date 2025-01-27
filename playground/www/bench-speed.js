var opt_size = {
	"cc65": "-O",
	"gcc-6502": "-O2",
	"kickc": "",
	"llvm-mos": "-Oz",
	"osdk-lcc65": "-O2",
	"sdcc": "--opt-code-size",
	"vbcc": "-O=991",
};

var opt_speed = {
	"cc65": "-Oirs",
	"gcc-6502": "-O3",
	"kickc": "",
	"llvm-mos": "-Os",
	"osdk-lcc65": "-O2",
	"sdcc": "--opt-code-speed",
	"vbcc": "-O=1023",
};

var bench_speed = {
	"type-sizes": { size: [ "char:1<br>short:2<br>int:2<br>long:4","char:1<br>short:2<br>int:2<br>long:4","char:1<br>short:2<br>int:2<br>long:4","char:<br>short:nil<br>int:nil<br>long:nil","char:1<br>short:1<br>int:2<br>long:2","char:1<br>short:2<br>int:2<br>long:4","char:1<br>short:2<br>int:2<br>long:4", ], speed: [ "char:1<br>short:2<br>int:2<br>long:4","char:1<br>short:2<br>int:2<br>long:4","char:1<br>short:2<br>int:2<br>long:4","char:<br>short:nil<br>int:nil<br>long:nil","char:1<br>short:1<br>int:2<br>long:2","char:1<br>short:2<br>int:2<br>long:4","char:1<br>short:2<br>int:2<br>long:4", ] },
	"dummy": { size: [ 15,77,1,29,192,18,15, ], speed: [ 29,85,12,61,37,32,29, ] },
	"hello-world": { size: [ 197,165,60,63,407,77,99, ], speed: [ 3374,858,873,334,8495,880,943, ] },
	"bytecpy": { size: [ 21,83,7,35,202,24,21, ], speed: [ 37,93,20,69,51,40,37, ] },
	"memcopy": { size: [ 94,186,62,83,340,107,93, ], speed: [ 721210,295740,557220,345561,1507551,770273,647376, ] },
	"0xcafe": { size: [ 391,209,119,"R","C","C",321, ], speed: [ 3593,932,878,"R","C","C",1263, ] },
	"sieve": { size: [ 1117,1028,"C","T",9745,9747,835, ], speed: [ 10322538,10306870,"C","T",16502355,19108109,7557827, ] },
	"aes256": { size: [ 6620,10846,"C","R",14340,"C",5238, ], speed: [ 34669589,14017645,"C","R",84684177,"C",15505793, ] },
	"mandelbrot": { size: [ 972,1818,"C",34,863,1208,1119, ], speed: [ 22240725,10098056,"C",67,180732758,44706483,10366252, ] },
	"frogmove": { size: [ 2099,2548,1615,1661,2807,"R",1762, ], speed: [ 14813407,4763936,5085372,7002570,14701662,"R",7461768, ] },
	"pi": { size: [ 1560,2544,"C","R","R",5081,1498, ], speed: [ 118495098,131708199,"C","R","R",274557082,106055420, ] },
	"shuffle": { size: [ 1902,2329,"C",1851,2263,"R",1571, ], speed: [ 3156908,2885206,"C",1017249,3023907,"R",2937938, ] },
	"bubble-sort": { size: [ 1617,1702,"C",1365,2061,"R",1539, ], speed: [ 22302710,4672433,"C",4634539,15239177,"R",5551701, ] },
	"selection-sort": { size: [ 1606,1871,"C",1430,2123,"R",1453, ], speed: [ 12644139,5457493,"C",4457792,10134811,"R",4781998, ] },
	"insertion-sort": { size: [ 1570,1754,"C",1522,2027,"R",1694, ], speed: [ 7290541,2921469,"C",3317354,6437330,"R",3853605, ] },
	"merge-sort": { size: [ 2434,5547,"C","T",4270,"R",2376, ], speed: [ 3108194,2309666,"C","T",4028621,"R",2365205, ] },
	"quick-sort": { size: [ 1866,2328,"C",1631,2517,"T",1768, ], speed: [ 2702048,1836274,"C",806325,3358937,"T",1696752, ] },
	"counting-sort": { size: [ 2101,"T","C","T",3737,"R",1993, ], speed: [ 1674284,"T","C","T",2137721,"R",1385238, ] },
	"radix-sort": { size: [ 2570,"T","C","T",4659,"R",2561, ], speed: [ 6022813,"T","C","T",7924337,"R",6506819, ] },
	"shell-sort": { size: [ 1763,1949,"C",1558,2172,"R",1702, ], speed: [ 3707610,2227154,"C",1331229,3704984,"R",2045890, ] },
	"heap-sort": { size: [ 2044,3049,"C",1652,2744,"R",1874, ], speed: [ 4042109,2388354,"C",1284508,5339768,"R",2241279, ] },
	"eight-queens": { size: [ 1063,1144,593,823,2649,1173,910, ], speed: [ 28143974,4352300,5565918,3507099,72651727,14030163,8559402, ] },
};
