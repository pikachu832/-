//  אני לא יודע למה הקוד לא עוד כאן גם אם אני מחבר את הקבצים אז למי שרוצה לראות דרך הפלטפורמה של מחשבה טובה

//  https://course-ide-staging.s3.eu-central-1.amazonaws.com/index.html


var left,top,n,zindex,widthHeight,number;
 left = 700
 top = 300;
 n = 20;
 zindex= -2
 widthHeight = 15;
 number = 4;
 // נדגיר צבעים לאחר כך
let colors = ['Red', 'darkred', 'purple', 'pink', 'yellow', 'orange', 'brown', 'blue', 'lightblue', 'turquoise'];
const box = document.getElementById('box');
document.onkeydown = function(event) {
    const key = event.key;
    if (key == 'ArrowDown' && n >= 2) { // בחץ למטה נוריד את מהירות הכדור
    n -= 1
    } if (key == 'ArrowUp' && n <= 29) { // בחץ למעלה נגדיל את מהירות הכדור
    n += 1
    } if (key == 'd' || key == 'D' || key == 'ג' || left <= 0) { //נזיז את הכדור ימינה
        left += n;
    } else if (key == 's' || key == 'S' || key == 'ד' || top <= 0) { // נזיז את הכדור שמאלה 
        top += n;
    } if (key == 'a' || key == 'A' || key == 'ש' || left >= 1460) { // נזיז את הכדור למעלה
        left -= n;
    } else if (key == 'w' || key == 'W' || key == "'" || top >= 660) { // נזיז את הכדור למטה
        top -= n;
     } if (key == 'E' || key == 'e' || key == 'ק' && widthHeight < 30) { // נגדיל את הכדור
    widthHeight += 5
    } if (key == 'Q' || key == 'q' || key == '/' && widthHeight > 15) { // נקטין את הכדור
    widthHeight -= 5
    } if (key == 'R' || key == 'r' || key == 'ר') { // נשנה את העיצוב
        box.style.backgroundColor='red';
        bod.style.backgroundColor ='#ebbddb';
        teody.style.color='#ebbddb';        
        yell.style.color='#017cce';
        poi.style.color ='#c4195a';
        rew.style.color ='#790073';
        speed.style.color='#008b6d';
        speed1.style.color='#ee18ca';
    } if (key == 'B' || key == 'b' || key == 'נ') { // נשנה את העיצוב שוב
        box.style.backgroundColor='white';
        bod.style.backgroundColor ='#000000';
        teody.style.color='#000000';
        yell.style.color='yellow';
        poi.style.color ='#2bceff';
        rew.style.color ='#31f300';
        speed.style.color='#b3b3b3';
        speed1.style.color='#ff0000';
    } if (key == '6') {
        box.style.zIndex= -5;
    }


    box.style.left = left + 'px';
    box.style.top = top + 'px';
    box.style.width = widthHeight + 'px';
    box.style.height = widthHeight + 'px';
    document.getElementById('sum').innerText = n ;
    document.getElementById('sum1').innerText = number ;
}


box.onclick = func
// ...מהאינטרנט
function func () {
    var set = colors.slice(0);

    (function loop(){
        var colors = set.shift();

        box.style.backgroundColor = colors;

        if (set.length) {
            setTimeout(loop, 400);
        }
    })();
};
