/* بنك الأسئلة. لإضافة أسئلة جديدة: أضف أسطر في آخر الملف بنفس الشكل، ولا تغيّر ترتيب الأسئلة القديمة ولا تحذف منها.
   الإجابة الصحيحة دايمًا هي أول اختيار، والتطبيق بيخلط الترتيب وقت العرض.
   G = قواعد، V = مفردات، R = قراءة (مع نص)، L = استماع (مع جملة تُنطق).  */
/* ============ بنك الأسئلة ============ */
/* الإجابة الصحيحة دايمًا أول اختيار هنا، والتطبيق بيخلط الترتيب وقت العرض */
const LV = ['A1','A2','B1','B2','C1'];
const LN = {A1:'مبتدئ', A2:'أساسي', B1:'متوسط', B2:'فوق المتوسط', C1:'متقدم'};
const TN = {g:'قواعد', v:'مفردات', r:'قراءة', l:'استماع'};
const BANK = [];
function Q(l,t,q,o,e,x){ BANK.push(Object.assign({id:BANK.length,l:l,t:t,q:q,o:o,e:e},x||{})); }

/* ---- A1 ---- */
Q('A1','g','Je ___ étudiant.',['suis','es','est','sommes'],'مع الضمير je نستخدم suis من الفعل être.');
Q('A1','g','Elle ___ deux enfants.',['a','as','ai','ont'],'الفعل avoir مع elle يبقى a.');
Q('A1','g','___ maison est grande.',['La','Le','Les','Un'],'كلمة maison مؤنثة، فنستخدم la.');
Q('A1','g','Nous ___ au restaurant ce soir.',['allons','allez','vont','vais'],'الفعل aller مع nous يبقى allons.');
Q('A1','v','ماذا تعني كلمة « Merci » ؟',['شكرًا','من فضلك','آسف','مع السلامة'],'Merci معناها شكرًا.');
Q('A1','v','Le contraire de « grand » est :',['petit','gros','long','beau'],'عكس grand (كبير) هو petit (صغير).');
Q('A1','r','Où habite Karim ?',['Au Caire','À Paris','À Alger','À Lyon'],'النص بيقول: J\'habite au Caire.',{p:'Je m\'appelle Karim. J\'ai vingt ans. J\'habite au Caire avec ma famille. J\'aime le football.'});
Q('A1','r','Qu\'est-ce que Marie achète ?',['Du pain et un croissant','Du lait','Des fruits','Du fromage'],'baguettes و croissant يعني خبز وكرواسون.',{p:'Marie est à la boulangerie. Elle achète deux baguettes et un croissant.'});
Q('A1','l','كم عمر صوفي ؟',['25 سنة','15 سنة','35 سنة','20 سنة'],'vingt-cinq = 25.',{s:'Bonjour, je m\'appelle Sophie. J\'ai vingt-cinq ans.'});
Q('A1','l','ما الساعة ؟',['8 صباحًا','8 مساءً','9 صباحًا','7 صباحًا'],'huit heures du matin = الثامنة صباحًا.',{s:'Il est huit heures du matin.'});

/* ---- A2 ---- */
Q('A2','g','Hier, je ___ au cinéma.',['suis allé','ai allé','vais aller','irai'],'الفعل aller في الماضي المركب يستخدم être: je suis allé.');
Q('A2','g','Tu connais Paul ? Oui, je ___ connais.',['le','lui','la','les'],'Paul مذكر ومفعول مباشر، فنستخدم le.');
Q('A2','g','Il y a ___ eau dans le verre.',['de l\'','du','de la','des'],'eau تبدأ بحرف متحرك، فنقول de l\'eau.');
Q('A2','g','Je n\'ai ___ frère.',['pas de','pas des','pas du','pas un'],'في النفي بعد pas نستخدم de بدل un أو une.');
Q('A2','v','Pour acheter un billet de train, on va à la ___.',['gare','plage','banque','pharmacie'],'gare = محطة القطار.');
Q('A2','v','Quel mot désigne le repas du matin ?',['petit-déjeuner','dîner','déjeuner','goûter'],'petit-déjeuner هو فطار الصباح.');
Q('A2','r','Que doit apporter Léa ?',['Un dessert','Une boisson','Des fleurs','Un cadeau'],'Tom كتب: Apporte un dessert.',{p:'Salut Léa ! Samedi, je fais une fête chez moi à 20 heures. Tu peux venir ? Apporte un dessert, s\'il te plaît. Bises, Tom'});
Q('A2','r','Quand le musée est-il fermé ?',['Le lundi','Le dimanche','Le mardi','Le samedi'],'مفتوح من الثلاثاء للأحد، يعني مقفول يوم الاثنين.',{p:'Le musée est ouvert du mardi au dimanche, de 9 h à 18 h. Il est fermé le lundi. L\'entrée coûte 8 euros, gratuite pour les enfants.'});
Q('A2','l','أين تقع المحطة ؟',['مباشرة ثم ثاني شارع يسارًا','يمينًا بعد أول شارع','خلفك','بجانب البنك'],'tout droit = مباشرة، deuxième rue à gauche = ثاني شارع يسار.',{s:'Excusez-moi, pour aller à la gare, c\'est tout droit, puis la deuxième rue à gauche.'});
Q('A2','l','لكم شخص الحجز ؟',['4 أشخاص','6 أشخاص','3 أشخاص','2 شخصان'],'quatre = 4.',{s:'Je voudrais réserver une table pour quatre personnes, demain soir, à dix-neuf heures trente.'});

/* ---- B1 ---- */
Q('B1','g','Si j\'avais plus d\'argent, je ___ une voiture.',['achèterais','achèterai','achète','achetais'],'جملة الشرط غير المحقق: si + imparfait ثم conditionnel.');
Q('B1','g','Il faut que tu ___ à l\'heure.',['sois','es','seras','étais'],'après il faut que نستخدم subjonctif: sois.');
Q('B1','g','C\'est le livre ___ je t\'ai parlé.',['dont','que','qui','où'],'parler de نستخدم معها الضمير الموصول dont.');
Q('B1','g','Nous ___ en train de dîner quand le téléphone a sonné.',['étions','sommes','avons été','serons'],'الحدث الجاري في الماضي يأخذ imparfait.');
Q('B1','v','« Déménager » signifie :',['Changer de logement','Ranger la maison','Louer une voiture','Décorer'],'déménager = ينتقل لسكن جديد.');
Q('B1','v','Il a perdu son travail : il est au ___.',['chômage','congé','repos','salaire'],'être au chômage = عاطل عن العمل.');
Q('B1','r','Quel inconvénient l\'auteur mentionne-t-il ?',['Les transports sont parfois pleins','Le vélo coûte cher','Le métro est lent','Il n\'y a pas de métro'],'النص يقول إن المواصلات أحيانًا مزدحمة (bondés).',{p:'Depuis que j\'habite en ville, je n\'ai plus besoin de voiture. Je prends le métro ou je vais à vélo. C\'est plus rapide et plus économique, même si les transports sont parfois bondés le matin.'});
Q('B1','r','Que doit faire un candidat avant le 15 mars ?',['Envoyer sa candidature','Passer un examen','Signer un contrat','Visiter l\'entreprise'],'candidatures à envoyer avant le 15 mars.',{p:'L\'entreprise propose un poste de comptable à temps partiel. Le candidat doit avoir deux ans d\'expérience et maîtriser Excel. Les candidatures sont à envoyer avant le 15 mars.'});
Q('B1','l','ما سبب التأخير ؟',['مشكلة تقنية','الطقس','إضراب','حادث'],'problème technique = مشكلة تقنية.',{s:'Le train de Lyon est retardé de vingt minutes en raison d\'un problème technique. Nous vous prions de nous excuser.'});
Q('B1','l','لماذا يفضل المتحدث العمل من البيت ؟',['يوفر وقت التنقل ويركز أكثر','الراتب أعلى','يحب زملاءه','لا يملك مكتبًا'],'قال إنه يكسب وقت المواصلات ويكون أكثر تركيزًا.',{s:'Moi, je préfère travailler à la maison, parce que je gagne du temps sur les transports et je suis plus concentré.'});

/* ---- B2 ---- */
Q('B2','g','Bien qu\'il ___ fatigué, il a continué à travailler.',['soit','est','était','sera'],'بعد bien que نستخدم subjonctif: soit.');
Q('B2','g','Les lettres que j\'ai ___ sont arrivées hier.',['écrites','écrit','écrite','écrits'],'مع avoir يتفق اسم المفعول مع المفعول المتقدم: lettres مؤنث جمع، فنكتب écrites.');
Q('B2','g','Je doute qu\'il ___ la vérité.',['dise','dit','dira','disait'],'douter que يأخذ subjonctif.');
Q('B2','g','Si tu avais étudié, tu ___ l\'examen.',['aurais réussi','réussirais','as réussi','auras réussi'],'شرط في الماضي: si + plus-que-parfait ثم conditionnel passé.');
Q('B2','v','Le contraire d\'« un avantage » est :',['un inconvénient','un bénéfice','un atout','un gain'],'عكس avantage (ميزة) هو inconvénient (عيب).');
Q('B2','v','« Remettre à plus tard » se dit :',['reporter','rapporter','supporter','emporter'],'reporter = يؤجل.');
Q('B2','r','Quelle solution les chercheurs proposent-ils ?',['Un modèle hybride','Le télétravail total','Le retour au bureau','Réduire les salaires'],'الباحثون يقترحون النموذج الهجين.',{p:'Selon une étude récente, le télétravail augmenterait la productivité, mais il fragiliserait les liens entre collègues. Les chercheurs recommandent donc un modèle hybride.'});
Q('B2','r','Pourquoi certains commerçants critiquent-ils la mesure ?',['Ils craignent de perdre des clients','Ils ont peur de la pollution','Ils veulent plus d\'espaces verts','Ils soutiennent le maire'],'craignent une baisse de leur clientèle = يخافون من خسارة العملاء.',{p:'Le maire a annoncé la piétonnisation du centre-ville, une mesure saluée par les écologistes mais critiquée par certains commerçants, qui craignent une baisse de leur clientèle.'});
Q('B2','l','ماذا حدث لمعدل البطالة ؟',['انخفض قليلًا','ارتفع كثيرًا','لم يتغير','اختفى'],'a légèrement baissé = انخفض قليلًا.',{s:'Malgré les prévisions pessimistes, le taux de chômage a légèrement baissé ce trimestre, ce qui a surpris les économistes.'});
Q('B2','l','لماذا لم يرافقه المتحدث ؟',['كان عنده تقرير عاجل','كان مريضًا','نسي الموعد','كان مسافرًا'],'قال إنه بقي في المكتب لإنهاء تقرير عاجل.',{s:'J\'aurais aimé t\'accompagner, mais j\'ai dû rester au bureau pour terminer un rapport urgent.'});

/* ---- C1 ---- */
Q('C1','g','Quoi qu\'il ___, je ne changerai pas d\'avis.',['dise','dit','disait','dira'],'quoi que يأتي بعده subjonctif.');
Q('C1','g','Il l\'a fait sans que nous le ___.',['sachions','savons','savions','saurons'],'sans que يأخذ subjonctif: sachions.');
Q('C1','g','Autant il est brillant, ___ il est paresseux.',['autant','tant','aussi','si'],'التعبير الثابت: autant ... autant ...');
Q('C1','g','Il faudrait que vous ___ plus attentifs.',['soyez','êtes','seriez','serez'],'il faudrait que يأخذ subjonctif présent: soyez.');
Q('C1','v','« Être sur le point de » signifie :',['Être près de faire quelque chose','Avoir fini','Refuser de faire','Ne jamais faire'],'être sur le point de = على وشك أن يفعل.');
Q('C1','v','Un synonyme de « néanmoins » est :',['cependant','donc','ainsi','car'],'néanmoins و cependant معناهم "مع ذلك".');
Q('C1','v','Un « euphémisme » est :',['Une expression qui atténue une réalité pénible','Une exagération','Une question rhétorique','Un proverbe'],'الـ euphémisme هو تلطيف للتعبير عن شيء مؤلم.');
Q('C1','r','Que traduit le « slow living » selon le texte ?',['Une remise en cause de l\'accélération des rythmes de vie','Une simple mode passagère','Un retour à l\'agriculture','Une politique gouvernementale'],'النص يقول إنه ليس مجرد موضة بل مراجعة لتسارع إيقاع الحياة.',{p:'Loin de se limiter à une simple mode, le mouvement du « slow living » traduit une remise en cause de l\'accélération des rythmes de vie, perçue comme source d\'épuisement collectif.'});
Q('C1','r','Quelle est la position de l\'auteur ?',['Il critique l\'usage irréfléchi de la technique','Il condamne tout progrès','Il défend l\'efficacité absolue','Il refuse de se prononcer'],'الكاتب لا يدين التقدم نفسه، بل الاستخدام غير المدروس له.',{p:'L\'auteur se défend de vouloir condamner le progrès technique ; il en dénonce plutôt l\'usage irréfléchi, qui érige l\'efficacité en valeur suprême.'});
Q('C1','l','ماذا يتوقع المتحدث عن الإصلاح ؟',['سيواجه مقاومة شديدة','سيمر بسهولة','سيُلغى فورًا','لن يلاحظه أحد'],'se heurtera à de vives résistances = سيصطدم بمقاومة شديدة.',{s:'Il va sans dire que cette réforme, aussi ambitieuse soit-elle, se heurtera à de vives résistances.'});
Q('C1','l','ما موقف المتحدث من النتائج ؟',['مشجعة لكن الحكم النهائي مبكر','سيئة جدًا','نهائية ومؤكدة','لا تهمه'],'prématuré d\'en tirer des conclusions définitives = من المبكر الحكم النهائي.',{s:'Certes, les résultats sont encourageants, mais il serait prématuré d\'en tirer des conclusions définitives.'});

/* ============ دفعة ثانية من الأسئلة ============ */
function G(l,q,o,e){ Q(l,'g',q,o,e); }
function V(l,q,o,e){ Q(l,'v',q,o,e); }
function R(l,p,q,o,e){ Q(l,'r',q,o,e,{p:p}); }
function L(l,s,q,o,e){ Q(l,'l',q,o,e,{s:s}); }

/* ---- A1 ---- */
G('A1',"Tu ___ français ?",['parles','parle','parlons','parlent'],'مع tu نضيف s في آخر الفعل: tu parles.');
G('A1',"Ils ___ à la maison.",['sont','est','êtes','suis'],'مع ils نستخدم sont من الفعل être.');
G('A1',"J'___ une voiture.",['ai','suis','as','avons'],'مع j\' نستخدم ai من الفعل avoir.');
G('A1',"C'est ___ ami de Paul.",['un','une','des','la'],'كلمة ami مذكر مفرد، فنستخدم un.');
G('A1',"Vous ___ le café ?",['aimez','aimes','aime','aiment'],'مع vous ينتهي الفعل بـ ez: vous aimez.');
G('A1',"Les enfants ___ à l'école.",['vont','va','allons','allez'],'مع les enfants (ils) نستخدم vont.');
G('A1',"Elle ___ Marie.",["s'appelle","m'appelle","t'appelles","vous appelez"],'مع elle نستخدم s\'appelle.');
G('A1',"Mon père ___ médecin.",['est','suis','sont','es'],'مع الغائب المفرد نستخدم est.');
G('A1',"___ est ton nom ?",['Quel','Quelle','Quels','Que'],'كلمة nom مذكر مفرد، فنستخدم Quel.');
G('A1',"J'habite ___ France.",['en','au','à','dans le'],'مع الدول المؤنثة نستخدم en: en France.');
G('A1',"Je ne mange ___ de viande.",['pas','non','jamais pas','rien'],'النفي: ne ... pas de.');
G('A1',"Nous ___ du thé.",['buvons','buvez','boivent','bois'],'الفعل boire مع nous يبقى buvons.');
G('A1',"Ce sont ___ livres.",['mes','mon','ma','ton'],'livres جمع، فنستخدم mes.');
V('A1',"ماذا تعني كلمة « Bonsoir » ؟",['مساء الخير','صباح الخير','تصبح على خير','مع السلامة'],'Bonsoir تقال في المساء.');
V('A1',"الرقم « sept » هو :",['7','6','8','9'],'sept = 7.');
V('A1',"ماذا تعني كلمة « pomme » ؟",['تفاحة','برتقالة','موزة','فراولة'],'pomme = تفاحة.');
V('A1',"lundi, mardi, ___, jeudi",['mercredi','vendredi','samedi','dimanche'],'ترتيب الأيام: lundi, mardi, mercredi, jeudi.');
V('A1',"Le contraire de « chaud » est :",['froid','petit','vieux','lent'],'عكس chaud (ساخن) هو froid (بارد).');
V('A1',"ماذا تعني كلمة « rouge » ؟",['أحمر','أزرق','أخضر','أصفر'],'rouge = أحمر.');
V('A1',"ماذا تعني كلمة « chat » ؟",['قطة','كلب','حصان','عصفور'],'chat = قط.');
V('A1',"On boit de l'___.",['eau','pain','fromage','riz'],'نشرب الماء: eau.');
V('A1',"La sœur de mon père est ma ___.",['tante','cousine','nièce','mère'],'أخت الأب هي العمة: tante.');
V('A1',"Où dort-on ?",['Dans la chambre','Dans la cuisine','Dans la salle de bain','Dans le jardin'],'ننام في غرفة النوم: la chambre.');
V('A1',"Pour écrire, j'utilise un ___.",['stylo','verre','couteau','balai'],'نكتب بالقلم: stylo.');
V('A1',"ماذا تعني كلمة « hôpital » ؟",['مستشفى','مدرسة','مطار','سوق'],'hôpital = مستشفى.');
V('A1',"Le ___ roule sous la terre à Paris.",['métro','bateau','avion','vélo'],'القطار الذي تحت الأرض هو métro.');
R('A1',"Il est midi. Paul mange une salade au restaurant avec son ami Ali. Ils boivent de l'eau.","Que boivent Paul et Ali ?",["De l'eau",'Du café','Du thé','Du jus'],'النص يقول: Ils boivent de l\'eau.');
R('A1',"Lina a un chien et deux chats. Le chien s'appelle Max.","Combien d'animaux a Lina ?",['Trois','Deux','Un','Quatre'],'كلب واحد وقطتان، فالمجموع ثلاثة.');
R('A1',"Nous sommes en juillet. Il fait très chaud. Les enfants vont à la plage.","Quel temps fait-il ?",['Il fait chaud','Il fait froid','Il pleut','Il neige'],'النص يقول: Il fait très chaud.');
R('A1',"La classe commence à 9 h. Le professeur arrive à 8 h 45.","À quelle heure commence la classe ?",['À 9 h','À 8 h 45','À 10 h','À 8 h'],'الحصة تبدأ في التاسعة.');
R('A1',"Sara habite dans un petit appartement avec un balcon. Elle aime les plantes.","Qu'est-ce que Sara aime ?",['Les plantes','Les animaux','La musique','Le sport'],'النص يقول: Elle aime les plantes.');
L('A1',"Je voudrais un café, s'il vous plaît.","ماذا يطلب المتحدث ؟",['قهوة','شاي','ماء','عصير'],'café = قهوة.');
L('A1',"Aujourd'hui, c'est mercredi.","أي يوم اليوم ؟",['الأربعاء','الثلاثاء','الخميس','الاثنين'],'mercredi = الأربعاء.');
L('A1',"J'ai trois frères et une sœur.","كم أخًا عنده ؟",['3','1','4','2'],'trois frères = ثلاثة إخوة.');
L('A1',"Le livre coûte douze euros.","كم السعر ؟",['12 يورو','2 يورو','20 يورو','10 يورو'],'douze = 12.');
L('A1',"Je travaille dans une banque.","أين يعمل ؟",['في بنك','في مدرسة','في مستشفى','في مطعم'],'banque = بنك.');

/* ---- A2 ---- */
G('A2',"Je ___ mes devoirs hier soir.",['ai fait','suis fait','fais','ferai'],'الماضي المركب مع faire يستخدم avoir: j\'ai fait.');
G('A2',"Ils ___ arrivés hier.",['sont','ont','est','avons'],'الفعل arriver يستخدم être في الماضي المركب.');
G('A2',"Demain, nous ___ au marché.",['irons','sommes allés','allions','allé'],'المستقبل البسيط من aller: nous irons.');
G('A2',"Quand j'étais petit, je ___ au parc tous les jours.",['jouais','ai joué','jouerai','joue'],'العادة في الماضي تأخذ imparfait: je jouais.');
G('A2',"Tu veux du café ? Oui, j'___ veux.",['en','le','y','lui'],'الضمير en يعوض عن du café.');
G('A2',"Tu vas à Paris ? Oui, j'___ vais demain.",['y','en','le','lui'],'الضمير y يعوض عن المكان à Paris.');
G('A2',"Cette robe est plus ___ que l'autre.",['chère','cher','chères','chers'],'robe مؤنث مفرد، فنكتب chère.');
G('A2',"Elle court ___ vite que moi.",['plus','tant','très','beaucoup'],'المقارنة: plus ... que.');
G('A2',"Il faut ___ les mains avant de manger.",['se laver','se lave','lavons','laver se'],'بعد il faut نستخدم المصدر: se laver.');
G('A2',"Je vais ___ un médecin.",['voir','vois','vu','voyons'],'بعد aller نستخدم المصدر: voir.');
G('A2',"Ma sœur s'___ levée à sept heures.",['est','a','ai','sont'],'الأفعال الانعكاسية تستخدم être: elle s\'est levée.');
G('A2',"Il n'est ___ arrivé.",['pas encore','encore pas','pas toujours','jamais pas'],'التعبير الصحيح: ne ... pas encore.');
G('A2',"C'est la femme ___ travaille avec moi.",['qui','que','dont','où'],'qui يعوض عن الفاعل.');
G('A2',"Voilà le restaurant ___ nous avons mangé.",['où','qui','que','dont'],'où تعوض عن المكان.');
G('A2',"Je suis fatigué ___ j'ai mal dormi.",['parce que','pourquoi','pendant','alors'],'parce que معناها لأن.');
V('A2',"On achète des médicaments à la ___.",['pharmacie','boulangerie','librairie','poste'],'الأدوية من الصيدلية: pharmacie.');
V('A2',"Pour envoyer une lettre, on va à la ___.",['poste','gare','mairie','plage'],'الرسائل من مكتب البريد: la poste.');
V('A2',"Le week-end, c'est :",["le samedi et le dimanche","le lundi","le mois","l'année"],'week-end = السبت والأحد.');
V('A2',"ماذا تعني « se dépêcher » ؟",['يسرع','يستريح','ينام','يتأخر'],'se dépêcher = يسرع.');
V('A2',"ماذا تعني كلمة « voisin » ؟",['جار','صديق','أخ','زميل'],'voisin = جار.');
V('A2',"Quand il pleut, j'ouvre mon ___.",['parapluie','journal','stylo','livre'],'نفتح المظلة وقت المطر: parapluie.');
V('A2',"Pour voyager, je prépare ma ___.",['valise','fenêtre','cuisine','chaise'],'valise = حقيبة سفر.');
V('A2',"Un synonyme de « content » est :",['heureux','triste','fâché','fatigué'],'content و heureux معناهم سعيد.');
V('A2',"ماذا تعني « louer » (أجر شقة) ؟",['يستأجر','يشتري','يبيع','يسرق'],'louer un appartement = يستأجر شقة.');
V('A2',"ماذا تعني كلمة « horaire » ؟",['جدول مواعيد','راتب','عنوان','فاتورة'],'horaire = جدول المواعيد.');
V('A2',"ماذا تعني كلمة « météo » ؟",['حالة الطقس','الأخبار','الرياضة','الموسيقى'],'la météo = نشرة الطقس.');
R('A2',"Bonjour, je voudrais réserver une chambre double du 3 au 6 août. Pouvez-vous me donner le prix ? Merci.","Combien de nuits la personne veut-elle réserver ?",['3 nuits','6 nuits','2 nuits','4 nuits'],'من 3 إلى 6 أغسطس يعني ثلاث ليالٍ.');
R('A2',"Pour faire un gâteau, mélangez la farine, le sucre et trois œufs. Faites cuire 30 minutes à 180 degrés.","Combien de temps cuit le gâteau ?",['30 minutes','3 minutes','180 minutes','1 heure'],'النص يقول: 30 minutes.');
R('A2',"La pharmacie est fermée le dimanche, mais la pharmacie de garde est ouverte jour et nuit, rue Victor Hugo.","Où aller le dimanche pour un médicament ?",['À la pharmacie de garde','À la gare','À la poste','Au marché'],'صيدلية المناوبة مفتوحة طول الوقت.');
R('A2',"Nous cherchons un colocataire pour un appartement de deux chambres près du métro. Loyer : 400 euros par mois, charges comprises.","Que comprend le loyer ?",['Les charges','Le métro','Les meubles','La nourriture'],'charges comprises = الرسوم مشمولة.');
R('A2',"Cher Monsieur, je vous écris pour annuler mon abonnement à la salle de sport, car je déménage à Lille.","Pourquoi la personne annule-t-elle son abonnement ?",['Elle déménage','Elle est malade','C\'est trop cher','Elle n\'aime pas le sport'],'car je déménage = لأنه سينتقل.');
L('A2',"Le prochain train pour Marseille part à quatorze heures dix, quai numéro trois.","من أي رصيف يغادر القطار ؟",['الثالث','الرابع','الثاني','العاشر'],'quai numéro trois = الرصيف رقم 3.');
L('A2',"Il pleut beaucoup à Lille, mais demain il fera beau à Nice.","كيف الجو في نيس غدًا ؟",['جميل','ممطر','بارد جدًا','عاصف'],'il fera beau = الجو جميل.');
L('A2',"Je suis désolé, je suis en retard. Il y avait beaucoup de circulation.","لماذا تأخر ؟",['الزحام','المرض','النوم','نسي'],'circulation = حركة المرور.');
L('A2',"Mon rendez-vous chez le dentiste est jeudi à quinze heures.","متى الموعد ؟",['الخميس الساعة 3 عصرًا','الخميس الساعة 5 مساءً','الأربعاء الساعة 3 عصرًا','الجمعة الساعة 3 عصرًا'],'quinze heures = الثالثة عصرًا.');
L('A2',"Pour aller à l'hôtel, prenez le bus numéro douze et descendez à la place de la Mairie.","أي أتوبيس نركب ؟",['رقم 12','رقم 2','رقم 20','رقم 15'],'douze = 12.');

/* ---- B1 ---- */
G('B1',"Je ne crois pas qu'il ___ raison.",['ait','a','aura','avait'],'بعد je ne crois pas que نستخدم subjonctif: ait.');
G('B1',"J'ai fini mes études ___ trois ans.",['il y a','depuis','pendant','dans'],'il y a + مدة تعني: منذ مدة في الماضي.');
G('B1',"Elle habite à Lyon ___ 2018.",['depuis','il y a','pendant','dans'],'depuis + تاريخ تعني: من وقت معين حتى الآن.');
G('B1',"Il m'a dit qu'il ___ le lendemain.",['viendrait','viendra','vient','est venu'],'الكلام المنقول في الماضي يأخذ conditionnel: viendrait.');
G('B1',"Je cherche un hôtel qui ___ calme.",['soit','est','sera','serait'],'مع البحث عن شيء غير مؤكد نستخدم subjonctif: soit.');
G('B1',"Les gens ___ j'ai rencontrés sont sympas.",['que','qui','dont','où'],'que يعوض عن المفعول المباشر.');
G('B1',"Il ___ le journal tous les matins avant de partir.",['lit','lis','lisent','lisons'],'الفعل lire مع il يبقى lit.');
G('B1',"Je suis content ___ tu sois là.",['que','de','pour','à'],'content que + subjonctif.');
G('B1',"Pendant que je ___, il a téléphoné.",['cuisinais','cuisiné','cuisinerai','cuisinerais'],'الحدث الجاري في الماضي يأخذ imparfait.');
G('B1',"Voici la ville ___ je suis né.",['où','que','dont','qui'],'où تعوض عن المكان.');
G('B1',"Si tu es libre demain, nous ___ ensemble.",['dînerons','dînions','dînerions','dînerait'],'si + présent ثم futur.');
G('B1',"Je préfère que tu ___ avec moi.",['viennes','viens','viendras','venais'],'préférer que + subjonctif.');
G('B1',"Il est parti sans ___ au revoir.",['dire','disant','dit','a dit'],'بعد sans نستخدم المصدر.');
G('B1',"Avant de ___, il a pris son manteau.",['sortir','sorti','sortant','sortira'],'بعد avant de نستخدم المصدر.');
G('B1',"J'ai acheté ces chaussures, mais je ne les ai jamais ___.",['mises','mis','mise','mets'],'مع المفعول المتقدم les (جمع مؤنث) نكتب mises.');
V('B1',"ماذا تعني « un entretien d'embauche » ؟",['مقابلة عمل','عقد','إجازة','امتحان'],'entretien d\'embauche = مقابلة توظيف.');
V('B1',"ماذا تعني « une augmentation » (de salaire) ؟",['زيادة','خصم','ضريبة','إجازة'],'augmentation = زيادة.');
V('B1',"ماذا تعني « se plaindre » ؟",['يشتكي','يفرح','يعتذر','يشكر'],'se plaindre = يشتكي.');
V('B1',"ماذا تعني « emprunter » ؟",['يستعير','يعير','يسرق','يبيع'],'emprunter = يستعير.');
V('B1',"ماذا تعني « un embouteillage » ؟",['ازدحام مروري','حادث','إشارة','موقف'],'embouteillage = زحمة مرورية.');
V('B1',"ماذا تعني « rater son train » ؟",['يفوته القطار','يركب القطار','يشتري تذكرة','يقود القطار'],'rater = يفوّت.');
V('B1',"ماذا تعني « la retraite » ؟",['التقاعد','الإجازة','الراتب','الدراسة'],'retraite = معاش وتقاعد.');
V('B1',"Il est très ___ : il parle sans arrêt.",['bavard','timide','calme','silencieux'],'bavard = ثرثار.');
V('B1',"ماذا تعني « un quartier » ؟",['حي','مدينة','دولة','طريق'],'quartier = حي سكني.');
V('B1',"ماذا تعني « conseiller » ؟",['ينصح','يمنع','ينسى','يسمح'],'conseiller = ينصح.');
V('B1',"ماذا تعني « un séjour » ؟",['إقامة','تذكرة','حقيبة','سيارة'],'séjour = إقامة.');
R('B1',"Le festival de jazz aura lieu du 10 au 12 juillet. Les concerts sont gratuits, mais il faut réserver sa place sur Internet.","Que doit-on faire pour assister aux concerts ?",['Réserver sur Internet','Payer à l\'entrée','Acheter un abonnement','Écrire une lettre'],'il faut réserver sur Internet.');
R('B1',"Depuis que j'ai arrêté le sucre, je dors mieux et j'ai plus d'énergie. Au début, c'était difficile, mais maintenant je n'y pense presque plus.","Quel est le résultat de l'arrêt du sucre ?",['Il dort mieux','Il est plus fatigué','Il mange plus','Il a perdu son travail'],'je dors mieux = ينام أفضل.');
R('B1',"Notre bibliothèque ferme à 17 h cette semaine à cause de travaux. Les livres peuvent être rendus dans la boîte devant l'entrée.","Pourquoi la bibliothèque ferme-t-elle plus tôt ?",['À cause de travaux','À cause d\'une grève','Parce que c\'est férié','Faute de livres'],'à cause de travaux = بسبب أعمال.');
R('B1',"Léo hésite entre deux appartements : le premier est moins cher mais loin du centre, le second est plus cher mais près de son travail.","Quel avantage a le second appartement ?",['Il est proche du travail','Il est moins cher','Il est plus grand','Il a un jardin'],'près de son travail = قريب من العمل.');
R('B1',"Chaque année, des milliers de touristes visitent le village, ce qui fait vivre les commerçants, mais crée aussi beaucoup de déchets.","Quel problème est cité ?",['Les déchets','Le bruit','Le prix des maisons','Le manque d\'eau'],'déchets = نفايات.');
L('B1',"Désolé, le vol pour Madrid est annulé. Les passagers sont priés de se présenter au guichet.","ماذا يجب على المسافرين ؟",['التوجه إلى الشباك','انتظار الطائرة','الصعود للطائرة','العودة غدًا'],'se présenter au guichet = التوجه إلى الشباك.');
L('B1',"J'ai fini mon master l'an dernier et je cherche un emploi dans le marketing.","ماذا يبحث المتحدث ؟",['وظيفة في التسويق','منحة دراسية','سكن','دورة لغة'],'emploi dans le marketing = وظيفة في التسويق.');
L('B1',"Si vous voulez un remboursement, vous devez garder votre ticket de caisse.","ماذا يلزم للاسترجاع ؟",['الاحتفاظ بالإيصال','بطاقة الهوية','بطاقة بنكية','توقيع المدير'],'ticket de caisse = إيصال الشراء.');
L('B1',"Ce week-end, il y aura du soleil le samedi, mais de la pluie le dimanche.","كيف الطقس يوم الأحد ؟",['مطر','شمس','ثلج','ضباب'],'pluie = مطر.');
L('B1',"Je ne pourrai pas venir à la réunion de lundi, mais je vous enverrai mon rapport par mail.","ماذا سيفعل المتحدث ؟",['يرسل تقريره بالبريد','يحضر الاجتماع','يلغي الاجتماع','يتصل هاتفيًا'],'je vous enverrai mon rapport = سأرسل لكم تقريري.');

/* ---- B2 ---- */
G('B2',"À peine était-il arrivé ___ il a dû repartir.",['que','car','donc','ou'],'التعبير الثابت: à peine ... que.');
G('B2',"Il a agi comme s'il ___ tout.",['savait','sait','saura','sache'],'comme si + imparfait.');
G('B2',"Pourvu qu'il ___ beau demain !",['fasse','fait','fera','ferait'],'pourvu que + subjonctif.');
G('B2',"Il travaille dur afin que ses enfants ___ une belle vie.",['aient','ont','auront','avaient'],'afin que + subjonctif.');
G('B2',"Les efforts ___ il a faits sont énormes.",["qu'",'dont','qui','auxquels'],'qu\' يعوض عن المفعول المباشر، ولهذا كتبنا faits بالاتفاق.');
G('B2',"C'est le collègue à ___ j'ai parlé hier.",['qui','dont','que','où'],'parler à quelqu\'un: à qui.');
G('B2',"Après ___ fini son travail, il est rentré.",['avoir','être','a','ayant'],'بعد après نستخدم المصدر الماضي: avoir fini.');
G('B2',"En ___ la radio, j'ai appris la nouvelle.",['écoutant','écouter','écouté','écoute'],'en + gérondif: en écoutant.');
G('B2',"Quelle que ___ la raison, il est parti.",['soit','est','sera','était'],'quel que + subjonctif.');
G('B2',"Tu devrais ___ avant de décider.",['réfléchir','réfléchi','réfléchissant','réfléchis'],'بعد devrais نستخدم المصدر.');
G('B2',"Cette décision, je ne la regrette ___.",['aucunement','aucun','personne','nulle part'],'aucunement تعني: أبدًا.');
G('B2',"Ils se sont ___ la main.",['serré','serrés','serrée','serrées'],'مع الفعل الانعكاسي والمفعول بعده، لا يتغير اسم المفعول.');
G('B2',"Laquelle de ces robes ___-tu ?",['préfères','préfère','préférez','préférons'],'مع tu ينتهي الفعل بـ s.');
G('B2',"Le directeur, ___ le bureau est au dernier étage, est absent.",['dont','que','qui','où'],'dont تفيد الملكية: le bureau du directeur.');
V('B2',"ماذا تعني « un défi » ؟",['تحدٍّ','هدية','حفل','عطلة'],'défi = تحدٍّ.');
V('B2',"ماذا تعني « atténuer » ؟",['يخفف','يزيد','يمنع','يكتب'],'atténuer = يخفف.');
V('B2',"ماذا تعني « remettre en question » ؟",['يشكك في','يؤكد','يؤجل','يفتح'],'remettre en question = يعيد النظر ويشكك.');
V('B2',"ماذا تعني « fiable » ؟",['موثوق','سريع','رخيص','جديد'],'fiable = يُعتمد عليه.');
V('B2',"ماذا تعني « un enjeu » ؟",['ما هو على المحك','ضيف','مقال','جدار'],'enjeu = الرهان أو المصلحة المطروحة.');
V('B2',"Un synonyme de « améliorer » est :",['perfectionner','empirer','ignorer','réduire'],'améliorer و perfectionner معناهم يحسّن.');
V('B2',"ماذا تعني « se débrouiller » ؟",['يتدبر أمره','يتعثر','يتأخر','يتشاجر'],'se débrouiller = يتصرف ويتدبر.');
V('B2',"ماذا تعني « bénévole » ؟",['متطوع','موظف','مدير','زائر'],'bénévole = متطوع بلا أجر.');
V('B2',"ماذا تعني « équitable » ؟",['عادل','ثمين','قديم','مبكر'],'équitable = عادل.');
V('B2',"Le contraire de « encourager » est :",['décourager','féliciter','soutenir','aider'],'عكس encourager هو décourager.');
V('B2',"ماذا تعني « un revenu » ؟",['دخل','مصروف','دين','ضريبة'],'revenu = دخل.');
V('B2',"Avoir « le cafard » signifie :",['être déprimé','avoir faim','avoir peur des insectes','être riche'],'avoir le cafard = يشعر بالحزن.');
R('B2',"Les ventes en ligne ont progressé de 20 % cette année, mais les magasins physiques résistent grâce aux services de proximité.","Qu'est-ce qui aide les magasins physiques ?",['Les services de proximité','La publicité','Les prix bas','Les ventes en ligne'],'grâce aux services de proximité.');
R('B2',"Contrairement à ce que l'on croit, la sieste courte améliore la concentration, à condition de ne pas dépasser vingt minutes.","Quelle condition est donnée ?",['Ne pas dépasser vingt minutes','Dormir la nuit','Éviter le café','Dormir au bureau'],'à condition de = بشرط.');
R('B2',"La ville a installé des panneaux solaires sur les toits des écoles. L'économie réalisée sera réinvestie dans des équipements sportifs.","À quoi servira l'économie réalisée ?",['À financer des équipements sportifs','À baisser les impôts','À fermer des écoles','À payer le maire'],'réinvestie dans des équipements sportifs.');
R('B2',"Bien que le projet ait été retardé, l'équipe reste optimiste quant à sa réussite.","Quelle est l'attitude de l'équipe ?",['Optimiste','Découragée','Indifférente','En colère'],'reste optimiste.');
R('B2',"Si la technologie facilite la communication, elle peut aussi isoler ceux qui passent trop de temps devant un écran.","Quel risque est évoqué ?",["L'isolement",'La pauvreté','La violence',"L'analphabétisme"],'isoler = يعزل.');
L('B2',"Contrairement à ce que l'on pensait, les loyers n'ont pas augmenté cette année.","ماذا حدث للإيجارات ؟",['لم ترتفع','ارتفعت','تضاعفت','اختفت'],'n\'ont pas augmenté = لم ترتفع.');
L('B2',"Je vous rappelle que la date limite pour déposer le dossier est reportée au trente et un mai.","ما الجديد ؟",['تم تأجيل الموعد النهائي','تم إلغاء الملف','تم تقديم الموعد','لا تغيير'],'reportée = مؤجلة.');
L('B2',"Elle a refusé le poste, non pas par manque d'intérêt, mais parce que le salaire était trop bas.","لماذا رفضت الوظيفة ؟",['الراتب منخفض','لا تهتم','بُعد المكان','بسبب المدير'],'le salaire était trop bas.');
L('B2',"Les experts s'accordent à dire que le réchauffement climatique s'accélère.","ماذا يتفق الخبراء ؟",['أن الاحترار يتسارع','أنه يتباطأ','أنه توقف','أنه لا وجود له'],'s\'accélère = يتسارع.');
L('B2',"Faute de moyens, l'association a dû renoncer à son projet de voyage.","لماذا تخلت الجمعية عن المشروع ؟",['قلة الإمكانيات','سوء الطقس','قلة الأعضاء','خلاف داخلي'],'faute de moyens = لقلة الإمكانيات.');

/* ---- C1 ---- */
G('C1',"Il se comporte comme s'il ___ le maître des lieux.",['était','soit','sera','fût'],'comme si + imparfait.');
G('C1',"Aussi talentueux ___-il, il reste modeste.",['soit','est','sera','était'],'التعبير: aussi ... soit-il.');
G('C1',"Je ne pense pas qu'il ___ venir.",['puisse','peut','pourra','pouvait'],'ne pas penser que + subjonctif.');
G('C1',"Il a beau ___, rien n'y fait.",['essayer','essaie','essayé','essayant'],'avoir beau + مصدر.');
G('C1',"À supposer qu'il ___ raison, que ferait-on ?",['ait','a','aura','avait'],'à supposer que + subjonctif.');
G('C1',"Je tiens à ce que tout ___ prêt demain.",['soit','est','sera','serait'],'tenir à ce que + subjonctif.');
G('C1',"Ce sont des gens ___ on peut se fier.",['auxquels','dont','qui','où'],'se fier à: auxquels.');
G('C1',"Les raisons pour ___ il a démissionné restent floues.",['lesquelles','lesquels','laquelle','dont'],'raisons مؤنث جمع: pour lesquelles.');
G('C1',"Tout en ___ son avis, il a respecté le mien.",['donnant','donne','donné','donner'],'tout en + gérondif.');
G('C1',"Une fois ses études ___, il a voyagé.",['terminées','terminé','terminer','terminant'],'études مؤنث جمع، فنكتب terminées.');
G('C1',"Il aurait ___ que je parte plus tôt.",['fallu','faut','faille','fallait'],'conditionnel passé: il aurait fallu.');
G('C1',"Elle a réussi malgré ___ difficultés.",['les','que','bien','quoique'],'malgré + اسم: malgré les difficultés.');
G('C1',"Il n'est pas sûr que cela ___ possible.",['soit','est','sera','serait'],'ne pas être sûr que + subjonctif.');
G('C1',"J'aurais voulu qu'il ___ plus tôt.",['vienne','viendrait','vient','viendra'],'vouloir que + subjonctif.');
V('C1',"ماذا تعني « ambigu » ؟",['غامض','واضح','مؤكد','قصير'],'ambigu = غامض.');
V('C1',"ماذا تعني « une lacune » ؟",['ثغرة ونقص','نجاح','رحلة','عادة'],'lacune = ثغرة.');
V('C1',"ماذا تعني « éphémère » ؟",['زائل','دائم','ثمين','ضخم'],'éphémère = قصير العمر.');
V('C1',"ماذا تعني « tergiverser » ؟",['يماطل','يحسم','يسرع','يصفق'],'tergiverser = يماطل.');
V('C1',"ماذا تعني « un revirement » ؟",['تحول مفاجئ في الموقف','نمو بطيء','اتفاق قديم','إجازة'],'revirement = تغيّر مفاجئ.');
V('C1',"Un synonyme de « prôner » est :",['préconiser','rejeter','oublier','ignorer'],'prôner = يدعو إلى، مثل préconiser.');
V('C1',"ماذا تعني « mettre en exergue » ؟",['يبرز','يخفي','يحذف','يكرر'],'mettre en exergue = يبرز.');
V('C1',"ماذا تعني « une aubaine » ؟",['فرصة سانحة','خسارة','عقوبة','عادة'],'aubaine = فرصة غير متوقعة.');
V('C1',"Le contraire de « exhaustif » est :",['partiel','complet','détaillé','précis'],'exhaustif = شامل، وعكسه partiel.');
V('C1',"ماذا تعني « chevronné » ؟",['متمرس','مبتدئ','مرهق','غاضب'],'chevronné = ذو خبرة طويلة.');
V('C1',"ماذا تعني « faire fi de » ؟",['يتجاهل باحتقار','يقدّر','يتوقع','يطلب'],'faire fi de = يستخف ويتجاهل.');
V('C1',"ماذا تعني « foncièrement » ؟",['في الأساس','قليلًا','مؤخرًا','أحيانًا'],'foncièrement = في جوهره.');
R('C1',"Les détracteurs de la réforme dénoncent son caractère précipité, tandis que ses partisans y voient une urgence nécessaire.","Que reprochent les détracteurs à la réforme ?",['Sa précipitation','Son coût','Sa complexité','Son ancienneté'],'caractère précipité = طابعها المتسرع.');
R('C1',"Loin d'être une simple formalité, la ratification du traité suppose un large consensus parlementaire.","Que suppose la ratification ?",['Un large consensus','Un vote secret','Un référendum','Aucune condition'],'suppose un large consensus.');
R('C1',"L'auteur s'interroge sur la pertinence de mesurer la réussite à l'aune du seul revenu.","Que remet-il en cause ?",['Le revenu comme seul critère de réussite','Le travail','L\'éducation','Les impôts'],'s\'interroge sur la pertinence = يتساءل عن جدوى.');
R('C1',"Il ne s'agit pas tant d'interdire les écrans que d'en encadrer l'usage chez les plus jeunes.","Quelle est la proposition ?",["Encadrer l'usage",'Interdire totalement','Les offrir','Les taxer'],'pas tant ... que = ليس المهم ... بقدر.');
R('C1',"Si la thèse paraît séduisante, elle repose néanmoins sur des données lacunaires, ce qui en limite la portée.","Quelle réserve est formulée ?",['Les données sont lacunaires','La thèse est trop longue','L\'auteur est inconnu','La thèse est sans intérêt'],'données lacunaires = بيانات ناقصة.');
L('C1',"Quand bien même l'accord serait signé, son application resterait incertaine.","ماذا يقول المتحدث ؟",['التطبيق غير مضمون حتى مع التوقيع','التطبيق مضمون','لن يُوقَّع الاتفاق','تم تطبيقه فعلًا'],'quand bien même = حتى لو.');
L('C1',"Nul n'est censé ignorer la loi, mais combien la connaissent réellement ?","ما فكرة المتحدث ؟",['قلة من الناس يعرفون القانون فعلًا','الجميع يعرف القانون','القانون ألغي','القانون سهل'],'combien la connaissent = كم منهم يعرفها فعلًا.');
L('C1',"Ce n'est qu'au terme de longues négociations que les parties sont parvenues à un compromis.","متى توصلوا إلى حل ؟",['بعد مفاوضات طويلة','فورًا','قبل المفاوضات','لم يتوصلوا'],'au terme de = في نهاية.');
L('C1',"Elle a démissionné de son poste, au grand dam de ses collègues.","كيف كان رد فعل زملائها ؟",['استاؤوا','فرحوا','لم يهتموا','احتفلوا'],'au grand dam de = إلى استياء.');
L('C1',"Force est de constater que les mesures adoptées n'ont guère porté leurs fruits.","ما النتيجة ؟",['الإجراءات لم تنجح تقريبًا','نجحت تمامًا','لم تُطبَّق','جاءت بنتائج مدهشة'],'n\'ont guère porté leurs fruits = لم تُثمر إلا قليلًا.');

