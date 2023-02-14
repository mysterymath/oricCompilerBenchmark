var date_size = "2023-02-14";

var opt_size = {
	"kickc": "",
	"gcc-6502": "-O2",
	"sdcc": "--opt-code-size",
	"osdk-lcc65": "-O2",
	"cc65": "-O",
	"vbcc": "-O=991",
	"llvm-mos": "-O2",
};

var opt_speed = {
	"kickc": "",
	"gcc-6502": "-O3",
	"sdcc": "--opt-code-speed",
	"osdk-lcc65": "-O3",
	"cc65": "-Oirs",
	"vbcc": "-O=1023",
	"llvm-mos": "-O3",
};

var bench_size = {
	dummy: { size: [ 15,77,1,29,192,18,15, ], speed: [ 29,85,12,61,37,32,29, ] },
	hello_world: { size: [ 202,165,60,134,407,77,99, ], speed: [ 3966,858,873,1031,8495,880,943, ] },
	type_sizes: { size: [ 727,670,425,252,1219,724,655, ], speed: [ 20409,11796,12588,3509,40873,11716,10289, ] },
	memcopy: { size: [ 94,135,62,103,340,107,93, ], speed: [ 721210,344627,557220,671944,1507551,770273,647376, ] },
	sieve: { size: [ 1110,1025,"C","T",9745,9747,918, ], speed: [ 10992453,10374089,"C","T",16502355,19108109,10134340, ] },
	aes256: { size: [ 6303,7606,"C",10574,14340,"C",4927, ], speed: [ 34768201,14014726,"C",10746121,84684177,"C",15502061, ] },
	mandelbrot: { size: [ 954,1775,"C",2114,863,1208,1087, ], speed: [ 22340480,10111503,"C",3700233,180732758,44706483,17771163, ] },
	bytecpy: { size: [ 21,83,7,35,202,24,21, ], speed: [ 37,93,20,69,51,40,37, ] },
	frogmove: { size: [ 2131,2274,"R",2514,2924,"R",1802, ], speed: [ 19650251,4386499,"R",7723210,14741222,"R",7489253, ] },
	pi: { size: [ 1531,2244,"C","T","R",5081,1410, ], speed: [ 122047814,129853690,"C","T","R",274557082,106479957, ] },
	bubble_sort: { size: [ 1587,1520,"C",4950,2061,"R",1458, ], speed: [ 29143902,4718343,"C",4616791,15239177,"R",9372070, ] },
	selection_sort: { size: [ 1584,1689,"C",5112,2123,"R",1445, ], speed: [ 16039648,5530968,"C",4842155,10134811,"R",5428080, ] },
	insertion_sort: { size: [ 1543,1572,"C",5240,2027,"R",1428, ], speed: [ 9769795,3005682,"C",3299240,6437330,"R",4060301, ] },
	merge_sort: { size: [ 2156,2503,"C","T",4270,"R",2219, ], speed: [ 3981830,2331044,"C","T",4028621,"R",2410181, ] },
	quick_sort: { size: [ 1697,1868,"C",5306,2517,"T",1767, ], speed: [ 3112806,1899078,"C",789770,3358937,"T",1786240, ] },
	counting_sort: { size: [ 1972,2311,"C","T",3737,"R",1818, ], speed: [ 1885437,1724489,"C","T",2137721,"R",1435174, ] },
	radix_sort: { size: [ "R","R","C","T","R","R","R", ], speed: [ "R","R","C","T","R","R","R", ] },
	shell_sort: { size: [ 1618,1797,"C",5575,2172,"R",1606, ], speed: [ 4513897,2337837,"C",1316330,3704984,"R",2458457, ] },
	heap_sort: { size: [ 1793,2211,"C",5660,2744,"R",1890, ], speed: [ 4957712,2478797,"C",1280269,5339768,"R",2336973, ] },
	shuffle: { size: [ 1893,2195,"C",5368,2263,"R",1550, ], speed: [ 3310575,2939404,"C",1008595,3023907,"R",2913575, ] },
};
