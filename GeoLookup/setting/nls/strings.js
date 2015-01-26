define({
    root: {
        settingsHeader: "Set the details for the GeoLookup Widget",
        settingsDesc: "This widget uses 1 or more polygon layers in the map to intersect with a list of locations.  Fields from the polygon layers are appended to the coordinates.",
        layerTable: {
            colEnrich: "Enrich",
            colLabel: "Layer",
            colFieldSelector: "Fields"
        },
        fieldTable: {
            colAppend: "Append",
            colName: "Name",
            colAlias: "Alias"
        },
        symbolArea:{
            symbolLabelWithin: ' Select the symbol for locations within:',
            symbolLabelOutside: 'Select the symbol for locations outside:'
        },
        noPolygonLayers: "No Polygon Layers",
        errorOnOk: "Please fill out all parameters before saving config",
        saveFields: "Save Fields",
        cancelFields: "Cancel Fields"
    }
});
