const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']



//   QUE  : Iterate 0 to 10 using for loop, do the same using while and do while loop

        let forloop = []
        for(let i=0 ; i<=10 ; i++){
            forloop.push(i);
        }
        console.log(forloop);


        // ---------------------------


        let whileloop = []
        let j =0 ; 
        while(j<=10){
            whileloop.push(j)
            j++;
        }
        console.log(whileloop);


        // --------------------------
        

        let dowhileloop =  []
        let k =0;
        do{
            dowhileloop.push(k)
            k++
        }while(k<=10)

        console.log(dowhileloop);





    // QUE :  Iterate 10 to 0 using for loop, do the same using while and do while loop

        let a = [] ;
        for(let b = 10 ;b >= 0 ; b--){
            a.push(b);
        }
        console.log(a);

        
        // -----------------------------------


        let b = [];
        let c = 10
        while(c >= 0 ){
            b.push(c);
            c--
        };

        console.log(b);

        // ------------------------------------

        let e = [];
        let d = 10;
        do{
            e.push(d);
            d--
        }while(d >= 0)

        console.log(e);



        // QUE : Iterate 0 to n using for loop

        let n = 17 ; 
        let q = [];
        for(let i = 0; i<=n; i++){
            q.push(i)
        }
        console.log(q);


        // QUE : Write a loop that makes the following pattern using console.log():

        // #
        // ##
        // ###
        // ####
        // #####
        // ######
        // #######

        let z  = 7;
        let string = "";
        for(let i =1 ; i<=z ; i++){
            for(let j=0 ; j<i ; j++){
                string += '#';
            }
            string += '\n'
        }

        console.log(string);



        // QUE : Use loop to print the following pattern:

        // 0 x 0 = 0
        // 1 x 1 = 1
        // 2 x 2 = 4
        // 3 x 3 = 9
        // 4 x 4 = 16
        // 5 x 5 = 25
        // 6 x 6 = 36
        // 7 x 7 = 49
        // 8 x 8 = 64
        // 9 x 9 = 81
        // 10 x 10 = 100

        let no = 10 ; 
        for(let i=0; i<=10 ; i++){
            console.log(`${i} x ${i} = ${i*i}`);
        }




        // QUE  :  Use for loop to iterate from 0 to 100 and print the sum of all numbers.


        let sum = 0 ; 
        for(let i=0 ; i<= 100 ; i++){
            sum += i;
        }

        console.log(`The sum of all numbers from 0 to 100 is ${sum}`);


        // QUE :  Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

        // The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.


        let even = 0;
        let odd = 0;
        let result ; 
        for(let i=0 ; i <= 100 ; i++){
            result = i%2==0 ? even += i : odd += i 
        }
        console.log(`The sum of all evens from 0 to 100 is ${even}`); 
        console.log(`The sum of all evens from 0 to 100 is ${odd}`); 


        // QUE : Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

        // [2550, 2500]


        let array = []
        let evens = 0;
        let odds = 0;
        let res ; 
        for(let i=0 ; i <= 100 ; i++){
            res = i%2==0 ? evens += i : odds += i ;
        }
        
        array.push(evens);
        array.push(odds)
        console.log(array);
     
