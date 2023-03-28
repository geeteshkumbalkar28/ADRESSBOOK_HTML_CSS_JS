function submit()
{
    var password = document.getElementById(`password`).value;
    
    var username = document.getElementById(`username`).value;

    if(password == "Geetesh@11" && username == "Admin")
    {
        window.location.replace("../pages/homePage.html");
    }
} 