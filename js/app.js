{
    //1
    //[1, 2, 3, 4, 5, 6 ,7, 8 ,9, 0] manashu tartibda massiv kiradi uni telefon nomer yani "(123) 456-7890" ushbu tartibda chiqarish kerak
    function createPhoneNumber(numbers){
        return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
    }
    console.log(createPhoneNumber([1, 2, 3, 4, 5, 6 ,7, 8 ,9, 0]));
}

{
    //2
    //Bizda raqamlardan iborat massiv mavjud. Bittadan tashqari barcha raqamlar teng. Uni topishga harakat qiling!
    function findUniq(arr) {
        arr.sort((a, b) => a - b);
        return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
    }
    console.log(findUniq([1, 1, 1, 0.4, 1, 1]));
}

{
    //3
    //Minimal 4 ta musbat butun sonli massiv berilgan ikkita eng kichik musbat sonlar yig‘indisini qaytaruvchi funksiya yarating. Hech qanday suzuvchi yoki musbat bo'lmagan butun sonlar o'tkazilmaydi. Misol uchun, massiv kabi uzatilganda [19, 5, 42, 2, 77], chiqish bo'lishi kerak 7. [10, 343445353, 3453445, 3453545353453]qaytishi kerak 3453455.
    function sumTwoSmallestNumbers(numbers) {
        numbers.sort((a,b)=>b-a)
        return numbers[numbers.length-1] + numbers[numbers.length-2]
    }
    console.log(sumTwoSmallestNumbers([10, 13, 14, 17, 32, 23]));
}

{
    //4
    //Butun sonlar massivi berilgan bo‘lsa, uning elementlari yig‘indisi toq yoki juft ekanligini aniqlang. agar toq bo'lsa "odd" aks holda "even" qaytaradigan funksiya tuzing.
    function oddOrEven(array) {
        let sum = 0
        for(let i of array){
        sum = sum + i
        }
    if(sum % 2 == 0){
        return "even"
    }else{
        return "odd"
    }
    }
    console.log(oddOrEven([3, 7, 13, 23]));
}

{
    //5
    //Ajablanarli darajada zerikarli narsalar muzeyi ba'zi eksponatlardan xalos bo'lishni xohlaydi. Miriam, ichki me'mor, eng zerikarli eksponatlarni olib tashlash rejasini ishlab chiqadi. U ularga baho beradi va keyin eng past bahoga ega bo'lganini olib tashlaydi. Biroq, u barcha eksponatlarni baholashni tugatgandan so'ng, u muhim yarmarkaga jo'nab ketdi, shuning uchun u sizdan eng pastini olib tashlaganingizdan so'ng unga ko'rgazmalarning reytingini aytib beradigan dastur yozishingizni so'raydi. Haqqoniy.
    //Vazifa
    //Butun sonlar massivi berilgan bo'lsa, eng kichik qiymatni olib tashlang. Asl massiv/roʻyxatni mutatsiyaga kiritmang. Agar bir xil qiymatga ega bir nechta element mavjud bo'lsa, eng past indeksli elementni olib tashlang. Agar siz bo'sh massiv/ro'yxatni olsangiz, bo'sh massiv/ro'yxatni qaytaring.
    //Qolgan elementlarning tartibini o'zgartirmang.
    function removeSmallest(numbers) {
        let smallestIndex = numbers.indexOf(Math.min(...numbers));
        let newArray = [...numbers];
        newArray.splice(smallestIndex, 1);
        return newArray;
    }
    console.log(removeSmallest([1, 3, 2, 5, 7]));
}

{
    //6
    //Sizga (array) va (limit) qiymat beriladi . Massivdagi barcha qiymatlar chegara qiymatidan past yoki teng ekanligini tekshirishingiz kerak. Agar ular bo'lsa, qaytib keling true. Aks holda, qaytib keling false. Massivdagi barcha qiymatlarni raqamlar deb hisoblashingiz mumkin.
    const smallEnough = (a, limit) => a.every(element => element <= limit);
    console.log(smallEnough([60, 32, 48, 101], 120));
}

{
    //7
    //Ushbu katada siz mintaqaning boshlang'ich va yakuniy raqamini olasiz va unda 5 bo'lgan raqamlardan tashqari barcha raqamlarning sonini qaytarishingiz kerak. Boshlanish va yakuniy raqam ikkalasini ham qamrab oladi!
    //M-n 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
    // 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
    function dontGiveMeFive(start, end){
        let sum = 0
        for(let i=start; i <= end; i++){
        if(!i.toString().includes('5')){
            sum ++
        }
    }
    return sum
    }
    console.log(dontGiveMeFive(1, 9));
}

{
    //8
    //Sizga massiv beriladi(hohlgan bir uzunlikdagi). Ushu massiv sonlari orasidagi ikkita eng katta sonlarni topib beruvchi funksiya yarating.
    function twoOldestAges(ages){
        ages.sort((a, b) => a - b);
        let oldest = ages[ages.length - 1];
        let secondOldest = ages[ages.length - 2];
        return [secondOldest, oldest];
    }
    console.log(twoOldestAges([2, 7, 9, 1, 14, 23]));
}

{
    //9
    //Birinchi kirish massivi imtihonga to'g'ri javoblar kalitidir, masalan ["a", "a", "b", "d"]. Ikkinchisida talabaning topshirgan javoblari mavjud. Ikki massiv bo'sh emas va uzunligi bir xil. +4Har bir to'g'ri javob uchun, -1har bir noto'g'ri javob uchun va har bir bo'sh javob uchun bo'sh qator sifatida ko'rsatilgan javoblar to'plami uchun ballni qaytaring +0(Cda bo'sh joy ishlatiladi). Agar ball < 0 bo'lsa, qaytaring 0.
    //M-n: To'g'ri javob-["a", "b", "b", "a"]. Talabaning javobi: ["a", "c", "b", "d"]. Ball: 6
    function checkExam(array1, array2) {
        let score = 0;
        for (let i = 0; i < array1.length; i++) {
           if (array2[i] === '') {
             continue;
           } else if (array2[i] === array1[i]) {
             score += 4;
           } else {
             score -= 1;
           }
        }
        return score < 0 ? 0 : score;
    }
    console.log(checkExam(["a", "b", "b", "a"], ["a", "c", "b", "d"]));
}

{
    //10
    //Massivning toq bo‘lmagan qiymatlarini qaytaruvchi kichik funksiyani yozing.Massivdagi barcha qiymatlar butun sonlar bo'ladi. Yaxshi qiymatlarni ularga berilgan tartibda qaytaring.
    const noOdds = values => values.filter(x=> x % 2 === 0)
    console.log(noOdds([2, 3, 14, 7, 4, 10]));
}