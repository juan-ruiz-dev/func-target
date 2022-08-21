let list = [6, 4, 7, 9, 3, 12]
let target = 13;
let sum = 0;

for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
        for (let k = 0; k < list.length; k++) {
            if (i != j != k) {
                if ((i, j, k) === target) {
                    console.log(i, j, k)
                }

            }

        }

    }

}
