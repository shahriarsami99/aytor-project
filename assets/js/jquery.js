// Loader box start
$(window).on ("load", function(){
    $("#loader").fadeOut(3000);
})
// Loader box end
//=================== PRODUCT DETAILS SECTION START===================
$(function(){
    $('.product_details_slider').slick({
    autoplaySpeed:2000,
    autoplay:true,
    arrows:false,
    slidesToShow:1,
    asNavFor:'.product_small_img_slider'
    });
})
//=================== PRODUCT DETAILS SECTION END=====================


// $(function(){
//     $('.product_small_img_slider').slick({
//     autoplaySpeed:2000,
//     autoplay:true,
//     arrows:false,
//     slidesToShow:4,
//     });
// })

$(function(){
    $('.related_product_slide').slick({
     
    });
  })

//================ About Img section Start================
// $(function(){
//     $('.about_img_slider').slick({
//         autoplaySpeed:1000,
//         autoplay:true,
//         slidesToShow:1,
//         arrows:false,
//     });
// })
//================ About Img section End================




//======================== CHECKOUT LOGIN FORM START========================
let loginBtn =document.querySelector('#check_btn');
let loginForm =document.querySelector('.login_form');

loginBtn.addEventListener('click', function(){
    loginForm.classList.toggle('hide');
})

let checkShow =document.querySelector('.check_show');
let formGroup =document.querySelector('.form_hide');
checkShow.addEventListener('click', function(){
    formGroup.classList.toggle('remove');
})
//======================== CHECKOUT LOGIN FORM END========================



// ====================ORDER PAYMENT SECTION START====================
let checkBoxOne = document.querySelector('.check_box_one');
let checkBoxTwo = document.querySelector('.check_box_two');
let checkBoxThree = document.querySelector('.check_box_three');
let checkBoxFour = document.querySelector('.check_box_four');
let showOne = document.querySelector('.p_one');
let showTwo = document.querySelector('.p_two');
let showThree = document.querySelector('.p_three');
let showFour = document.querySelector('.p_four');

checkBoxOne.addEventListener('click', function(){
    showOne.classList.remove('show')
    showTwo.classList.remove('show')
    showThree.classList.remove('show');
    showFour.classList.remove('show');
})
checkBoxTwo.addEventListener('click', function(){
    showOne.classList.add('show')
    showTwo.classList.add('show')
    showThree.classList.remove('show');
    showFour.classList.remove('show');
})
checkBoxFour.addEventListener('click', function(){
    showOne.classList.add('show')
    showTwo.classList.remove('show')
    showThree.classList.remove('show');
    showFour.classList.add('show');
})
checkBoxThree.addEventListener('click', function(){
    showOne.classList.add('show')
    showTwo.classList.remove('show')
    showThree.classList.add('show');
    showFour.classList.remove('show');
})
// ====================ORDER PAYMENT SECTION END====================


// =======================INCREMENT AND DECREMENT SECTION START=======================
$(function(){
    
    $('.product_count').on('click', function(event){
      let card_value = $(this).children('#card_value').val();
      let targetType = $(event.target).data("type");
      if(targetType === "inc"){
        if(card_value < 5){

            $(this).children('#card_value').val(++card_value );
        }
    }else if(targetType === "dec"){
        if(card_value > 1){
        $(this).children('#card_value').val(--card_value );

        }
      }
    })
})


// single increment 
// $('.dec').on('click',function(){
    //     let card_value = $('#card_value').val();
    //     if(card_value > 1){

    //         $('#card_value').val(--card_value )
    //     }
    // })
    // $('.inc').on('click',function(){
    //     let card_value = $('#card_value').val();
    //     $('#card_value').val(++card_value )
    // })
// =======================INCREMENT AND DECREMENT SECTION END=======================