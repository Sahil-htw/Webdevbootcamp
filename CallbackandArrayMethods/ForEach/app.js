const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,]

function print(element){
    console.log(element)
}


print(numbers[0])
print(numbers[1])

numbers.forEach(function(el){
    if (el % 2 == 0){
    console.log(el)
                    }
                }
)