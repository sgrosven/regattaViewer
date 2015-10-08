(function () {



    var regattaModel = function () {

        var regattaJson;
        var fileName;
        var xmlText;

        var readRegattaXml = function (inXmlText) {
            xmlText = inXmlText;
            var allJson = $.xml2json(xmlText);
            regattaJson = allJson.Regatta;

            console.log("json regatta.json=" + regattaJson.$.Name);
            return regattaJson;
        }

        //reader = new FileReader();
        //reader.onload = function (event) {
        //    $scope.returnEvent = event;
        //    $scope.regattaAsXmlText = event.target.result;
        //    console.log("File contents: " + regattaText);
        //
        //    $scope.regatta = $.xml2json( $scope.regattaAsXmlText);
        //};
        //reader.onerror = function (event) {
        //    $scope.returnEvent = event;
        //    console.error("File could not be read! Code " + event.target.error.code);
        //};
        //
        //reader($scope.regattaName);

        var getSeries = function () {
            // list of: <sp Div="Sonar" Ent="496" Pos="1" Pts="19.0"/>
            var series = regattaJson.Scores.SeriesPointsList.sp;
            $.each(series, function (index, s) {
                if (!s.entry) s.entry = getEntry(s.$.Ent);
            });
            return series;
        }

        var getEntry = function (entId) {
            //<Entry Bow="" Club="KNS" Division="Sonar" EntryId="496" MnaNumber="NOR" RsaNumber="aleksander@wang-hansen.net">
            //    <Boat SailId="NOR 1">
            //        <Owner FirstName="" LastName="" SailorId=""/>
            //        <RatingList>
            //            <Rating ClassName="SONAR" System="OneDesign"/>
            //        </RatingList>
            //    </Boat>
            //    <Skipper FirstName="Aleksander" LastName="WANG-HANSEN" SailorId="noraw2"/>
            //    <CrewList>
            //        <Crew FirstName="Marie" LastName="SOLBERG" SailorId="norms4"/>
            //        <Crew FirstName="Per Eugen" LastName="KRISTIANSEN" SailorId="norpk4"/>
            //    </CrewList>
            //</Entry>

            var found;

            $.each(regattaJson.EntryList.Entry, function (index, entry) {
                var _eid = entry.$.EntryId;
                if (!found && entry.$.EntryId == entId) {
                    found = entry;
                }
            });
            return found;
        }

        return {
            regattaJson: regattaJson,
            fileName: fileName,
            xmlText: xmlText,

            readRegattaXml: readRegattaXml,
            getEntry: getEntry,
            getSeries: getSeries
        }

    };

    var module = angular.module("regattaViewer");
    module.factory("regattaModel", regattaModel);

}());