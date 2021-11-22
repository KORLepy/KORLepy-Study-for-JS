//multiThreading
let isScriptLock = false;
let gc_url = 'https://www.gc.ac.kr/newgc/sub06/sub04-02.asp';


function getGCMeal(){
    importClass(org.jsoup.Jsoup);

    var Meal_tag = [];
    for(var i = 2 ; i <= 7 ; i++){
        Meal_tag.push('#wrapper > div.row > div > table.sub06_t1f.w100 > tbody > tr:nth-child(2) > td:nth-child('+i+')');
        Meal_tag.push('#wrapper > div.row > div > table.sub06_t1f.w100 > tbody > tr:nth-child(3) > td:nth-child('+i+')');
        Meal_tag.push('#wrapper > div.row > div > table.sub06_t1f.w100 > tbody > tr:nth-child(4) > td:nth-child('+i+')');
    }

    var html = Jsoup.connect(gc_url).get();

    var Meal_text = [];
    for(var i = 0 ; i <= Meal_tag.length ; i++){
        Meal_text.push(html.select(Meal_tag[i]).text());
    }

    return Meal_text;
}