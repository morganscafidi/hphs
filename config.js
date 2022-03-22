var config = {
    //change style code to satellite-v9
    style: 'mapbox://styles/mscafidi/ckwbe1iwt6q9915qj4jkmp35x',
    accessToken: 'pk.eyJ1IjoibXNjYWZpZGkiLCJhIjoiY2t1N2UzZzE4MDB2dzJwcXFrNXgwa3JnbyJ9.ezcjsNeK54iNiNyDw4ncMw',
    showMarkers: true,
    //marker color as Lewis and Clark Maroon
    markerColor: '#893003',
    theme: 'light',
    // I turned on terrain by changing to true 
    use3dTerrain: true,
    title: 'Lewis and Clarks Journey between Oregon and Washington',
    subtitle: 'The High Potential Historic Sites',
    byline: 'Created by Morgan Scafidi',
    
   //added sources
    footer: 'Sources: National Park Service, U.S. Department of the Interior',
    chapters: [
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Snake River Confluence',
            image: './hphs_photos/snakeriverconfluence.jpg',
            description: 'Image Source: National Park Service <br> <a href= "https://www.nps.gov/places/snake-river-confluence.htm" target="_blank"> Snake River Confluence website </a> <br> <a href = "https://lewisandclarkjournals.unl.edu/item/lc.jrn.1805-10-16" target="_blank"> Journal Entries on October 16, 1805 - October 18, 1805 </a>',
            location: {
                center: [-119.042756, 46.20535],
                zoom: 12,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Hat Rock',
            image: './hphs_photos/hatrock.jpg',
            description: 'Image Source: National Park Service <br> <a href= "https://www.nps.gov/places/hat-rock.htm" target="_blank"> Hat Rock website </a> <br> <a href = "https://lewisandclarkjournals.unl.edu/item/lc.jrn.1805-10-19#lc.jrn.1805-10-19.03" target="_blank"> Journal Entries on October 19, 1805 </a>',
            location: {
                center: [-119.170612, 45.917031],
                zoom: 12,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Celilo Falls Portage',
            image: './hphs_photos/celiofallsportage.jpg',
            description: 'Image Source: National Park Service <br> <a href= "https://www.nps.gov/places/celilo-falls-portage.htm" target="_blank"> Celilo Falls Portage website </a> <br> <a href = "https://lewisandclarkjournals.unl.edu/item/lc.jrn.1805-10-22#lc.jrn.1805-10-22.03" target="_blank"> Journal Entries on October 22, 1805 </a>',
            location: {
                center: [-120.963015, 45.649717],
                zoom: 12,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Rock Fort Campsite',
            image: './hphs_photos/rockfort.jpg',
            description: 'Image Source: National Park Service <br> <a href= "https://www.nps.gov/places/rock-fort-campsite-or.htm" target="_blank"> Rock Fort Campsite website </a> <br> <a href = "https://lewisandclarkjournals.unl.edu/item/lc.jrn.1805-10-25#lc.jrn.1805-10-25.04" target="_blank"> Journal Entries on October 25, 1805 </a>',
            location: {
                center: [-121.187831, 45.606853],
                zoom: 12,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Beacon Rock',
            image: './hphs_photos/beaconrock.jpg',
            description: 'Image Source: National Park Service <br> <a href= "https://www.nps.gov/places/beacon-rock.htm" target="_blank"> Beacon Rock website </a> <br> <a href = "https://lewisandclarkjournals.unl.edu/item/lc.jrn.1805-10-31#lc.jrn.1805-10-31.04" target="_blank"> Journal Entries on October 31, 1805 </a>',
            location: {
                center: [-122.020741, 45.627625],
                zoom: 12,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Ridgefield National Wildlife Refuge',

            image: './hphs_photos/ridgefield.jpg',
            description: 'Image Source: National Park Service <br> <a href= "https://www.nps.gov/places/ridgefield-national-wildlife-refuge.htm" target="_blank"> Ridgefield National Wildlife Refuge website </a> <br> <a href = "https://lewisandclarkjournals.unl.edu/item/lc.jrn.1805-11-04#lc.jrn.1805-11-04.03" target="_blank"> Journal Entries on November 4, 1805 </a>',
            location: {
                center: [-122.756895, 45.763691],
                zoom: 12,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelvth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Dismal Nitch',
            image: './hphs_photos/dismal.jpg',
            description: 'Image Source: National Park Service <br> <a href= "https://www.nps.gov/places/dismal-nitch.htm" target="_blank"> Dismal Nitch website </a> <br> <a href = "https://lewisandclarkjournals.unl.edu/item/lc.jrn.1805-11-10#lc.jrn.1805-11-10.02" target="_blank"> Journal Entries on November 10, 1805 </a>',
            location: {
                center: [-123.841295, 46.262064],
                zoom: 12,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Middle Village-Station Camp',
            image: './hphs_photos/middlevillage.jpg',
            description: 'Image Source: National Parks Service <br> <a href= "https://www.nps.gov/places/middle-village-station-camp.htm" target="_blank"> Middle Village-Station Camp website </a> <br> <a href = "https://lewisandclarkjournals.unl.edu/item/lc.jrn.1805-11-24#lc.jrn.1805-11-24.03" target="_blank"> Journal Entries on November 24, 1805 </a>',
            location: {
                center: [-123.910022, 46.246178],
                zoom: 12,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'sixteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Cape Disappointment',
            image: './hphs_photos/capedisappointment.jpg',
            description: 'Image Source: National Park Service <br> <a href= "https://www.nps.gov/places/cape-disappointment-wa.htm" target="_blank"> Cape Disappointment website </a> <br> <a href = "https://lewisandclarkjournals.unl.edu/item/lc.jrn.1805-11-14#lc.jrn.1805-11-14.05" target="_blank"> Journal Entries on November 14, 1805 </a>',
            location: {
                center: [-124.052561, 46.275844],
                zoom: 12,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Tongue Point',
            image: './hphs_photos/tonguepoint.jpg',
            description: 'Image Source: National Park Service <br> <a href= "https://www.nps.gov/places/tongue-point.htm" target="_blank"> Tongue Point website </a> <br> <a href = "https://lewisandclarkjournals.unl.edu/item/lc.jrn.1805-11-25#lc.jrn.1805-11-25.04" target="_blank"> Journal Entries on November 25, 1805 </a>',
            location: {
                center: [-123.757657, 46.21259],
                zoom: 12,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Fort Clatsop',
            image: './hphs_photos/fortclatsop.jpg',
            description: 'Image Source: National Park Service <br> <a href= "https://www.nps.gov/places/fort-clatsop-or.htm" target="_blank"> Fort Clatsop website </a> <br> <a href = "https://lewisandclarkjournals.unl.edu/item/lc.jrn.1805-12-06" target="_blank"> Journal Entries from December 06, 1805 - March 23, 1806 </a>',
            location: {
                center: [-123.880236, 46.134874],
                zoom: 12,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Ecola Creek/Cannon Beach',
            image: './hphs_photos/ecola.jpg',
            description: 'Image Source: National Park Service <br> <a href= "https://www.nps.gov/places/ecola-creek-cannon-beach.htm" target="_blank"> Ecola Creek/Cannon Beach website </a> <br> <a href = "https://lewisandclarkjournals.unl.edu/item/lc.jrn.1806-01-05#lc.jrn.1806-01-05.02" target="_blank"> Journal Entries on January 5, 1806 </a>',
            location: {
                center: [-123.96425, 45.897604],
                zoom: 12,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Sandy River Delta',
            image: './hphs_photos/sandyriver.jpg',


            description: 'Image Source: National Park Service <br> <a href= "https://www.nps.gov/places/sandy-river-delta.htm" target="_blank"> Sandy River Delta website </a> <br> <a href = "https://lewisandclarkjournals.unl.edu/item/lc.jrn.1805-11-03#lc.jrn.1805-11-03.04" target="_blank"> Journal Entries on November 3, 1805 </a>',
            location: {
                center: [-122.361773, 45.557021],
                zoom: 12,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Willamette River Confluence',
            image: './hphs_photos/willametteconfluence.jpg',
            description: 'Image Source: National Park Service <br> <a href= "https://www.nps.gov/places/willamette-river-confluence.htm" target="_blank"> Willamette River Confluence website </a> <br> <a href = "https://lewisandclarkjournals.unl.edu/item/lc.jrn.1806-03-30#lc.jrn.1806-03-30.03" target="_blank"> Journal Entries on March 30, 1806 </a>',
            location: {
                center: [-122.76578, 45.646831],
                zoom: 12,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Walla Walla River Confluence',


            //image: './path/to/image/source.png',
            //add working URL
            //insert maps to location
            image: './hphs_photos/wallawalla.jpg',
            description: 'Image Source: National Park Service <br> <a href= "https://www.nps.gov/places/walla-walla-river-confluence.htm" target="_blank"> Walla Walla River Confluence website </a> <br> <a href = "https://lewisandclarkjournals.unl.edu/item/lc.jrn.1806-04-30#lc.jrn.1806-04-30.03" target="_blank"> Journal Entries on April 30, 1806 </a>',
            location: {
                center: [-118.912661, 46.061469],
                zoom: 12,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'Lewis and Clark Trail Travois Road',
            image: './hphs_photos/travois.jpg',
            description: 'Image Source: National Park Service <br> <a href = "https://www.nps.gov/places/travois-road-wa.htm" target="_blank"> Lewis and Clark Trail Travois Road website </a> <br> <a href = "https://lewisandclarkjournals.unl.edu/item/lc.jrn.1806-04-27#lc.jrn.1806-04-27.02" target="_blank"> Journal Entries on April 27, 1806 </b>',
            location: {
                center: [-117.477451, 46.463794],
                zoom: 12,
                pitch: 60,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
                ]
                };