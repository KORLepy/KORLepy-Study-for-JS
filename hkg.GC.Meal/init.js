//config bot name or prefix
const lstCommandName = ['학식', '학교식단', 'Meal', '긱식'];
const utility = Bridge.getScopeOf( 'hkg.Lepy.Utility' );

// multiThreading
let isScriptLock = false;

function init( lstSubCommand ) { 
    
    return true;
    
    //return false;
}

function main( objData ){
    /*
        ListenCore -> script.main( objData )
        room, msg, sender, isGroupChat, replier, imageDB, packageName
    */
    
    var text = utility.getGCMeal();

    var today = new Date();
    var date = today.getDay();
    //var hour = today.getHours();

    var Meal_today = '';

    if(date == 0){
        return '일요일은 학식이 없습니다 :)';
    }
    else if(date == 1){
        Meal_today = '아침 : ' + text[0] + '\n\n점심 : ' + text[1] + '\n\n저녁 : ' + text[2];
    }
    else if(date == 2){
        Meal_today = '아침 : ' + text[3] + '\n\n점심 : ' + text[4] + '\n\n저녁 : ' + text[5];
    }
    else if(date == 3){
        Meal_today = '아침 : ' + text[6] + '\n\n점심 : ' + text[7] + '\n\n저녁 : ' + text[8];
    }
    else if(date == 4){
        Meal_today = '아침 : ' + text[9] + '\n\n점심 : ' + text[10] + '\n\n저녁 : ' + text[11];
    }
    else if(date == 5){
        Meal_today = '아침 : ' + text[12] + '\n\n점심 : ' + text[13] + '\n\n저녁 : ' + text[14];
    }
    else if(date == 6){
        Meal_today = '아침 : ' + text[15] + '\n\n점심 : ' + text[16] + '\n\n저녁 : ' + text[17];
    }
    else{
        return '날짜를 다시 확인해주세요 :)';
    }

    return Meal_today;
}