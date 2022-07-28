//Coding Challenge #1: Basketball Score
function totalBasketballScore(freeThrows, midRange, threePointers) {
    if (typeof freeThrows !== 'number' || typeof midRange !== 'number' || typeof threePointers !== 'number' ) {
    
    console.log( 'All entries must be numbers');
    }
    else {
   
    return freeThrows * 1 + midRange * 2 + threePointers *3;
     
    }
    
  }
  
  totalBasketballScore(2,3,4);
  

  //Coding Challenge #2: Computer Store


  function itemPrice(item) {
    


    if (typeof item !== 'string' ) {
        console.log ('All entries must be of type string');
      }
      else {
      
       
      
        switch (item) { 
        case 'computer':
            return'$500';
           
             break;
        case 'mouse':   
        return'$10';
        
            break;
        case 'tablet':
            return'$250';
          
            break;
        case 'case':
            return'$25';
            
            break;
        case 'router': 
        return'$100';
   
           break;
        default:
             console.log(' Sorry, wrong input or The item is not in the store');
            break;


    }
   
      }

}

     itemPrice('case' );
     

     //Coding Challenge #3: What’s for dinner?
     function randomRestaurant(numOfRestaurants) {
        const restaurants = ['applebees','paneraBread','popeyes','chopt','chick-fil-A','cheesecakeFactory','fiveGuys'];
        const randomRestaurantList = [];   
            for (let i = 0; i < numOfRestaurants; i++) {
              let ranNum = getRndInteger(0,6);
              randomRestaurantList.push(restaurants[ranNum]);
      }
        
        
        return randomRestaurantList;
      
         }
         
      function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
      
      randomRestaurant(3);
      

//       //Coding Challenge #4: Leap Year
      function isLeapYear(year) {

    
        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
       
            return true;
        } else {
          
            return false;
        }
    }
    
    
    
    
    isLeapYear(2000);
