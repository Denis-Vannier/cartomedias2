
const config = {
    style: "mapbox://styles/mapbox/light-v10",
    accessToken: "pk.eyJ1IjoibWlsbGUxdml6IiwiYSI6InpOVDgzYncifQ.X4JRirBXISF2yKWYTKzsNg",
    CSV: "./medias.csv",
    center: [2.778088, 47.201715], //Lng, Lat
    zoom: 5, //Default zoom
    title: "L'info locale en France",
    description: "Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
    sideBarInfo: ["Header", "Info 1", "Info 2"],
    popupInfo: ["Popup Information"],
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
