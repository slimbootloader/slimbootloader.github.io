Search.setIndex({docnames:["developer-guides/boot-flow","developer-guides/boot-options","developer-guides/boot-performance","developer-guides/build-system","developer-guides/configuration","developer-guides/contributions","developer-guides/debugging-with-udk","developer-guides/flashmap","developer-guides/fsp","developer-guides/ias","developer-guides/index","developer-guides/logging","developer-guides/memory-map","developer-guides/payload","developer-guides/shell","developer-guides/source-tree","developer-guides/stitching-ifwi","developer-guides/versioning","getting-started/build-host-setup","getting-started/build-source","getting-started/index","getting-started/misc-build-setup","how-tos/add-fastboot","how-tos/add-new-library","how-tos/add-new-payload","how-tos/boot-acrn","how-tos/boot-ubuntu","how-tos/boot-windows","how-tos/boot-zephyr","how-tos/change-boot-option","how-tos/collect-time-logs","how-tos/configure-memory-down","how-tos/create-ias-boot-image","how-tos/customize-build","how-tos/enable-pre-os-payload","how-tos/enable-verified-boot","how-tos/index","how-tos/integrate-multiple-payloads","how-tos/reduce-debug-message","how-tos/update-firmware","index","introduction/index","references/references","references/terminology","security/boot-guard","security/firmware-update","security/index","security/measured-boot","security/verified-boot","supported-hardware/apollo-lake-crb","supported-hardware/cfl-crb","supported-hardware/index","supported-hardware/qemu","supported-hardware/up2","supported-hardware/upxtreme","supported-hardware/whl-crb","tools/index","tutorials/ex1","tutorials/ex2","tutorials/ex3","tutorials/ex4","tutorials/ex5","tutorials/ex6","tutorials/ex7","tutorials/ex8","tutorials/index"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":1,sphinx:54},filenames:["developer-guides/boot-flow.rst","developer-guides/boot-options.rst","developer-guides/boot-performance.rst","developer-guides/build-system.rst","developer-guides/configuration.rst","developer-guides/contributions.rst","developer-guides/debugging-with-udk.rst","developer-guides/flashmap.rst","developer-guides/fsp.rst","developer-guides/ias.rst","developer-guides/index.rst","developer-guides/logging.rst","developer-guides/memory-map.rst","developer-guides/payload.rst","developer-guides/shell.rst","developer-guides/source-tree.rst","developer-guides/stitching-ifwi.rst","developer-guides/versioning.rst","getting-started/build-host-setup.rst","getting-started/build-source.rst","getting-started/index.rst","getting-started/misc-build-setup.rst","how-tos/add-fastboot.rst","how-tos/add-new-library.rst","how-tos/add-new-payload.rst","how-tos/boot-acrn.rst","how-tos/boot-ubuntu.rst","how-tos/boot-windows.rst","how-tos/boot-zephyr.rst","how-tos/change-boot-option.rst","how-tos/collect-time-logs.rst","how-tos/configure-memory-down.rst","how-tos/create-ias-boot-image.rst","how-tos/customize-build.rst","how-tos/enable-pre-os-payload.rst","how-tos/enable-verified-boot.rst","how-tos/index.rst","how-tos/integrate-multiple-payloads.rst","how-tos/reduce-debug-message.rst","how-tos/update-firmware.rst","index.rst","introduction/index.rst","references/references.rst","references/terminology.rst","security/boot-guard.rst","security/firmware-update.rst","security/index.rst","security/measured-boot.rst","security/verified-boot.rst","supported-hardware/apollo-lake-crb.rst","supported-hardware/cfl-crb.rst","supported-hardware/index.rst","supported-hardware/qemu.rst","supported-hardware/up2.rst","supported-hardware/upxtreme.rst","supported-hardware/whl-crb.rst","tools/index.rst","tutorials/ex1.rst","tutorials/ex2.rst","tutorials/ex3.rst","tutorials/ex4.rst","tutorials/ex5.rst","tutorials/ex6.rst","tutorials/ex7.rst","tutorials/ex8.rst","tutorials/index.rst"],objects:{},objnames:{},objtypes:{},terms:{"0000000c":[22,25],"000000ff":[22,25],"0x0":[6,25,29,31,32,39],"0x00":62,"0x000000":7,"0x00000001":11,"0x00000002":11,"0x00000010":39,"0x00000040":11,"0x00000056":35,"0x00001000":28,"0x0001f000":24,"0x000e":31,"0x001000":7,"0x00120000":24,"0x002000":7,"0x00200000":7,"0x00400000":11,"0x00500000":24,"0x0080":4,"0x008000":7,"0x00b8c000":24,"0x01":11,"0x01d000":7,"0x01e000":7,"0x01f000":7,"0x02":11,"0x020000":7,"0x04":11,"0x08":11,"0x1":[31,32,35,50,54,55],"0x10":[0,6,11,50,54,55],"0x10000":39,"0x100000":[7,32],"0x1000000":25,"0x10c000":28,"0x1100000":6,"0x120000":7,"0x140000":7,"0x149404":25,"0x1500":32,"0x150000":25,"0x15f000":7,"0x17f000":7,"0x180000":7,"0x18000000":62,"0x18000025":62,"0x1a0000":7,"0x1bf000":7,"0x1df000":7,"0x1e0000":7,"0x1e8000":7,"0x1f0000":7,"0x1f8000":7,"0x2":[31,50,54,55],"0x20":[0,11],"0x20000":39,"0x200000":6,"0x22":32,"0x3":[29,31,32,50,54,55],"0x30":0,"0x30000":32,"0x30300":32,"0x3f":6,"0x4":25,"0x40":0,"0x40000":[22,25],"0x50":0,"0x60":0,"0x6f36c":32,"0x7":4,"0x70":0,"0x770000":39,"0x77f000":39,"0x787ae000":39,"0x787af000":39,"0x7886f6a8":32,"0x78f000":39,"0x80":0,"0x80000000":11,"0x82531000":53,"0x9":4,"0x90":0,"0xa0":0,"0xa40000":28,"0xaa00000":[25,39,53],"0xaa000210":[50,54,55],"0xb0":0,"0xb4c000":28,"0xc0":0,"0xd0":0,"0xe0":0,"0xe000":39,"0xe42504":32,"0xedf000":39,"0xeef000":39,"0xefe248":39,"0xf0":0,"0xf000":39,"0xf8":0,"0xfef00000":6,"0xfef01d54":25,"0xfef05ff8":4,"0xfef80000":25,"0xfef88000":25,"0xff":0,"0xff9dc000":25,"0xffb2c000":25,"0xffe00000":[6,7],"0xffe01000":7,"0xffe1e000":7,"0xffe20000":7,"0xfff20000":7,"0xfff40000":7,"0xfff5f000":7,"0xfff7f000":7,"0xfff80000":7,"0xfffa0000":7,"0xfffbf000":7,"0xfffdf000":7,"0xfffe0000":7,"0xfffe8000":7,"0xffff0000":7,"0xffff8000":7,"0xfffffff8":7,"115200bp":[25,50,54,55],"115200n8":53,"1c00":29,"1mb":13,"1st":63,"256m":[6,28,58,60,61,62,63,64],"2nd":7,"42d8be0eaac5e7e109f487d4e241847e815b077a":27,"77f65eaf257fd5d":17,"8gb":31,"8mb":27,"8n1":[25,50,54,55],"8th":[50,54,55],"9th":[50,54,55],"abstract":13,"break":60,"byte":[17,32,37,53,62],"case":[2,3,4,9,13,25,31,41],"class":41,"default":[3,4,6,18,26,27,29,37,47,53,57,64],"enum":[0,11],"export":21,"final":[3,19,27],"function":[0,4,13,24,41,63],"goto":62,"import":[4,5,21,26,39],"new":[0,4,8,13,15,26,35,36,39,40,41,52,53,56],"null":32,"return":[26,29,31],"static":[61,62],"switch":[22,29,32,45],"try":[25,32],"var":7,"void":0,"while":[3,13,56],Adding:37,Bus:32,For:[1,4,6,8,9,11,13,14,17,19,24,25,29,31,33,37,39,41,49,50,53,54,55,56],IAS:[3,7,10,22,25,29,36,40],IDs:4,LTS:[18,26],NOT:27,NVS:12,Not:22,OSes:13,One:[4,11,17,19,35,44,56],The:[0,3,4,6,7,8,9,13,15,19,22,24,25,26,27,31,32,37,39,41,43,45,47,48,49,50,52,53,54,55,56,60],There:[2,32],These:[0,13,43],UFS:1,UOS:25,Use:[14,27,29,52,56,62],Used:[1,59],Using:21,With:7,Yes:41,_bpm:7,abl:[7,9,25],about:[26,27],acceler:2,access:[7,53],accord:37,achiev:47,acm0:7,acm:7,acpi:[9,11,12,27,42,43],acpica:18,acrn:[36,40],acronym:40,across:27,activ:[25,45],actual:[4,26,31],adapt:[25,53],add:[4,14,18,21,27,34,36,40,56,63],added:[6,25],adding:24,addit:[15,16,25,34,41,44,49,50,54,55],address:7,advanc:7,after:[4,13,14,25,26,31,34,57,60,61,62,63,64],again:[25,49,50,54,55],agent:6,agnost:13,agre:5,aim:2,air:41,algorithm:[2,37],align:[49,50,54,55],all:[4,7,13,15,19,25,29,31,43,48,56],alloc:[3,4],allow:[8,13,14,22,27,37,52,56],alreadi:29,also:[0,3,7,9,13,14,17,18,19,22,37,41],alt:61,altern:[31,45,53],among:3,anchor:48,android:13,ani:[14,22,25,27,29,30,39,52,53],anti:17,anyth:29,api:[8,43],apl:[19,25,27,28,39,49,53,56],aplfsp:[17,25],apollo:[4,6,7,24,27,40,41,51,53],apollolakeboardpkg:[22,25,27,39,49,53],app:[50,53,54,55],append:[37,64],applic:[22,28],approach:41,apr:27,apt:[18,21,22,25],architectur:[41,43],archiv:41,area:53,argument:[9,34,39,56],arrai:7,art:41,artifact:19,ascertain:47,ascii:[17,37],ask:[26,40],asl:[18,43],assembl:43,assign:51,assist:[0,45],associ:[4,32],assum:32,atom:49,attach:[31,56],attempt:[4,29],attribut:7,authent:[39,45],auto:[29,32],autom:[17,53],automat:[26,57],automot:56,avail:[4,5,19,50,54,55,56,59],avoid:[7,45],background:21,backup:53,base:[1,3,7,12,13,22,41,53],basetool:[27,41],basic:[6,27,31],bat:27,baudrat:6,becaus:[4,53],been:26,befor:[0,3,6,14,24,25,26,31,45,48,49,50,51,54,55,57],begin:4,behind:[19,21],belong:1,below:[7,9,28,34,39,50,52,54,55,56],benefit:[3,4],between:[22,25,44],bin:[6,22,25,27,28,29,32,34,39,49,50,52,54,55,58,60,61,62,63,64],binari:[7,8,9,13,19,25,31,34,39,43,50,54,55,56,57],bio:[3,4,16,25,39,49,53],bios_imag:[39,53],bios_image_nam:[49,50,53,54,55],bios_out:56,bit0:11,bit1:11,bit:[17,18,26,31,35],bld:[17,25],blddebug:17,block:[13,44],board:[0,3,4,6,7,15,17,19,22,25,26,31,36,39,40,41,51,56,61,62,63],board_init_phas:0,boardconfig:[3,6,17,24,33,34,35,61,62],boardid:[4,11,39],boardinit:0,book:40,boot:[3,4,7,8,9,10,11,13,14,15,16,17,22,31,36,39,40,41,43,45,46,51,58,59,64,65],boot_imag:[1,53],boot_image_typ:1,boot_loader_vers:17,bootabl:[29,32,50,53,54,55],bootflag:1,bootlloaderversionguid:17,bootload:[4,11,13,17,22,25,27,28,39,41,43,52],bootloadercommonpkg:[13,15],bootloadercorelib:12,bootloadercorepkg:[11,15,22,25,32,33,34,35,39,56],bootmediumpcibas:[25,32],bootpolici:39,bootslot:[25,32],both:[4,18,27,34,41,47,49,56],box:26,bp0:[11,39],bp1:[27,39],bpdtobb:27,branch:5,brick:[7,25,45],brief:15,bsd:[5,41],bsf:32,btguard:25,buffer:[11,41],build:[1,4,6,7,9,10,11,13,14,15,17,20,21,22,24,26,27,28,30,31,32,34,35,36,37,39,40,41,47,51,60,61,62,63,64,65],build_numb:17,build_qemu:28,build_up2:28,buildload:[0,3,15,19,21,25,27,28,34,37,39,49,50,52,53,54,55,56,57,60,61,62,63,64],buildnumb:17,built:[3,4,13,14,19,27,28,41,45,46,52],bus:32,busi:4,button:[26,49],bzimag:[32,52],c815bbfb25461c98:25,cabl:[22,25,53],cach:[15,43],calcul:[32,47],call:[4,8,10,31,40,43],camera:2,can:[1,3,4,6,8,9,11,13,14,17,18,22,24,26,27,29,31,34,35,37,39,41,45,47,49,50,52,53,54,55,56,57,58,59,60,61,62,63,64],cannot:4,capabl:[3,39],capsul:[39,45,56],capsuleimag:39,capsules:39,captur:[36,40],car:[2,6,15],casper:26,cdata_pid_gpio_tag:4,cdata_usb_tag:4,cdrom:26,central:4,certain:[17,19,41],cfg:[4,26,32,53],cfg_pk:35,cfgd:39,cfgdata:[4,27,31,37,64],cfgdata_bootopt:29,cfgdata_ext_up2:31,cfgdata_int_leafhil:27,cfgdata_memori:31,cfgdataext_brd1:[37,64],cfl:[50,54,55],ch0_dramdens:31,ch0_ranken:31,ch1_dramdens:31,ch1_ranken:31,ch2_dramdens:31,ch2_ranken:31,ch3_dramdens:31,ch3_ranken:31,chain:[3,15,25,41,46,48],chang:[0,1,4,5,6,14,15,25,26,31,32,34,35,36,37,40,49,50,53,54,55,56,57,61,62,63],channel:6,chart:1,check:[24,28,31,49,50,54,55,61,62,63],checkout:27,checksum:32,chip:[25,31,49],chipset:43,chmod:25,choic:[3,8,41],choos:3,circuit:31,clean:[3,20,56,57],clear:39,cli:[40,65],clone:[5,19,21,25,27],close:[26,59,61],cmake:28,cmd:[18,25,28,32,59],cmdline:[22,25,32],cn16:[25,50,53,54,55],cn18:[50,54,55],cnfg:7,code:[0,3,4,6,8,10,13,15,17,19,24,25,27,31,41,48,56,57,63],coffe:[40,51,54,55],coffeelakeboardpkg:[50,54,55],collect:[9,30,36],com5:6,com:[5,8,18,19,25,27,56],combin:41,come:[3,4,14,48],command:[3,6,9,14,17,19,22,25,27,29,32,34,37,39,40,52,53,57,58,59,60,61,62,63,64],commerci:8,commit:[25,27],common:15,commonli:[4,11],commun:[5,22],compani:21,compar:[3,47,53],compil:[3,11,15,18,25,41,56,57,60,61,62,63,64],complet:[9,22,25,27,39,43,57,60,61,62,63,64],complex:41,compliant:[9,13,43],compon:[0,4,10,16,25,29,31,32,35,39,44,45,47,48,56],compress:[2,7,37],compression_algorithm:37,compromis:47,condit:5,conduct:57,conf:6,config:[21,25,26,53],configdatablob:3,configdatastruct:3,configeditor:56,configur:[0,1,2,3,6,7,8,10,11,14,15,17,21,22,24,25,29,32,33,36,37,39,40,41,45,49,50,54,55,59,61,62,65],confirm:[25,53],conflict:4,conjunct:47,connect:[6,22,25,49,50,54,55],connector:[25,31,49,50,54,55],consid:[2,3,18,37,47],consist:[0,9,43],consol:[3,6,11,17,25,26,28,39,49,52,53,61,63,64],constraint:31,consum:[8,27],contact:31,contain:[0,1,3,7,9,13,15,18,19,21,25,39,43,45,49,50,53,54,55,56,61,62],content:[7,14,27],continu:26,contribut:[10,40,41],contributor:5,control:[0,1,11,13,15,24,25,34,41,50,54,55,61],conveni:39,cook:40,copi:[7,18,22,25,26,27,32,37,39,53],core:[8,15,17,50,52,54,55],coreboot:64,coremajorvers:17,coreminorvers:17,correct:31,correctli:[21,25],correspond:[35,49,50,54,55],corrupt:[4,7,45],count:25,coupl:[13,24],cpu:[0,14,59],cpuid:[14,59],crb:[27,40,41,51,54],creat:[4,6,9,13,22,25,26,27,28,36,37,39,40,41,50,53,54,55,56],critic:[7,46],cryptograph:[44,48],cryptographi:25,cse:[35,39],csm:41,csmd:39,csme:39,csme_fw_update_driv:39,ctrl:[52,58,60,61],current:[0,14,25,41,49,50,54,55,59,63],currentboot:63,custom:[1,4,10,13,25,26,31,36,37,40,41,47,49,50,53,54,55,56,65],data:[0,1,3,4,7,8,13,14,17,25,27,29,36,39,40,45,53,56,59],datasheet:31,dboard:28,ddr:31,debug:[0,9,10,11,14,17,25,27,31,36,37,40,41,51,53,56,57],debug_error:11,debug_info:11,debug_init:11,debug_output_device_log_buff:11,debug_output_device_serial_port:11,debug_property_assert_breakpoint_en:11,debug_property_assert_deadloop_en:11,debug_property_clear_memory_en:11,debug_property_debug_assert_en:11,debug_property_debug_code_en:11,debug_property_debug_print_en:11,debug_verbos:11,debug_vs2015x86:27,debug_warn:11,debugag:6,debugg:6,debuglib:11,debuguart:56,decid:24,dedic:3,dediprog:[19,27,49,50,53,54,55],defect:7,defin:[0,4,7,11,45,56],definit:11,deidprog:[49,50,54,55],deliv:43,delta:56,demonstr:62,depend:[1,10,13,22,23,24,32,41,45,56],deploi:[3,41],deposit:39,describ:[7,22,25,31],descript:[0,3,7,11,15],design:[1,2,4,9,13,18,24,27,40],desir:[9,41],desktop:[26,50,54,55],dest:32,destin:11,detail:[0,3,9,11,13,17,18,19,25,29,31,32,37,39,41,49,50,53,54,55],detect:[32,49,50,54,55],determin:[3,7,63],dev:[18,25,26,28,53],devaddr:29,develop:[6,8,14,17,39,40,41,43,53,56,65],devic:[0,1,2,4,13,14,22,25,31,32,39,41,43,44,47,52,59,60,63,64],devinst:1,devnum:[25,32],devtyp:[1,25,29,32],diagnosi:14,diagram:0,differ:[1,3,32,41,44,45,61,63],difficult:13,digest:35,digit:53,dijkstra:46,dimm:31,direclti:41,direct:28,directli:[5,8,53],directori:[0,3,15,18,22,25,27,32,34,37,39,49,50,52,53,54,55],dirti:17,disabl:[6,34,35,41,49,50,54,55],disassembl:43,disconnect:[49,50,54,55],discret:47,disk:32,displai:[14,53,59,61],distanc:10,distro:22,divers:4,divid:0,dlt:[4,27,31,37,49,50,54,55,56,64],dmesg:32,docker:[20,40,43],dockerfil:21,document:41,doe:[41,44,47,52],doesn:41,don:26,done:[27,39,44,57,60,61,62,63,64],dougla:41,down:[12,36,40],download:[6,8,20,21,22,25,26,27,32,49,50,52,53,54,55],dram:31,drive:[22,25,26,27,52,60,63,64],driven:13,driver:[27,39],dsc:[3,4,11,27,29,31,56],dual:31,dualranksupporten:31,due:[7,31],dump:[14,32],dure:[0,3,7,15,17,25,26,31,39,45],dword:56,dynam:[49,50,54,55],e3900:49,each:[0,7,15,39,48,49,50,54,55],earli:[25,53],earlycon:53,eas:[4,8,15],easier:[4,37],easili:8,echo:26,edc112328cf3e414:25,editor:[4,8,29,31,37,40,49,50,54,55,62],edk2:27,edk:[3,13,27,33,42],edkii:[5,41],edksetup:27,edsger:46,effort:3,efi:[25,27,37,64],either:[13,50,54,55],elf:[9,13,22,25,28,41],els:26,email:[25,41],emb:7,embed:[3,4,17,31,41,43,64],emmc:[1,2,4,9,22,25,26,29,32,51],emori:43,emporari:43,empti:[6,7,22,32],emti:7,emul:[11,27,51,57,58],enabl:[0,3,6,13,22,36,40,41,44,47,48,49,61,62],enable_pre_os_check:34,enable_source_debug:6,enable_splash:61,encapsul:9,encourag:5,end:[7,10,27,40,45,63],endoffirmwar:0,endofpost:25,endofstag:0,engin:43,ensur:[26,31,46,48],ent:28,enter:[14,22,29,30,32,36,39,52,53,59],entir:44,entri:[1,24,28,29,32,34,35],entrydesc:7,enumer:32,env:28,environ:[3,6,17,19,20,27,28,40,53],eof:53,epayload_s:24,epld:[27,37],equip:53,error:[11,44],essenc:8,essenti:[18,25],establish:6,etc:[0,1,2,3,4,6,9,14,27,53],etcher:[50,53,54,55],ethernet:22,everi:2,everyth:10,exact:18,examin:[7,14,31],exampl:[11,13,17,19,22,25,27,29,31,32,37,39,41,49,50,53,54,55,56,59,62],exclud:14,exclus:15,exe:[6,58,60,61,62,63,64],exec:21,execut:[6,13,22,25,28,34,41,44,48,58,59,60,61,62,63,64],exercis:[40,65],exis:[50,54,55],exist:[4,19,24],exit:[14,22,25,26,29,32,39,52,56,59,60,61],expect:[22,25,34,47],explain:6,expos:8,ext2:[1,9],ext4:26,ext:4,extend:[9,13,15],extens:[3,41],extern:[4,7,13,22,37],extra:[1,53],extract:[32,53],factori:[25,39,53],fail:[0,29,39,41,45,48,62],failur:[7,45],fallback:[1,29],famili:[50,54,55],familiar:[3,53],fast:[2,41],fastboot:[36,40],fat32:[25,26,32,53],fat:[1,9,22,25,26,29,32,39],fault:13,fdbg:[17,25],fdf:34,featur:[1,2,3,4,13,15,17,22,34,40,45,47,49,50,53,54,55,56,65],few:[25,53],file:[0,1,3,6,8,9,10,11,15,17,18,19,22,25,26,27,28,29,31,32,33,37,39,49,50,52,53,54,55,56,58,60,61,62,63,64],find:[25,32],findconfigdatabytag:4,fine:0,finish:[13,26,34,39],firewal:[19,21],firmwar:[0,7,10,13,14,15,16,17,25,36,40,41,42,43,44,46,47,49,50,54,55,56],firmwareupd:[15,64],first:[6,7,17,19,22,25,29,32,41,53,57],fit:[13,37],fix:12,flag:[7,17,25,29,32,39],flash:[0,1,6,10,13,20,22,26,27,28,32,36,37,39,40,51,56,61,62],flash_map:7,flash_map_address:7,flash_map_entry_desc:7,flashabl:[22,32,43,56],flashrang:6,flexibl:[1,3,37,41],flow:[1,10,13,15,25,31,39,40,41,45,50,54,55],flowcontrol:6,folder:[15,19,27,56,57],follow:[0,1,5,6,7,11,15,18,22,24,25,26,27,28,31,32,34,35,37,39,41,45,53,56,57,58,59,60,61,62,63,64],footnot:4,footprint:[3,4,14,37,56],fork:5,formal:[49,50,54,55],format:[3,4,9,13,22,25,32,34,37,39,45,52,56,60,63,64],found:[4,5,27,29,31,32],four:0,fpt:25,fpt_3:25,fpt_xxx:25,framework:3,free:28,frequenc:2,frequent:40,fresh:27,from:[0,4,6,7,8,10,11,14,15,17,18,25,26,27,28,29,31,32,36,41,45,48,49,51,52,56,63],fs1:25,fsp:[8,12,15,17,25,31,43,56,57],fspbin:56,fspdebug:[17,56],fsppath:56,fspv:[17,25],fstype:[1,25,29,32],ftdi:49,fulgan:18,full:[6,13,24,39,50,54,55],full_server_url:6,fulli:[5,15,56],further:0,futur:41,fw_boottim:25,fwimag:39,fwu:45,fwu_pk:35,fwu_pld:35,fwuimag:[25,39],fwup:7,fwupdat:[14,25,39],g4a7c422182:28,gail:10,gather:[50,54,55],gbc34b1aa09:28,gbootloaderversionguid:17,gcc:[3,18,25,41],gdb:6,gen_cfg_data:[27,37,64],gen_end_of_post:25,gencapsulefirmwar:[25,39],gener:[0,2,3,4,10,13,17,25,27,32,39,45,49,50,52,53,54,55,56],genericx86:52,get:[3,14,18,21,22,25,27,28,31,32,40,53,63],getboardidfromgpiopin:4,getsecmod:25,getvar:25,git:[5,17,19,21,25,27],github:[5,8,19,25,27,41,56],given:[4,31,34],global:[21,25,33],gnd:53,gninja:28,gnu:41,goal:4,goe:39,golden:47,good:[41,47,53],gpio:[4,49],gpt:[1,22],granular:[0,17],graph:[10,40],graphic:[4,31,52,61,64],grep:32,ground:41,group:[4,21,22,25],grub:[32,53],guard:[40,46,49,50,54,55],gui:[22,56],guid:[5,17,22,25,26,27,28,31,39,40,41],guidelin:[10,40],halt:[0,44,48,60],hand:13,handbook:5,hang:31,happi:41,hard:17,hardwar:[1,2,3,7,13,16,19,25,31,32,40,41,44,45,48,50,54,55,56],has:[4,6,29,41,44],hash:[2,4,25,32,39],have:[7,15,25,26,27,31,41,49],have_verified_boot:[35,62],hbg4a2428525f7:25,hddimg:52,header:[3,7,8,9,50,53,54,55],headerlength:17,headerrevis:17,heap:28,heci:[25,39],hello:28,help:[3,9,14,39,41,56,59],helper:[0,15],here:[6,9,11,15,22,25,28,32,61,62],hex:[25,29,32,56,62],high:9,highli:[9,25],hill:[27,41,49],hit:26,hob:[12,13,14,17,27,59],hook:0,horton:41,host:[6,21,22,25,43,49,50,53,54,55],hour:[17,25],how:[6,19,26,27,31,36,37,47,49,50,53,54,55,57,58,59,60,61,62,63,64],howev:13,http:[5,8,18,19,21,25,27,56],http_proxi:21,https_proxi:21,hub:41,human:4,hwdev:32,hwpart:[1,25,29,32],hypervisor:[36,40,56],hypervsior:13,ia32:27,ias1:7,ias2:7,ias:32,iasimag:[22,25,29,32,56],iasimage1:[22,25],iasl:[18,25,41],ibb:44,ide:[52,60,63,64],idea:[41,53],identif:17,identifi:39,idx:[25,29,32],ifwi:[4,6,10,20,26,27,28,39,40,43,49,50,52,53,54,55],ifwi_in:56,ifwi_out:56,ilicon:43,illustr:0,imag:[0,1,2,3,4,6,7,10,11,13,14,17,19,21,22,24,25,26,27,28,29,36,37,39,40,43,45,49,50,52,53,54,55,61,62,63,65],image_build_info:17,imageid:17,imagetyp:1,imagevers:17,img:[53,60,63,64],imgtyp:[25,29,32],immedi:6,impact:11,implement:[0,8,13,15,17,24,31,41,45,47],includ:[1,3,4,8,9,16,18,25,27,28,32,34,39,41,43],inclus:13,incorpor:39,increment:57,independ:[13,15],index:[22,25,29,53,56],indi:18,indic:1,individu:7,industri:53,info:32,inform:[5,7,8,11,14,17,25,27,31,59],infrastructur:[3,4,8,44],ingredi:[19,43,49,50,54,55],ini:6,init:[11,32],initi:[8,10,11,14,15,22,31,40,41,43,44,48,56],initjump:11,initphas:0,initram:9,initramf:32,initrd:[26,32,53],input:[49,50,53,54,55,56],insert:[25,27],insid:[21,25],instal:[6,18,21,22,25,26,27,32,51],instanc:1,instead:[4,7,15,26,34,37],instruct:[16,26,27,32,53],integr:[8,13,22,24,36,40,43,44,46,47],intel:[4,6,7,8,11,16,22,25,31,39,41,42,43,44,47,49,50,52,53,54,55,56],intelfsp:8,interchang:4,interfac:[4,8,10,22,25,29,30,40,41],intern:[3,4,12],internet:53,interrupt:45,introduct:[5,40],invok:15,iot:[41,43,53],iso:26,isrespon:[22,25],issu:41,isvn:[11,17,25],item:[4,25],its:[4,27,29,41],itself:25,iver:[11,17,25],j3h1:[50,54,55],j4a1:[50,54,55],j5d1:49,j7h1:[50,54,55],j7h2:[50,54,55],j8j1:[50,54,55],j9b7:[50,54,55],jenkin:17,jump:[28,39],junip:49,just:[25,26],keep:45,kei:[4,7,8,14,22,25,29,30,32,35,39,50,52,53,54,55],kernel:[9,22,25,26,32,39,53],kernels:32,kit:[6,41,43,53,56],known:[7,39,47,49,50,54,55],label:49,lake:[4,6,7,24,27,40,41,51,53,54],languag:43,last:[22,25],latest:[8,18],launch:[0,6,13,14,27,41,57],layer:[22,25],layout:[0,1,10,12,26,31,61,62],lba:25,lbaaddr:25,lbaoffset:[25,29,32],ldr:12,leaf:[27,41,49],leafhild:49,leafhill_8mb_ifwi:27,learn:[57,58,59,60,61,62,63,64],legaci:41,length:[7,25],lengthi:25,level:[0,4,9,10,11,15,27,40,41,43,52],librari:[0,3,4,13,15,36,40,63],licens:[10,41],like:[19,27,32,41],limit:[6,13,37],line:[6,9,27,32,37,39,52,53,56,62,64],linear:0,link:[31,40],linux:[3,6,9,13,19,20,21,22,26,32,40,51,52,56,58,62,63,64,65],list:[1,11,14,17,25,29,41,56,59],lite:22,lldr:[27,34,37,64],load:[0,4,8,9,25,29,32,34,36,37,39,41,45,52,53,56],loader:[7,8,12,13,25,26,34,39,43,52],loader_rsvd_mem_s:24,loaderplatformdataguid:11,local:52,locat:[0,6,7,8,24,32,37,45,53,62,63],log:[3,4,10,21,31,38,40,63],logic:[15,25,32,41],login:[21,52,60],logo:9,look:[32,63],loop:52,loos:[13,24],lot:[61,62],low:12,lpddr4:31,lpss:49,luck:53,lz4:[2,27,34,37,64],lzma:[27,37,64],machin:[6,28,41,45,52,58,60,61,62,63,64],magic:56,mai:[3,9,11,25,28,31,37,41,49,50,52,53,54,55],mail:41,main:[0,34,43,44],maintain:[27,41,46,48],mainten:6,major:17,make:[6,7,15,31,32,36,37,49,50,53,54,55,62],maker:[28,53],manag:4,mandatori:[2,9],mani:[3,4,8,9,17],manifest:7,manner:15,manual:[19,29,39],map:[10,14,27,31,37,40,59,62],marker:56,mask:31,mass:32,master:3,match:[31,37,47],mbr:[1,32],mean:1,measur:[40,41,44,46],mechan:[22,31,41,45],media:[2,15,53],medium:1,mem:[12,14,25,32,59],memori:[0,2,4,7,10,11,14,15,24,27,34,36,40,41,43,59],memory_cfg_data:31,memorysizelimit:31,mempoolcurrbottom:12,mempoolcurrtop:12,mempoolend:12,mempoolstart:12,menu:[6,26,53],messag:[3,11,14,25,26,31,32,36,39,40,53,56],method:[25,52],mib:32,micro:[25,49],microb:25,microcod:[7,14,59],microsoft:[6,18,27,41],might:26,minicom:[25,50,54,55],minim:[8,52],minimum:[3,11],minor:17,minut:25,misc:[1,60,63,64],miscellan:[18,19,20,40],miss:37,mkdir:[25,27,28,52],mkfifo:6,mmap:[14,59],mmc:[25,29,32],mmcblk0p1:53,mmcblk0p2:53,mmcblk1p1:26,mmcblk1p2:26,mmio32:53,mnt:[26,52],mobil:[50,54,55],mode:[11,22,36,39,41],model:[14,31,53,59],modifi:[3,11,14,25,29,31,33,57,59,61,62,63],modul:[7,14,24,31,41,43,44,47],modular:[13,15,41],mon:[52,58,60,62,63,64],monolith:41,more:[3,5,8,9,11,13,17,18,19,25,29,32,37,39,41,49,50,53,54,55],most:[3,4,61,62],mount:[26,52],move:12,mrc:7,mrcd:7,msr:[14,59],mtrr:[14,59],multi:[32,37,56],multiboot:[9,13,22,25,42],multilib:[18,25],multipl:[0,1,3,10,11,15,36,39,40,41,64],must:6,mutual:15,mydisk:[60,63,64],mydriv:52,n3350:53,name:[7,11,19,21,25,26,34,37,56],nasm:[18,25,41,43],necessari:13,need:[3,25,27,34,41,49,50,52,53,54,55,56],network:[21,39,53],never:31,newer:[8,18,25,41],newimag:39,newli:52,next:[0,49],ninja:28,noaccesslimit:6,nograph:[6,28,52,58,60,62,63,64],non:[7,13],nonandroid:25,none:[29,52,60,63,64],normal:[1,26,32,39],note:[25,27,39],noth:29,now:[6,25,26,52],number:[1,2,17,25,32,56],nvme:1,object:31,observ:[25,39,53],obtain:31,occupi:16,oem:7,oemk:7,off:[2,13,49,50,54,55],offset:[7,50,54,55,62],often:31,onc:[4,22,44,52],one:[0,2,3,4,7,9,13,14,15,17,25,27,29,32,37,39,45,49,62],onli:[1,15,22,25,34,35,49,50,54,55],onto:[25,31,32],open:[3,5,6,8,22,26,27,31,32,37,40,41,43,62],openssl:[18,25],openssl_path:18,oper:[6,25,41,43,56],opt:6,optim:[2,4,41],option:[2,3,4,6,8,9,10,14,19,21,22,25,26,31,32,36,37,39,40,41,49,50,53,54,55,56,59,61,62],order:[4,25,29,40,41,43,52,53,60,64,65],org:18,organ:15,os_boot_medium_typ:1,os_boot_opt:1,os_file_system_typ:1,os_pk:35,os_tmpl:32,osbootoptionguid:1,osbootoptionlist:63,osload:[13,15,27,34,37,53,64],ota:[39,41],otg:[22,25],other:[9,15,16,19,37,53],otherwis:[4,31],our:41,out:[6,21],output:[0,3,6,11,22,25,27,28,31,32,39,49,50,52,53,54,55,56,58,60,61,62,63,64,65],over:[6,13,41],overrid:63,own:[14,53,56],oxbow:49,pack:[4,9],packag:[10,18,21,22,23,24,25,40,42,43,56],page:[22,26,27,32],paramet:[31,32],part:[25,32],partit:[1,9,22,25,26,29,32,39,45,53],pass:[17,34,39,45],patch:[3,5,7,27],patent:[5,41],path:[18,56],payload:[0,7,9,10,11,15,28,36,39,40,41,45,53,56,65],payload_bar:24,payload_fil:37,payload_id:37,payload_load_high:24,payload_s:24,payloadbin:[27,37],payloadid:[27,37,64],payloadmain:24,payloadpkg:[13,15,24,27,37],pcb:31,pcd:11,pcddebugoutputdevicemask:11,pcddebugpropertymask:11,pcdfixeddebugprinterrorlevel:11,pci:[11,14,59],pem:[22,25,32,39],per:[17,34],perf:[14,30,59],perform:[0,6,9,10,11,13,14,15,25,39,40,41,56,59],peripher:53,perman:12,permit:13,persist:27,perspect:4,pflash:[6,28,52,58,60,61,62,63,64],phase:0,philosophi:40,physic:31,pin:[4,49,53],pinout:53,pip3:25,pip:25,pipe:6,place:[37,39],plan:[41,53],plat_data:56,platform:[3,6,7,10,13,14,15,16,17,19,22,24,25,27,31,32,33,34,37,39,40,41,43,44,45,47,48,49,50,51,53,54,55,56,61,62,63,64],platform_foo:[0,3,4,8,34],platform_nam:[3,21,34],platformid:[4,31,49,50,54,55,56],platformid_cfg_data:[4,31],platformnam:39,platformservic:0,pld:[12,35],pld_rsvd_mem_siz:24,pleas:[8,19,25,27,31,39,41,49,50,54,55],plu:[5,41],point:[0,15,24,26,41],polar:[49,50,54,55],polici:7,pool:12,port:[0,3,6,8,14,15,21,22,25,27,41,49,50,53,54,55,56,59],posit:56,possibl:[7,31],post:[0,1,7,10,15,36,41,56],postconfiginit:0,postmemoryinit:0,postpayloadload:0,postpcienumer:0,postsiliconinit:0,posttempramexit:0,posttempraminit:0,power:[6,25,41,45,49,50,54,55],practic:65,pre:[0,10,13,15,36,40,47,51,56],prebuild:[1,3],preconfiginit:0,prememoryinit:0,preoscheck:34,prepar:[22,25,39],prepayloadload:0,prepcienumer:0,prerequisit:[10,36,46,51],presiliconinit:0,press:[14,22,25,26,29,30,39,52],pretempramexit:0,pretempraminit:0,prevent:44,previou:26,previous:34,primari:[27,41],print:[14,17,31,59],priv_kei:39,privat:39,private_kei:22,privkei:39,proc:32,proce:39,procedur:[22,37],process:[3,7,10,15,17,25,27,39,40,46,48,56],processor:[2,49,50,54,55],produc:27,product:[3,8],program:[6,8,22,56,58,60,61,62,63,64],programm:[19,25,49,50,53,54,55],progress:45,project:[5,17,25,41],projmajorvers:17,projminorvers:17,prompt:[22,57,58,59,60,63],properli:[6,25,32],protect:[4,17,44],protocol:[22,41],prov:27,provid:[0,1,3,4,8,11,13,15,17,22,26,27,31,32,34,41,43,48,50,54,55,56,65],provis:[7,22,25],proxi:[19,20,40],proxy_host:21,proxy_port:21,pthon:[19,56],ptt:[44,47],pub:18,pull:5,purpos:[11,13,14,37],putti:[25,50,54,55],puzzl:41,pwd:21,pyld:7,python27:18,python3:25,python:[3,18,19,21,25,27,28,34,37,39,41,49,50,52,53,54,55,56,57,60,61,62,63,64],python_hom:27,q35:[6,28,52,58,60,61,62,63,64],qemu:[6,7,11,18,19,25,36,37,40,41,51,56,59,60,61,62,63,64,65],qemu_x86:28,qemuboardpkg:[37,61,62,63,64],qemuimg:[60,63,64],qemusata:[60,63,64],question:40,quickli:[2,9],quiet:[26,39],quit:[25,29,58],r01:49,r_a:7,r_b:7,ram:[15,43],rank:31,raw:[1,9,25,32,52,60,63,64],reach:53,read:[4,14,31,39,49,50,54,55,59],readabl:4,readi:39,readytoboot:0,real:[4,39],rear:2,reason:14,reboot:[14,26,27,45],rebuild:[27,29,33,60,61,62,63,64],recip:36,reclaim:12,recommend:[24,25,57],recompil:[3,7],record:[44,47],recov:7,recoveri:7,recurs:27,reduc:[36,40],redund:[1,7,13,45],refer:[1,17,19,27,39,40,53],refresh:[40,51,54,55],region:[3,4,13,16,25,37,53,56],regist:[14,59],rel:56,relat:[4,9],releas:[8,9,10,11,14,17,18,22,30,41,49,50,54,55,56,57,61],releasebuild:18,reli:[27,39,53],reliabl:46,remot:[6,47],remov:[19,26],renam:52,repeat:31,replac:[35,56],repo:[5,27],report:47,repositori:21,repres:31,reproduc:17,reprogram:53,request:45,requestedact:[22,25],requir:[3,6,13,15,17,18,19,21,22,24,25,26,27,37,39,41,43,44,46,49,50,52,53,54,55],reserv:[1,4,7,12,17,37],reserved1:56,reserved2:56,reserved3:56,reset:[0,14,15,22,25,30,39,59],resid:13,respons:41,restor:25,result:[22,25,28],retriev:4,rev:[17,25],review:41,revis:17,reward:25,rmtcheckrun:31,rmtmode:31,robust:45,rollback:17,rom:41,romsiz:7,root:[22,25,26,27,32,39,41,44,48,53,60],rootflag:32,rot:48,rsa:[4,9,25,32,39],rsa_private_kei:32,rsvd:7,rto:[41,43],rufu:[26,50,53,54,55],rule:15,run:[6,21,22,25,26,28,32,34,39,40,41,53,56,60,65],runtim:[4,8,11,13,36],safe:[41,45],same:[4,25,27,32,56,64],sampl:[28,32,39],sata:[1,25,29,32],save:[32,53,61,62],sb_apli:[17,25],sb_qemu:11,sbh:17,sbid:[11,17,25],sbl:[0,1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,22,24,26,27,28,29,30,31,32,33,34,35,36,37,39,40,41,43,44,45,46,47,48,49,50,51,53,54,55,60,61,62,63,64,65],sbl_cfl_ifwi:[50,54,55],sbl_ifwi_imag:53,sbl_ifwi_image_nam:[49,50,53,54,55],sbl_lfh_ifwi:49,sbl_lfh_ifwi_uefi64:27,sbl_tree:[61,62,63,64],sbl_up2_ifwi:25,sbpdt:27,scalabl:43,scenario:[1,39],schemat:31,screen:[2,9,27,41,57,60,61,62,63,64],script:[0,3,6,7,15,19,25,27,39,49,50,53,54,55],search:41,sec_mod:25,secmod:[25,39],second:[7,25,29,52],section:[4,25,34,41],secur:[2,3,4,9,13,14,17,40,41,45,47],securevernum:17,see:[1,3,8,9,11,13,16,17,18,19,21,23,24,25,29,31,32,37,38,39,41,45,47,48,49,50,53,54,55,56,57,60,61,62,63,64],seem:10,select:[4,22,25,26,62],self:[6,13,34,35,61,62],semant:17,send:25,sendwack:25,sent:11,separ:[6,41,64],serial:[6,11,17,22,25,26,28,49,50,52,53,54,55,58,60,61,62,63,64],server:6,servic:[13,56],set:[4,6,18,19,20,25,27,40,45,49,50,53,54,55,56],setup:[15,17,19,25,28,32,51],setupbootimag:[25,32],setupsectorss:32,sf100:[49,50,53,54,55],sf600:[49,50,53,54,55],sg02:7,sg1a:7,sg1b:7,sha1:[17,25],shall:[15,29,39],share:56,shell:[10,22,25,26,29,30,31,32,36,40,45,51,58,60,61,64,65],shoot:14,should:[0,3,15,25,26,30,31,32,34,37,46,47,52],show:[26,37,39,56],shown:[1,7,9],shutdown:60,sign:[2,25,32,39,45],signag:53,signal:[45,53],signatur:[7,9,17,32,62],significantli:11,silicon:[4,8,15,43,56],similar:[3,22,37],simpl:[17,28],simpler:10,simpli:[6,31],simplic:[41,46],singl:[3,6,31,37,39,56],sitch:56,site:18,size:[2,3,6,7,13,24,25,27,31,32,39],skip_stage1a_source_debug:6,slim:[4,11,25,27,28,39,41,43,52,56],slimboot_source_tre:21,slimbootload:[0,6,19,25,27,28,50,52,54,55,57,58,60,61,62,63,64],small:[14,41,43],smaller:[3,37],smm:[13,41],soc:[12,15,43],softdebugg:6,softwar:[1,4,18,27,41,43,49,53],solder:31,solut:8,some:[2,3,7,13,31],someth:26,sometim:25,sourc:[3,5,7,8,10,13,19,22,25,27,28,31,32,40,41,43,48,52,56,57,63],sourcevers:17,space:37,spd:31,special:13,specif:[0,4,6,8,9,13,14,15,19,33,41,42,45,56,59,63,64],specifi:[4,17,18,25,29,31,37,49,50,54,55,56],spi:[1,25,27,36,39,43,49,50,53,54,55,56],spiiasbin:[22,25],splash:[2,9,26,40,41,65],squar:53,src:32,ssl:18,stack:12,stacktop:12,stage1a:[6,15,25,39,52],stage1aboardinit:63,stage1b:[4,15,25,35,39,52],stage1bboardinit:63,stage1bboardinitlib:4,stage2:[15,28,35,39,52,62],stage2boardinit:63,stage2boardinitlib:63,stage:[0,2,4,7,13,15,41,45,62],stamp:[17,25],standard:[4,9,41,43],start:[2,6,21,22,24,25,28,31,39,40,45,51],startup:11,state:[14,45],statu:[25,32],stdio:[52,58,60,61,62,63,64],step:[0,10,15,20,21,22,24,25,26,27,28,31,32,39,40,41,53,56,57,58,59,60,61,62,63,64],stitch:[4,6,7,10,20,22,25,27,29,31,32,39,40,41,51,52,65],stitch_compon:[19,25,27,39,49,50,53,54,55,56],stitch_data:56,stitch_in:56,stitchload:[25,27,39,49,50,53,54,55,56],storag:[27,32,44,47],store:9,strict:17,string:[17,32,39,63],struct:[1,7,17,56],structur:[1,3,7,9,10,13,17,27,40,56],studio:[3,18,27,41],style:10,subcommand:[19,25,29,56],subcompon:[7,43],subdirectori:15,submit:[5,41],submodul:27,subscrib:41,subsequ:[29,48],subt:32,success:[4,19,25,32,39,45,56],successfulli:[27,39],sudo:[18,21,22,25,26,52,53],superio:41,support:[1,3,4,9,10,14,15,16,17,18,19,24,25,29,31,32,36,39,40,41,42,43,44,45,47,48,53,56,59,64],sure:[32,49,50,53,54,55,62],sver:[17,25],svn:17,swap:[7,22,25,29],swpart:[1,25,29,32],synchron:28,syntax:56,syssiz:32,system:[0,1,2,4,6,9,10,14,15,22,25,28,31,32,40,41,43,44,47,52,56,58,59,60,61,62,63,64],tabl:[9,22,27,31,50,54,55],tag:4,take:[25,41,56],target:[1,3,6,13,19,25,32,41,49,50,54,55,56,57],tbd:31,tcp:6,technolog:[44,47],tell:37,temp:39,templat:56,temporari:12,term:[5,31],termin:[6,9,26,49],terminolog:40,test:[14,22,28,31,39,52],testsigningprivatekei:[22,25,32,39],text:9,than:[13,37],thei:15,them:[5,7,44,47,49],thi:[1,2,3,4,6,8,9,13,18,19,22,25,26,27,31,32,34,37,39,43,49,50,54,55,56,57,58,59,60,61,62,63,64],those:3,threada:28,threadb:28,three:43,through:[13,45,46,63],thru:28,thu:7,tianocor:27,tightli:[13,24],till:15,time:[1,2,3,4,11,17,25,27,34,35,36,39,40],tkinter:56,tmp:6,token:41,toler:13,tool:[3,4,6,15,19,20,22,25,26,27,32,35,37,39,40,41,44,49,50,52,53,54,55],toolchain:41,top:[0,7,12,15,52],total:[7,27],touch:25,tpm:[41,43,44,47,49],trace:[6,41],traceabl:17,track:45,trade:2,train:[7,31],transfer:[0,15],transport:[22,25],tree:[10,40],tri:29,trigger:[25,36,46],troubl:14,troubleshoot:31,trsute:43,trust:[41,44,46,47,48],trusti:1,ts_a:7,ts_b:7,tsukiyama:10,ttys0:25,tune:4,turn:[2,6],tutori:40,two:[3,4,24,31,41,49,56],txt:[0,22,25,32],type:[1,2,4,9,10,22,25,26,27,32,39,52,56,59,60],typedef:[0,1,7,17,56],typic:[3,7,15,19,22,41,48],uart0:[25,53],uart8250:53,uart:[41,51,53,56],uart_rx:53,uart_tx:53,ubuntu:[20,21,36,40,51],ucod:[7,14,59],udk2018:41,udk:[6,41,43],udk_gdb_script:6,udkdebugg:6,uefi:[3,6,13,24,25,36,37,40,41,43,45,53,65],uefi_call_wrapp:25,uefipayload:27,uefipayloadpkg:27,uefipayloadpkgia32x64:27,uefipayloadpkgx64:27,uefipld:[37,64],uint16:[7,17],uint32:[7,17],uint64:17,uint8:[1,7,17,56],umount:52,unauthor:44,unchang:4,uncompress:7,under:[0,3,15,41,49,50,52,53,54,55],understand:[5,31],understood:56,uniqu:[17,25,41,47,49,50,54,55],unit:14,unkn:7,unknown:7,unless:26,unmount:26,unzip:[18,25,49],up2:[22,25,39],up2_sbl:39,up_squar:28,up_squared_sbl:28,upa1am33:39,upa1am40:25,upboard:53,upcom:41,upd:[8,31],updat:[0,7,13,14,15,17,24,25,27,29,36,40,41,46,56,62],updateosbootmediuminfo:63,upgrad:36,upon:[22,30],usabl:12,usag:[19,31,39,56],usb:[1,4,9,25,26,27,29,32,36,39,49,51],use:[2,4,7,9,13,15,16,31,32,34,37,39,41,53],used:[4,8,11,19,22,24,27,28,31,34,37,41,49,50,53,54,55,56],useful:3,user:[4,8,19,21,25,39,50,52,54,55,56,62],userdebug:25,usermod:21,uses:[0,4,5,25,27,28,43,57],usev:56,using:[4,6,8,9,19,21,26,27,30,31,32,37,39,41,49,50,52,53,54,55,57,58,60,61,62,63,64],util:[22,53,56],uuid:[18,25],uvar:27,valid:4,valu:[3,4,6,24,29,31,37,47,49,50,53,54,55],vari:41,variabl:[7,17,18,27],variat:49,varieti:31,variou:4,vast:4,vbt:9,vector:[0,15],verbos:[3,11],veri:2,verif:[0,4,25,32,39,44,48,62],verifi:[0,3,4,9,25,26,27,31,32,36,40,41,44,45,46,47,65],verified_boot_hash_mask:35,versatil:13,version:[7,10,14,18,25,40,41,49,56,59],via:[17,22,31,32,34,41,53],view:[2,31,41],virtual:[40,41,43,51],visit:[8,9,25,41],visual:[3,18,27,41],vmlinuz:[26,29,32,52,53],volatil:7,vs2015x86:27,wai:[4,11,31,32,41],want:41,warn:[11,26],websit:[25,26],welcom:[5,40,41],well:27,what:41,when:[0,2,3,13,15,24,27,31,34,35,45,49,50,54,55],where:[4,49,50,54,55,62],whether:[24,32,37],which:[0,1,4,6,16,19,34,37,53,56],whiskei:[40,50,51,54],who:41,wide:8,win10:6,win64:18,win7:6,win8:6,win:18,windbg:6,window:[6,10,13,20,21,36,40,41,50,52,53,54,55,56,58,60,61,62,63,64],windows10:27,wire:53,within:[25,29,52],without:[3,7,9,27,39,52,53],work:[21,22,27,29,36,41,53,56,58,59,60],workflow:10,world:28,would:19,write:[14,32,59],written:26,www:[8,18,27],x64:[6,18,27,49],x64_86:18,x86:[6,41,53],x86_64:[6,28,52,58,60,61,62,63,64],xhci:32,xtreme:[40,50,51,55],xxxx:[50,54,55],yocto:[32,51],you:[18,21,22,24,25,26,27,29,31,32,36,37,41,49,50,51,52,54,55,56,57,58,59,60,61,62,63,64],your:[21,25,26,41,53,56],yourself:21,zephyr:[36,40,41,43],zephyr_root:28,zero:1,zip:[18,19,25,27,39,49,50,53,54,55,56]},titles:["Build Process","Boot Options","Boot Performance","Build System","Configuration","Contribution Guidelines","Source Level Debugging","Flash Map","Firmware Support Package","IAS Image","Developer\u2019s Guide","Logging","Memory Map","Payloads","Shell Interface","Source Tree Structure","Stitch IFWI Image","Versioning","Build Environment","SBL Build Steps","Getting Started","Miscellaneous: Dockers","Add Fastboot Support","Add New Library","Create New Payload","Boot ACRN Hypervisor","Boot Ubuntu","Boot Windows with UEFI Payload","Boot Zephyr","Change Boot Options","Capture Boot Time Data","Configure Memory Down","Create IAS Boot Image","Customize Build","Enable Pre-OS Payload Support","Enable Verified Boot","Cook Book","Integrate Multiple Payloads","Reduce debug messages","Update Firmware","Slim Bootloader Project Documentation","Introduction","References and Links","Terminology and Acronyms","Boot Guard","Firmware Update","Security Features","Measured Boot","Verified Boot","Apollo Lake CRB Boards","Coffee Lake Refresh CRB Board","Supported Hardware","QEMU Virtual Platform","UP<sup>2</sup> Board","UP Xtreme Board","Whiskey Lake CRB Board","Tools","Exercise 1 - Build SBL for QEMU","Exercise 2 - Run SBL on QEMU","Exercise 3 - SBL Shell/CLI","Exercise 4 - Boot to Linux","Exercise 5 - Feature Customization - Splash","Exercise 6 - Feature Customization - Verified Boot","Exercise 7 - Feature Customization - Boot Order","Exercise 8 - UEFI Payload","Tutorials"],titleterms:{"new":[23,24],"static":4,IAS:[9,32,56],acrn:25,acronym:43,add:[22,23],apollo:49,ask:41,assign:[49,50,54,55],befor:53,bio:56,board:[28,49,50,53,54,55],book:36,boot:[0,1,2,25,26,27,28,29,30,32,35,44,47,48,49,50,52,53,54,55,60,62,63],bootload:40,build:[0,3,18,19,25,29,33,49,50,52,53,54,55,56,57],call:0,captur:30,categori:4,chang:29,clean:19,cli:59,code:5,coffe:50,command:56,common:4,compon:7,configur:[4,31,56],consol:4,contribut:5,cook:36,crb:[49,50,55],creat:[24,32],custom:[3,33,61,62,63],data:30,debug:[3,6,38,49,50,54,55],depend:15,design:41,detect:4,develop:[3,10],docker:[18,21],document:40,down:31,download:[18,19],dynam:4,editor:56,emmc:53,emul:52,enabl:[34,35],end:0,enter:25,environ:18,exampl:4,exercis:[57,58,59,60,61,62,63,64],fastboot:[22,25],featur:[41,46,61,62,63],file:4,firmwar:[8,39,45],flash:[7,19,25,49,50,53,54,55],flow:0,frequent:41,from:[22,39,50,53,54,55],gener:6,get:20,graph:0,guard:44,guid:10,guidelin:5,hardwar:51,how:25,hypervisor:25,ifwi:[16,19,56],imag:[9,16,32,56],initi:0,instal:53,integr:37,interfac:14,introduct:41,lake:[49,50,55],layout:7,level:6,librari:23,licens:5,link:42,linux:[18,49,50,53,54,55,60],load:22,log:11,map:[7,12],measur:47,memori:[12,31],messag:38,miscellan:21,mode:25,multipl:[13,37],option:[1,18,29],order:63,output:[4,19],packag:[8,15],payload:[13,24,27,34,37,64],perform:2,philosophi:41,platform:[0,4,52],post:[3,29],pre:[3,29,34,53],prerequisit:[6,25,53],process:0,project:40,proxi:21,qemu:[28,52,57,58],question:41,reduc:38,refer:42,refresh:50,releas:3,run:58,runtim:29,sbl:[3,19,25,52,56,57,58,59],secur:46,set:21,setup:53,shell:[14,39,52,59],slim:40,sourc:[6,15],spi:22,splash:61,start:[20,53],step:[6,19],stitch:[16,19,49,50,53,54,55,56],structur:15,style:5,support:[8,13,22,34,49,50,51,54,55],system:3,terminolog:43,time:[29,30],tool:[18,56],tree:15,trigger:[39,45],tutori:65,type:13,uart:[49,50,54,55],ubuntu:[18,26,50,53,54,55],uefi:[27,64],up2:[28,53],updat:[39,45],upgrad:25,usb:[22,50,53,54,55],using:18,verifi:[35,48,62],version:17,virtual:52,whiskei:55,window:[3,18,27],workflow:5,xtreme:54,yocto:[49,50,52,53,54,55],you:53,zephyr:28}})