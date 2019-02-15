window.onscroll = function() {
    scrollFunction()
}
;

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

topFunction();

const modal = document.querySelector('.modal');
document.getElementById('feedback').addEventListener('click', openModal);
document.querySelector('.btn_close').addEventListener('click', closeModal);

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
})

document.querySelector('.modal_content input[type=submit]').addEventListener('click', sendForm);

function sendForm(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.modal_content').innerHTML = 'Thank you!';

        } else if (xhr.readyState === 4 && xhr.status != 200) {
            document.querySelector('.modal_content').innerHTML = 'Error!';
        }
    }

    xhr.open('POST', 'login.php', true);
    const form = document.querySelector('.modal_content');
    const data = new FormData(form);
    xhr.send(data);
}

$(document).ready(function() {
    $('.nav-item1').click(function() {
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $('#aboutus').position().top - 60
        }, 1000);
    });
});
$(document).ready(function() {
    $('.nav-item2').click(function() {
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $('#typesofmassage').position().top - 60
        }, 1000);
    });
});
$(document).ready(function() {
    $('.nav-item3').click(function() {
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $('#contactme').position().top - 60
        }, 2000);
    });
});

$(document).ready(function() {
    $('.disposable').click(function() {
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $('#disposable').position().top - 0
        }, 2000);
    });
});

$(document).ready(function() {
    $('.anti-cellulite').click(function() {
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $('#anti-cellulite').position().top - 0
        }, 2000);
    });
});

$(document).ready(function() {
    $('.classical').click(function() {
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $('#classical').position().top - 0
        }, 2000);
    });
});

$(document).ready(function() {
    $('.tubular').click(function() {
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $('#tubular').position().top - 0
        }, 2000);
    });
});

$(document).ready(function() {
    $('.childrens').click(function() {
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $('#childrens').position().top - 0
        }, 2000);
    });
});

$(document).ready(function() {
    $('.honey').click(function() {
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $('#honey').position().top - 0
        }, 2000);
    });
});
