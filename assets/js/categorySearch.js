function filerCategories(val) {
    var posts = document.getElementsByClassName('post');
    for(var i = 0; i < posts.length; i++) {
        var postCats = posts[i].id;
        if(postCats.toUpperCase().includes(val.toUpperCase().replace(' ', ''))) {
            posts[i].style.display = '';
        } else {
            posts[i].style.display = 'none';
        }

    }
}

function showAllCategories() {
    var posts = document.getElementsByClassName('post');
    for(var i = 0; i < posts.length; i++) {
        posts[i].style.display = "";
    }
}

$(".categoryButton").click(function() {
    $(".categoryButton").removeClass('clicked');
    $(this).addClass("clicked");//adds the class at the right button
});