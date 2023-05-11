var config = {
    //style: 'mapbox://styles/mapbox/streets-v11',
    // style: 'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat',   
    // style: 'mapbox://styles/amarsarvepalli19/cjx3yslwf7vy51cp9nef5eamc',  
    // style : 'mapbox://styles/amarsarvepalli19/clhggb09h02ig01p82wx1ezg8',       // NextGen 
    // style: 'mapbox://styles/amarsarvepalli19/clhhy7xbs00r001pegp7j4r8b',     // Land-use
    // style: 'mapbox://styles/amarsarvepalli19/clhi98yvn00sp01p63ail2mx2',     // Naviagtion
    // style : 'mapbox://styles/amarsarvepalli19/clhik6uxx02o101qmc47y9p39',       // NextGen-PPT
    style : 'mapbox://styles/amarsarvepalli19/clhj45sq002u401p8hlq14j4j',       // NextGen-PPT2

    customStyle : false,  // use this to apply chapter specific styles
    accessToken: 'pk.eyJ1IjoiYW1hcnNhcnZlcGFsbGkxOSIsImEiOiJjamt5ZHhvZ2owaWdlM3JxcDY5MGU2ODdtIn0.EzHTCYS8OwNgNGekGSc4LQ',   
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Turnpike Statewide Model - NextGen',
    subtitle: 'A diaggregate tour-based distributed VOT model with macro DTA model',
    byline: 'Venkat "Amar" Sarvepalli',
    // footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    footer: '',
    chapters: [
            {
            id: 'Presentation_Tile',
            alignment: 'center',
            hidden: false,
            title: 'TSM-NextGen',
            image: './images/Title.png',
            description: 'Turnpike Toll Studies and Forecasting Team',
            location: {
                center: [-81.28787, 28.37169],    
                zoom: 6.16,
                pitch: 11.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            // mapStyle: 'mapbox://styles/amarsarvepalli19/clhggb09h02ig01p82wx1ezg8',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Chapter1_Tile-s1',
            alignment: 'center',
            hidden: false,
            title: 'CHAPTER 1: Why another model ?',
            image: './images/chapter_1/Title.png',
            description: 'There are 8 Regional Planning Models in the state and why do we need a Statewide Model ?  Well, lets see the details',
            location: {
                center: [-81.28787, 28.37169],    
                zoom: 6.16,
                pitch: 11.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            //mapStyle: 'mapbox://styles/amarsarvepalli19/cjx3yslwf7vy51cp9nef5eamc',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter1-s2',
            alignment: 'left',
            hidden: false,
            title: 'Sensitivity to Tolls: Value of Time',
            image: './images/chapter_1/TollSensitivity_1.png',
            description: 'All models are designed to be reactive to tolls. However their degree of sensitivity is the vital to toll forecasting. Additionall travellers willingness to pay and reliability also plays a role.',
            location: {
                center: [-81.70231, 28.52985],
                zoom: 9.17,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            //mapStyle: 'mapbox://styles/amarsarvepalli19/cjx3yslwf7vy51cp9nef5eamc',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'hts', opacity: 1, color: false}],
            onChapterExit: [{layer: 'hts', opacity: 0, color: false}]
        },
        {
            id: 'chapter1-s3',
            alignment: 'left',
            hidden: false,
            title: 'Distributed VOT: Income, Purpose',
            image: './images/chapter_1/VOT_1.png', 
            description: 'Value of Travel Time varies by trips and is largely dependent on travelers need, willingness to pay and personal preferences. <br> VOT is empirically as dependent of household income, trip purpose.' ,
            location: {
                // center: [-81.70231, 28.52985],
                // zoom: 9.17,
                // pitch: 0.00,
                // bearing: 0.00

                center: [-81.38096, 28.53625],
                zoom: 16.50,
                pitch: 56.50,
                bearing: 24.00
            },
            mapAnimation: 'flyTo',
            // customStyle : true,
            // mapStyle: 'mapbox://styles/amarsarvepalli19/clhi98yvn00sp01p63ail2mx2',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'i4-beltway-split-vertices-speeds', opacity: 1, color : false}],
            onChapterExit: [{ layer: 'i4-beltway-split-vertices-speeds', opacity: 0,  color : false}]
        },
        {
            id: 'chapter1-s4',
            alignment: 'right',
            hidden: false,
            title: 'Traveler attributes at trip level',
            image: './images/chapter_1/tripCharacteristics.png',
            description: 'To reasonably model toll and freeway route choices, the traveler household infomation such as income, family size, number of vehicles;  peronal attributes as worker or retire or student is required at the trip level.',
            location: {
                center: [-81.70231, 28.52985],
                zoom: 9.17,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            //mapStyle: 'mapbox://styles/amarsarvepalli19/cjx3yslwf7vy51cp9nef5eamc',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'hts', opacity: 1, color: false}],
            onChapterExit: [{layer: 'hts', opacity: 0, color: false}]
        },
        {
            id: 'chapter1-s5',
            alignment: 'left',
            hidden: false,
            title: 'Limited Disaggregate Models',
            image: './images/chapter_1/modelTypes_1.png',
            description: 'Not all regional models are "ABM" class and thus constrained by inconsistency across the models. Thus need for a new statewide model that generates synthetic population / disaggregate tours and trips.',
            location: {
                center: [-83.85446, 28.31500],    
                zoom: 6.16,
                pitch: 11.50,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {layer: 'abm-coverage', opacity: 1 , color : false}, //duration: 5000
              // {layer: 'counties-5fsk2i', opacity: 1, color : false} //duration: 5000
             ],
            onChapterExit: [
              {layer: 'abm-coverage', opacity: 0, color : false},
              // {layer: 'counties-5fsk2i', opacity: 0}
            ]
        },
        {
            id: 'chapter2-s1',
            alignment: 'fully',
            hidden: false,
            title: 'Chapter 2: What are Travel Markets ?',
            image: './images/chapter_2/TravelMarkets.png',
            description: 'Travel demand models are often designed to capture resident travel, however some advanced models include visitors and freight travel. In the context of limited access roads, particularly toll roads, there are more travel markets that need to be estimated. ',
            //description: '',
            location: {
                center: [-83.85446, 28.31500],    
                zoom: 6.16,
                pitch: 11.50,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {layer: 'd19_p1', opacity: 1 , color : false}, //duration: 5000
              // {layer: 'counties-5fsk2i', opacity: 1, color : false} //duration: 5000
             ],
            onChapterExit: [
              {layer: 'd19_p1', opacity: 0, },
              // {layer: 'counties-5fsk2i', opacity: 0}
            ]
        },
        {
            id: 'chapter2-s2',
            alignment: 'left',
            hidden: false,
            title: 'Short and Long Distance Tours',
            image: './images/chapter_2/TourTypes.png',  
            description: 'The traditional travel modeling concept revolves around short-distance trips whose demand is more directly measured as everyone resident / visitor in town would make trip. On the other hand long-distance tours are not made every day by every person. At the same time tours mode are choosen depending on the destinations. For instance visitor visiting North Florida would have higher auto share compared to South Florida.',
            //description: '',
            location: {
                center: [-83.85446, 28.31500],    
                zoom: 6.16,
                pitch: 11.50,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {layer: 'abm-coverage', opacity: 1 , color : false},  // USE DMA layer
             ],
            onChapterExit: [
              {layer: 'abm-coverage', opacity: 0 , color : false},
            ]
        },
        {
            id: 'chapter2-s3',
            alignment: 'right',
            hidden: false,
            title: 'Short-distance Resident Model',
            image: './images/chapter_2/sdt_res.png',
            description: 'Residents daily travel to : <br> 1. Mandatory Tours: Work, University, School <br> 2. Non-Mandatory Tours: Escort, Maintenance, Discretionary, AtWork <br> that are within 50 miles of their home location. A vast majority of the trips are resident short-distance trips.',
            location: {
                center: [-79.11113, 26.53048],
                zoom: 7.5,
                pitch: 12.00,
                bearing: 0.00,
                speed: 0.5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'abm-coverage', opacity: 0.75 , color : false}],
            onChapterExit: [{layer: 'abm-coverage', opacity: 0 , color : false}]
        },
        {
            id: 'chapter2-s4',
            alignment: 'left',
            hidden: false,
            title: 'Long-distance Visitor Model',
            image: './images/chapter_2/ldt.png',
            description: 'Out-of-State residents visiting Florida for: <br> 1. Business & Work travel <br> 2. Leisure / Recreational <br> 3. Visitng Friends & Family and <br> 4. Personal Business. <br> Peak season demand could be modeled through setting the month to peak month (March), however the current model is set to April / September which reflect average annual demand for visitors.',
            location: {
                // center: [-98.32749, 38.99996],
                // zoom: 3.77,
                // pitch: 12.00,
                // bearing: 0.00,
                center: [-84.61590, 28.41729],
                zoom: 6.0,
                pitch: 1.00,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'airports-0mtwyt', opacity: 1 , color : false},
                             {layer: 'external-interstates', opacity: 1 , color : false},
                             {layer: 'external-stations', opacity: 0.5 , color : false}
                             // {layer: 'beaches', opacity: 1 , color : false},
                             // {layer: 'state-parks-parking', opacity: 1 , color : false}
                             ],  
            onChapterExit: [{layer: 'airports-0mtwyt', opacity: 0 , color : false},
                             {layer: 'external-interstates', opacity: 0 , color : false},
                              {layer: 'external-stations', opacity: 0 , color : false}
                             // {layer: 'beaches', opacity: 0 , color : false},
                             // {layer: 'state-parks-parking', opacity: 0 , color : false}
                             ]
        },
        {
            id: 'chapter2-s5',
            alignment: 'left',
            hidden: false,
            title: 'Short-distance Visitor Model',
            image: './images/chapter_2/sdt_vis.png',
            description: 'Visitor daily travel to recreational places / theme parks: <br> Most of these trips are generated at Hotels and some large households. These trips travel within cities or inter-city within 50 miles, mostly to theme parks, beaches and other state parks',
            location: {
                // center: [-79.11113, 26.53048],
                // zoom: 7.5,
                // pitch: 12.00,
                // bearing: 0.00,
                // center: [-81.79222, 28.29182],
                // zoom: 8.24,
                // pitch: 20.50,
                // bearing: 11.20,
                center: [-83.06911, 28.12735],
                zoom: 8.07,
                pitch: 0.00,
                bearing: 8.00,
                speed: 0.5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [{layer: 'hotel-addresses', opacity: 1 , color : false},
                             {layer: 'theme-parks', opacity: 1 , color : false},
                             {layer: 'land-hotel', opacity: 1 , color : false}],
                             // {layer: 'beaches', opacity: 0.75 , color : false},
                             // {layer: 'state-parks-parking', opacity: 0.75 , color : false}],  
            onChapterExit: [{layer: 'hotel-addresses', opacity: 0 , color : false},
                             {layer: 'theme-parks', opacity: 0 , color : false},
                             {layer: 'land-hotel', opacity: 0 , color : false}]
                             // {layer: 'beaches', opacity: 0, color : false},
                             // {layer: 'state-parks-parking', opacity: 0 , color : false}]
        },
        {
            id: 'chapter2-s6',
            alignment: 'left',
            hidden: false,
            title: 'Long-distance Cross-broder Model',
            image: './images/chapter_2/ldt_cbm.png',
            description: 'Florida, Georgia, and Alabama residents daily travel to between the states. These are daily trips that are not an overnight stay. Most of these trips use several county / state roads that serves these states, including some interstate travel.',
            location: {
                // center: [-83.27604, 32.31743],
                center: [-84.63243, 29.19950],
                zoom: 6.88,
                pitch: 46.50,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'external-stations', opacity: 1 , color : false},
                            {layer: 'external-interstates', opacity: 0.25 , color : false}],
            onChapterExit: [{layer: 'external-stations', opacity: 0 , color : false},
                            {layer: 'external-interstates', opacity: 0 , color : false}]
        },
        {
            id: 'chapter3-Title',
            alignment: 'center',
            hidden: false,
            title: 'Model Structure',
            image: './images/chapter_3/Chapter3_Title.png',
            description: 'The model concept and structure follows commonly established practices starting out from land-use, demand estimation and route choice. However it involves in more complex procedures since TSM-NextGen is a disaggregate tour-based model designed exclusive to support limited access and toll forecasting. While all person trips are modeled, the attention provided to non-auto modes is limited and thus cannot be used for bike / pedestrian or transit studies. ',
            location: {
                center: [-83.63244, 29.06899],
                zoom: 6.80,
                pitch: 4.50,
                bearing: -10.40,
                // center: [-83.27604, 32.31743],
                // zoom: 6.88,
                // pitch: 46.50,
                // bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'external-stations', opacity: 1 , color : false}],
            onChapterExit: [{layer: 'external-stations', opacity: 0 , color : false}]
        },
        {
            id: 'chapter3-s2',
            alignment: 'center',
            hidden: false,
            title: 'Model Structure',
            image: './images/chapter_3/ModelStructure.png',
            description: 'TSM-NextGen framework is designed to evlove organically as more and more details surrounding the travel behavior change over the time. The current framework involves in two classes of trips:  <br> 1. Estimated based on Survey Data (NHTS, Regional HTS, O-D Data, Transaction Data, SPS, Service Plaza Surveys, Visit Florida Data) and <br> 2. Transfered models from other places (Visitor models, FHWA long distance model, truck demand approximations).',
            location: {
                center: [-83.63244, 29.06899],
                zoom: 6.80,
                pitch: 44.50,
                bearing: -10.40,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-POP', opacity: 1 , color : false}],
            onChapterExit: [{layer: 'nextgen-POP', opacity: 0 , color : false}]
        },
        {
            id: 'chapter3-s3a',
            alignment: 'left',
            hidden: false,
            title: 'Roadway Network Data',
            image: './images/chapter_3/Chap3a_Title.png',
            description: '',
            location: {
                center: [-84.98998, 28.40739],
                zoom: 6.88,
                pitch: 46.50,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'sc2-network', opacity: 1 , color : false},
                             {layer: 'nte-network', opacity: 1 , color : false}],
            onChapterExit: [] 
        },
        {
            id: 'chapter3-s3',
            alignment: 'right',
            hidden: false,
            title: 'Roadway Network Data',
            image: './images/chapter_3/NetworkData.png',
            description: 'Roadway GIS files are maintained in GPKG format with various layers: <br> 1. Base Year - 2022 Network <br> 2. Future Year Networks - 5 Year Increments <br> 3. FTE Projects and various alignments <br> 4. Detailed MPO networks for Study areas <br> 5. Centroid Connectors <br> 6. Node data. ',
            location: {
                center: [-81.75836, 29.17622],
                zoom: 9.17,
                pitch: 3.50,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter3-s4',
            alignment: 'right',
            hidden: false,
            title: 'Link Consolidation',
            image: './images/chapter_3/LinkConsolidation.png',
            description: 'Multiple links with same attributes are merged while retaining their shape and node numbers. This allows to maintain all network attrribute data at the lowest level while the scenario networks are more consolidated. This results in significant reductions in runtime.',
            location: {
                center: [-81.75836, 29.17622],
                zoom: 9.17,
                pitch: 3.50,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [{layer: 'sc2-network', opacity: 0 , color : false},
                             {layer: 'nte-network', opacity: 0 , color : false}]
        },
        {
            id: 'chapter3-s4',
            alignment: 'center',
            hidden: false,
            title: 'Many-to-One: User Settings',
            image: './images/chapter_3/ProgramNET.png',
            description: 'The projects are coded in QGIS and maintained in postgresSQL server as each individual layer. The node file is updated via script to register new nodes for the projct links. The user is required to specify which layers needs to be used for scenario development.  ',
            location: {
                center: [-83.27604, 32.31743],
                zoom: 6.88,
                pitch: 46.50,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter3-s3b',
            alignment: 'center',
            hidden: false,
            title: 'Land-use Model',
            image: './images/chapter_3/Chap3b_Title.png',
            description: '',
            location: {
                center: [-83.63244, 29.06899],
                zoom: 6.80,
                pitch: 4.50,
                bearing: -10.40,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            // customStyle : true,
            // mapStyle: 'mapbox://styles/amarsarvepalli19/clhhy7xbs00r001pegp7j4r8b',  // land-use income
            rotateAnimation: false,
            callback: '',
            // onChapterEnter: [],
            onChapterEnter: [{layer: 'nextgen-medInc', opacity: 1 , color : false}],  //nextgen-se-sel
            onChapterExit: [{layer: 'nextgen-medInc', opacity: 0 , color : false}]
        },
        {
            id: 'chapter3-s5',
            alignment: 'right',
            hidden: false,
            title: 'Land-use Data Model',
            image: './images/chapter_3/landuseData.png',
            description: 'Land-use data is compiled from MPO data where available and parcel data USE CODE derived data is utilized in non-MPO regions. Only Households, Population and Employment data is extracted from the MPOs. ',
            location: {
                center: [-78.16045, 28.38551],
                zoom: 6.22,
                pitch: 38.00,
                bearing: -9.60,
                // center: [-80.3123, 26.0592],  // 9.41/26.0592/-80.3123/0/43
                // zoom: 6.5, // 9.41,
                // pitch: 35.0,
                // bearing: 0.00,
                speed: .5 // make the flying slow


            },
            mapAnimation: 'flyTo',
            customStyle : true,
            mapStyle: 'mapbox://styles/amarsarvepalli19/clhhy7xbs00r001pegp7j4r8b',  // land-use income
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-se-sel', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-se-sel', opacity: 0 , color : false}] //{layer: 'nextgen-se-sel', opacity: 0 , color : false}
        }, 
        {
            id: 'chapter3-s6',
            alignment: 'left',
            hidden: false,
            title: 'TAZ Data sub-categorization',
            image: './images/chapter_3/TAZAttributes.png',
            description: 'The process involves in interpolating at TAZ level for the scenario year, scaling to match BEBR controls at the county level and then allocated to various household, personal and employment sub-categories based on Census and InfoUSA distributions. ',
            location: {
                // center: [-83.27604, 32.31743],
                // zoom: 6.88,
                // pitch: 35.50,
                // bearing: 0.00,
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            // customStyle : true,
            // mapStyle: 'mapbox://styles/amarsarvepalli19/clhhy7xbs00r001pegp7j4r8b',  // land-use income
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-age', opacity: 1, color : false}],  
            onChapterExit: [{layer: 'nextgen-age', opacity: 0 , color : false}] //
        },
        {
            id: 'chapter3-s7',
            alignment: 'left',
            hidden: false,
            title: 'Population Synthesizer',
            image: './images/chapter_3/PopSyn.png',
            description: 'Population Synthezier simulates each household and its members (persons) to replicate the total zonal, county and statewide populations. The perosnal and household attributes are synthezied based on Census Public Use Micro Sample Data (PUMS) data. The POPSYN used in NextGen is part of ActivitySIM software.',
            location: {
                center: [-85.92458, 27.89168],
                zoom: 6.61,
                pitch: 3.00,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            // mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            // customStyle : true,
            // mapStyle: 'mapbox://styles/amarsarvepalli19/clhggb09h02ig01p82wx1ezg8',

            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'hts', opacity: 1 , color : false}], 
            onChapterExit: [{layer: 'hts', opacity: 0 , color : false}] 
        }, 
        {
            id: 'chapter3-s7',
            alignment: 'left',
            hidden: false,
            title: 'Tour-based Models: Resident, Visitor and Long Distance models',
            image: './images/chapter_3/Chap3c_Title.png',
            description: 'Four independent tour-based demand models are run: <br> 1. Short-distance Resident, 2. Short-distance Visitor <br> 3. Long-distance Resident (with FL) and 4. Long-distance Visitors (to/from Florida. ',
            location: {
                center: [-85.92458, 27.89168],
                zoom: 6.61,
                pitch: 3.00,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            // mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            // customStyle : true,
            // mapStyle: 'mapbox://styles/amarsarvepalli19/clhggb09h02ig01p82wx1ezg8',

            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-se-sel', opacity: 1 , color : false}], 
            onChapterExit: [{layer: 'nextgen-se-sel', opacity: 0 , color : false}] 
        }, 
        {
            id: 'chapter3-s8',
            alignment: 'center',
            hidden: false,
            title: 'Resident Short-distance Tour-based Model',
            image: './images/chapter_3/sdt_resTours.png',
            description: 'Daily travel activities are scheduled and tours are estimated based on perosonal attributes: Worker, Student, Retiree. Tour destinations are estimated via location choice models based on zonal attractiveness. Tour purpose and stops are scheduled based on arrival and depature time intervals.',
            location: {
                center: [-78.16045, 28.38551],
                zoom: 6.22,
                pitch: 38.00,
                bearing: -9.60,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            customStyle : true,
            mapStyle: 'mapbox://styles/amarsarvepalli19/clhhy7xbs00r001pegp7j4r8b',  // land-use income
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-se-sel', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-se-sel', opacity: 0 , color : false}] //{layer: 'nextgen-se-sel', opacity: 0 , color : false}
        }, 
        {
            id: 'chapter3-s9',
            alignment: 'center',
            hidden: false,
            title: 'Household Travel Surveys',
            image: './images/chapter_3/Hts.png',
            description: 'Short-distance tour-based model components were estimated and calibrated based on household travel surveys conducted in the state by FDOT districts D2, D4, D6 and D7.',
            location: {
                center: [-78.16045, 28.38551],
                zoom: 6.22,
                pitch: 38.00,
                bearing: -9.60,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            // customStyle : true,
            // mapStyle: 'mapbox://styles/amarsarvepalli19/clhj45sq002u401p8hlq14j4j',  // land-use income
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-POP', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-POP', opacity: 0 , color : false}] //{layer: 'nextgen-se-sel', opacity: 0 , color : false}
        }, 
        {
            id: 'chapter3-s9b',
            alignment: 'center',
            hidden: false,
            title: 'Trip Length Frequency Distribution: Survey and Model Comparison',
            image: './images/chapter_3/tdlf.png',
            description: 'The average distance from short-distance models matches quite well with the household travel surveys. However, limited access and Turnpike facilities serve O-D pairs greater than 50 miles.',
            location: {
                // center: [-78.16045, 28.38551],
                // zoom: 6.22,
                // pitch: 38.00,
                // bearing: -9.60,
                center: [-84.01372, 29.43764],
                zoom: 8.01,
                pitch: 4.50,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            customStyle : false,
            // mapStyle: 'mapbox://styles/amarsarvepalli19/clhj45sq002u401p8hlq14j4j',  // land-use income
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-medInc', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-medInc', opacity: 0 , color : false}] 
        },
        {
            id: 'chapter3-s10',
            alignment: 'center',
            hidden: false,
            title: 'Running SDT Resident Model',
            image: './images/chapter_3/callSDT.png',
            description: 'The short-distance resident tour-based model is developed as a standalone model with scenario settings specified in the properties file used by JAR file (JAVA program). The model could be called from any interface that could inturn calls Windows COM object or Command Prompt (CMD).',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-medInc', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-medInc', opacity: 0 , color : false}] 
        },
        {
            id: 'chapter3-s11',
            alignment: 'center',
            hidden: false,
            title: 'Running LDT Resident Model',
            image: './images/chapter_3/callLDT.png',
            description: 'The long-distance resident and visitor tour-based model is adapted from FHWA long-distance passenger model where the salient feature is its joint probablity distribution of mode-chocie and destination-choice models. <br> The model scenario settings are specified in the properties file used by executable file (PASCAL program). The model could be called from any interface that could inturn calls Windows COM object or Command Prompt (CMD).',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-DU', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-DU', opacity: 0 , color : false}] 
        },
        {
            id: 'chapter3-s12',
            alignment: 'center',
            hidden: false,
            title: 'Running SDT Visitor Model',
            image: './images/chapter_3/callSDT_vis.png',
            description: 'The short-distance visitor tour-based model is adapted from SANDAG / OHAU. It estimates tours from visitors staying at hotels and some resident households.  The sdt tours were validated against statewide O-D tour data.' ,
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-EMP', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-EMP', opacity: 0 , color : false}] 
        }, 
        {
            id: 'chapter3-s12',
            alignment: 'center',
            hidden: false,
            title: 'Route Choice Model',
            image: './images/chapter_3/Chap3d_Title.png',
            description: '',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-age', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-age', opacity: 0 , color : false}] 
        },
        {
            id: 'chapter3-s13',
            alignment: 'center',
            hidden: false,
            title: 'Trips in Motion',
            image: './images/chapter_3/macroDTA.png',
            description: '',
            location: {
                // center: [-83.02417, 27.89955],  
                // zoom: 8.15,
                // pitch: 38.00,
                // bearing: -9.6,
                center: [-78.79455, 28.85877],
                zoom: 6.80,
                pitch: 4.50,
                bearing: -10.40,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-Univ', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-Univ', opacity: 0 , color : false}] 
        },
        {
            id: 'chapter3-s14',
            alignment: 'center',
            hidden: false,
            title: 'Trips by Value of Travel Time',
            image: './images/chapter_3/votTrips.png',
            description: '',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            // onChapterEnter: [{layer: 'nte-network', opacity: 1, color : false}, {layer: 'sc2-network', opacity: 1, color : false}],  
            // onChapterExit: [{layer: 'nte-network', opacity: 0, color : false}, {layer: 'sc2-network', opacity: 0, color : false}] 
            onChapterEnter: [{layer: 'nextgen-medInc', opacity: 0.5, color : false}],  
            onChapterExit: [{layer: 'nextgen-medInc', opacity: 0 , color : false}]
        },
        {
            id: 'chapter3-s15',
            alignment: 'center',
            hidden: false,
            title: 'Running ELTOD',
            image: './images/chapter_3/callELTOD.png',
            description: '',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-DU', opacity: 0.5, color : false}],  
            onChapterExit: [{layer: 'nextgen-DU', opacity: 0 , color : false}]
        },
        {
            id: 'chapter4_Title',
            alignment: 'center',
            hidden: false,
            title: 'Model Application to Projects',
            image: './images/chapter_4/chapter4_Title.png',
            description: '',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-EMP', opacity: 0.5, color : false}],  
            onChapterExit: [{layer: 'nextgen-EMP', opacity: 0 , color : false}]
        },
        {
            id: 'chapter4-s2',
            alignment: 'center',
            hidden: false,
            title: 'Assignment Type',
            image: './images/chapter_4/assingType.png',
            description: 'The demand models are run at statewide and trip list by VOT is writtern out from each of the models. Truck trips are asserted based on O-D tour data from commerical vehicles disaggreated to warehouse parcels and the ODME to truck counts. The trip lists are aggreated by VOT groups into trip tables by hour or 15 minutes. For corridor models, the corridor trip table is extracted from a statewide assinment. Dynamic pricing models could only be applied at the corridor level.',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-POP', opacity: 0.5, color : false}],  
            onChapterExit: [{layer: 'nextgen-POP', opacity: 0 , color : false}] 
        },
        {
            id: 'chapter4-s4',
            alignment: 'right',
            hidden: false,
            title: 'Suncoast Investment Grade Study',
            image: './images/chapter_4/mktAnalysis_1.png',
            description: 'Trips by VOT cateories could be analyzed in detail. Trips by purpose, market segment, purpose and time-of-day (hour or 15 minutes) could be analyzed.',
            location: {
                // center: [-80.21192, 25.87910],
                // zoom: 9.96,
                // pitch: 12.00,
                // bearing: 0.00,
                center: [-82.22960, 28.66648],
                zoom: 9.40,
                pitch: 4.50,
                bearing: 0.00,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'd19_p1', opacity: 1, color : false}, {layer: 'sc2-network', opacity: 1, color : false}],  
            onChapterExit: [{layer: 'd19_p1', opacity: 0, color : false}, {layer: 'sc2-network', opacity: 0, color : false}] 
        },
        {
            id: 'chapter4-s5',
            alignment: 'center',
            hidden: false,
            title: 'I-4 Express Lanes Application',
            image: './images/chapter_4/corridorUsage.png',
            description: 'Trips by VOT cateories could be analyzed in detail. Trips by purpose, market segment and time-of-day (hour or 15 minutes) could be analyzed.',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'nextgen-Univ', opacity: 0.75, color : false}],  
            onChapterExit: [{layer: 'nextgen-Univ', opacity: 0 , color : false}] 
        },
        {
            id: 'chapter4-s6',
            alignment: 'left',
            hidden: false,
            title: 'I-4 Express Lanes Application',
            image: './images/chapter_4/forecast.png',
            description: 'Express lanes forecast includes both tolled traffic and toll rate. Toll rates are dynamically charged based on congestion. The pricin curves were set based on v/c  (ELTOD 3 & 4) or density (ELToD 5).',
            location: {

                center: [-81.75036, 28.31709],
                zoom: 10.70,
                pitch: 4.50,
                bearing: -10.40,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'i4-beltway-split-vertices-speeds', opacity: 1, color : true,}],
            onChapterExit: [{ layer: 'i4-beltway-split-vertices-speeds', opacity: 0,  color : false}]
        },
        {
            id: 'chapter_End',
            alignment: 'left',
            hidden: false,
            title: 'Open for Discussion',
            image: './images/questions.png',
            description: 'Well, how about some model complexities? <br> MonteCarlo simulation errors, Asynchroinzed random number issue, model estimates (cross-sectional) versus forecasts (time-series).',
            location: {
                center: [-83.02417, 27.89955],
                zoom: 8.15,
                pitch: 38.00,
                bearing: -9.6,
                speed: .5 // make the flying slow
            },
            mapAnimation: 'flyTo',
            //mapStyle:  'mapbox://styles/amarsarvepalli19/cl0lh1rip001w14mzxzrtmkat', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};              // I-4 
                // center: [-81.75036, 28.31709],
                // zoom: 10.70,
                // pitch: 4.50,
                // bearing: -10.40

                // Suncoast location
                // center: [-82.50164, 28.74146],
                // zoom: 11.24,
                // pitch: 11.50,
                // bearing: 0.00,

                // South Florida
                // center: [-80.21192, 25.87910],
                // zoom: 9.96,
                // pitch: 12.00,
                // bearing: 0.00,

                // State-Map (left)
                // center: [-84.69365, 27.74069],
                // zoom: 6.80,
                // pitch: 4.50,
                // bearing: -10.40

                // state-map (right)
                // center: [-78.79455, 28.85877],
                // zoom: 6.80,
                // pitch: 4.50,
                // bearing: -10.40

                // state-map (center)
                // center: [-83.63244, 29.06899],
                // zoom: 6.80,
                // pitch: 4.50,
                // bearing: -10.40