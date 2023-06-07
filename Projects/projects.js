fetch('Projects/projects.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#project-section");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    })

    $('.filters ul li').click(function() {
        // $('.filters ul li').removeClass('active');
        // $(this).addClass('active');
        $('.filters ul li').removeClass('after-click');
        $(this).addClass('after-click');
        var data = $(this).attr('data-filter');
        $grid.isotope({
          filter: data,
        });
      });
      
      var $grid = $('.grid').isotope({
        itemSelector: '.all',
        percentPosition: true,
        masonry: {
          columnWidth: '.all',
        },
      });
