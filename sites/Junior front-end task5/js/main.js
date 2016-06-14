
$(function(){
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables
        var upper = this.el.find('.list-item__element--upper');
        var down = this.el.find('.list-item__element--down');
        // Events
        upper.on('click', {el: this.el, multiple: this.multiple},this.dropdown)
        down.on('click', {el: this.el, multiple: this.multiple},this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();

        // Opening event on the following link to class
        $next.slideToggle();
        // Add class open to link = li
        $this.parent().toggleClass('open');
        
        //Just one submenu open 
        if(!e.data.multiple){
            $el.find('.list-item__sublist').not($next).slideUp().parent().removeClass('open');
        }
    }
    // One li is open, the rest is closed
    var accordion = new Accordion($('#accordion__list'), false);
});




//currently playing
/*$(document).ready(function(){
    $("li").click(function(){
        $("#playing").toggle();
    });
});
 

/*$(document).ready(function() {
    $('accordion').find('open').each(function() {
        $find('#playing').show();
        // alert($(this).html());
    });
}) */

