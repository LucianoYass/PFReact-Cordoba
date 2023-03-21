const productos = [
    //mangas
    {
        id: 1,
        title: "One Piece Vol. 1",
        description: "Sigue las aventuras de Monkey D. Luffy, un chico muy especial y elástico, que sueña con ser el rey de los piratas y encontrar una gran tesoro: el One Piece. Para ello, se hace a la mar en un bote con el que buscará la tripulación que le pueda ayudar en su misión.",
        type: "mangas",
        imageProduct: {
            firstImage: "https://imgv2-2-f.scribdassets.com/img/document/401081288/original/a98ab94fbd/1675672406?v=1",
            secondImage: "https://imgv2-2-f.scribdassets.com/img/document/401081288/original/a98ab94fbd/1675672406?v=1"
        },
        price: 1800,
    },

    {
        id: 2,
        title: "One Piece Vol. 2",
        description: "Sigue las aventuras de Monkey D. Luffy, un chico muy especial y elástico, que sueña con ser el rey de los piratas y encontrar una gran tesoro: el One Piece. Para ello, se hace a la mar en un bote con el que buscará la tripulación que le pueda ayudar en su misión.",    
        type: "mangas",
        imageProduct: {
            firstImage: "https://http2.mlstatic.com/D_NQ_NP_878419-MLA44831525251_022021-O.jpg",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_878419-MLA44831525251_022021-O.jpg"
        },
        price: 1800,
    },

    {
        id: 3,
        title: "Berserk Vol. 1",
        description: "Berserk nos cuenta la historia de Guts , un antihéroe mercenario que vaga por el mundo en solitario en búsqueda de Apóstoles , unos seres demoníacos que antaño fueron humanos pero que sacrificaron una parte importante de sus vidas para conseguir poderes que les permitieran alcanzar sus más oscuros deseos.",
        type: "mangas",
        imageProduct: {
            firstImage: "https://i1.whakoom.com/large/0a/33/ad5e15822aee4a1583e7a816f8238cfa.jpg",
            secondImage: "https://i1.whakoom.com/large/0a/33/ad5e15822aee4a1583e7a816f8238cfa.jpg"
        },
        price: 2200,
    },

    {
        id: 4,
        title: "Berserk Vol. 2",
        description: "Berserk nos cuenta la historia de Guts , un antihéroe mercenario que vaga por el mundo en solitario en búsqueda de Apóstoles , unos seres demoníacos que antaño fueron humanos pero que sacrificaron una parte importante de sus vidas para conseguir poderes que les permitieran alcanzar sus más oscuros deseos.",
        type: "mangas",
        imageProduct: {
            firstImage: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/16518/9786075280530.jpg",
            secondImage: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/16518/9786075280530.jpg"
        },
        price: 2200,      
    },

    //comics
    {
        id: 5,
        title: "Civil War",
        description: "En una batalla entre Nitro y los Nuevos Guerreros, Nitro explotó, matando aparentemente a todo el equipo y a un gran número de civiles (incluyendo a 60 escolares cercanos). Esto llevó al gobierno de los Estados Unidos a introducir un registro de 'Armas vivas de destrucción masiva' para todos los individuos con superpoderes. La mayoría de los héroes estaban divididos sobre el tema, y se produjo una Civil War.",
        type: "comics",
        imageProduct: {
            firstImage: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/45054/9786076360859.jpg",
            secondImage: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/45054/9786076360859.jpg"
        },
        price: 5400,      
    },

    {
        id: 6,
        title: "JLA - La Torre de Babel",
        description: "Torre de Babel trata la traición percibida de Batman hacia la comunidad de superhéroes por mantener registros sobre las fortalezas y debilidades de sus aliados en la JLA, incluyendo planes para neutralizar a sus aliados en una lucha.",
        type: "comics",
        imageProduct: {
            firstImage: "http://d2r9epyceweg5n.cloudfront.net/stores/057/977/products/salvat-dc-41-9baadf622c5eba2b6514755489506611-640-0.jpg",
            secondImage: "http://d2r9epyceweg5n.cloudfront.net/stores/057/977/products/salvat-dc-41-9baadf622c5eba2b6514755489506611-640-0.jpg"
        },
        price: 2700,      
    },

    //nacional
    {
        id: 7,
        title: "El Eternauta",
        description: "El Eternauta cuenta una historia que transcurre la mayor parte del tiempo en la ciudad de Buenos Aires, Argentina, en un futuro distópico en el que una invasión de seres sobrenaturales se ha apoderado del territorio y ha desterrado a la población humana a socavones y cuevas en los que llevan vidas comunitarias.",
        type: "nacional",
        imageProduct: {
            firstImage: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/699142.jpg"
        },
        price: 10100,      
    },

    {
        id: 8,
        title: "Toda Mafalda",
        description: "Mafalda es una niña de 6 años, que de acuerdo a su difunto creador, el artista Quino, refleja el espíritu joven de la juventud argentina a través de esta figura que está preocupada por la sociedad y la paz no solo en Argentina, sino en el mundo.",
        type: "nacional",
        imageProduct: {
            firstImage: "https://images.cdn2.buscalibre.com/fit-in/360x360/e6/b4/e6b4c842c7f7974dfd9431740d66734e.jpg",
            secondImage: "https://images.cdn2.buscalibre.com/fit-in/360x360/e6/b4/e6b4c842c7f7974dfd9431740d66734e.jpg"
        },
        price: 11635,      
    },

    //novelas
    {
        id: 9,
        title: "It - Stephen King",
        description: "Cuenta la historia, en un juego de correspondencias con el pasado y el presente, de un grupo de siete amigos que son perseguidos por una entidad sobrenatural, al que llaman «Eso», que es capaz de cambiar de forma y se alimenta principalmente del terror que produce en sus víctimas. La narración orbita en torno a la localidad ficticia de Derry (Maine) y la inexplicable aura de horror y muerte que la rodea.",
        type: "novelas",
        imageProduct: {
            firstImage: "https://www.penguinlibros.com/ar/1596183/it.jpg",
            secondImage: "https://www.penguinlibros.com/ar/1596183/it.jpg"
        },
        price: 9199,      
    },

    {
        id: 10,
        title: "El Imperio Final - Brandon Sanderson",
        description: "Durante mil años han caído las cenizas y nada florece. Durante mil años los skaa han sido esclavizados y viven sumidos en un miedo inevitable. Durante mil años el Lord Legislador reina con un poder absoluto gracias al terror, a sus poderes e inmortalidad. Le ayudan «obligadores» e «inquisidores», junto a la poderosa magia de la «alomancia».",
        type: "novelas",
        imageProduct: {
            firstImage: "https://contentv2.tap-commerce.com/cover/large/9788466659949_1.jpg?id_com=1102&r=pad",
            secondImage: "https://contentv2.tap-commerce.com/cover/large/9788466659949_1.jpg?id_com=1102&r=pad"
        },
        price: 8199
    }
]

export default productos;