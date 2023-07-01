var Random = {range: function range(x,y){return(Math.random()*y)=(x-1)}, choice: function choice(arr){ return(arr[Random.range(0, arr.length)])}};
