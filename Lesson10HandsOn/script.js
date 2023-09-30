$(function() {
    $(".icons").hover(function() {
        $(this).toggleClass("icon-large");
    });
});

function myRepos() {
    let gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let gitObject = JSON.parse(this.responseText);
            let repos = "";
            for (var i = 0; i < gitObject.length; i++) {
                console.log(gitObject[i].name);
                repos += `${gitObject[i].name} <br/>`;
            }
            document.getElementById("repos").innerHTML = repos;
        };
    }

    gitHubRequest.open("GET", "https://api.github.com/users/MHolmes83/repos", true);
    gitHubRequest.send();
};