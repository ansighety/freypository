//GLOBAL VARIABLES
var jsonAll=null, allJSON = null;

//UI SELECTORS
var contDate = "main div#release-date";
var contType = "main div#release-type";

//UI SELECTORS
$.ajax({
    type: "GET",
    url: "../db.json",
    async: true,
    dataType: "json",   //expect html to be returned                
    success: function (response) {
        jsonAll = response.releases;
    }
});

$(document).ajaxComplete(function () {
  allJSON = jsonAll;
  console.table(allJSON);
    /*allReleases = jsonAll;
    allReleases.sort(SortByReleaseID);
    for(i=0;i<allReleases.length;i++){
        var currentRelease = allReleases[i];
        if(currentRelease.type=='single'){
            allSingles.push(currentRelease);
        }
        else{
            allAlbums.push(currentRelease);
        }
    }*/

    /*$(document).ready(function() {
        $(contType).empty();
        $(contDate).empty();

        var appendHTML = "";

        for(i=0;i<allReleases.length;i++){
            var currentRelease = allReleases[i];
            if(currentRelease.type=='single'){
                if(currentRelease.recc!=null){
                    appendHTML+='<div class="col-lg-3 mx-1 my-4 rSingle rRec">';
                }
                else{
                    appendHTML+='<div class="col-lg-3 mx-1 my-4 rSingle rNRec">';
                }
            }
            else{
                if(currentRelease.recc!=null){
                    appendHTML+='<div class="col-lg-3 mx-1 my-4 rAlbum rRec">';
                }
                else{
                    appendHTML+='<div class="col-lg-3 mx-1 my-4 rAlbum rNRec">';
                }
            }
            appendHTML += '<div class="card"> <img src="'+currentRelease.cover+'" class="card-img-top img-fluid disco_release_cover"> <div class="card-body"> <h5 class="card-title text-center"><a href="./release.html?id='+currentRelease.id+'">'+currentRelease.name+'</a></h5> <table> <tbody> <tr> <th>Release Type:</th> <td>'+currentRelease.type+'</td></tr><tr> <th>Release Date:</th> <td>'+currentRelease.date+'</td></tr><tr> <th>Member Count:</th> <td>'+currentRelease.member_count+'</td></tr>';
            if(currentRelease.type=='single'){
                if(currentRelease.rel_album!="")
                {
                    appendHTML+= '<tr> <th>Album:</th><td>' + currentRelease.rel_album + '</td></tr>';
                }
                else{
                    appendHTML+= '<tr> <th>Album:</th><td>-</td></tr>';
                }
            }
            appendHTML += '</tbody> </table> </div></div></div>';
        }

        $(contDate).html(appendHTML);

        $("input[name='option2FilterOptions']").on('click change', function(e) {
            optionFilter();
        });
    });*/
});