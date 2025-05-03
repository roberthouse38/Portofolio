function toggleDetail(e){
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }

    // $(target).html("Less Info").addClass("active")


    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()
    // console.log($(item).children(".about-exp-item-detail")) # Untuk debugging hierarki child atau parent
}

// UNTUK MENAMPILKAN POP UP ALERT DARI javascript 
// (lebih aman daripada menambahkan 'required' pada html )
function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    // console.log($(subject).val()) UNTUK DEBUG MASUKAN

    if(!$(email).val()) {
        alert("Email Is Required")
    } else if (!$(subject).val()) {
        alert("Subject Is Required")
    } else if (!$(message).val()) {
        alert("Message Is Required")
    } else {
        alert("form submitted")
        $(email).val(" ")
        $(subject).val(" ")
        $(message).val(" ")
    }
}