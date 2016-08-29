var search_url;
var dataSet=[];

function parse(search_url){
	var dataSet=[];
	 $.ajax({
	    url: search_url,
	    crossDomain: true,
	    dataType: 'jsonp',
	    data: '',
	    type: 'get',
	    headers: {"Access-Control-Allow-Origin": "*"},
	    success: function(data) {

	    	console.log(data);

	    	// jsonArray is the array of search results of jobs
	    	var jsonArray = data.results;
			for(var i = 0; i < jsonArray.length; i++) {
				// jsonObject is a individual job from the search results
				var jsonObject = jsonArray[i];
				//get info from each job
				var jobtitle = jsonObject.jobtitle;
				var company = jsonObject.company;
				var city = jsonObject.city;
				var country = jsonObject.country;
				var date = jsonObject.formattedRelativeTime;
				var info = jsonObject.snippet;

				//put all info into single array
	      		dataSet.push({Job:jobtitle, Company:company, City:city, Country:country,
	      			Posted_date:date, Info: info});
			}
			console.log(dataSet);
			graphdata(dataSet);
		}

	  });
}


function graphdata(dataSet){
	var row_header = 1;

	$(".content2").html("");

	var my_table = "<table class = 'sortable'>"

	$.each(dataSet,function(key,job){

		if(row_header == 1){
			my_table += "<tr class = 'headerstyle'>";
				$.each(job,function(key,element){
					 var row_header = "<th>" + key + "</th>"
					 my_table += row_header;
				});
			my_table += "</tr>";
			row_header = 0;
			}

	my_table += "<tr class = 'rowstyle'>";	
		$.each(job,function(key,element){
			 var row = "<td>"+element+"</td>";
    		 my_table += row;
		});
	my_table += "</tr>";
	});

	my_table += "</table>";
	$(".content2").append(my_table);

}



function setURL(){
	var url1 = "http://api.indeed.com/ads/apisearch?callback=?";
	var urlq = "&q="+jobkey.value.replace(/ /g,"%20");
	var urll = "&l="+loc.value.replace(/ /g,"%20");
	var urljt = "&jt="+jobtype.value.replace(/ /g,"%20");
	var urlEnd = "&userip=1.2.3.4&useragent=Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_8_2)&v=2&format=json&publisher=6374578592579020";
	var search_url = url1 + urlq + urll+ urljt + urlEnd;
	console.log(search_url);
	parse(search_url);
}
