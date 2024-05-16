const bar =document.getElementById('bar');
const close= document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
//javascript
const addToCartBtns = document.querySelectorAll('.cart');

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Sepete ekleme işlemleri burada gerçekleştirilir
        alert('Ürün sepete eklendi!');
    });
});
//jquery

$('.cart').on('click', function() {
    // Sepete ekleme işlemleri burada gerçekleştirilir
    alert('Ürün sepete eklendi!');
});



$(document).ready(function() {
    // Resim üzerine gelindiğinde ve ayrıldığında olay dinleyicileri ekle
    $('.pro img').hover(function() {
        // Resmin boyutunu büyüt
        $(this).css({
            'transform': 'scale(1.2)',
            'transition': 'transform 0.3s ease'
        });
    }, function() {
        // Resmin boyutunu küçült
        $(this).css({
            'transform': 'scale(1)',
            'transition': 'transform 0.3s ease'
        });
    });

    const subscribeBtn = document.getElementById('subscribeBtn');

    subscribeBtn.addEventListener('click', () => {
        const emailInput = document.getElementById('emailInput');
        const email = emailInput.value;
        
        // E-posta adresini sunucuya gönderme işlemi burada gerçekleştirilir
        // Örneğin, fetch API veya AJAX kullanılabilir
        // Bu örnekte sadece bir mesaj kutusu gösteriyoruz
        alert(`Teşekkürler! ${email} adresiyle bültenimize abone oldunuz.`);
    });
    
    // Özel bir JavaScript fonksiyonu örneği: Kullanıcıya hoş geldin mesajı gösterme
function welcomeMessage() {
    var userName = prompt("Adınızı girin:");
    if (userName !== null && userName !== "") {
        alert("Hoş geldiniz, " + userName + "!");
    } else {
        alert("Hoş geldiniz, misafir!");
    }
}

// Özel bir JavaScript fonksiyonu örneği: Rastgele ürün ekleyen buton
function addRandomProduct() {
    var products = ["Elbise", "Gömlek", "Pantolon", "Ayakkabı", "Çanta"];
    var randomProduct = products[Math.floor(Math.random() * products.length)];
    alert("Sepete " + randomProduct + " eklendi!");
}

});

$(document).ready(function(){
    $("#sendCouponButton").click(function(){
        console.log("Butona tıklandı"); // Butona tıklandığında konsola mesaj gönder
        var couponCode = $("#couponInput").val();
        if(couponCode === "SALE20") {
            alert("Kupon kodu başarıyla uygulandı. İndirimli fiyatı kontrol edin!");
        } else {
            alert("Geçersiz kupon kodu. Lütfen doğru bir kupon kodu girin.");
        }
    });
});

$(document).ready(function(){
    // Yorum gönderme
    $("#commentForm").submit(function(event){
        event.preventDefault(); // Formun varsayılan davranışını engelle
        var comment = $("#commentText").val();
        // Yorumları ekleme işlemi buraya eklenebilir
        $("#comments").append("<p>" + comment + "</p>");
        $("#commentText").val(""); // Formu temizle
    });

    // İçerik paylaşma
    $(".shareButton").click(function(){
        var contentId = $(this).data("content-id");
        // İçeriği paylaşma işlemi buraya eklenebilir
        console.log("İçerik paylaşıldı, İçerik ID: " + contentId);
    });

    // İçeriği beğenme
    $(".likeButton").click(function(){
        var contentId = $(this).data("content-id");
        // İçeriği beğenme işlemi buraya eklenebilir
        console.log("İçerik beğenildi, İçerik ID: " + contentId);
    });

    // İçeriği beğenmeme
    $(".dislikeButton").click(function(){
        var contentId = $(this).data("content-id");
        // İçeriği beğenmeme işlemi buraya eklenebilir
        console.log("İçerik beğenilmedi, İçerik ID: " + contentId);
    });
});
// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const inputFields = document.querySelectorAll("#cart input[type='number']");
    const totalPriceField = document.querySelector("#subtotal table tr:last-child td:last-child");

    inputFields.forEach(input => {
        input.addEventListener("change", calculateTotal);
    });

    function calculateTotal() {
        let totalPrice = 0;
        inputFields.forEach(input => {
            const price = parseFloat(input.parentNode.previousElementSibling.textContent);
            const quantity = parseInt(input.value);
            totalPrice += price * quantity;
        });
        totalPriceField.textContent = totalPrice.toFixed(2) + " TL";
    }
});
// jQuery
$(document).ready(function() {
    const inputFields = $("#cart input[type='number']");
    const totalPriceField = $("#subtotal table tr:last-child td:last-child");

    inputFields.on("change", calculateTotal);

    function calculateTotal() {
        let totalPrice = 0;
        inputFields.each(function() {
            const price = parseFloat($(this).parent().prev().text());
            const quantity = parseInt($(this).val());
            totalPrice += price * quantity;
        });
        totalPriceField.text(totalPrice.toFixed(2) + " TL");
    }
});

$(document).ready(function() {
    $("#compareButton").click(function() {
        var selectedProducts = $(".product-checkbox:checked");
        if (selectedProducts.length < 2) {
            alert("Lütfen en az iki ürün seçin.");
        } else {
            var productNames = "";
            selectedProducts.each(function() {
                productNames += $(this).data("product-name") + "\n";
            });
            alert("Seçilen ürünler:\n" + productNames);
            // Karşılaştırma işlemleri buraya eklenebilir
        }
    });
});
function displayDateTime() {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString();
    const timeString = currentDate.toLocaleTimeString();
    const dateTimeString = dateString + ' ' + timeString;
    document.getElementById('datetime').innerText = dateTimeString;
}

// Sayfa yüklendiğinde tarih ve saat göster
document.addEventListener("DOMContentLoaded", function() {
    displayDateTime();
    // Her saniyede bir tarih ve saati güncelle
    setInterval(displayDateTime, 1000);
});
$(document).ready(function() {
    function displayDateTime() {
        const currentDate = new Date();
        const dateString = currentDate.toLocaleDateString();
        const timeString = currentDate.toLocaleTimeString();
        const dateTimeString = dateString + ' ' + timeString;
        $('#datetime').text(dateTimeString);
    }

    // Sayfa yüklendiğinde tarih ve saat göster
    displayDateTime();
    // Her saniyede bir tarih ve saati güncelle
    setInterval(displayDateTime, 1000);
});
// Özel bir jQuery fonksiyonu örneği: Arka plan rengini değiştiren buton
$(document).ready(function(){
    $("#changeColorButton").click(function(){
        $("body").css("background-color", getRandomColor());
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function autoScroll() {
    setInterval(() => {
        const productContainer = document.getElementById('product1');
        const scrollAmount = 200; // Otomatik kaydırma miktarı
        productContainer.scrollBy(0, scrollAmount);
    }, 3000); // Otomatik kaydırma her 3 saniyede bir gerçekleşir
}
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Her 2 saniyede bir slayt değiştirme
}
function searchProduct() {
    const searchInput = document.getElementById('searchInput').value;
    // Ürünleri arama işlemi burada gerçekleştirilir
    alert(`Arama sonuçları: ${searchInput}`);
}
function showRandomProduct() {
    const products = ["Elbise", "Gömlek", "Ayakkabı", "Çanta"];
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    alert(`Sizin için önerilen ürün: ${randomProduct}`);
}
function thankYouMessage() {
    alert("Teşekkürler! Siparişiniz alındı.");
}
