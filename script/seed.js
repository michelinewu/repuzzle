const {green, red} = require('chalk')
const {Product, User, Order, CartItem} = require('../server/db/models')
const db = require('../server/db')

const seed = async () => {
  try {
    await db.sync({force: true})

    const products = [
      {
        name: 'Dr. J Basketball Game',
        origPrice: 40.55,
        resalePrice: 23.28,
        description: 'massa donec dapibus duis at velit',
        image: '/images/basketball-game.png',
        rating: 2.83,
        stock: 1
      },
      {
        name: 'Blink',
        origPrice: 31.13,
        resalePrice: 25.27,
        description:
          'metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque',
        image: '/images/blink.png',
        rating: 3.71,
        stock: 1
      },
      {
        name: 'Camelot',
        origPrice: 17.36,
        resalePrice: 11.7,
        description: 'morbi vel lectus',
        image: '/images/camelot.png',
        rating: 0.87,
        stock: 6
      },
      {
        name: 'Candy Land',
        origPrice: 29.92,
        resalePrice: 14.71,
        description: 'elit sodales scelerisque mauris sit amet',
        image: '/images/candy-land.png',
        rating: 2.34,
        stock: 1
      },
      {
        name: 'Cards Against Humanity',
        origPrice: 76.93,
        resalePrice: 34.89,
        description: 'at turpis donec posuere metus vitae ipsum aliquam non',
        image: '/images/cards-against-humanity.png',
        rating: 0.7,
        stock: 1
      },
      {
        name: 'Casino Cards',
        origPrice: 46.7,
        resalePrice: 31.19,
        description:
          'convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque',
        image: '/images/casino-cards.png',
        rating: 4.45,
        stock: 1
      },
      {
        name: 'Chute 5',
        origPrice: 34.87,
        resalePrice: 28.51,
        description: 'quam a odio',
        image: '/images/chute-5.png',
        rating: 3.3,
        stock: 2
      },
      {
        name: 'Civilization',
        origPrice: 32.27,
        resalePrice: 23,
        description: 'sit amet cursus id turpis',
        image: '/images/civilization.png',
        rating: 3.68,
        stock: 1
      },
      {
        name: 'Classic Games',
        origPrice: 34.8,
        resalePrice: 27.22,
        description:
          'non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla',
        image: '/images/classic-games.png',
        rating: 3.81,
        stock: 1
      },
      {
        name: 'Clue',
        origPrice: 23.29,
        resalePrice: 11.46,
        description: 'nibh ligula nec sem duis aliquam',
        image: '/images/clue.png',
        rating: 4.94,
        stock: 1
      },
      {
        name: 'Deck of Cards',
        origPrice: 14.27,
        resalePrice: 12.72,
        description:
          'consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam',
        image: '/images/deck-of-cards.png',
        rating: 2.13,
        stock: 1
      },
      {
        name: 'Dice',
        origPrice: 8.98,
        resalePrice: 3.74,
        description:
          'vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus',
        image: '/images/dice.png',
        rating: 3.94,
        stock: 4
      },
      {
        name: 'Dominos',
        origPrice: 13.99,
        resalePrice: 6.01,
        description:
          'ac leo pellentesque ultrices mattis odio donec vitae nisi nam',
        image: '/images/dominos.png',
        rating: 0.61,
        stock: 1
      },
      {
        name: 'Ebay Auction Game',
        origPrice: 17.15,
        resalePrice: 10.84,
        description:
          'potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non',
        image: '/images/ebay-auction.png',
        rating: 2.17,
        stock: 1
      },
      {
        name: 'Enchanted Forest',
        origPrice: 31.07,
        resalePrice: 23.42,
        description:
          'proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio',
        image: '/images/enchanted-forest.png',
        rating: 4.14,
        stock: 1
      },
      {
        name: 'Flinch',
        origPrice: 12.31,
        resalePrice: 3.06,
        description:
          'iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci',
        image: '/images/flinch.png',
        rating: 4.31,
        stock: 2
      },
      {
        name: 'Hotels',
        origPrice: 14.29,
        resalePrice: 12.16,
        description:
          'iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit',
        image: '/images/hotels.png',
        rating: 1.41,
        stock: 1
      },
      {
        name: 'King Oil',
        origPrice: 49.56,
        resalePrice: 15.75,
        description:
          'duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec',
        image: '/images/king-oil.png',
        rating: 3.99,
        stock: 1
      },
      {
        name: 'Mahjong',
        origPrice: 40.01,
        resalePrice: 20.72,
        description:
          'scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis',
        image: '/images/mahjong.png',
        rating: 2.46,
        stock: 1
      },
      {
        name: 'Monopoly',
        origPrice: 16.35,
        resalePrice: 14.56,
        description: 'libero nullam sit amet turpis elementum ligula',
        image: '/images/monopoly.png',
        rating: 2.78,
        stock: 1
      },
      {
        name: 'Never Have I Ever',
        origPrice: 10,
        resalePrice: 8,
        description:
          'dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien',
        image: '/images/never-have-i-ever.png',
        rating: 1.46,
        stock: 1
      },
      {
        name: 'Othello',
        origPrice: 22.29,
        resalePrice: 10.97,
        description:
          'id lobortis convallis tortor risus dapibus augue vel accumsan',
        image: '/images/othello.png',
        rating: 1.91,
        stock: 1
      },
      {
        name: 'Pirate and Traveler',
        origPrice: 31.49,
        resalePrice: 14.45,
        description:
          'risus auctor sed tristique in tempus sit amet sem fusce consequat nulla',
        image: '/images/pirate-and-traveler.png',
        rating: 3.9,
        stock: 1
      },
      {
        name: 'Cinderella Puzzle',
        origPrice: 36.07,
        resalePrice: 36.07,
        description:
          'orci luctus et ultrices posuere cubilia curae nulla dapibus',
        image: '/images/puzzle-cinderella.png',
        rating: 1.85,
        stock: 1
      },
      {
        name: 'Disney Puzzle',
        origPrice: 38.3,
        resalePrice: 38.3,
        description:
          'pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla',
        image: '/images/puzzle-disney-birds.png',
        rating: 2.22,
        stock: 1
      },
      {
        name: 'Disney Fantasy Puzzle',
        origPrice: 49.59,
        resalePrice: 12.55,
        description:
          'dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut',
        image: '/images/puzzle-disney-fantasy.png',
        rating: 4.49,
        stock: 5
      },
      {
        name: 'Disneyland Puzzle',
        origPrice: 23.22,
        resalePrice: 17.19,
        description:
          'sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum',
        image: '/images/puzzle-disneyland.png',
        rating: 1.98,
        stock: 1
      },
      {
        name: 'Dragon Puzzle',
        origPrice: 41.77,
        resalePrice: 16.94,
        description:
          'purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu',
        image: '/images/puzzle-dragon.png',
        rating: 3.47,
        stock: 1
      },
      {
        name: 'Fairy Puzzle',
        origPrice: 15.67,
        resalePrice: 11.67,
        description:
          'ante vestibulum ante ipsum primis in faucibus orci luctus',
        image: '/images/puzzle-fairy.png',
        rating: 3.67,
        stock: 1
      },
      {
        name: 'Fruits and Veggies Puzzle',
        origPrice: 31.18,
        resalePrice: 7.84,
        description:
          'rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo',
        image: '/images/puzzle-fruits-veg.png',
        rating: 1.03,
        stock: 1
      },
      {
        name: 'Game Puzzle',
        origPrice: 34.57,
        resalePrice: 34.57,
        description: 'non sodales sed tincidunt eu felis fusce posuere',
        image: '/images/puzzle-games.png',
        rating: 1.86,
        stock: 1
      },
      {
        name: 'Homage Puzzle',
        origPrice: 46.97,
        resalePrice: 44.05,
        description:
          'cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum',
        image: '/images/puzzle-homage.png',
        rating: 1.59,
        stock: 1
      },
      {
        name: 'Little Mermaid Puzzle',
        origPrice: 27.59,
        resalePrice: 6.37,
        description:
          'pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis',
        image: '/images/puzzle-little-mermaid.png',
        rating: 1.96,
        stock: 4
      },
      {
        name: 'Lollipop Puzzle',
        origPrice: 27.83,
        resalePrice: 27.83,
        description: 'habitasse platea dictumst maecenas ut massa quis augue',
        image: '/images/puzzle-lollipop.png',
        rating: 3.2,
        stock: 1
      },
      {
        name: 'Puzzle Lot',
        origPrice: 47.62,
        resalePrice: 44.95,
        description:
          'sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
        image: '/images/puzzle-lot.png',
        rating: 4.72,
        stock: 1
      },
      {
        name: 'Noragami Puzzle',
        origPrice: 24.69,
        resalePrice: 12.16,
        description: 'rutrum rutrum neque aenean auctor gravida',
        image: '/images/puzzle-noragami.png',
        rating: 4.01,
        stock: 1
      },
      {
        name: 'Pebble Beach Puzzle',
        origPrice: 30.84,
        resalePrice: 30.84,
        description:
          'vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum',
        image: '/images/puzzle-pebble-beach.png',
        rating: 4.43,
        stock: 2
      },
      {
        name: 'Pixar Puzzle',
        origPrice: 35.47,
        resalePrice: 35.47,
        description: 'dolor morbi vel lectus in quam fringilla',
        image: '/images/puzzle-pixar.png',
        rating: 3.83,
        stock: 1
      },
      {
        name: 'Pokemon Puzzle',
        origPrice: 21.5,
        resalePrice: 14.35,
        description:
          'pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras',
        image: '/images/puzzle-pokemon.png',
        rating: 3.97,
        stock: 10
      },
      {
        name: 'Settlers of Catan',
        origPrice: 44.29,
        resalePrice: 16.83,
        description:
          'cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis',
        image: '/images/settlers-of-catan.png',
        rating: 3.97,
        stock: 1
      },
      {
        name: 'SNES Game Lot',
        origPrice: 35.94,
        resalePrice: 35.94,
        description: 'diam erat fermentum justo nec condimentum neque sapien',
        image: '/images/snes-lot-2.png',
        rating: 4.04,
        stock: 1
      },
      {
        name: 'SNES Game Lot',
        origPrice: 36.06,
        resalePrice: 20.44,
        description:
          'in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor',
        image: '/images/snes-lot.png',
        rating: 1.76,
        stock: 1
      },
      {
        name: 'Solotaire',
        origPrice: 31.26,
        resalePrice: 31.26,
        description:
          'et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque',
        image: '/images/solotaire.png',
        rating: 1.61,
        stock: 5
      },
      {
        name: 'Steeplechase',
        origPrice: 18.1,
        resalePrice: 12.58,
        description: 'etiam pretium iaculis',
        image: '/images/steeplechase.png',
        rating: 0.17,
        stock: 1
      },
      {
        name: 'Stratego',
        origPrice: 37.42,
        resalePrice: 37.42,
        description: 'ut ultrices vel augue vestibulum ante',
        image: '/images/stratego.png',
        rating: 4.79,
        stock: 1
      },
      {
        name: 'Sudoku Board',
        origPrice: 46.86,
        resalePrice: 38.87,
        description: 'primis in faucibus orci',
        image: '/images/sudoko-board.png',
        rating: 3.76,
        stock: 6
      },
      {
        name: 'Texas Holdem',
        origPrice: 48.62,
        resalePrice: 40.14,
        description: 'semper sapien a libero nam dui proin leo odio',
        image: '/images/texas-holdem.png',
        rating: 4.66,
        stock: 1
      },
      {
        name: "That's So '90s",
        origPrice: 34.96,
        resalePrice: 9.88,
        description:
          'pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut',
        image: '/images/thats-so-90s.png',
        rating: 2.35,
        stock: 1
      },
      {
        name: 'Twister',
        origPrice: 15.37,
        resalePrice: 10.23,
        description:
          'in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque',
        image: '/images/twister.png',
        rating: 3.28,
        stock: 2
      },
      {
        name: 'Unknown Title',
        origPrice: 18.04,
        resalePrice: 18.04,
        description:
          'velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget',
        image: '/images/unknown-title.png',
        rating: 2.06,
        stock: 1
      },
      {
        name: 'Uno',
        origPrice: 43.72,
        resalePrice: 3.69,
        description:
          'curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a',
        image: '/images/uno.png',
        rating: 1.02,
        stock: 1
      },
      {
        name: 'Vikings Game',
        origPrice: 21.28,
        resalePrice: 2.22,
        description:
          'nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed',
        image: '/images/vikings-game.png',
        rating: 0.72,
        stock: 1
      },
      {
        name: 'Which Witch',
        origPrice: 39.04,
        resalePrice: 39.04,
        description:
          'libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac',
        image: '/images/which-witch.png',
        rating: 3.33,
        stock: 1
      },
      {
        name: 'Nulla Sed Vel',
        origPrice: 43.59,
        resalePrice: 43.59,
        description: 'scelerisque mauris sit amet eros suspendisse accumsan',
        rating: 4.25,
        stock: 1
      },
      {
        name: 'Duis Mattis Egestas Metus Aenean Fermentum',
        origPrice: 34.33,
        resalePrice: 7.45,
        description:
          'lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia',
        rating: 3.28,
        stock: 1
      },
      {
        name: 'Elementum Ligula Vehicula Consequat Morbi A',
        origPrice: 25.99,
        resalePrice: 9.92,
        description:
          'dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
        rating: 1,
        stock: 1
      },
      {
        name: 'Ornare Consequat Lectus In Est Risus',
        origPrice: 23.97,
        resalePrice: 6.34,
        description:
          'leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas',
        rating: 0.97,
        stock: 1
      },
      {
        name: 'Vestibulum Proin Eu Mi Nulla',
        origPrice: 48.15,
        resalePrice: 48.15,
        description: 'dapibus augue vel accumsan tellus nisi eu orci mauris',
        rating: 3.8,
        stock: 1
      },
      {
        name: 'Felis Sed Lacus',
        origPrice: 14.18,
        resalePrice: 12.97,
        description:
          'sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla',
        rating: 0.15,
        stock: 1
      },
      {
        name: 'Magnis Dis Parturient Montes Nascetur',
        origPrice: 14.6,
        resalePrice: 14.6,
        description: 'curabitur convallis duis',
        rating: 2.89,
        stock: 1
      },
      {
        name: 'Ultrices Enim',
        origPrice: 45.23,
        resalePrice: 45.23,
        description:
          'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor',
        rating: 4.87,
        stock: 1
      },
      {
        name: 'Aliquam Convallis Nunc',
        origPrice: 19.69,
        resalePrice: 19.69,
        description:
          'curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis',
        rating: 2.63,
        stock: 1
      },
      {
        name: 'Ac Lobortis Vel',
        origPrice: 27.28,
        resalePrice: 27.28,
        description: 'consequat dui nec nisi volutpat eleifend donec ut dolor',
        rating: 0.46,
        stock: 1
      },
      {
        name: 'Tristique Est Et',
        origPrice: 40.3,
        resalePrice: 40.3,
        description:
          'non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum',
        rating: 0.65,
        stock: 2
      },
      {
        name: 'Nulla Eget Eros Elementum Pellentesque',
        origPrice: 36.71,
        resalePrice: 36.71,
        description: 'sit amet nunc viverra dapibus nulla suscipit',
        rating: 1.78,
        stock: 1
      },
      {
        name: 'Montes Nascetur Ridiculus',
        origPrice: 39.22,
        resalePrice: 39.22,
        description:
          'sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in',
        rating: 2.4,
        stock: 1
      },
      {
        name: 'Pulvinar Nulla Pede Ullamcorper Augue',
        origPrice: 35.57,
        resalePrice: 35.57,
        description:
          'luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at',
        rating: 0.95,
        stock: 3
      },
      {
        name: 'Posuere Cubilia',
        origPrice: 10.35,
        resalePrice: 2.97,
        description: 'facilisi cras non velit nec nisi',
        rating: 4,
        stock: 1
      },
      {
        name: 'Amet',
        origPrice: 45.39,
        resalePrice: 18.88,
        description: 'risus semper porta volutpat quam pede lobortis ligula',
        rating: 1.49,
        stock: 1
      },
      {
        name: 'Enim Blandit Mi In Porttitor Pede',
        origPrice: 6.87,
        resalePrice: 6.87,
        description:
          'amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci',
        rating: 4.98,
        stock: 10
      },
      {
        name: 'Pellentesque Quisque Porta',
        origPrice: 45.82,
        resalePrice: 45.82,
        description:
          'rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo',
        rating: 2.31,
        stock: 1
      },
      {
        name: 'Varius Ut',
        origPrice: 27.09,
        resalePrice: 27.09,
        description:
          'porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor',
        rating: 0.65,
        stock: 1
      },
      {
        name: 'Morbi',
        origPrice: 28.87,
        resalePrice: 22.24,
        description: 'integer aliquet massa id lobortis convallis tortor risus',
        rating: 1.94,
        stock: 1
      },
      {
        name: 'Magna',
        origPrice: 16.39,
        resalePrice: 2.57,
        description: 'duis ac nibh fusce lacus',
        rating: 2.22,
        stock: 2
      },
      {
        name: 'Massa',
        origPrice: 32.03,
        resalePrice: 25.75,
        description: 'rutrum ac lobortis vel dapibus',
        rating: 2.09,
        stock: 5
      },
      {
        name: 'Sollicitudin Ut Suscipit A Feugiat',
        origPrice: 47.94,
        resalePrice: 28.72,
        description:
          'dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum',
        rating: 1.75,
        stock: 1
      },
      {
        name: 'Interdum',
        origPrice: 47.74,
        resalePrice: 6.86,
        description:
          'vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus',
        rating: 3.96,
        stock: 1
      },
      {
        name: 'Quam Sollicitudin',
        origPrice: 48.92,
        resalePrice: 43.07,
        description: 'ipsum praesent blandit',
        rating: 2.23,
        stock: 1
      },
      {
        name: 'Semper Est Quam Pharetra Magna',
        origPrice: 29.89,
        resalePrice: 29.89,
        description: 'dolor sit amet consectetuer adipiscing elit proin',
        rating: 2.2,
        stock: 5
      },
      {
        name: 'Iaculis Congue Vivamus Metus Arcu',
        origPrice: 22.41,
        resalePrice: 11.37,
        description:
          'condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque',
        rating: 1.19,
        stock: 1
      },
      {
        name: 'Semper Interdum',
        origPrice: 46.53,
        resalePrice: 18.23,
        description: 'enim blandit mi',
        rating: 2.05,
        stock: 1
      },
      {
        name: 'Donec Ut',
        origPrice: 5.9,
        resalePrice: 4.32,
        description:
          'consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices',
        rating: 1.16,
        stock: 1
      },
      {
        name: 'Sapien',
        origPrice: 39.97,
        resalePrice: 39.97,
        description:
          'sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi',
        rating: 0.21,
        stock: 1
      },
      {
        name: 'Est Donec',
        origPrice: 9.5,
        resalePrice: 5.51,
        description: 'eleifend quam a odio in hac',
        rating: 1.16,
        stock: 1
      },
      {
        name: 'Convallis Nunc',
        origPrice: 39.14,
        resalePrice: 39.14,
        description: 'tellus semper interdum',
        rating: 0.78,
        stock: 1
      },
      {
        name: 'Tempus',
        origPrice: 26.85,
        resalePrice: 22.39,
        description:
          'eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in',
        rating: 0.38,
        stock: 1
      },
      {
        name: 'Vestibulum Ante Ipsum Primis In',
        origPrice: 19.94,
        resalePrice: 19.94,
        description:
          'duis bibendum felis sed interdum venenatis turpis enim blandit mi in',
        rating: 4.56,
        stock: 1
      },
      {
        name: 'Nulla Sed',
        origPrice: 45.47,
        resalePrice: 45.47,
        description:
          'erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi',
        rating: 2.43,
        stock: 1
      },
      {
        name: 'Cras Pellentesque Volutpat Dui',
        origPrice: 33.83,
        resalePrice: 33.83,
        description: 'lorem ipsum dolor',
        rating: 1.28,
        stock: 1
      },
      {
        name: 'Magna Vulputate Luctus Cum Sociis',
        origPrice: 11.99,
        resalePrice: 11.99,
        description: 'porttitor pede justo eu massa donec dapibus duis at',
        rating: 2.07,
        stock: 1
      },
      {
        name: 'Amet Cursus',
        origPrice: 39.04,
        resalePrice: 39.04,
        description:
          'lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin',
        rating: 0.09,
        stock: 1
      },
      {
        name: 'Pretium Iaculis Diam Erat Fermentum Justo',
        origPrice: 23.77,
        resalePrice: 23.77,
        description:
          'in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea',
        rating: 0.35,
        stock: 6
      },
      {
        name: 'Ac Neque Duis Bibendum Morbi Non',
        origPrice: 3.37,
        resalePrice: 2.41,
        description: 'ac neque duis',
        rating: 1.51,
        stock: 1
      },
      {
        name: 'Libero Ut Massa Volutpat Convallis Morbi',
        origPrice: 45.66,
        resalePrice: 45.66,
        description:
          'odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel',
        rating: 1.02,
        stock: 1
      },
      {
        name: 'Nulla Pede Ullamcorper Augue A',
        origPrice: 43.27,
        resalePrice: 31.89,
        description:
          'lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed',
        rating: 3.65,
        stock: 1
      },
      {
        name: 'Aliquam Convallis',
        origPrice: 44.99,
        resalePrice: 44.99,
        description:
          'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien',
        rating: 1.5,
        stock: 7
      },
      {
        name: 'Donec Vitae',
        origPrice: 40.38,
        resalePrice: 40.38,
        description: 'ut odio cras mi pede',
        rating: 3.25,
        stock: 1
      },
      {
        name: 'Volutpat Eleifend Donec Ut Dolor',
        origPrice: 47.43,
        resalePrice: 47.43,
        description: 'ultrices posuere cubilia',
        rating: 1.98,
        stock: 1
      },
      {
        name: 'Semper Est',
        origPrice: 27.59,
        resalePrice: 27.59,
        description: 'etiam vel augue vestibulum rutrum rutrum neque',
        rating: 3.59,
        stock: 1
      },
      {
        name: 'Duis',
        origPrice: 46.43,
        resalePrice: 46.43,
        description:
          'nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum',
        rating: 0.42,
        stock: 1
      }
    ]

    const users = [
      {
        email: 'lvogeler0@cdc.gov',
        password: 'gpTPC8',
        firstName: 'Laurella',
        lastName: 'Vogeler',
        googleId: '39395894056063953528',
        addressStreet1: '0754 Center Pass',
        addressStreet2: 'Apt 1',
        addressCity: 'Merdeka',
        addressPostal: '',
        addressCountry: 'Indonesia'
      },
      {
        email: 'kgarbar1@issuu.com',
        password: 'xvJx9gPtE7p',
        firstName: 'Karon',
        lastName: 'Garbar',
        googleId: '75701792457577231135',
        addressStreet1: '90748 Ridge Oak Junction',
        addressStreet2: 'Apt 2',
        addressCity: 'Keswick',
        addressPostal: 'L4P',
        addressCountry: 'Canada'
      },
      {
        email: 'mthorn2@yahoo.com',
        password: 'YcNx5WnlqAZ',
        firstName: 'Marlena',
        lastName: 'Thorn',
        googleId: '74531448770881085597',
        addressStreet1: '94178 Corscot Drive',
        addressStreet2: 'Apt 3',
        addressCity: 'Qīrah',
        addressPostal: '',
        addressCountry: 'Palestinian Territory'
      },
      {
        email: 'bgaish3@mapquest.com',
        password: 'pFtE2Iwh8',
        firstName: 'Bucky',
        lastName: 'Gaish',
        googleId: '27301698150211933668',
        addressStreet1: '1 High Crossing Point',
        addressStreet2: 'Apt 4',
        addressCity: 'Gambarjati',
        addressPostal: '',
        addressCountry: 'Indonesia'
      },
      {
        email: 'cenglefield4@vinaora.com',
        password: 'ubRpRrLNe',
        firstName: 'Chic',
        lastName: 'Englefield',
        googleId: '47940198749066105790',
        addressStreet1: '033 Kenwood Lane',
        addressStreet2: 'Apt 5',
        addressCity: 'El Congo',
        addressPostal: '',
        addressCountry: 'El Salvador'
      },
      {
        email: 'ytorres5@repuzzle.com',
        password: 'isadmin',
        firstName: 'Yves',
        lastName: 'Torres',
        googleId: '22059914897672740588',
        addressStreet1: '3038 Arizona Avenue',
        addressStreet2: 'Apt 6',
        addressCity: 'Canhestros',
        addressPostal: '7900-495',
        addressCountry: 'Portugal',
        isAdmin: true
      },
      {
        email: 'awoehler6@cbc.ca',
        password: 'hSKpZd',
        firstName: 'Agace',
        lastName: 'Woehler',
        googleId: '58639982255334067756',
        addressStreet1: '408 Union Trail',
        addressStreet2: 'Apt 7',
        addressCity: 'Karangbungur',
        addressPostal: '',
        addressCountry: 'Indonesia'
      },
      {
        email: 'atatford7@ftc.gov',
        password: 'PKswTY47MdT',
        firstName: 'Aldric',
        lastName: 'Tatford',
        googleId: '55970821362363558392',
        addressStreet1: '6304 Acker Place',
        addressStreet2: 'Apt 8',
        addressCity: 'Wenbi',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'ddwight8@symantec.com',
        password: '0rI0HiSN',
        firstName: 'Dickie',
        lastName: 'Dwight',
        googleId: '33699435945782699285',
        addressStreet1: '634 Summit Road',
        addressStreet2: 'Apt 9',
        addressCity: 'Al Jubayhah',
        addressPostal: '',
        addressCountry: 'Jordan'
      },
      {
        email: 'lgascard9@cornell.edu',
        password: 'ms8Xsp3g',
        firstName: 'Leta',
        lastName: 'Gascard',
        googleId: '21288709437046262661',
        addressStreet1: '7313 Stang Pass',
        addressStreet2: 'Apt 10',
        addressCity: 'Bilo',
        addressPostal: '',
        addressCountry: 'Indonesia'
      },
      {
        email: 'ehasta@pagesperso-orange.fr',
        password: '9KqDCTBmCy',
        firstName: 'Edik',
        lastName: 'Hast',
        googleId: '71091906249346804881',
        addressStreet1: '057 Sullivan Pass',
        addressStreet2: 'Apt 11',
        addressCity: 'Vrede',
        addressPostal: 9850,
        addressCountry: 'South Africa'
      },
      {
        email: 'njennisonb@admin.ch',
        password: 'MO1AAx8AIL',
        firstName: 'Noble',
        lastName: 'Jennison',
        googleId: '25260455347187903422',
        addressStreet1: '6240 Eastwood Alley',
        addressStreet2: 'Apt 12',
        addressCity: 'Gävle',
        addressPostal: '801 38',
        addressCountry: 'Sweden'
      },
      {
        email: 'dprestidgec@w3.org',
        password: 'CAxxWBc',
        firstName: 'Denyse',
        lastName: 'Prestidge',
        googleId: '74933157464285829460',
        addressStreet1: '5536 Walton Way',
        addressStreet2: 'Apt 13',
        addressCity: 'Chalon-sur-Saône',
        addressPostal: '71332 CEDEX',
        addressCountry: 'France'
      },
      {
        email: 'wlestranged@google.nl',
        password: 'tqJilhV3n',
        firstName: 'Wolfgang',
        lastName: "L' Estrange",
        googleId: '13240927241768335718',
        addressStreet1: '750 Pawling Road',
        addressStreet2: 'Apt 14',
        addressCity: 'Sáchica',
        addressPostal: 154047,
        addressCountry: 'Colombia'
      },
      {
        email: 'mmervyne@hatena.ne.jp',
        password: 'xFc0KJX',
        firstName: 'Marchelle',
        lastName: 'Mervyn',
        googleId: '38803042127499483913',
        addressStreet1: '3 Hanover Terrace',
        addressStreet2: 'Apt 15',
        addressCity: 'Maguyam',
        addressPostal: 9400,
        addressCountry: 'Philippines'
      },
      {
        email: 'rwhitlandf@naver.com',
        password: '2Qqfbjtcj22T',
        firstName: 'Reidar',
        lastName: 'Whitland',
        googleId: '51318235075505545003',
        addressStreet1: '4330 Sheridan Road',
        addressStreet2: 'Apt 16',
        addressCity: 'Bafia',
        addressPostal: '',
        addressCountry: 'Cameroon'
      },
      {
        email: 'ftatloweg@washington.edu',
        password: 'VWNEd5',
        firstName: 'Flint',
        lastName: 'Tatlowe',
        googleId: '24269675307347339724',
        addressStreet1: '8056 Forest Run Pass',
        addressStreet2: 'Apt 17',
        addressCity: 'Drakhtik',
        addressPostal: '',
        addressCountry: 'Armenia'
      },
      {
        email: 'mackermannh@elpais.com',
        password: 'wa8OLjXMiGYj',
        firstName: 'Marsha',
        lastName: 'Ackermann',
        googleId: '86631051277987121949',
        addressStreet1: '1 Rutledge Avenue',
        addressStreet2: 'Apt 18',
        addressCity: 'Arbois',
        addressPostal: '39605 CEDEX',
        addressCountry: 'France'
      },
      {
        email: 'pgurradoi@businessweek.com',
        password: '7VwP0mNjDi',
        firstName: 'Patrick',
        lastName: 'Gurrado',
        googleId: '40333265133648737989',
        addressStreet1: '41 Namekagon Junction',
        addressStreet2: 'Apt 19',
        addressCity: 'Almada',
        addressPostal: '2800-011',
        addressCountry: 'Portugal'
      },
      {
        email: 'cskiggsj@japanpost.jp',
        password: 'ITDud8UYXpA',
        firstName: 'Con',
        lastName: 'Skiggs',
        googleId: '93606754728709225026',
        addressStreet1: '9 Schlimgen Terrace',
        addressStreet2: 'Apt 20',
        addressCity: 'Renhe',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'wgroomk@buzzfeed.com',
        password: 'Ie0nkM1uptVT',
        firstName: 'Weider',
        lastName: 'Groom',
        googleId: '88496622420867024070',
        addressStreet1: '247 Springs Lane',
        addressStreet2: 'Apt 21',
        addressCity: 'Ban Muang',
        addressPostal: 47140,
        addressCountry: 'Thailand'
      },
      {
        email: 'igroartyl@squarespace.com',
        password: '78Em0rkI1t',
        firstName: 'Iggie',
        lastName: 'Groarty',
        googleId: '19807017470217405538',
        addressStreet1: '25 Fuller Crossing',
        addressStreet2: 'Apt 22',
        addressCity: 'Oslo',
        addressPostal: 571,
        addressCountry: 'Norway'
      },
      {
        email: 'dsawoodm@123-reg.co.uk',
        password: 'SkppjR2T1',
        firstName: 'Deborah',
        lastName: 'Sawood',
        googleId: '40939028594166154344',
        addressStreet1: '5495 Hoepker Drive',
        addressStreet2: 'Apt 23',
        addressCity: 'Shuozhou',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'glagrangen@hexun.com',
        password: 'ZK0fLicW',
        firstName: 'Gabriello',
        lastName: 'La Grange',
        googleId: '94738704314835499176',
        addressStreet1: '223 American Junction',
        addressStreet2: 'Apt 24',
        addressCity: 'Fuji',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'darono@ed.gov',
        password: 'uz0rk3Bcb',
        firstName: 'Dewey',
        lastName: 'Aron',
        googleId: '98083664964363742337',
        addressStreet1: '8451 Fairfield Plaza',
        addressStreet2: 'Apt 25',
        addressCity: 'Nyköping',
        addressPostal: '611 24',
        addressCountry: 'Sweden'
      },
      {
        email: 'scorderop@delicious.com',
        password: 'Szc0ettAiFZk',
        firstName: 'Serena',
        lastName: 'Cordero',
        googleId: '79336641330002177196',
        addressStreet1: '99 Morningstar Point',
        addressStreet2: 'Suite 26',
        addressCity: 'Soledad',
        addressPostal: '',
        addressCountry: 'Venezuela'
      },
      {
        email: 'ekeelinq@usgs.gov',
        password: 'H78XBUvbLPO',
        firstName: 'Emmeline',
        lastName: 'Keelin',
        googleId: '88111741859103774952',
        addressStreet1: '75448 7th Terrace',
        addressStreet2: 'Suite 27',
        addressCity: 'Leeuwarden',
        addressPostal: 8934,
        addressCountry: 'Netherlands'
      },
      {
        email: 'mdeclerqr@unesco.org',
        password: 'YZsZPBckBMH',
        firstName: 'Madlin',
        lastName: 'de Clerq',
        googleId: '45826101332822558654',
        addressStreet1: '34 Fisk Court',
        addressStreet2: 'Suite 28',
        addressCity: 'Täby',
        addressPostal: '187 14',
        addressCountry: 'Sweden'
      },
      {
        email: 'bkilliams@who.int',
        password: 'bfOoRkfWXJT',
        firstName: 'Bruce',
        lastName: 'Killiam',
        googleId: '13173354781722974086',
        addressStreet1: '8 Bartelt Alley',
        addressStreet2: 'Suite 29',
        addressCity: 'Toritama',
        addressPostal: '55125-000',
        addressCountry: 'Brazil'
      },
      {
        email: 'kadnett@weibo.com',
        password: 'z5t9dE',
        firstName: 'Kirstin',
        lastName: 'Adnet',
        googleId: '65615084721889588528',
        addressStreet1: '8 Ruskin Trail',
        addressStreet2: 'Suite 30',
        addressCity: 'Bugo',
        addressPostal: 9222,
        addressCountry: 'Philippines'
      },
      {
        email: 'sshillingfordu@scientificamerican.com',
        password: 'TrK8BcQX',
        firstName: 'Savina',
        lastName: 'Shillingford',
        googleId: '15329165238513736598',
        addressStreet1: '25495 Helena Parkway',
        addressStreet2: 'Suite 31',
        addressCity: 'Montinho',
        addressPostal: '4625-608',
        addressCountry: 'Portugal'
      },
      {
        email: 'dcleverleyv@independent.co.uk',
        password: 's7OkCrf8',
        firstName: 'Devina',
        lastName: 'Cleverley',
        googleId: '30162098455209248474',
        addressStreet1: '933 Loomis Circle',
        addressStreet2: 'Suite 32',
        addressCity: 'Ljungby',
        addressPostal: '341 70',
        addressCountry: 'Sweden'
      },
      {
        email: 'sllewhellinw@google.com.br',
        password: 'C4BGKS2ON',
        firstName: 'Sean',
        lastName: 'Llewhellin',
        googleId: '10484574596620634470',
        addressStreet1: '016 Burrows Road',
        addressStreet2: 'Suite 33',
        addressCity: 'Wichita',
        addressPostal: 67210,
        addressCountry: 'United States'
      },
      {
        email: 'ipinnegarx@weebly.com',
        password: 'qdMI2IfNcl',
        firstName: 'Iseabal',
        lastName: 'Pinnegar',
        googleId: '94477833260467594465',
        addressStreet1: '9906 Mallory Junction',
        addressStreet2: 'Suite 34',
        addressCity: 'Nine',
        addressPostal: '4775-446',
        addressCountry: 'Portugal'
      },
      {
        email: 'aimliny@zdnet.com',
        password: 'KPVJE3HG',
        firstName: 'Ari',
        lastName: 'Imlin',
        googleId: '59237612120480921462',
        addressStreet1: '2 6th Pass',
        addressStreet2: 'Suite 35',
        addressCity: 'Ząbkowice Śląskie',
        addressPostal: '57-201',
        addressCountry: 'Poland'
      },
      {
        email: 'sreedsz@epa.gov',
        password: 'mQbicFw',
        firstName: 'Salomone',
        lastName: 'Reeds',
        googleId: '61564606703809980897',
        addressStreet1: '678 Bobwhite Circle',
        addressStreet2: 'Suite 36',
        addressCity: 'Coromandel',
        addressPostal: '38550-000',
        addressCountry: 'Brazil'
      },
      {
        email: 'amitham10@deviantart.com',
        password: 'kTijfU',
        firstName: 'Angelle',
        lastName: 'Mitham',
        googleId: '86326244488560146765',
        addressStreet1: '9483 Daystar Crossing',
        addressStreet2: 'Suite 37',
        addressCity: 'Terek',
        addressPostal: 361203,
        addressCountry: 'Russia'
      },
      {
        email: 'sraper11@huffingtonpost.com',
        password: 'YorwDrianAz',
        firstName: 'Sydel',
        lastName: 'Raper',
        googleId: '96447118464780626643',
        addressStreet1: '54065 Ridge Oak Court',
        addressStreet2: 'Suite 38',
        addressCity: 'Sake',
        addressPostal: '',
        addressCountry: 'Democratic Republic of the Congo'
      },
      {
        email: 'dspain12@indiegogo.com',
        password: 'fLZXRK8SFOq',
        firstName: 'Darsey',
        lastName: 'Spain',
        googleId: '66534633069935230348',
        addressStreet1: '58078 Dovetail Junction',
        addressStreet2: 'Suite 39',
        addressCity: 'Casais Baleal',
        addressPostal: '2520-053',
        addressCountry: 'Portugal'
      },
      {
        email: 'mhumpage13@accuweather.com',
        password: 'aN6jfVyqM3',
        firstName: 'Madalyn',
        lastName: 'Humpage',
        googleId: '29730453757247516829',
        addressStreet1: '1 Melody Lane',
        addressStreet2: 'Suite 40',
        addressCity: 'Molsheim',
        addressPostal: '67124 CEDEX',
        addressCountry: 'France'
      },
      {
        email: 'arudgerd14@bizjournals.com',
        password: 'FpegP2RNXsB',
        firstName: 'Allyn',
        lastName: 'Rudgerd',
        googleId: '86821392907788886127',
        addressStreet1: '54480 Lakewood Gardens Pass',
        addressStreet2: 'Suite 41',
        addressCity: 'Taihu',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'tcoste15@flavors.me',
        password: 'TsK6GwZmGgb',
        firstName: 'Templeton',
        lastName: 'Coste',
        googleId: '93705001183385611837',
        addressStreet1: '493 Kenwood Pass',
        addressStreet2: 'Suite 42',
        addressCity: 'Aswan',
        addressPostal: '',
        addressCountry: 'Egypt'
      },
      {
        email: 'abraferton16@sina.com.cn',
        password: 'eS2zI6ufAsqv',
        firstName: 'Arnie',
        lastName: 'Braferton',
        googleId: '99974491370318314062',
        addressStreet1: '14665 Thierer Road',
        addressStreet2: 'Suite 43',
        addressCity: 'Nangang',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'bfairbrace17@intel.com',
        password: 'XhxUywnHiz',
        firstName: 'Belle',
        lastName: 'Fairbrace',
        googleId: '32342855569857798522',
        addressStreet1: '0909 Anniversary Point',
        addressStreet2: 'Suite 44',
        addressCity: 'Pancol',
        addressPostal: 3200,
        addressCountry: 'Philippines'
      },
      {
        email: 'bviger18@constantcontact.com',
        password: 'VqR5tBE2VBP',
        firstName: 'Bendick',
        lastName: 'Viger',
        googleId: '34511833764933794738',
        addressStreet1: '00198 Johnson Court',
        addressStreet2: 'Suite 45',
        addressCity: 'Souto',
        addressPostal: '4750-419',
        addressCountry: 'Portugal'
      },
      {
        email: 'hitzak19@cdc.gov',
        password: '8qSsRSSpC76',
        firstName: 'Hagan',
        lastName: 'Itzak',
        googleId: '83339724437149100008',
        addressStreet1: '2 Sullivan Court',
        addressStreet2: 'Suite 46',
        addressCity: 'Sukabumi',
        addressPostal: '',
        addressCountry: 'Indonesia'
      },
      {
        email: 'ccasale1a@infoseek.co.jp',
        password: '31eNs9vh66gC',
        firstName: 'Cirillo',
        lastName: 'Casale',
        googleId: '56128555277991697967',
        addressStreet1: '71 Ridge Oak Center',
        addressStreet2: 'Suite 47',
        addressCity: 'Daohe',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'aaxon1b@canalblog.com',
        password: 'VZmi5w',
        firstName: 'Adelaida',
        lastName: 'Axon',
        googleId: '16165613363304030203',
        addressStreet1: '4 Ronald Regan Road',
        addressStreet2: 'Suite 48',
        addressCity: 'Masaran',
        addressPostal: '',
        addressCountry: 'Indonesia'
      },
      {
        email: 'ssimion1c@earthlink.net',
        password: 'BzfiRr10y',
        firstName: 'Silas',
        lastName: 'Simion',
        googleId: '99901085413016208886',
        addressStreet1: '063 Thackeray Junction',
        addressStreet2: 'Suite 49',
        addressCity: 'Seso',
        addressPostal: '',
        addressCountry: 'Indonesia'
      },
      {
        email: 'azupo1d@tiny.cc',
        password: 'ndeNM5vb8',
        firstName: 'Alvera',
        lastName: 'Zupo',
        googleId: '69377192154315250361',
        addressStreet1: '499 Rockefeller Way',
        addressStreet2: 'Suite 50',
        addressCity: 'Lutoryż',
        addressPostal: '36-047',
        addressCountry: 'Poland'
      },
      {
        email: 'tlondesborough1e@omniture.com',
        password: 'qsHjPd0wg',
        firstName: 'Trev',
        lastName: 'Londesborough',
        googleId: '36957989173714375023',
        addressStreet1: '34 Namekagon Center',
        addressStreet2: 'Suite 51',
        addressCity: 'Krutja e Poshtme',
        addressPostal: '',
        addressCountry: 'Albania'
      },
      {
        email: 'tancliffe1f@nytimes.com',
        password: 'B2NQlM',
        firstName: 'Tommi',
        lastName: 'Ancliffe',
        googleId: '33311664610631148689',
        addressStreet1: '923 Northridge Crossing',
        addressStreet2: 'Suite 52',
        addressCity: 'Ongjin',
        addressPostal: '',
        addressCountry: 'North Korea'
      },
      {
        email: 'bglashby1g@godaddy.com',
        password: '77nOSb',
        firstName: 'Brinn',
        lastName: 'Glashby',
        googleId: '43391274646633500483',
        addressStreet1: '78042 Bowman Plaza',
        addressStreet2: 'Suite 53',
        addressCity: 'Gostyń',
        addressPostal: '63-816',
        addressCountry: 'Poland'
      },
      {
        email: 'aschutter1h@aol.com',
        password: 'zGwKTr4',
        firstName: 'Annalise',
        lastName: 'Schutter',
        googleId: '30345047637643111906',
        addressStreet1: '623 Steensland Point',
        addressStreet2: 'Suite 54',
        addressCity: 'Al Balyanā',
        addressPostal: '',
        addressCountry: 'Egypt'
      },
      {
        email: 'kgaskin1i@ow.ly',
        password: 'ocC4DHWb0',
        firstName: 'Kara',
        lastName: 'Gaskin',
        googleId: '60368048895623467807',
        addressStreet1: '2972 Farragut Center',
        addressStreet2: '# 55',
        addressCity: 'Toguchin',
        addressPostal: 633456,
        addressCountry: 'Russia'
      },
      {
        email: 'fliversley1j@ameblo.jp',
        password: 'fYQXcD3d',
        firstName: 'Farah',
        lastName: 'Liversley',
        googleId: '74579833835918395601',
        addressStreet1: '8948 Amoth Street',
        addressStreet2: '# 56',
        addressCity: 'Pitomača',
        addressPostal: 33405,
        addressCountry: 'Croatia'
      },
      {
        email: 'agarrow1k@cafepress.com',
        password: 'ijqtPjfiC',
        firstName: 'Adriena',
        lastName: 'Garrow',
        googleId: '52286278571749207704',
        addressStreet1: '2 Alpine Road',
        addressStreet2: '# 57',
        addressCity: 'San Juan del Surutú',
        addressPostal: '',
        addressCountry: 'Bolivia'
      },
      {
        email: 'blideard1l@ezinearticles.com',
        password: 'Lsestlzx',
        firstName: 'Bili',
        lastName: 'Lideard',
        googleId: '90065874330873679445',
        addressStreet1: '339 Brentwood Park',
        addressStreet2: '# 58',
        addressCity: 'Puan',
        addressPostal: '',
        addressCountry: 'South Korea'
      },
      {
        email: 'tmaultby1m@ca.gov',
        password: 'fYC2fBKU',
        firstName: 'Traver',
        lastName: 'Maultby',
        googleId: '95882758338918202746',
        addressStreet1: '616 Gulseth Junction',
        addressStreet2: '# 59',
        addressCity: 'Kleszczewo',
        addressPostal: '63-005',
        addressCountry: 'Poland'
      },
      {
        email: 'msudy1n@shop-pro.jp',
        password: '4GEMOI5jwHe',
        firstName: 'Morna',
        lastName: 'Sudy',
        googleId: '63080499878642796750',
        addressStreet1: '05506 Hermina Park',
        addressStreet2: '# 60',
        addressCity: 'Goragorskiy',
        addressPostal: 366818,
        addressCountry: 'Russia'
      },
      {
        email: 'mgautrey1o@angelfire.com',
        password: 'gzdLFfY',
        firstName: 'Marcella',
        lastName: 'Gautrey',
        googleId: '33575047852946615477',
        addressStreet1: '77 Havey Alley',
        addressStreet2: '# 61',
        addressCity: 'Frederiksberg',
        addressPostal: 1950,
        addressCountry: 'Denmark'
      },
      {
        email: 'lbaake1p@elpais.com',
        password: 'gu2GhY4knas5',
        firstName: 'Levy',
        lastName: 'Baake',
        googleId: '59732215728911911452',
        addressStreet1: '02933 Sutherland Center',
        addressStreet2: '# 62',
        addressCity: 'Bulan',
        addressPostal: 4706,
        addressCountry: 'Philippines'
      },
      {
        email: 'ebison1q@histats.com',
        password: 'UcNmSGc',
        firstName: 'El',
        lastName: 'Bison',
        googleId: '21233174389886690341',
        addressStreet1: '37 Del Sol Alley',
        addressStreet2: '# 63',
        addressCity: 'New Westminster',
        addressPostal: 'V4C',
        addressCountry: 'Canada'
      },
      {
        email: 'bmeasham1r@nps.gov',
        password: 'bR8UX4qg',
        firstName: 'Buffy',
        lastName: 'Measham',
        googleId: '52190925855326519303',
        addressStreet1: '784 Crowley Place',
        addressStreet2: '# 64',
        addressCity: 'Strasbourg',
        addressPostal: '67961 CEDEX 9',
        addressCountry: 'France'
      },
      {
        email: 'khaberfield1s@unc.edu',
        password: 'bZ76yejR',
        firstName: 'Kane',
        lastName: 'Haberfield',
        googleId: '44677514988061434612',
        addressStreet1: '28 Pine View Way',
        addressStreet2: '# 65',
        addressCity: 'Beizhang',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'chawkin1t@ftc.gov',
        password: 'VkPv92p',
        firstName: 'Charles',
        lastName: 'Hawkin',
        googleId: '34188486806935560545',
        addressStreet1: '7 Clarendon Parkway',
        addressStreet2: '# 66',
        addressCity: 'Nangabulik',
        addressPostal: '',
        addressCountry: 'Indonesia'
      },
      {
        email: 'lwhitehair1u@github.com',
        password: 'JWaq6xRACZJ',
        firstName: 'Loise',
        lastName: 'Whitehair',
        googleId: '12916371077128848636',
        addressStreet1: '92651 Kenwood Center',
        addressStreet2: '# 67',
        addressCity: 'Đức Phong',
        addressPostal: '',
        addressCountry: 'Vietnam'
      },
      {
        email: 'pwankling1v@yellowbook.com',
        password: 'Wqr3jtP',
        firstName: 'Percy',
        lastName: 'Wankling',
        googleId: '20366315636397734837',
        addressStreet1: '53 5th Court',
        addressStreet2: '# 68',
        addressCity: 'Meïganga',
        addressPostal: '',
        addressCountry: 'Cameroon'
      },
      {
        email: 'pgerrels1w@ox.ac.uk',
        password: 'XyMnzZG',
        firstName: 'Pammie',
        lastName: 'Gerrels',
        googleId: '17178474616875136255',
        addressStreet1: '1938 Homewood Lane',
        addressStreet2: '# 69',
        addressCity: 'Huangzhuang',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'enaile1x@zdnet.com',
        password: 'k66tAwavJv',
        firstName: 'Ewen',
        lastName: 'Naile',
        googleId: '74585868985686893735',
        addressStreet1: '17629 Oriole Parkway',
        addressStreet2: '# 70',
        addressCity: 'Pas Pul',
        addressPostal: '',
        addressCountry: 'Afghanistan'
      },
      {
        email: 'bgillingwater1y@so-net.ne.jp',
        password: 'vtr7aF',
        firstName: 'Biddy',
        lastName: 'Gillingwater',
        googleId: '41487059023623947098',
        addressStreet1: '46562 Bashford Avenue',
        addressStreet2: '# 71',
        addressCity: 'Brunssum',
        addressPostal: 6444,
        addressCountry: 'Netherlands'
      },
      {
        email: 'rinkpin1z@amazonaws.com',
        password: 'SebwqRU5nzM',
        firstName: 'Rick',
        lastName: 'Inkpin',
        googleId: '99178645780728786777',
        addressStreet1: '30 Grover Street',
        addressStreet2: '# 72',
        addressCity: 'Mintang',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'jgerding20@nymag.com',
        password: '4d5inm',
        firstName: 'Jillane',
        lastName: 'Gerding',
        googleId: '77774850026301816127',
        addressStreet1: '76095 Lotheville Terrace',
        addressStreet2: '# 73',
        addressCity: 'Kruševo',
        addressPostal: 34320,
        addressCountry: 'Croatia'
      },
      {
        email: 'bpurchon21@booking.com',
        password: 'gYYElo',
        firstName: 'Bert',
        lastName: 'Purchon',
        googleId: '16661071315709809543',
        addressStreet1: '72 Onsgard Street',
        addressStreet2: '# 74',
        addressCity: 'Targuist',
        addressPostal: '',
        addressCountry: 'Morocco'
      },
      {
        email: 'rrailton22@jugem.jp',
        password: '5Q75JDXWq0YT',
        firstName: 'Regen',
        lastName: 'Railton',
        googleId: '19381469786534757563',
        addressStreet1: '8 Pond Crossing',
        addressStreet2: '# 75',
        addressCity: 'Patambuco',
        addressPostal: '',
        addressCountry: 'Peru'
      },
      {
        email: 'kdesouza23@sohu.com',
        password: 'wd3eQk91yF',
        firstName: 'Kristal',
        lastName: 'De Souza',
        googleId: '99284134116379393143',
        addressStreet1: '20 Corscot Alley',
        addressStreet2: '# 76',
        addressCity: 'Wangzha',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'cemor24@springer.com',
        password: 'G4Flb215QA8',
        firstName: 'Cecilia',
        lastName: 'Emor',
        googleId: '89089991807160934433',
        addressStreet1: '60 Westridge Lane',
        addressStreet2: '# 77',
        addressCity: 'Siilinjärvi',
        addressPostal: 71801,
        addressCountry: 'Finland'
      },
      {
        email: 'cparkisson25@netlog.com',
        password: 't0adGVK8',
        firstName: 'Cleon',
        lastName: 'Parkisson',
        googleId: '18664355544970791357',
        addressStreet1: '734 Columbus Lane',
        addressStreet2: '# 78',
        addressCity: 'Menghai',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'nroderick26@a8.net',
        password: 'i2hrn0OB',
        firstName: 'Noni',
        lastName: 'Roderick',
        googleId: '91402389346380450236',
        addressStreet1: '9 Corry Court',
        addressStreet2: '# 79',
        addressCity: 'Värnamo',
        addressPostal: '331 54',
        addressCountry: 'Sweden'
      },
      {
        email: 'wranvoise27@shareasale.com',
        password: 'WEJ72EK',
        firstName: 'Winnifred',
        lastName: 'Ranvoise',
        googleId: '27170832262166607081',
        addressStreet1: '4 Westend Plaza',
        addressStreet2: '# 80',
        addressCity: 'Pinggang',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'jbaldini28@unblog.fr',
        password: 'PJG8APyueW',
        firstName: 'Julina',
        lastName: 'Baldini',
        googleId: '72542495339940446871',
        addressStreet1: '637 Garrison Circle',
        addressStreet2: 'Apt 81',
        addressCity: 'Staryy Saltiv',
        addressPostal: '',
        addressCountry: 'Ukraine'
      },
      {
        email: 'iesom29@multiply.com',
        password: 'kedVJ2I',
        firstName: 'Ingeborg',
        lastName: 'Esom',
        googleId: '45499054465064330277',
        addressStreet1: '06951 Muir Parkway',
        addressStreet2: 'Apt 82',
        addressCity: 'Waco',
        addressPostal: 76796,
        addressCountry: 'United States'
      },
      {
        email: 'cmeneyer2a@scientificamerican.com',
        password: 'Ip2Vg0NItky',
        firstName: 'Cati',
        lastName: 'Meneyer',
        googleId: '46212900860352088347',
        addressStreet1: '947 Morningstar Center',
        addressStreet2: 'Apt 83',
        addressCity: 'Sundsvall',
        addressPostal: '852 36',
        addressCountry: 'Sweden'
      },
      {
        email: 'mtoulson2b@fema.gov',
        password: 'kdyMG0IPm',
        firstName: 'My',
        lastName: 'Toulson',
        googleId: '86692543010004900924',
        addressStreet1: '1388 Stone Corner Terrace',
        addressStreet2: 'Apt 84',
        addressCity: 'Guangpu',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'cdemattei2c@phpbb.com',
        password: 'jUQuoZqF',
        firstName: 'Carmelle',
        lastName: 'De Mattei',
        googleId: '96043012252728271303',
        addressStreet1: '4 Crownhardt Alley',
        addressStreet2: 'Apt 85',
        addressCity: 'Linköping',
        addressPostal: '589 00',
        addressCountry: 'Sweden'
      },
      {
        email: 'rdeverson2d@simplemachines.org',
        password: 'bOhBIZs6X',
        firstName: 'Roch',
        lastName: 'de Verson',
        googleId: '14825711407639513183',
        addressStreet1: '6 Prairie Rose Alley',
        addressStreet2: 'Apt 86',
        addressCity: 'São Pedro da Aldeia',
        addressPostal: '28940-000',
        addressCountry: 'Brazil'
      },
      {
        email: 'tsalterne2e@etsy.com',
        password: 'vLgNZTKg7',
        firstName: 'Teador',
        lastName: 'Salterne',
        googleId: '57119981359504680224',
        addressStreet1: '21 Fordem Lane',
        addressStreet2: 'Apt 87',
        addressCity: 'Loei',
        addressPostal: 42000,
        addressCountry: 'Thailand'
      },
      {
        email: 'wannies2f@ebay.co.uk',
        password: 'w2SaT7x1',
        firstName: 'Wainwright',
        lastName: 'Annies',
        googleId: '66168008607300378455',
        addressStreet1: '58774 Gale Crossing',
        addressStreet2: 'Apt 88',
        addressCity: 'Vällingby',
        addressPostal: '162 15',
        addressCountry: 'Sweden'
      },
      {
        email: 'bprattin2g@abc.net.au',
        password: '7uwKrPbeMU',
        firstName: 'Beverly',
        lastName: 'Prattin',
        googleId: '77792047165514056213',
        addressStreet1: '315 Cody Park',
        addressStreet2: 'Apt 89',
        addressCity: 'Sajan',
        addressPostal: '',
        addressCountry: 'Serbia'
      },
      {
        email: 'bdradey2h@hugedomains.com',
        password: '6Q7Fl1M',
        firstName: 'Bobbette',
        lastName: 'Dradey',
        googleId: '76035005549745458624',
        addressStreet1: '693 Kingsford Lane',
        addressStreet2: 'Apt 90',
        addressCity: 'Sumbuya',
        addressPostal: '',
        addressCountry: 'Sierra Leone'
      },
      {
        email: 'mlocksley2i@huffingtonpost.com',
        password: 'jZD4VtFtzV',
        firstName: 'Milton',
        lastName: 'Locksley',
        googleId: '90502831718448286399',
        addressStreet1: '11941 Hanson Lane',
        addressStreet2: 'Apt 91',
        addressCity: 'Ajoyani',
        addressPostal: '',
        addressCountry: 'Peru'
      },
      {
        email: 'tcarleton2j@dmoz.org',
        password: 'P8TSXHqONug',
        firstName: 'Torrance',
        lastName: 'Carleton',
        googleId: '78329760375614424754',
        addressStreet1: '73546 American Ash Point',
        addressStreet2: 'Apt 92',
        addressCity: 'Siguinon',
        addressPostal: 6542,
        addressCountry: 'Philippines'
      },
      {
        email: 'wburbidge2k@dropbox.com',
        password: 'PrShcwZUboqn',
        firstName: 'Woody',
        lastName: 'Burbidge',
        googleId: '47216481202186162004',
        addressStreet1: '33919 Pearson Avenue',
        addressStreet2: 'Apt 93',
        addressCity: 'La Dorada',
        addressPostal: 175038,
        addressCountry: 'Colombia'
      },
      {
        email: 'mreedy2l@blogs.com',
        password: '47fB0TZj1Q',
        firstName: 'Marlowe',
        lastName: 'Reedy',
        googleId: '48839043458594119596',
        addressStreet1: '9 Summerview Alley',
        addressStreet2: 'Apt 94',
        addressCity: 'Krasnaya Polyana',
        addressPostal: 622937,
        addressCountry: 'Russia'
      },
      {
        email: 'jhartgill2m@parallels.com',
        password: 'iEWOJOp',
        firstName: 'Jefferey',
        lastName: 'Hartgill',
        googleId: '28177608085056182327',
        addressStreet1: '78 Novick Court',
        addressStreet2: 'Apt 95',
        addressCity: 'Xiongchi',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'jcalcut2n@mapy.cz',
        password: 'U9iNkpwSdBR',
        firstName: 'Jodi',
        lastName: 'Calcut',
        googleId: '94981285005289811598',
        addressStreet1: '5259 Leroy Parkway',
        addressStreet2: 'Apt 96',
        addressCity: 'Motuo',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'dbelshaw2o@bloglines.com',
        password: 'j92zE4r1JY',
        firstName: 'Delmor',
        lastName: 'Belshaw',
        googleId: '11764219210818457421',
        addressStreet1: '746 Moulton Court',
        addressStreet2: 'Apt 97',
        addressCity: 'Madoi',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'mhaizelden2p@google.es',
        password: 'ECL6s0AVR',
        firstName: 'Martie',
        lastName: 'Haizelden',
        googleId: '35054919130916627015',
        addressStreet1: '71645 Fuller Junction',
        addressStreet2: 'Apt 98',
        addressCity: 'Baoshan',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'mstemson2q@blinklist.com',
        password: 'rd9sPC9l',
        firstName: 'Melvyn',
        lastName: 'Stemson',
        googleId: '69885197888166247782',
        addressStreet1: '65593 3rd Pass',
        addressStreet2: 'Apt 99',
        addressCity: 'Yaosai',
        addressPostal: '',
        addressCountry: 'China'
      },
      {
        email: 'egislebert2r@ebay.com',
        password: 'iFyToQ',
        firstName: 'Elizabet',
        lastName: 'Gislebert',
        googleId: '64067684058592561346',
        addressStreet1: '24 Ludington Crossing',
        addressStreet2: 'Apt 100',
        addressCity: 'Shun’ga',
        addressPostal: 186304,
        addressCountry: 'Russia'
      }
    ]

    // seed products
    const [
      ac,
      aliquam,
      amet,
      basketball,
      blink,
      camelot,
      candy,
      cards,
      casino,
      chute,
      cinderella,
      civilization,
      classic,
      clue,
      consequa,
      convallis,
      cras,
      cursus,
      deck,
      dice,
      disney,
      disneyland,
      dominos,
      donec,
      dragon,
      duis,
      duiss,
      ebay,
      elementum,
      enchanted,
      enim,
      est,
      fairy,
      fantasy,
      felis,
      flinch,
      fruits,
      game,
      homage,
      hotels,
      iaculis,
      interdum,
      kingoil,
      kluctus,
      libero,
      lollipop,
      lowercase,
      magna,
      magnaa,
      magnis,
      mahjong,
      massa,
      mattis,
      mermaid,
      monopoly,
      montes,
      morbi,
      never,
      noragami,
      nulla,
      nullanc,
      ornare,
      othello,
      pebble,
      pede,
      pellentesque,
      pirate,
      pixar,
      pokemon,
      posuere,
      pretium,
      proin,
      pulvinar,
      puzzle,
      quam,
      sapien,
      seminterdum,
      semper,
      settlers,
      snes,
      sneslot,
      sollicitudin,
      solotaire,
      steeplechase,
      stratego,
      sudoku,
      tempus,
      texas,
      thatsso,
      tristique,
      twister,
      ultrices,
      unknown,
      uno,
      varius,
      vel,
      vestibulum,
      vikings,
      vitae,
      volutpat,
      which
    ] = await Product.bulkCreate(products)
    console.log(green('Seeded products'))

    // seed users
    const [
      lvogeler0,
      kgarbar1,
      mthorn2,
      bgaish3,
      cenglefield4,
      ytorres5,
      awoehler6,
      atatford7,
      ddwight8,
      lgascard9,
      ehasta,
      njennisonb,
      dprestidgec,
      wlestranged,
      mmervyne,
      rwhitlandf,
      ftatloweg,
      mackermannh,
      pgurradoi,
      cskiggsj,
      wgroomk,
      igroartyl,
      dsawoodm,
      glagrangen,
      darono,
      scorderop,
      ekeelinq,
      mdeclerqr,
      bkilliams,
      kadnett,
      sshillingfordu,
      dcleverleyv,
      sllewhellinw,
      ipinnegarx,
      aimliny,
      sreedsz,
      amitham10,
      sraper11,
      dspain12,
      mhumpage13,
      arudgerd14,
      tcoste15,
      abraferton16,
      bfairbrace17,
      bviger18,
      hitzak19,
      ccasale1a,
      aaxon1b,
      ssimion1c,
      azupo1d,
      tlondesborough1e,
      tancliffe1f,
      bglashby1g,
      aschutter1h,
      kgaskin1i,
      fliversley1j,
      agarrow1k,
      blideard1l,
      tmaultby1m,
      msudy1n,
      mgautrey1o,
      lbaake1p,
      ebison1q,
      bmeasham1r,
      khaberfield1s,
      chawkin1t,
      lwhitehair1u,
      pwankling1v,
      pgerrels1w,
      enaile1x,
      bgillingwater1y,
      rinkpin1z,
      jgerding20,
      bpurchon21,
      rrailton22,
      kdesouza23,
      cemor24,
      cparkisson25,
      nroderick26,
      wranvoise27,
      jbaldini28,
      iesom29,
      cmeneyer2a,
      mtoulson2b,
      cdemattei2c,
      rdeverson2d,
      tsalterne2e,
      wannies2f,
      bprattin2g,
      bdradey2h,
      mlocksley2i,
      tcarleton2j,
      wburbidge2k,
      mreedy2l,
      jhartgill2m,
      jcalcut2n,
      dbelshaw2o,
      mhaizelden2p,
      mstemson2q,
      egislebert2r
    ] = await User.bulkCreate(users)
    console.log(green('Seeded users'))

    const orders = [
      {
        submitted: false,
        orderDate: '2020-11-12',
        totalPrice: 25,

        userId: 1
      },
      {
        submitted: false,
        orderDate: '2020-11-12',
        totalPrice: 12,

        userId: 2
      },
      {
        submitted: false,
        orderDate: '2020-11-12',
        totalPrice: 45,

        userId: 3
      }
    ]

    const [order1, order2, order3] = await Order.bulkCreate(orders)
    console.log(green('Seeded orders'))

    const cartItems = [
      {
        quantity: 1,
        price: 25,
        orderId: 1,
        productId: 1
      },
      {
        quantity: 1,
        price: 25,
        orderId: 2,
        productId: 2
      },
      {
        quantity: 1,
        price: 25,
        orderId: 3,
        productId: 3
      },
      {
        quantity: 1,
        price: 25,
        orderId: 3,
        productId: 4
      }
    ]

    const [
      cartItem1,
      cartItem2,
      cartItem3,
      cartItem4
    ] = await CartItem.bulkCreate(cartItems)
    console.log(green('Seeded cartItems'))

    // await lvogeler0.setProduct(ac)

    // set associations
    // await ac.setUser(lvogeler0)
    // await aliquam.setUser(kgarbar1)
    // await amet.setUser(mthorn2)
    // await basketball.setUser(bgaish3)
    // await blink.setUser(cenglefield4)
    // await camelot.setUser(ytorres5)
    // await candy.setUser(awoehler6)
    // await cards.setUser(atatford7)
    // await casino.setUser(ddwight8)
    // await chute.setUser(lgascard9)
    // await cinderella.setUser(ehasta)
    // await civilization.setUser(njennisonb)
    // await classic.setUser(dprestidgec)
    // await clue.setUser(wlestranged)
    // await consequa.setUser(mmervyne)
    // await convallis.setUser(rwhitlandf)
    // await cras.setUser(ftatloweg)
    // await cursus.setUser(mackermannh)
    // await deck.setUser(pgurradoi)
    // await dice.setUser(cskiggsj)
    // await disney.setUser(wgroomk)
    // await disneyland.setUser(igroartyl)
    // await dominos.setUser(dsawoodm)
    // await donec.setUser(glagrangen)
    // await dragon.setUser(darono)
    // await duis.setUser(scorderop)
    // await duiss.setUser(ekeelinq)
    // await ebay.setUser(mdeclerqr)
    // await elementum.setUser(bkilliams)
    // await enchanted.setUser(kadnett)
    // await enim.setUser(sshillingfordu)
    // await est.setUser(dcleverleyv)
    // await fairy.setUser(sllewhellinw)
    // await fantasy.setUser(ipinnegarx)
    // await felis.setUser(aimliny)
    // await flinch.setUser(sreedsz)
    // await fruits.setUser(amitham10)
    // await game.setUser(sraper11)
    // await homage.setUser(dspain12)
    // await hotels.setUser(mhumpage13)
    // await iaculis.setUser(arudgerd14)
    // await interdum.setUser(tcoste15)
    // await kingoil.setUser(abraferton16)
    // await kluctus.setUser(bfairbrace17)
    // await libero.setUser(bviger18)
    // await lollipop.setUser(hitzak19)
    // await lowercase.setUser(ccasale1a)
    // await magna.setUser(aaxon1b)
    // await magnaa.setUser(ssimion1c)
    // await magnis.setUser(azupo1d)
    // await mahjong.setUser(tlondesborough1e)
    // await massa.setUser(tancliffe1f)
    // await mattis.setUser(bglashby1g)
    // await mermaid.setUser(aschutter1h)
    // await monopoly.setUser(kgaskin1i)
    // await montes.setUser(fliversley1j)
    // await morbi.setUser(agarrow1k)
    // await never.setUser(blideard1l)
    // await noragami.setUser(tmaultby1m)
    // await nulla.setUser(msudy1n)
    // await nullanc.setUser(mgautrey1o)
    // await ornare.setUser(lbaake1p)
    // await othello.setUser(ebison1q)
    // await pebble.setUser(bmeasham1r)
    // await pede.setUser(khaberfield1s)
    // await pellentesque.setUser(chawkin1t)
    // await pirate.setUser(lwhitehair1u)
    // await pixar.setUser(pwankling1v)
    // await pokemon.setUser(pgerrels1w)
    // await posuere.setUser(enaile1x)
    // await pretium.setUser(bgillingwater1y)
    // await proin.setUser(rinkpin1z)
    // await pulvinar.setUser(jgerding20)
    // await puzzle.setUser(bpurchon21)
    // await quam.setUser(rrailton22)
    // await sapien.setUser(kdesouza23)
    // await seminterdum.setUser(cemor24)
    // await semper.setUser(cparkisson25)
    // await settlers.setUser(nroderick26)
    // await snes.setUser(wranvoise27)
    // await sneslot.setUser(jbaldini28)
    // await sollicitudin.setUser(iesom29)
    // await solotaire.setUser(cmeneyer2a)
    // await steeplechase.setUser(mtoulson2b)
    // await stratego.setUser(cdemattei2c)
    // await sudoku.setUser(rdeverson2d)
    // await tempus.setUser(tsalterne2e)
    // await texas.setUser(wannies2f)
    // await thatsso.setUser(bprattin2g)
    // await tristique.setUser(bdradey2h)
    // await twister.setUser(mlocksley2i)
    // await ultrices.setUser(tcarleton2j)
    // await unknown.setUser(wburbidge2k)
    // await uno.setUser(mreedy2l)
    // await varius.setUser(jhartgill2m)
    // await vel.setUser(jcalcut2n)
    // await vestibulum.setUser(dbelshaw2o)
    // await vikings.setUser(mhaizelden2p)
    // await vitae.setUser(mstemson2q)
    // await volutpat.setUser(egislebert2r)
    // await which.setUser(egislebert2r)
    // console.log(green('Associations set'))
  } catch (error) {
    console.log(red(error))
  }
}

module.exports = seed

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!')
      db.close()
    })
    .catch(err => {
      console.error(red('Oh noes! Something went wrong!'))
      console.error(err)
      db.close()
    })
  console.log('the end')
}
