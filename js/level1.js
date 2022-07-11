$('.group-button button').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    console.log($(this).data('set'));
    /*conditions*/
    if($(this).data('set')=='.all'){
        $('.image').css('opacity',1);
        /*$('.image').css('display','flex')*/
    }else{
       
        $('.image').css('opacity','.08');
        $($(this).data('set')).parent().css('opacity', 1);
        
        /*
        $('.image').css('display',"none");
        $($(this).data('set')).parent().css('display','inline-block');
        
        $($(this).data('set')).parent().addClass('col-sm-3');
        $($(this).data('set')).parent().parent().addClass('justify-content-center')
        */
    }
})
let links=document.querySelectorAll('.nav a');
console.log(links);

links.forEach(link=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        document.querySelector(e.target.dataset.set).scrollIntoView({behavior:'smooth'})
    })
})

$('.nav a').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
});