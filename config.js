
const config = {
    style: "mapbox://styles/mapbox/light-v10",
    accessToken: "pk.eyJ1IjoibWlsbGUxdml6IiwiYSI6InpOVDgzYncifQ.X4JRirBXISF2yKWYTKzsNg",
    CSV: "./medias.csv",
    center: [2.778088, 47.201715], //Lng, Lat
    zoom: 5, //Default zoom
    title: "L'info locale en France",
    description: "Recensement réalisé par Ouest Médialab pour le Festival de l'info locale<",
    sideBarInfo: ["Media", "COMMUNE", "Site_web"],
    popupInfo: ["Media"],
    filters: [
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: [
                'filter one',
                'filter two',
                'filter three',
                'filter four',
                'filter five',
                'filter six',
                'filter seven'
            ]
        },
        {
            type: "checkbox",
            title: "Filtrer : ",
            columnHeader: "Support historique",
            listItems: ["Presse", "Radio", "Pure-player", "Télé"]
        },
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: [
                'filter one',
                'filter two',
                'filter three',
                'filter four',
                'filter five',
                'filter six',
                'filter seven'
            ]
        }
    ]

};
