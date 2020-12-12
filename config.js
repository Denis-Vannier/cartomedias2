
const config = {
    style: "mapbox://styles/mille1viz/cjwuwirpd1ihr1cpcr621jklr",
    accessToken: "pk.eyJ1IjoibWlsbGUxdml6IiwiYSI6InpOVDgzYncifQ.X4JRirBXISF2yKWYTKzsNg",
    CSV: "./medias.csv",
    center: [2.778088, 47.201715], //Lng, Lat
    zoom: 5, //Default zoom
    title: "Les rédactions locales en France",
    description: "Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
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
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: ["filter one", "filter two", "filter three"]
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
