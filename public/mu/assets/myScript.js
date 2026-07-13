function openCourse(evt, tabName){
    var i, tabContent,tablinks;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("master").style.display = "block";
  
  // Set the "master" tab link as active
  document.querySelector(".tablinks[data-tab='master']").className += " active";
});

    //popup code

            // setTimeout(function() {
            //     $('#myModal').delay(800).fadeIn(400);
            // }, 8000);


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        document.getElementByclassName("icon").display = block;
    } else {
        x.className = "topnav";
    }
}


function openPopupbroucher() {
    document.getElementById('myModal2').style.display = 'block';
}

// Function to close the popup
function closePopupbroucher() {
    document.getElementById('myModal2').style.display = 'none';
}



jQuery(document).ready(function($) {
    function getParameterByName(name) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(window.location.href);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    function addParameter(url, paramName, paramValue) {
        var hash = '';
        var anchorIndex = url.indexOf('#');
        if (anchorIndex !== -1) {
            hash = url.substr(anchorIndex);
            url = url.substr(0, anchorIndex);
        }
        if (url.indexOf('?') === -1) {
            return url + '?' + paramName + '=' + paramValue + hash;
        } else {
            return url + '&' + paramName + '=' + paramValue + hash;
        }
    }

    var utm_parameters = {
        'sub_source': getParameterByName('sub_source'),
        'utm_source': getParameterByName('utm_source'),
        'utm_campaign': getParameterByName('utm_campaign'),
        'utm_medium': getParameterByName('utm_medium'),
        'utm_term': getParameterByName('utm_term'),
        'messageText': getParameterByName('messageText')
    };

    $('a').each(function() {
        var link = $(this).attr('href');
        if (link) {
            for (var key in utm_parameters) {
                if (utm_parameters[key]) {
                    link = addParameter(link, key, utm_parameters[key]);
                }
            }
            $(this).attr('href', link);
        }
    });
});

            
            