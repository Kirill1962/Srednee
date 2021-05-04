var ch1 = +prompt('Первое число: ');
var ch2 = +prompt('Второе число: ' );
var ch3 = +prompt('Третье число: ');

console.log('Первое число: ' + ch1);
console.log('Второе число: ' + ch2);
console.log('Третье число: ' + ch3);


if(ch1 == ch2){
    if (ch2 == ch3) {
        alert('Все числа равны')
    }
    else if (ch2 > ch3) {
        alert('Первое число и Второе число равны, а Третье число самое маленькое)))     ' + ch1 + ' = ' + ch2  + ' > ' + ch3);
    }
    else{
        alert('Первое число и Второе число Второе число равны, а Третье число самое большое)))     ' + ch1 + ' = ' + ch2  + ' < ' + ch3);
    }

}

else if (ch3 == ch2) {
    if (ch2 == ch1) {
        alert('Все числа равны')
    }

    else if (ch2 > ch1) {
        alert('Третье число и Второе число равны, а Первое число самое маленькое)))     ' + ch3 + ' = ' + ch2  + ' > ' + ch1);
    }
    else{
        alert('Третье число и Второе число равны, а Первое число самое большое)))     ' + ch3 + ' = ' + ch2  + ' < ' + ch1);
    }

}

else if (ch1 == ch3) {
    if (ch3 == ch2) {
        alert('Все числа равны')
    }

    else if (ch3 > ch2) {
        alert('Первое число и Третье число равны, а Второе число самое маленькое)))     ' + ch1 + ' = ' + ch3  + ' > ' + ch2);
    }
    else{
        alert('Первое число и Третье число равны, а Второе число самое большое)))     ' + ch1 + ' = ' + ch3  + ' < ' + ch2);
    }
}
else{
    var largest = Math.max(ch1, ch2 ,ch3);
    var smallest = Math.min(ch1, ch2 ,ch3);
    console.log(largest)
    console.log(smallest)
    if (largest == ch1){
        if(smallest == ch2){
            alert(ch3)
        }
        else{
            alert(ch2)
        }
    }
    
    else if(largest == ch2){
        if(smallest == ch3){
            alert(ch1)
        }
        else{
            alert(ch3)
        }
    }
    
    else{
        if(smallest == ch2){
            alert(ch1)
        }
        else(
            alert(ch2)
        )
        
    }
}