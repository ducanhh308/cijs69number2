var inputArr = [
     {
          name: "Arsenal",
          points: 99,
          GD: 45,
     },
     {
          name: "Chelsea",
          points: 88,
          GD: 39,
     },
     {
          name: "MU",
          points: 70,
          GD: 29,
     },
     {
          name: "MC",
          points: 88,
          GD: 40,
     },     
]

     function sortOrder(inputArr){
        var totalSort = []  
               inputArr.sort(function(c,d){
                   if(c.points === d.points) {
                          return c.GD -d.GD
                    }else{
                         return d.points - c.points
                    }
               })
               inputArr.forEach(function(e){
                    totalSort = totalSort.concat(e)
               })
          return totalSort
     }
     console.log(sortOrder(inputArr))