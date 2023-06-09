export const navlinks = [
    { id: 1, title: 'Home', href: '/', },
    { id: 2, title: 'Work', href: 'work', },
    { id: 3, title: 'Contact', href: 'contact', },
    { id: 4, title: 'Team', href: 'team', },
    { id: 5, title: 'Collabs', href: 'collaboration', },
    { id: 6, title: 'Highlight', href: 'highlight', },
    // { id: 7, title: 'Others', href: 'others', },
];

export const footerLinks = [
    {
        category: 'Main 1',
        sublinks: [
            {
                href: '/',
                title: 'sublink 1.1',
                new: false,
            },
            {
                href: '/',
                title: 'sublink 1.2',
                new: false,
            },
            {
                href: '/',
                title: 'sublink 1.3',
                new: false,
            },
        ]
    },
    {
        category: 'Main 2',
        sublinks: [
            {
                href: '/',
                title: 'sublink 2.1',
                new: false,
            }, {
                href: '/',
                title: 'sublink 2.2',
                new: false,
            }, {
                href: '/',
                title: 'sublink 2.3',
                new: false,
            }, {
                href: '/',
                title: 'sublink 2.4',
                new: false,
            }, {
                href: '/',
                title: 'sublink 2.5',
                new: false,
            },
        ]
    },
    {
        category: 'Main 3',
        sublinks: [
            {
                href: '/',
                title: 'sublink 3.1',
                new: false,
            }, {
                href: '/',
                title: 'sublink 3.2',
                new: false,
            }, {
                href: '/',
                title: 'sublink 3.3',
                new: false,
            },
        ]
    },
    {
        category: 'Main 4',
        sublinks: [
            {
                href: '/',
                title: 'sublink 4.1',
                new: true,
            }, {
                href: '/',
                title: 'sublink 4.2',
                new: false,
            }, {
                href: '/',
                title: 'sublink 4.3',
                new: false,
            },
        ]
    },
]

export const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'picture', label: 'Pictures' },
    { id: 'web', label: 'Web' },
    { id: 'hopes', label: 'Hopes' },
    { id: 'videography', label: 'Videography' },
    { id: 'interview', label: 'Interview' },
    // { id: 'interview', label: 'Podcast' },
];

export const worksData = [
    {
        id: 1,
        imageUrl: 'https://images.pexels.com/photos/16848567/pexels-photo-16848567/free-photo-of-el-pozo-de-las-almas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        heading: 'Highlighting urban redevelopment ni VR',
        desc: 'lorem Ipsum is simply dummy text of the printing and typesetting industry     and is simply available     to the public reader and printer',
        clubs: ['VERSELE LAGA', 'nexus'],
        date: new Date("2022-3-25"),
        categories: ['all', 'picture', 'hopes', 'web'],
    },
    {
        id: 2,
        imageUrl: 'https://images.pexels.com/photos/16931198/pexels-photo-16931198/free-photo-of-chateau-d-eltz-en-allemagne-au-millieux-de-la-foret.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        heading: 'A purrfect immersize experience for the felines and friends of POTT',
        desc: 'lorem Ipsum is simply dummy text of the printing and typesetting industry     and is simply available     to the public reader and printer',
        clubs: ['VERSELE LAGA'],
        date: new Date("2022-4-28"),
        categories: ['all', 'web', 'science'],
    },
    {
        id: 3,
        imageUrl: 'https://images.pexels.com/photos/16158164/pexels-photo-16158164/free-photo-of-nature-fashion-sunglasses-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        heading: 'Building a community',
        desc: 'lorem Ipsum is simply dummy text of the printing and typesetting industry     and is simply available     to the public reader and printer',
        clubs: ['VERSELE LAGA'],
        date: new Date("2022-5-01"),
        categories: ['all', 'videography'],
    },
    {
        id: 4,
        imageUrl: 'https://images.pexels.com/photos/16614531/pexels-photo-16614531/free-photo-of-wood-art-painting-luxury.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        heading: 'Spreading its virtual wings',
        desc: 'lorem Ipsum is simply dummy text of the printing and typesetting industry     and is simply available     to the public reader and printer',
        clubs: ['VERSELE LAGA'],
        date: new Date("2022-8-01"),
        categories: ['all', 'picture'],
    },
    {
        id: 5,
        imageUrl: '/assets/images/work/img5.jpg',
        heading: 'Building brand loyality through online design tool',
        desc: 'lorem Ipsum is simply dummy text of the printing and typesetting industry     and is simply available     to the public reader and printer',
        clubs: ['VERSELE LAGA'],
        date: new Date("2023-8-01"),
        categories: ['all', 'web', 'hopes'],
    },
    {
        id: 6,
        imageUrl: 'https://images.pexels.com/photos/13649986/pexels-photo-13649986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        heading: 'Revolutionizing safety training in the workplace with VR',
        desc: 'lorem Ipsum is simply dummy text of the printing and typesetting industry     and is simply available     to the public reader and printer',
        clubs: ['VERSELE LAGA'],
        date: new Date("2022-8-11"),
        categories: ['all', 'photo', 'videography'],
    },
    {
        id: 7,
        imageUrl: 'https://images.pexels.com/photos/16154507/pexels-photo-16154507/free-photo-of-man-people-woman-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        heading: 'Highlighting urban redevelopment ni VR',
        desc: 'lorem Ipsum is simply dummy text of the printing and typesetting industry     and is simply available     to the public reader and printer',
        date: new Date("2022-11-4"),
        clubs: ['VERSELE LAGA', 'nexus'],
        categories: ['all', 'picture', 'hopes', 'web'],
    },
    {
        id: 8,
        imageUrl: 'https://images.pexels.com/photos/6416960/pexels-photo-6416960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        heading: 'A purrfect immersize experience for the felines and friends of POTT',
        desc: 'lorem Ipsum is simply dummy text of the printing and typesetting industry     and is simply available     to the public reader and printer',
        date: new Date("2023-1-8"),
        clubs: ['VERSELE LAGA'],
        categories: ['all', 'web', 'science'],
    },
    {
        id: 9,
        imageUrl: 'https://images.pexels.com/photos/4946520/pexels-photo-4946520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        heading: 'Building a community',
        desc: 'lorem Ipsum is simply dummy text of the printing and typesetting industry     and is simply available     to the public reader and printer',
        clubs: ['VERSELE LAGA'],
        date: new Date("2023-2-10"),
        categories: ['all', 'videography'],
    },
    {
        id: 10,
        imageUrl: 'https://images.pexels.com/photos/11622457/pexels-photo-11622457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        heading: 'Spreading its virtual wings',
        desc: 'lorem Ipsum is simply dummy text of the printing and typesetting industry     and is simply available     to the public reader and printer',
        clubs: ['VERSELE LAGA'],
        date: new Date("2023-10-15"),
        categories: ['all', 'picture'],
    },
    {
        id: 11,
        imageUrl: 'https://images.pexels.com/photos/17202898/pexels-photo-17202898/free-photo-of-city-street-building-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        heading: 'Building brand loyality through online design tool',
        desc: 'lorem Ipsum is simply dummy text of the printing and typesetting industry     and is simply available     to the public reader and printer',
        clubs: ['VERSELE LAGA'],
        date: new Date("2023-10-15"),
        categories: ['all', 'web', 'hopes'],
    },
    {
        id: 12,
        imageUrl: 'https://images.pexels.com/photos/17223590/pexels-photo-17223590/free-photo-of-reflection-of-life-hayatin-yansimasi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        heading: 'Revolutionizing safety training in the workplace with VR',
        desc: 'lorem Ipsum is simply dummy text of the printing and typesetting industry     and is simply available     to the public reader and printer',
        clubs: ['VERSELE LAGA'],
        date: new Date("2019-4-15"),
        categories: ['all', 'photo', 'videography'],
    },
    {
        id: 13,
        imageUrl: '/assets/images/work/img13.jpg',
        heading: 'Revolutionizing safety training in the workplace with VR',
        desc: 'lorem Ipsum is simply dummy text of the printing and typesetting industry     and is simply available     to the public reader and printer',
        clubs: ['VERSELE LAGA'],
        date: new Date("2022-5-15"),
        categories: ['all', 'photo', 'videography', 'interview'],
    },
];

export const carouseldata = [
    {
        title: 'Paris',
        num: 1,
        imageUrl: 'https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g=',
        link: '/',
    },
    {
        title: 'Warshaw',
        num: 2,
        imageUrl: 'https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY=',
        link: '/',
    },
    {
        title: 'Madrid',
        num: 3,
        imageUrl: 'https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I=',
        link: '/',
    },
    {
        title: 'Sydney',
        num: 4,
        imageUrl: 'https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs=',
        link: '/',
    },
    {
        title: 'Instanbul',
        num: 5,
        imageUrl: 'https://media.istockphoto.com/id/130408311/it/foto/piscina-allesterno-della-casa-moderna-al-crepuscolo.jpg?s=612x612&w=0&k=20&c=ZoVjx7uDjoHKmpM1ayW6UR1SQOoYh_xx-QMG_qeOYs0=',
        link: '/',
    },
    {
        title: 'Prague',
        num: 6,
        imageUrl: 'https://media.istockphoto.com/id/1299954175/it/foto/villa-cubica-moderna.jpg?s=612x612&w=0&k=20&c=DhGhb3c1E3DW_fbrWJ_R_Zh0Lbwu6syFeRLsKlZ9no8=',
        link: '/',
    },
    // {
    //     title: 'Munich',
    //     num: 7,
    //     imageUrl: 'https://media.istockphoto.com/id/926689776/it/foto/vista-ad-angolo-basso-dei-grattacieli-di-new-york.jpg?s=612x612&w=0&k=20&c=DmEB0Ty7ZwDnBoU5SuA8FNevOp4G1UcECw5aS4vA9A8=',
    //     link: '/',
    // },
    // {
    //     title: 'Venice',
    //     num: 8,
    //     imageUrl: 'https://media.istockphoto.com/id/1191376167/it/foto/villa-dellisola.jpg?s=612x612&w=0&k=20&c=PKslWo4FdbjinohKQlK_oWL34jqAsnzMTdy2bxEAf-I=',
    //     link: '/',
    // },{
    //     title: 'Oslo',
    //     num: 9,
    //     imageUrl: 'https://media.istockphoto.com/id/184316397/it/foto/londra-edifici-aziendali.jpg?s=612x612&w=0&k=20&c=XqrRxEPzFnwRFk7PQrCiu9-FPfCTPyMe5BKKaxYXCs8=',
    //     link: '/',   
    // },
    // {
    //     title: 'London',
    //     num: 10,
    //     imageUrl: 'https://media.istockphoto.com/id/184619832/it/foto/distretto-finanziario-al-crepuscolo-londra.jpg?s=612x612&w=0&k=20&c=RAThrJOBY6vhlT6-kQpu9-9jLEzWToYfdw46S8B0Mu0=',
    //     link: '/',   
    // },
    // {
    //     title: 'NY',
    //     num: 11,
    //     imageUrl: 'https://media.istockphoto.com/id/184619832/it/foto/distretto-finanziario-al-crepuscolo-londra.jpg?s=612x612&w=0&k=20&c=RAThrJOBY6vhlT6-kQpu9-9jLEzWToYfdw46S8B0Mu0=',
    //     link: '/',   
    // },
]

export const filterRoles = [
    { id: 'all', label: 'All' },
    { id: 'head', label: 'Head' },
    { id: 'domain head', label: 'Domain Head' },
    { id: 'crew', label: 'Crew' },
    { id: 'web development', label: 'Web Development' },
    { id: 'operations', label: 'Opeations' },
    { id: 'content', label: 'Content' },
    { id: 'design', label: 'Design' },
    { id: 'logistics', label: 'Logistics' },
    { id: 'evm', label: 'EVM' },
    { id: 'video editing', label: 'Video Editing' },
    { id: 'videography', label: 'Videography' },
    { id: 'sound engineering', label: 'Sound Engineering' },
    { id: 'campaigning and pr', label: 'Campaigning and PR' },
]

// head - trianglelogo
// web dev - code
// operations - document
// content - pathtool
// design - designtool
// logistics - cardano
// evm - manage
// video editing - videoplay
// videography - videooctagon
// sound - microphone
// camp/pr - diagram 

export const teamDetails = [
    {
        id: 1,
        name: 'Siddharth',
        domain: 'Head',
        role: 'Club Head',
        desc: 'something something fkasd fajsgd fkjahg sdkfga sdf ga fas fasdfadfg sadfg ',
        contacts: [
            {
                type: 'email',
                link: 'sarangkumar@gmail.com',
                src: '/assets/icons/code.svg',

            },
        ],
        picture: {
            thumbnail: '/assets/images/avatar/thumbnail/armadillo.png',
            large: '/assets/images/avatar/large/person1.png',
            domainIcon: '/assets/icons/trianglelogo.svg',
        },
        categories: ['all', 'head'],
    },
    {
        id: 2,
        name: 'Sarang Kumar',
        domain: 'Web Development',
        role: 'Domain Head',
        desc: 'never text me',
        contacts: [
            {
                type: 'email',
                link: 'sarang@gmail.com',
                src: '/assets/icons/code.svg',
            },
            {
                type: 'instagram',
                link: 'sarang@gmail.com',
                src: '/assets/icons/document.svg',
            },
        ],
        picture: {
            thumbnail: '/assets/images/avatar/thumbnail/bear.png',
            large: '/assets/images/avatar/large/person2.png',
            domainIcon: '/assets/icons/code.svg',
        },
        categories: ['all', 'domain head', 'web development',]
    },
    {
        id: 3,
        name: 'Sai H Narra',
        domain: 'EVM',
        role: 'Domain Head',
        desc: 'something something',
        contacts: [
            {
                type: 'email',
                link: 'sarang@gmail.com',
                src: '/assets/icons/code.svg',
            }
        ],
        picture: {
            thumbnail: '/assets/images/avatar/thumbnail/blackbird.png',
            large: '/assets/images/avatar/large/person3.png',
            domainIcon: '/assets/icons/manage.svg',
        },
        categories: ['all', 'domain head', 'evm',]
    },
    {
        id: 4,
        name: 'Nandan',
        domain: 'Content',
        role: 'Crew',
        desc: 'something something',
        contacts: [
            {
                type: 'email',
                link: 'sarang@gmail.com',
                src: '/assets/icons/code.svg',
            }
        ],
        picture: {
            thumbnail: '/assets/images/avatar/thumbnail/cow.png',
            large: '/assets/images/avatar/large/person4.png',
            domainIcon: '/assets/icons/pathtool.svg',
        },
        categories: ['all', 'crew', 'content',]
    },
    {
        id: 5,
        name: 'Nupur',
        domain: 'Design',
        role: 'Crew',
        desc: 'something something',
        contacts: [
            {
                type: 'email',
                link: 'sarang@gmail.com',
                src: '/assets/icons/code.svg',
            }
        ],
        picture: {
            thumbnail: '/assets/images/avatar/thumbnail/deer.png',
            large: '/assets/images/avatar/large/person5.png',
            domainIcon: '/assets/icons/designtool.svg',
        },
        categories: ['all', 'crew', 'design', "creative"]
    },
    {
        id: 6,
        name: 'Jack',
        domain: 'EVM',
        role: 'Crew',
        desc: 'something something',
        contacts: [
            {
                type: 'email',
                link: 'sarang@gmail.com',
                src: '/assets/icons/code.svg',
            },
        ],
        picture: {
            thumbnail: '/assets/images/avatar/thumbnail/ganesha.png',
            large: '/assets/images/avatar/large/person6.png',
            domainIcon: '/assets/icons/manage.svg',
        },
        categories: ['all', 'crew', 'evm',]
    },
    {
        id: 7,
        name: 'Prashant',
        domain: 'Logistics',
        role: 'Crew',
        desc: 'something something',
        contacts: [
            {
                type: 'email',
                link: 'sarang@gmail.com',
                src: '/assets/icons/code.svg',
            }
        ],
        picture: {
            thumbnail: '/assets/images/avatar/thumbnail/horseshoe.png',
            large: '/assets/images/avatar/large/person7.png',
            domainIcon: '/assets/icons/cardano.svg',
        },
        categories: ['all', 'crew', 'logistics', 'finance']
    },
    {
        id: 8,
        name: 'Puneet',
        domain: 'Operations',
        role: 'crew',
        desc: 'something something',
        contacts: [
            {
                type: 'email',
                link: 'sarang@gmail.com',
                src: '/assets/icons/code.svg',
            }
        ],
        picture: {
            thumbnail: '/assets/images/avatar/thumbnail/jacutinga.png',
            large: '/assets/images/avatar/large/person7.png',
            domainIcon: '/assets/icons/document.svg',
        },
        categories: ['all', 'crew', 'operations',]
    },
    {
        id: 9,
        name: 'Shreya',
        domain: 'Logistics',
        role: 'Crew',
        desc: 'something something',
        contacts: [
            {
                type: 'email',
                link: 'sarang@gmail.com',
                src: '/assets/icons/code.svg',
            }
        ],
        picture: {
            thumbnail: '/assets/images/avatar/thumbnail/koi.png',
            large: '/assets/images/avatar/large/person1.png',
            domainIcon: '/assets/icons/cardano.svg',
        },
        categories: ['all', 'crew', 'logistics', 'finance']
    },
    {
        id: 10,
        name: 'Divya',
        domain: 'Content',
        role: 'Crew',
        desc: 'something something',
        contacts: [
            {
                type: 'email',
                link: 'sarang@gmail.com',
                src: '/assets/icons/code.svg',
            }
        ],
        picture: {
            thumbnail: '/assets/images/avatar/thumbnail/lion.png',
            large: '/assets/images/avatar/large/person2.png',
            domainIcon: '/assets/icons/pathtool.svg',
        },
        categories: ['all', 'crew', 'content',]
    },
    {
        id: 11,
        name: 'Dinesh',
        domain: 'Content',
        role: 'Domain Head',
        desc: 'something something',
        contacts: [
            {
                type: 'email',
                link: 'sarang@gmail.com',
                src: '/assets/icons/code.svg',
            }
        ],
        picture: {
            thumbnail: '/assets/images/avatar/thumbnail/monkey.png',
            large: '/assets/images/avatar/large/person3.png',
            domainIcon: '/assets/icons/pathtool.svg',
        },
        categories: ['all', 'domain head', 'content',]
    },
    {
        id: 12,
        name: 'Ashwerya',
        domain: 'Operations',
        role: 'Domain Head',
        desc: 'something something',
        contacts: [
            {
                type: 'email',
                link: 'sarang@gmail.com',
                src: '/assets/icons/code.svg',
            }
        ],
        picture: {
            thumbnail: '/assets/images/avatar/thumbnail/panda-bear.png',
            large: '/assets/images/avatar/large/person4.png',
            domainIcon: '/assets/icons/document.svg',
        },
        categories: ['all', 'domain head', 'operations',]
    },
    {
        id: 13,
        name: 'Sourav',
        domain: 'Design',
        role: 'Domain Head',
        desc: 'something something',
        contacts: [
            {
                type: 'email',
                link: 'sarang@gmail.com',
                src: '/assets/icons/code.svg',
            }
        ],
        picture: {
            thumbnail: '/assets/images/avatar/thumbnail/pelican.png',
            large: '/assets/images/avatar/large/person5.png',
            domainIcon: '/assets/icons/designtool.svg',
        },
        categories: ['all', 'domain head', 'design', 'creative']
    },
    {
        id: 14,
        name: 'Divyanshu',
        domain: 'Sound Engineering',
        role: 'Domain Head',
        desc: 'something something',
        contacts: [
            {
                type: 'email',
                link: 'sarang@gmail.com',
                src: '/assets/icons/code.svg',
            }
        ],
        picture: {
            thumbnail: '/assets/images/avatar/thumbnail/monkey.png',
            large: '/assets/images/avatar/large/person6.png',
            domainIcon: '/assets/icons/microphone.svg',
        },
        categories: ['all', 'domain head', 'sound engineering',]
    },
    {
        id: 15,
        name: 'Amit',
        domain: 'Videography',
        role: 'Domain Head',
        desc: 'something something',
        contacts: [
            {
                type: 'email',
                link: 'sarang@gmail.com',
                src: '/assets/icons/code.svg',
            }
        ],
        picture: {
            thumbnail: '/assets/images/avatar/thumbnail/panda-bear.png',
            large: '/assets/images/avatar/large/person7.png',
            domainIcon: '/assets/icons/videooctagon.svg',
        },
        categories: ['all', 'domain head', 'videography',]
    },
    {
        id: 16,
        name: 'Dipti',
        domain: 'Campaigning and PR',
        role: 'Domain Head',
        desc: 'something something',
        contacts: [
            {
                type: 'email',
                link: 'sarang@gmail.com',
                src: '/assets/icons/code.svg',
            }
        ],
        picture: {
            thumbnail: '/assets/images/avatar/thumbnail/pelican.png',
            large: '/assets/images/avatar/large/person1.png',
            domainIcon: '/assets/icons/diagram.svg',
        },
        categories: ['all', 'domain head', 'campaigning and pr', 'campaigning', 'pr']
    },
]