Template.header.events({
    'click .menu__link': function(event, template){
        // Remove the class 'active' from potentially current active link.
        var activeLink = template.find('.menu__link.active');
        if(activeLink) {
            activeLink.classList.remove('active');
        }

        // Add the class 'active' to the clicked link.
        event.currentTarget.classList.add('active');

    }
});