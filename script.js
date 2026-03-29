function orderFood(){
 let msg="Hello, I want to order food from Le Kanchee's Restaurant";
 let url="https://wa.me/919746770099?text="+encodeURIComponent(msg);
 window.open(url,"_blank");
}
