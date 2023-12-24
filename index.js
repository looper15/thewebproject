document.addEventListener('DOMContentLoaded', function() {
    var domainsToCheck = ['example.com', 'anotherdomain.com', 'somedomain.com']; // Add your domains here
    var currentDomain = window.location.hostname;

    if (domainsToCheck.includes(currentDomain)) {
        setTimeout(function() {
            var links = document.getElementsByTagName('a');
            for (var i = 0; i < links.length; i++) {
                links[i].addEventListener('click', function(event) {
                    event.preventDefault();
                });
            }
        }, 10000); // 10 seconds delay
    }
});
