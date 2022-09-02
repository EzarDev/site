window.addEventListener('load', function() {
    document.getElementById('invite_rd').addEventListener('click', function() {
        var url = "https://discord.com/api/oauth2/authorize?client_id=956540492588384316&permissions=8&scope=bot%20applications.commands";
        window.location.href = url;
    });
});