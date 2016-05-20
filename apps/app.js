function showResults(results){
    var html = "";
    $.each(results, function(index,value){
        html += '<p>' + value.Title + '</p>';
    });
    $('#search-results').html(html);
}
$(function(){
    $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
        showResults(data.Search);
    });
});



