/* Los Jalapeños website: tiny template renderer + page logic. No build step needed. */
(function () {
class DCLogic { constructor(props) { this.props = props || {}; } setState(o) { Object.assign(this.state, o); schedule(); } }

var LOCS = [
  { id: "unicoi", name: "Unicoi", addr1: "100 Rocky Bottom Dr, Suite 1", addr2: "Unicoi, TN 37692", city: "Unicoi, TN", phone: "(423) 743-3512", tel: "tel:+14237433512", maps: "https://www.google.com/maps/search/?api=1&query=Los+Jalapenos+100+Rocky+Bottom+Dr+Unicoi+TN+37692" },
  { id: "piney", name: "Piney Flats", addr1: "6681 Bristol Hwy, Suite 70", addr2: "Piney Flats, TN 37686", city: "Piney Flats, TN", phone: "(423) 291-0425", tel: "tel:+14232910425", maps: "https://www.google.com/maps/search/?api=1&query=Los+Jalapenos+6681+Bristol+Hwy+Piney+Flats+TN+37686" }
];

var T = {
  en: {
    tagline: "MEXICAN RESTAURANT",
    nav: { menu: "Menu", specials: "Specials", locations: "Locations", groups: "Groups & catering" },
    langBtn: "Español", langAria: "Ver el sitio en español",
    orderOnline: "Order online", seeMenu: "See the menu", findUs: "Find a location", callUs: "Call", callLoc: "Call",
    heroKicker: "UNICOI · PINEY FLATS · TENNESSEE",
    heroKickerA: "AUTHENTIC MEXICAN RESTAURANT",
    util: { directions: "Get directions", lunch: "Lunch specials daily 11:00am–2:30pm" },
    logoSub: "MEXICAN RESTAURANT",
    heroA: "Authentic Mexican food, made", heroAccent: "fresh", heroB: "every day.",
    heroItalic: "Family recipes. Generous plates. Two locations in East Tennessee.",
    viewMenu: "View our menu",
    infoAria: "Addresses, phone numbers and lunch hours",
    callLabel: "CALL US", lunchLabel: "LUNCH SPECIALS", lunchDays: "Monday – Sunday", lunchTime: "11:00am – 2:30pm", lunchFrom: "Plates from $8.25",
    picksTitle: "Customer favorites", picksSub: "A few of the dishes people come back for.", seeOnMenu: "See menu",
    picks: { fajitas: ["Sizzling Fajitas", "Chicken, steak, shrimp or Texas style"], burrito: ["Big Burrito", "Fajita-style meat, rice and beans"], combos: ["Combination Dinners", "15 combos to choose from"], lunch: ["Lunch Specials", "Every day, 11:00am–2:30pm"] },
    aboutKicker: "OUR KITCHEN",
    aboutTitle: "Real Mexican food, made from scratch every day",
    aboutBody: "Everything at Los Jalapeños is prepared fresh daily, from the salsa to the sizzling fajitas. Not all Mexican food is hot: our dishes have an authentic, yet mild flavor, with something on the menu for everyone in the family.", heroKickerB: "UNICOI & PINEY FLATS, TENNESSEE",
    heroBadge: "Lunch specials from $8.25 · daily 11–2:30",
    heroTitle: "Real Mexican food, made fresh every day. Come hungry.",
    diningAlt: "Inside Los Jalapeños: woven lanterns, hanging flowers and painted murals",
    stampTop: "Lunch", stampMid: "FROM $8.25", stampBot: "DAILY 11–2:30",
    marquee: ["Fajitas", "Enchiladas", "Margaritas", "Street Tacos", "Chimichangas", "Queso Dip", "Big Burrito", "Churros"],
    heroSub: "Two locations in Unicoi and Piney Flats, Tennessee. Dine in or take out.",
    chooseLoc: "Choose your location", yourLoc: "YOUR LOCATION", yourLocShort: "Your location", galleryAria: "Photos from Los Jalapeños", feat1Alt: "Huevos rancheros with Mexican rice and refried beans", feat2Alt: "A chimichanga topped with guacamole, sour cream, lettuce and tomato",
    quickAria: "Quick actions",
    q: {
      menuT: "See the menu", menuD: "Over 150 dishes. Search it or tap a category.",
      specT: "Daily specials", specD: "Lunch from $8.25 and combination dinners for $11.50.",
      visitT: "Locations & hours", visitD: "Addresses, phone numbers and directions.",
      resT: "Groups & catering", resD: "Big table or a party to feed? Send us a request."
    },
    specKicker: "EVERY DAY", specTitle: "Every day deals",
    deals: {
      lunch: { kicker: "MON–SUN · 11:00AM–2:30PM", title: "Lunch specials", pre: "FROM", big: "$8.25", price: "from $8.25", desc: "Over 20 lunch plates, from Speedy Gonzalez to lunch fajitas.", cta: "See lunch specials", alt: "A combination plate with an enchilada, burrito and taco" },
      combos: { kicker: "15 TO CHOOSE FROM", title: "Combination dinners", pre: "ALL", big: "$11.50", price: "$11.50", desc: "Mix and match tacos, enchiladas, burritos, tamales and more.", cta: "See combinations", alt: "Combination 10: a burrito, a hard taco, rice and beans" },
      fajitas: { kicker: "HOUSE FAVORITE", title: "Sizzling fajitas", pre: "FROM", big: "$16.99", price: "from $16.99", desc: "Chicken, steak, shrimp, Texas or Hawaiian, served with all the fixings.", cta: "See fajitas", alt: "Fajitas sizzling on a skillet" }
    },
    menuKicker: "OUR MENU", menuTitle: "The Menu",
    menuSub: "Search for a dish or tap a category.", pdf: "Printable menu (PDF)",
    searchLabel: "Search the menu", searchPh: "Search the menu, e.g. fajitas or shrimp",
    catAria: "Menu categories", clear: "Clear search", vegTag: "Vegetarian",
    resultsFor: "Results for", noResults: "No dishes match that search. Try another word, like tacos, chicken or cheese.",
    fresh: "We prepare our food fresh daily. Not all Mexican food is hot: our dishes have an authentic, yet mild flavor.",
    sauteed: "All shredded chicken, shredded beef and beef tips are sautéed with bell peppers, tomatoes and onions.",
    raw: "* Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.",
    showEnNote: false, enNote: "",
    orderTitle: "Hungry? Order ahead.", orderSub: "Order online for take-out, or call your location and we will have it ready.",
    startOrder: "Start your order",
    locKicker: "TWO LOCATIONS", locTitle: "Visit us", addressLabel: "ADDRESS", phoneLabel: "PHONE", hoursLabel: "HOURS",
    lunchHours: "Lunch specials at both locations, every day 11:00am–2:30pm.",
    directions: "Get directions",
    storeAlt: "The Los Jalapeños storefront in Piney Flats with its red and green sign",
    resKicker: "GROUPS & CATERING", resTitle: "A table for everyone",
    resSub: "Coming with a big group or feeding a party? Send a request and we will call you to confirm.",
    kindAria: "Request type", kRes: "Large group", kCat: "Catering",
    fLoc: "Location", fName: "Name", fPhone: "Phone number", fDate: "Date", fTime: "Time",
    fGuestsRes: "Party size", fGuestsCat: "Number of guests",
    fNotesRes: "Anything we should know? (optional)", fNotesCat: "Event details and dishes you want (optional)",
    submit: "Send request",
    formNote: "We will call to confirm. Questions? Email",
    sentTitle: "Request sent", sentBody: "Thank you. We will call you at the number you gave to confirm the details.",
    sendAnother: "Send another request",
    footTag: "Authentic Mexican food in Unicoi and Piney Flats, Tennessee.",
    quickLinks: "QUICK LINKS",
    bar: { menu: "Menu", order: "Order", call: "Call", directions: "Directions" },
    days: ["Monday – Thursday", "Friday – Saturday", "Sunday"]
  },
  es: {
    tagline: "RESTAURANTE MEXICANO",
    nav: { menu: "Menú", specials: "Especiales", locations: "Sucursales", groups: "Grupos y banquetes" },
    langBtn: "English", langAria: "View the site in English",
    orderOnline: "Ordenar en línea", seeMenu: "Ver el menú", findUs: "Ver sucursales", callUs: "Llamar", callLoc: "Llamar a",
    heroKicker: "UNICOI · PINEY FLATS · TENNESSEE",
    heroKickerA: "AUTÉNTICO RESTAURANTE MEXICANO",
    util: { directions: "Cómo llegar", lunch: "Especiales de almuerzo diario 11:00am–2:30pm" },
    logoSub: "RESTAURANTE MEXICANO",
    heroA: "Auténtica comida mexicana, hecha", heroAccent: "fresca", heroB: "cada día.",
    heroItalic: "Recetas de familia. Platos generosos. Dos sucursales en el este de Tennessee.",
    viewMenu: "Ver el menú",
    infoAria: "Direcciones, teléfonos y horario de almuerzo",
    callLabel: "LLÁMANOS", lunchLabel: "ESPECIALES DE ALMUERZO", lunchDays: "Lunes – Domingo", lunchTime: "11:00am – 2:30pm", lunchFrom: "Platos desde $8.25",
    picksTitle: "Los favoritos", picksSub: "Algunos de los platillos que nuestros clientes más piden.", seeOnMenu: "Ver menú",
    picks: { fajitas: ["Fajitas en plancha", "De pollo, res, camarón o texanas"], burrito: ["Big Burrito", "Carne estilo fajita, arroz y frijoles"], combos: ["Cenas combinadas", "15 combinaciones para elegir"], lunch: ["Especiales de almuerzo", "Todos los días, 11:00am–2:30pm"] },
    aboutKicker: "NUESTRA COCINA",
    aboutTitle: "Auténtica comida mexicana, hecha desde cero cada día",
    aboutBody: "En Los Jalapeños todo se prepara fresco a diario, desde la salsa hasta las fajitas en plancha. No toda la comida mexicana es picante: nuestros platillos tienen un sabor auténtico y suave, con algo en el menú para toda la familia.", heroKickerB: "UNICOI Y PINEY FLATS, TENNESSEE",
    heroBadge: "Almuerzos desde $8.25 · diario 11–2:30",
    heroTitle: "Auténtica comida mexicana, hecha fresca cada día. Ven con hambre.",
    diningAlt: "Dentro de Los Jalapeños: lámparas tejidas, flores colgantes y murales pintados",
    stampTop: "Almuerzo", stampMid: "DESDE $8.25", stampBot: "DIARIO 11–2:30",
    marquee: ["Fajitas", "Enchiladas", "Margaritas", "Tacos", "Chimichangas", "Dip de queso", "Big Burrito", "Churros"],
    heroSub: "Dos sucursales en Unicoi y Piney Flats, Tennessee. Come aquí o pide para llevar.",
    chooseLoc: "Elige tu sucursal", yourLoc: "TU SUCURSAL", yourLocShort: "Tu sucursal", galleryAria: "Fotos de Los Jalapeños", feat1Alt: "Huevos rancheros con arroz y frijoles refritos", feat2Alt: "Chimichanga con guacamole, crema, lechuga y tomate",
    quickAria: "Acciones rápidas",
    q: {
      menuT: "Ver el menú", menuD: "Más de 150 platillos. Búscalo o toca una categoría.",
      specT: "Especiales del día", specD: "Almuerzos desde $8.25 y cenas combinadas a $11.50.",
      visitT: "Sucursales y horario", visitD: "Direcciones, teléfonos y cómo llegar.",
      resT: "Grupos y banquetes", resD: "¿Mesa grande o una fiesta? Envíanos tu solicitud."
    },
    specKicker: "TODOS LOS DÍAS", specTitle: "Ofertas de todos los días",
    deals: {
      lunch: { kicker: "LUN–DOM · 11:00AM–2:30PM", title: "Especiales de almuerzo", pre: "DESDE", big: "$8.25", price: "desde $8.25", desc: "Más de 20 platillos de almuerzo, del Speedy Gonzalez a las fajitas.", cta: "Ver almuerzos", alt: "Plato combinado con enchilada, burrito y taco" },
      combos: { kicker: "15 PARA ELEGIR", title: "Cenas combinadas", pre: "TODAS", big: "$11.50", price: "$11.50", desc: "Combina tacos, enchiladas, burritos, tamales y más.", cta: "Ver combinaciones", alt: "Combinación 10: burrito, taco dorado, arroz y frijoles" },
      fajitas: { kicker: "FAVORITO DE LA CASA", title: "Fajitas en plancha", pre: "DESDE", big: "$16.99", price: "desde $16.99", desc: "De pollo, res, camarón, texanas o hawaianas, con todos sus acompañantes.", cta: "Ver fajitas", alt: "Fajitas chisporroteando en la plancha" }
    },
    menuKicker: "NUESTRO MENÚ", menuTitle: "El Menú",
    menuSub: "Busca un platillo o toca una categoría.", pdf: "Menú para imprimir (PDF)",
    searchLabel: "Buscar en el menú", searchPh: "Busca en el menú, p. ej. fajitas o camarón",
    catAria: "Categorías del menú", clear: "Borrar búsqueda", vegTag: "Vegetariano",
    resultsFor: "Resultados para", noResults: "Ningún platillo coincide. Prueba otra palabra, como tacos, pollo o queso.",
    fresh: "Preparamos nuestra comida fresca todos los días. No toda la comida mexicana es picante: nuestros platillos tienen un sabor auténtico y suave.",
    sauteed: "Todo el pollo deshebrado, la res deshebrada y las puntas de res se saltean con pimientos, tomate y cebolla.",
    raw: "* Consumir carnes, aves, mariscos o huevos crudos o poco cocidos puede aumentar el riesgo de enfermedades transmitidas por alimentos, especialmente si tienes ciertas condiciones médicas.",
    showEnNote: true, enNote: "Las descripciones de los platillos están en inglés, como en nuestro menú impreso.",
    orderTitle: "¿Con hambre? Ordena antes.", orderSub: "Ordena en línea para llevar, o llama a tu sucursal y lo tendremos listo.",
    startOrder: "Empezar mi orden",
    locKicker: "DOS SUCURSALES", locTitle: "Visítanos", addressLabel: "DIRECCIÓN", phoneLabel: "TELÉFONO", hoursLabel: "HORARIO",
    lunchHours: "Especiales de almuerzo en ambas sucursales, todos los días 11:00am–2:30pm.",
    directions: "Cómo llegar",
    storeAlt: "Fachada de Los Jalapeños en Piney Flats con su letrero rojo y verde",
    resKicker: "GRUPOS Y BANQUETES", resTitle: "Mesa para todos",
    resSub: "¿Vienes con un grupo grande o tienes una fiesta? Envía tu solicitud y te llamaremos para confirmar.",
    kindAria: "Tipo de solicitud", kRes: "Grupo grande", kCat: "Banquete",
    fLoc: "Sucursal", fName: "Nombre", fPhone: "Teléfono", fDate: "Fecha", fTime: "Hora",
    fGuestsRes: "Número de personas", fGuestsCat: "Número de invitados",
    fNotesRes: "¿Algo que debamos saber? (opcional)", fNotesCat: "Detalles del evento y platillos que deseas (opcional)",
    submit: "Enviar solicitud",
    formNote: "Te llamaremos para confirmar. ¿Preguntas? Escribe a",
    sentTitle: "Solicitud enviada", sentBody: "Gracias. Te llamaremos al número que nos diste para confirmar los detalles.",
    sendAnother: "Enviar otra solicitud",
    footTag: "Auténtica comida mexicana en Unicoi y Piney Flats, Tennessee.",
    quickLinks: "ENLACES RÁPIDOS",
    bar: { menu: "Menú", order: "Ordenar", call: "Llamar", directions: "Cómo llegar" },
    days: ["Lunes – Jueves", "Viernes – Sábado", "Domingo"]
  }
};

var GRILL4 = [["Chicken or steak", "12.75"], ["Mix (chicken, steak)", "14.25"], ["Tex (chicken, steak, shrimp)", "14.99"], ["Carnitas", "14.99"], ["Shrimp", "15.50"]];

var MENU = [
  { id: "lunch", en: "Lunch Specials", es: "Almuerzos",
    note: { en: "Monday–Sunday, 11:00am–2:30pm. After lunch hours, add $1.00.", es: "Lunes a domingo, 11:00am–2:30pm. Después del horario de almuerzo, agrega $1.00." },
    items: [
    { n: "Speedy Gonzalez", p: "8.25", d: "One taco, one enchilada, and choice of rice or beans." },
    { n: "Lunch Special No. 1", p: "8.75", d: "One chile fundido, one taco, beans, and guacamole salad." },
    { n: "Lunch Special No. 2", p: "8.50", d: "One beef burrito, rice, and beans." },
    { n: "Lunch Special No. 3", p: "8.50", d: "Two enchiladas and choice of beans or rice." },
    { n: "Lunch Special No. 4", p: "8.75", d: "One chile fundido, one taco, rice, and beans." },
    { n: "Lunch Special No. 5", p: "8.50", d: "One burrito, one taco, and rice." },
    { n: "Lunch Special No. 6", p: "8.75", d: "One burrito, one tamal, and choice of rice or beans." },
    { n: "Lunch Special No. 7", p: "8.75", d: "One burrito, one enchilada, and choice of rice or beans." },
    { n: "Chimichanga", p: "9.75", d: "Filled with beef or chicken." },
    { n: "Huevos Rancheros", r: 1, p: "9.75", d: "Two ranch-style eggs topped with Mexican sauce. Served with rice, beans, and flour tortillas.", v: 1 },
    { n: "Huevos Mexicanos", r: 1, p: "9.75", d: "Eggs cooked with vegetables. Served with rice, beans, and flour tortillas.", v: 1 },
    { n: "Huevos Chorizo", r: 1, p: "10.75", d: "Eggs cooked with Mexican sausage. Served with rice, beans, and flour tortillas." },
    { n: "Pollo Fundido", p: "9.75", d: "One flour tortilla filled with chicken and deep fried. Topped with sour cream and cheese. Served with rice and salad." },
    { n: "Burrito Deluxe", p: "9.75", d: "Filled with beef or chicken and served with lettuce, tomatoes, guacamole, sour cream, and beans." },
    { n: "Special Quesadilla", p: "9.75", d: "Our stuffed cheese quesadilla with your choice of ground beef or chicken. Served with rice and beans." },
    { n: "Chili with Beef Tips", p: "9.75", d: "Served with beans." },
    { n: "Mexican Cheese Steak", p: "10.50", d: "A soft flour tortilla filled with thinly sliced steak or chicken with grilled onions and nacho cheese. Served with lettuce, tomatoes, guacamole, and your choice of rice or beans." },
    { n: "Mini Big Burrito", p: "9.75", d: "Grilled chicken or steak." },
    { n: "Lunch Fajitas", d: "A lunch-sized portion of our sizzling fajitas with onions, bell peppers, tomatoes, and your choice of meat. Served with rice, beans, and 2 tortillas. Salad not included.", o: [["Chicken or steak", "10.75"], ["Mixed chicken and steak", "11.50"], ["Texas (chicken, steak & shrimp)", "12.25"], ["Shrimp", "12.75"]] },
    { n: "Lunch Pollo Loco", p: "10.25", d: "Arroz con pollo. Add veggies (extra charge)." }
  ]},
  { id: "combos", en: "Combination Dinners", es: "Combinaciones",
    note: { en: "Every combination is $11.50. Meat or soft taco substitutions add $0.50 (excluding grilled meat). Changes or substitutions for cheese dip or salsa add $2.25.", es: "Todas las combinaciones cuestan $11.50. Cambiar carne o taco suave: $0.50 extra (excepto carne asada a la parrilla). Cambios por dip de queso o salsa: $2.25 extra." },
    items: [
    { n: "Combination 1", p: "11.50", d: "One taco, two enchiladas, and choice of rice or beans." },
    { n: "Combination 2", p: "11.50", d: "One taco, one enchilada, and one beef tostada with cheese." },
    { n: "Combination 3", p: "11.50", d: "One beef enchilada, one cheese enchilada, rice, and beans." },
    { n: "Combination 4", p: "11.50", d: "One beef enchilada, one taco, rice, and beans." },
    { n: "Combination 5", p: "11.50", d: "One enchilada, one chile fundido, rice, and beans." },
    { n: "Combination 6", p: "11.50", d: "One enchilada, one tamal, rice, and beans." },
    { n: "Combination 7", p: "11.50", d: "Two beef tacos, rice, and beans." },
    { n: "Combination 8", p: "11.50", d: "One beef burrito, one taco, and one enchilada." },
    { n: "Combination 9", p: "11.50", d: "One burrito, one enchilada, and one tamal." },
    { n: "Combination 10", p: "11.50", d: "One burrito, one taco, rice, and beans." },
    { n: "Combination 11", p: "11.50", d: "One taco, one chile fundido, and one burrito." },
    { n: "Combination 12", p: "11.50", d: "One burrito, one enchilada, rice, and beans." },
    { n: "Combination 13", p: "11.50", d: "One burrito, one enchilada, and one chile fundido." },
    { n: "Combination 14", p: "11.50", d: "Two beef burritos with choice of beans or rice." },
    { n: "Combination 15", p: "11.50", d: "One chile poblano with cheese, one taco, beans, and rice." }
  ]},
  { id: "appetizers", en: "Appetizers", es: "Aperitivos", items: [
    { n: "Nachos Supremos", p: "11.99", d: "Beef, beans, lettuce, tomatoes, sour cream, and guacamole with cheese." },
    { n: "Nachos with Cheese", p: "6.99", v: 1 },
    { n: "Beef Nachos with Cheese", p: "9.00" },
    { n: "Chicken Nachos with Cheese", p: "9.50" },
    { n: "Grilled Nachos with Cheese", d: "No vegetables.", o: [["Grilled steak or chicken", "11.50"], ["Mix grilled chicken and steak", "11.99"], ["Texano (chicken, steak, and shrimp)", "12.99"], ["Shrimp", "13.50"], ["Chorizo", "11.75"]] },
    { n: "Bean Nachos with Cheese", p: "7.99", v: 1 },
    { n: "Beef & Bean Nachos with Cheese", p: "9.75" }
  ]},
  { id: "dips", en: "Dips", es: "Dips", items: [
    { n: "Cheese Dip", p: "5.99", v: 1 },
    { n: "Guacamole Dip", p: "5.99", v: 1 },
    { n: "Spinach Dip", p: "7.25", v: 1 },
    { n: "Ground Beef with Queso", p: "7.50" },
    { n: "Mexican Guacamole", p: "8.50", v: 1 },
    { n: "Cheese & Bean Dip", p: "7.25", v: 1 },
    { n: "Chori Queso", p: "8.50" }
  ]},
  { id: "tacos", en: "Street Tacos", es: "Tacos callejeros",
    note: { en: "Served with onion, cilantro, and radish.", es: "Con cebolla, cilantro y rábano." },
    items: [
    { n: "Carne Asada", d: "Steak." },
    { n: "Pollo", d: "Chicken." },
    { n: "Pescado", d: "Fish." },
    { n: "Carnitas", d: "Pork." },
    { n: "Pastor", d: "Pork." },
    { n: "Chorizo", d: "Sausage." },
    { n: "Camarón", d: "Shrimp." },
    { n: "Lengua", d: "Beef tongue." },
    { n: "Campechana", d: "Steak and chorizo." }
  ]},
  { id: "mixed", en: "House Specials", es: "Especialidades", items: [
    { n: "Enchiladas Supremas", p: "12.99", d: "Supreme combination of one chicken, one bean, one cheese and one beef enchilada. Topped with ranchero sauce, lettuce, tomatoes, cheese, and sour cream." },
    { n: "Chimichanga", d: "Two fried flour tortillas filled with shredded beef or chicken sautéed with tomatoes, onions and bell peppers. Topped with nacho cheese and garnished with guacamole salad, beans, and sour cream.", o: [["Shredded chicken or shredded beef", "12.50"], ["Grilled chicken or grilled steak", "15.75"], ["Grilled veggies", "12.99"], ["Grilled shrimp", "15.99"]] },
    { n: "El Sinaloense", p: "13.99", d: "Sliced grilled chicken breast with chorizo (Mexican sausage) topped with cheese. Served with rice, beans, and tortillas." },
    { n: "Enchiladas Picosas", p: "14.50", d: "Sliced grilled chicken enchiladas with cheese and green sauce. Served with rice and salad." },
    { n: "Taquitos Mexicanos", p: "10.99", d: "Four fried corn taquitos: two beef and two chicken. Topped with lettuce, guacamole, tomatoes, and sour cream." },
    { n: "La Parrilla", p: "21.50", d: "Grilled steak, chicken, shrimp and chorizo cooked with tomatoes, bell peppers, and onions. Topped with shredded cheese, served with rice, beans, tortillas, pico de gallo, and salad." },
    { n: "Carnitas", p: "15.50", d: "Fried chunks of pork served with rice, beans, and three flour tortillas." },
    { n: "Chile Verde", p: "15.50", d: "Chunks of tender pork cooked in green sauce. Served with rice, beans, and tortillas." },
    { n: "Especial de la Casa", p: "10.99", d: "Two beef tip or chicken burritos topped with melted cheese." }
  ]},
  { id: "chicken", en: "Chicken", es: "Pollo", items: [
    { n: "Pollo Loco (Arroz con Pollo)", d: "Grilled chicken with nacho cheese, served with rice and three flour tortillas. Add veggies (extra charge).", o: [["Grilled steak or grilled chicken", "12.75"], ["Mix grilled (chicken, steak)", "13.50"], ["Tex (chicken, steak, shrimp)", "14.75"], ["Grilled shrimp", "15.25"]] },
    { n: "Chilaquiles Mexicanos", p: "11.50", d: "Corn tortilla stuffed with chunks of chicken cooked with our special sauce. Served with rice and salad." },
    { n: "Vallarta Especial", p: "11.75", d: "One chicken burrito, one cheese quesadilla and one chicken enchilada topped with lettuce, tomatoes, sour cream, and guacamole." },
    { n: "Pollo a la Plancha", p: "17.50", d: "Chicken breast cooked with spinach and mushrooms. Topped with melted cheese. Served with guacamole salad, rice, beans, and tortillas." },
    { n: "Pollo Picoso", p: "14.99", d: "Grilled chicken with onions served with rice, beans, tortillas, and spicy cheese." },
    { n: "Pollo Fundido", p: "12.50", d: "Two house tortillas filled with chicken, deep-fried and topped with sour cream and cheese. Served with rice and salad." },
    { n: "Yolandas", p: "13.25", d: "Three chicken enchiladas topped with ranchero sauce. Served with rice and guacamole." },
    { n: "Nachos Sinaloense", p: "13.50", d: "Grilled chicken with chorizo topped with nacho cheese." },
    { n: "Pollo Campestre", p: "15.99", d: "Grilled chicken breast with grilled shrimp and melted cheese on top. Served with rice and beans." },
    { n: "Pollo Chipotle", p: "14.99", d: "Grilled chicken breast with chipotle sauce and grilled onions. Served with rice and beans." },
    { n: "Choripollo", p: "15.75", d: "Grilled chicken breast cooked with chorizo and melted cheese. Served with rice, beans, and tortillas." },
    { n: "Sopa de Pollo", p: "11.50", d: "Chicken and rice soup with a side of pico de gallo." }
  ]},
  { id: "beef", en: "Beef & Steak", es: "Res", items: [
    { n: "Mexican Cheese Steak", p: "14.25", d: "Two soft tortillas filled with thinly sliced steak or chicken, grilled onions and nacho cheese. Served with lettuce, guacamole, tomatoes, and your choice of rice or beans." },
    { n: "Steak Ranchero", r: 1, p: "18.00", d: "10oz T-bone steak served with rice, beans, guacamole salad, and flour tortillas. Topped with ranchero sauce." },
    { n: "Steak a la Tampiqueña", r: 1, p: "18.00", d: "10oz T-bone steak served with rice, beans, tortillas and salad with sliced avocados, onions, and lime." },
    { n: "Steak Gringo", r: 1, p: "18.00", d: "10oz T-bone steak cooked with onions and served with fries." },
    { n: "Steak Mexicano", r: 1, p: "19.99", d: "10oz T-bone steak cooked with Mexican condiments, bell peppers, onions, and tomatoes. Served with rice and beans." },
    { n: "Steak Jalisco", r: 1, p: "20.99", d: "10oz T-bone steak with grilled shrimp, topped with melted cheese. Served with tossed salad, beans, and rice." },
    { n: "Carne Asada", r: 1, p: "18.00", d: "Rib-eye steak served with beans, rice, salad, and three flour tortillas." },
    { n: "El Patron", r: 1, p: "19.99", d: "Grilled rib-eye steak, pork chop, chorizo, cheese, grilled jalapeño, and onions. Served with rice and beans." },
    { n: "Tacos de Carne Asada", p: "13.99", d: "Three tacos filled with strips of rib-eye steak. Served with onions, cilantro, radish, tomatillo sauce, rice, and beans." },
    { n: "Chile Colorado", p: "14.75", d: "Sliced steak in red sauce. Served with rice, beans, guacamole salad, and three flour tortillas." },
    { n: "Flautas", p: "12.50", d: "Three tightly rolled corn tortillas stuffed with shredded beef and deep-fried. Served with guacamole salad and rice or beans." },
    { n: "La Casa", p: "12.99", d: "Beef tips served with rice, beans, and choice of flour or corn tortillas." }
  ]},
  { id: "fajitas", en: "Fajitas", es: "Fajitas", items: [
    { n: "Sizzling Fajitas", d: "Our sizzling fajitas with onions, bell peppers, tomatoes and your choice of meat. Served with rice, beans, guacamole salad, sour cream, pico de gallo, and flour tortillas.", o: [["Chicken or steak", "16.99"], ["Mix (chicken, steak)", "18.50"], ["Tex (chicken, steak, shrimp)", "19.99"], ["Shrimp", "20.25"], ["Hawaiian (chicken, steak, shrimp, chorizo and pineapple)", "20.99"], ["Tilapia", "20.25"]] },
    { n: "Fajita Nachos", d: "Your choice of fajita-style meat cooked with onions, tomatoes and bell peppers on a bed of nachos with rice, beans, lettuce, guacamole, sour cream, and melted white cheese.", o: [["Chicken or steak", "13.50"], ["Mixed (chicken & steak)", "14.25"], ["Texas (chicken, steak & shrimp)", "14.99"], ["Shrimp", "15.50"], ["Carnitas", "14.99"]] }
  ]},
  { id: "burritos", en: "Burritos", es: "Burritos", items: [
    { n: "Big Burrito", d: "Choice of fajita-style meat cooked with tomatoes, onions, and bell peppers along with rice and beans, all inside a big flour tortilla. Topped with melted white cheese.", o: GRILL4 },
    { n: "Burrito California", d: "Stuffed with carne asada, french fries, cheese, pico de gallo, guacamole, hot salsa, sour cream, rice, and beans.", o: GRILL4 },
    { n: "Burritos Mexicanos", p: "12.25", d: "Two burritos with beans and choice of beef tips or chicken in red sauce. Topped with lettuce, guacamole, tomatoes, sour cream, melted cheese, and salsa." },
    { n: "Burritos Deluxe", p: "11.99", d: "Two combination burritos, one chicken with beans and one beef with beans. Topped with lettuce, tomatoes, guacamole, and sour cream." },
    { n: "Special Burrito", p: "7.99", d: "One beef-tip burrito served with lettuce, tomatoes, guacamole, melted cheese, and salsa." }
  ]},
  { id: "quesadillas", en: "Quesadillas", es: "Quesadillas", items: [
    { n: "Fajita Quesadilla Grande", d: "A big grilled flour tortilla stuffed with cheese and your choice of fajita-style meat, cooked with onion, tomatoes, and bell peppers.", o: [["Grilled chicken or steak", "13.25"], ["Mix (chicken, steak)", "14.25"], ["Tex (chicken, steak, shrimp)", "15.25"], ["Shrimp", "15.50"]] },
    { n: "Shrimp Quesadilla", p: "13.99", d: "A grilled flour tortilla stuffed with cheese, shrimp, bell peppers, onions, and tomatoes. Served with rice, beans, guacamole salad, sour cream, and pico de gallo." },
    { n: "Quesadilla Texana", p: "13.99", d: "A grilled flour tortilla stuffed with cheese, shrimp, steak, chicken, bell peppers, onions and tomatoes. Served with rice, beans, guacamole salad, sour cream, and pico de gallo." },
    { n: "Quesadilla Mexicana", p: "10.99", d: "A quesadilla filled with beans, beef tips, and cheese. Served with guacamole salad and rice." },
    { n: "Quesadilla Deluxe", p: "10.99", d: "Our stuffed cheese quesadilla with your choice of ground beef or chicken. Topped with lettuce, sour cream, diced tomatoes, and guacamole. Served with choice of rice or beans." },
    { n: "Vegetables Quesadilla", p: "10.99", d: "Grilled onions, tomato, bell pepper, zucchini, mushroom, broccoli, and cauliflower. Served with rice and salad.", v: 1 }
  ]},
  { id: "seafood", en: "Seafood", es: "Mariscos", items: [
    { n: "Camarones al Mojo de Ajo", p: "15.25", d: "Shrimp grilled with garlic, butter and onions. Served with rice, lettuce, sliced avocados, and tortillas." },
    { n: "Camarones Rancheros", p: "15.25", d: "Shrimp cooked with our special hot sauce. Served with rice, lettuce, tomatoes, sliced avocados, and fresh onions." },
    { n: "Camarones a la Diabla", p: "15.25", d: "Grilled shrimp with onions and spicy chipotle sauce. Served with rice and salad." },
    { n: "Tilapia", p: "15.25", d: "Grilled fillet. Served with rice and salad." }
  ]},
  { id: "veg", en: "Vegetarian", es: "Vegetariano", items: [
    { n: "Veggie A.", p: "10.50", d: "One bean burrito, one cheese enchilada, and one bean tostada.", v: 1 },
    { n: "Veggie B.", p: "10.50", d: "One avocado burrito, one cheese quesadilla with pico de gallo and rice.", v: 1 },
    { n: "Veggie C.", p: "10.50", d: "One spinach enchilada and one spinach quesadilla. Served with rice.", v: 1 },
    { n: "Veggie D.", p: "10.50", d: "One cheese burrito, one bean taco, rice, and beans.", v: 1 },
    { n: "Veggie E.", p: "10.50", d: "One bean burrito, one cheese enchilada, and one quesadilla.", v: 1 },
    { n: "Veggie F. Fajitas", p: "15.50", d: "A light combination of fresh mushrooms, bell peppers, onions, tomatoes, zucchini, broccoli, and cauliflower. Served with rice, beans, and tortillas.", v: 1 },
    { n: "Veggie G. Fajita Salad", p: "7.75", d: "Rice, beans, guacamole, sour cream, and pico de gallo.", v: 1 },
    { n: "Veggie H.", p: "12.75", d: "One chile poblano and one spinach burrito with cheese sauce, beans, and rice.", v: 1 }
  ]},
  { id: "salads", en: "Salads", es: "Ensaladas",
    note: { en: "Dressings: Blue Cheese and Ranch.", es: "Aderezos: Blue Cheese y Ranch." },
    items: [
    { n: "Tossed Salad", p: "5.99", v: 1 },
    { n: "Taco Salad", p: "9.99", d: "A crispy flour tortilla with beef, beans, lettuce, tomatoes, cheese, sour cream, and guacamole." },
    { n: "Guacamole Salad", p: "4.75", v: 1 },
    { n: "Grilled Salad", o: [["Chicken or steak", "11.50"], ["Mix", "11.99"], ["Tex", "12.75"], ["Shrimp", "13.50"]] },
    { n: "Jalapeño Salad (Fajita Taco Salad)", d: "A crispy flour tortilla with a choice of fajita-style steak or chicken cooked with onions and bell peppers, plus beans, rice, lettuce, tomatoes, sour cream, and melted cheese.", o: [["Chicken or steak", "12.99"], ["Mix", "13.50"], ["Tex", "14.50"], ["Shrimp", "14.99"]] }
  ]},
  { id: "alacarte", en: "À la Carte", es: "A la carta",
    note: { en: "All take-out orders, add $0.35.", es: "Órdenes para llevar: agrega $0.35." },
    items: [
    { n: "Soft Tacos", d: "Beef or chicken.", o: [["One", "3.25"], ["Three", "9.25"]] },
    { n: "Hard Tacos", d: "Beef or chicken.", o: [["One", "2.50"], ["Three", "7.00"]] },
    { n: "Enchiladas", d: "Beef, chicken or cheese.", o: [["One", "3.00"], ["Three", "8.50"]] },
    { n: "Tostadas", o: [["One", "4.75"], ["Two", "8.50"]] },
    { n: "Chile Fundido", o: [["One", "3.50"], ["Three", "9.99"]] },
    { n: "Tamales", o: [["One", "3.75"], ["Three", "9.99"]] },
    { n: "Beef or Bean Burritos", o: [["One", "4.75"], ["Two", "9.00"]] },
    { n: "Chicken or Cheese Burrito", o: [["One", "4.75"], ["Two", "9.00"]] },
    { n: "Cheese Quesadilla", o: [["One", "3.50"], ["Two", "6.50"]], v: 1 },
    { n: "Quesadillas", d: "Filled with cheese and shredded chicken.", o: [["One", "5.25"], ["Two", "9.99"]] },
    { n: "Quesadillas de Hongos", d: "Mushroom and cheese quesadilla.", o: [["One", "5.25"], ["Two", "9.99"]], v: 1 },
    { n: "Grilled Quesadilla", d: "Filled with cheese only.", o: [["Chicken or steak", "7.50"], ["Carnitas", "7.75"], ["Pastor", "7.75"], ["Shrimp", "7.75"], ["Chorizo", "7.75"]] },
    { n: "Grilled Soft Tacos", d: "With lettuce and cheese.", o: [["Chicken", "4.25"], ["Steak", "4.25"], ["Shrimp", "4.50"]] },
    { n: "Quesadilla Vegetables", p: "7.50", d: "Grilled onions, tomatoes, bell peppers, zucchini, mushrooms, broccoli, and cauliflower.", v: 1 },
    { n: "Chile Poblano (Chile Relleno)", p: "5.00", d: "With cheese only. Add ground beef, beef tips, shredded chicken or shredded beef (extra charge)." }
  ]},
  { id: "sides", en: "Sides", es: "Acompañantes", items: [
    { n: "Sides", d: "Rice · Beans · Rice with cheese · Sour cream · Shredded cheese · Pico de gallo · Pickled jalapeños · French fries · Flour tortilla · Corn tortilla · Avocado (6) · Queso picoso · Chiles toreados" },
    { n: "From the grill", d: "Grilled steak · Grilled chicken · Grilled chorizo · Grilled shrimp · Grilled veggies · Grilled jalapeños" }
  ]},
  { id: "kids", en: "Kids", es: "Niños",
    note: { en: "For children under 12. Adults add $1.00.", es: "Para niños menores de 12 años. Adultos agregan $1.00." },
    items: [
    { n: "1. One Taco", p: "6.50", d: "With beans and rice." },
    { n: "2. One Enchilada", p: "6.50", d: "With beans and rice." },
    { n: "3. Mexican Hamburger", p: "6.50", d: "Served with fries." },
    { n: "4. Cheese Quesadilla", p: "6.50", d: "Served with rice." },
    { n: "5. Taco Salad", p: "6.75", d: "A crispy flour tortilla with beef, beans, lettuce, tomatoes, cheese, sour cream, and guacamole." },
    { n: "6. One Burrito and Taco", p: "6.50" },
    { n: "7. Chicken Nuggets", p: "6.50", d: "Served with French fries." },
    { n: "8. Chimichanga", p: "6.75", d: "One beef or chicken chimichanga topped with melted cheese, with rice." }
  ]},
  { id: "desserts", en: "Desserts", es: "Postres", items: [
    { n: "Sopapilla", p: "3.50", d: "Fried flour tortilla with honey and butter." },
    { n: "Sopapilla with Ice Cream", p: "5.75" },
    { n: "Flan", p: "5.25", d: "Mexican custard." },
    { n: "Ice Cream", p: "3.75" },
    { n: "Fried Ice Cream", p: "5.25" },
    { n: "Banana Burrito", p: "5.75" },
    { n: "Churros Mexicanos", p: "5.99" }
  ]},
  { id: "drinks", en: "Drinks & Bar", es: "Bebidas y cantina",
    note: { en: "All alcoholic beverage sales are final. No exchanges or refunds.", es: "Todas las ventas de bebidas alcohólicas son finales. No hay cambios ni reembolsos." },
    items: [
    { n: "Soft Drinks", d: "Coke, Diet Coke, Coke Zero, Sprite, Mello Yello, Mr. Pibb, lemonade." },
    { n: "Iced Tea & Coffee", d: "Free refills." },
    { n: "Aguas Frescas & Jarritos", d: "Horchata, Jamaica, Tamarindo. Jarritos (no refills)." },
    { n: "Margaritas", d: "Small, Jumbo, Monster or Pitcher. Flavored frozen margaritas: mango, peach, raspberry, strawberry and watermelon. Coronarita." },
    { n: "Imported Beer", d: "Corona, Corona Light, Dos Equis (XX) Dark, Tecate, Negra Modelo, Modelo Especial." },
    { n: "American Beer", d: "Budweiser, Budweiser Select, Bud Light, Miller Lite, Michelob Ultra, Michelob Light, Coors Light." },
    { n: "Draft Beer", d: "Michelob, Bud, Miller Lite, Dos Equis (XX), Modelo Especial. 22 oz, 32 oz or pitcher. Michelada, 32 oz." },
    { n: "Mixed Drinks", d: "Black Russian, Blue Hawaii, Cuba Libre, Gin & Tonic, Jack Daniels & Coke, Fuzzy Navel, Long Island Iced Tea, Piña Colada, 7 & 7, Screwdriver, Sex on the Beach, Daiquiri (any flavor), Tequila Sunrise, Liquid Marijuana, Paloma." },
    { n: "Tequila", d: "Cabo Wabo, Jose Cuervo, Tres Generaciones, Patrón, Don Julio, Hornitos." },
    { n: "Wine by the Glass", d: "Chardonnay, Merlot, Zinfandel, Sangria, Chablis." }
  ]}
];

var IMG = { lunch: "/assets/combo-8.png", combos: "/assets/combo-10.png", fajitas: "/assets/fajitas.png" };

function money(p) { return "$" + p; }

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { lang: null, cat: "lunch", q: "", kind: "res", sent: false, loc: "unicoi" };
  }
  shape(i, catName, showCat) {
    var opts = (i.o || []).map(function (o) { return { label: o[0], price: money(o[1]) }; });
    return {
      name: i.n + (i.r ? " *" : ""),
      price: i.p ? money(i.p) : "",
      hasPrice: !!i.p,
      desc: i.d || "",
      hasDesc: !!i.d,
      opts: opts,
      hasOpts: opts.length > 0,
      veg: !!i.v,
      cat: catName,
      showCat: showCat
    };
  }
  renderVals() {
    var self = this;
    var lang = this.state.lang || this.props.startLang || "en";
    var t = T[lang];
    var q = (this.state.q || "").trim().toLowerCase();
    var activeCat = MENU.filter(function (c) { return c.id === self.state.cat; })[0] || MENU[0];

    var cats = MENU.map(function (c) {
      var on = !q && c.id === activeCat.id;
      return { label: c[lang], active: on, inactive: !on, pick: function () { self.setState({ cat: c.id, q: "" }); } };
    });

    var view;
    if (q) {
      var found = [];
      MENU.forEach(function (c) {
        c.items.forEach(function (i) {
          var hay = (i.n + " " + (i.d || "") + " " + (i.o || []).map(function (o) { return o[0]; }).join(" ") + " " + c.en + " " + c.es).toLowerCase();
          if (hay.indexOf(q) !== -1) { found.push(self.shape(i, c[lang].toUpperCase(), true)); }
        });
      });
      view = { title: t.resultsFor + " “" + this.state.q.trim() + "” (" + found.length + ")", items: found, searching: true, hasNote: false, note: "", empty: found.length === 0 };
    } else {
      var note = activeCat.note ? activeCat.note[lang] : "";
      view = { title: activeCat[lang], items: activeCat.items.map(function (i) { return self.shape(i, "", false); }), searching: false, hasNote: !!note, note: note, empty: false };
    }

    var LOOK = { lunch: { dir: "row", blob: "#f2a81d", tilt: "-4deg" }, combos: { dir: "row-reverse", blob: "#e5487f", tilt: "3deg" }, fajitas: { dir: "row", blob: "#2d8155", tilt: "-2deg" } };
    var deals = ["lunch", "combos", "fajitas"].map(function (id) {
      var d = t.deals[id];
      return { kicker: d.kicker, title: d.title, pre: d.pre, big: d.big, desc: d.desc, cta: d.cta, alt: d.alt, img: IMG[id], dir: LOOK[id].dir, blob: LOOK[id].blob, tilt: LOOK[id].tilt, pick: function () { self.setState({ cat: id, q: "" }); } };
    });
    var PK = [["fajitas", "fajitas", "/assets/fajitas.png", "from $16.99"], ["burrito", "burritos", "/assets/big-burrito.png", "from $12.75"], ["combos", "combos", "/assets/combo-10.png", "$11.50"], ["lunch", "lunch", "/assets/combo-8.png", "from $8.25"]];
    var picks = PK.map(function (k) {
      var txt = t.picks[k[0]];
      return { name: txt[0], desc: txt[1], img: k[2], price: lang === "es" ? k[3].replace("from", "desde") : k[3], pick: function () { self.setState({ cat: k[1], q: "" }); } };
    });
    var marquee = t.marquee.concat(t.marquee).map(function (w) { return { word: w }; });

    var loc = LOCS.filter(function (l) { return l.id === self.state.loc; })[0] || LOCS[0];
    var locBtns = LOCS.map(function (l) {
      var on = l.id === loc.id;
      return { name: l.name, active: on, inactive: !on, pick: function () { self.setState({ loc: l.id }); } };
    });
    var allLocs = LOCS.map(function (l) { return Object.assign({ upper: l.name.toUpperCase() }, l); });

    var isCat = this.state.kind === "cat";
    var kinds = [{ id: "res", label: t.kRes }, { id: "cat", label: t.kCat }].map(function (k) {
      var on = k.id === self.state.kind;
      return { label: k.label, active: on, inactive: !on, pick: function () { self.setState({ kind: k.id }); } };
    });
    var hours = t.days.map(function (d) { return { days: d, time: "[OPEN] – [CLOSE]" }; });

    return {
      t: t,
      cats: cats,
      view: view,
      q: this.state.q,
      deals: deals,
      marquee: marquee,
      picks: picks,
      loc: loc,
      locBtns: locBtns,
      allLocs: allLocs,
      kinds: kinds,
      hours: hours,
      guestsLabel: isCat ? t.fGuestsCat : t.fGuestsRes,
      notesLabel: isCat ? t.fNotesCat : t.fNotesRes,
      sent: this.state.sent,
      notSent: !this.state.sent,
      onSearch: function (e) { self.setState({ q: e.target.value }); },
      clearSearch: function () { self.setState({ q: "" }); },
      toggleLang: function () { self.setState({ lang: lang === "en" ? "es" : "en" }); },
      submit: function (e) { if (e && e.preventDefault) { e.preventDefault(); } self.setState({ sent: true }); },
      reset: function () { self.setState({ sent: false }); }
    };
  }
}

const comp = new Component({});
const tpl = document.getElementById("tpl");
const root = document.getElementById("root");
const SVG = "http://www.w3.org/2000/svg";
function look(path, scope) {
  path = path.trim();
  if (path === "true") return true;
  if (path === "false") return false;
  return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, scope);
}
function whole(str) { const m = /^\{\{([^}]+)\}\}$/.exec(str.trim()); return m ? m[1] : null; }
function interp(str, scope) {
  return str.replace(/\{\{([^}]+)\}\}/g, function (m, p) { const v = look(p, scope); return v == null || typeof v === "function" ? "" : String(v); });
}
function build(src, scope, out) {
  src.childNodes.forEach(function (n) {
    if (n.nodeType === 3) { out.appendChild(document.createTextNode(interp(n.textContent, scope))); return; }
    if (n.nodeType !== 1) return;
    const tag = n.tagName.toLowerCase();
    if (tag === "sc-for") {
      const list = look(whole(n.getAttribute("list")), scope) || [];
      const as = n.getAttribute("as");
      list.forEach(function (item, i) { const sc = Object.assign({}, scope); sc[as] = item; sc.$index = i; build(n, sc, out); });
      return;
    }
    if (tag === "sc-if") { if (look(whole(n.getAttribute("value")), scope)) build(n, scope, out); return; }
    const el = n.namespaceURI === SVG ? document.createElementNS(SVG, n.tagName) : document.createElement(n.tagName);
    Array.from(n.attributes).forEach(function (a) {
      const ev = /^on([a-z]+)$/i.exec(a.name);
      if (ev) {
        const fn = look(whole(a.value) || "", scope);
        let type = ev[1].toLowerCase();
        if (type === "change" && (tag === "input" || tag === "textarea")) type = "input";
        if (typeof fn === "function") el.addEventListener(type, fn);
        return;
      }
      if (a.name.indexOf("hint-") === 0) return;
      el.setAttribute(a.name, interp(a.value, scope));
    });
    build(n, scope, el);
    out.appendChild(el);
  });
}
let queued = false;
function schedule() { if (!queued) { queued = true; Promise.resolve().then(render); } }
function render() {
  queued = false;
  const active = document.activeElement && document.activeElement.id;
  const sel = active && document.activeElement.selectionStart;
  const vals = comp.renderVals();
  const frag = document.createDocumentFragment();
  build(tpl.content, vals, frag);
  root.replaceChildren(frag);
  const lang = comp.state.lang || "en";
  document.documentElement.lang = lang;
  if (active) {
    const el = document.getElementById(active);
    if (el) { el.focus(); if (sel != null && el.setSelectionRange) { try { el.setSelectionRange(sel, sel); } catch (e) {} } }
  }
}
render();
})();
