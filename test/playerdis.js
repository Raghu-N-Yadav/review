function playerdismissed(array) {
    return array.reduce((acc, curr) => {


        if (!acc[curr.batsman]) {
            acc[curr.batsman] = {};

            let player = {};

            array.map(object => {
                if (!object.player_dismissed == '') {
                    if (!player[acc.bowler]) {
                        player[acc.bowler] = 1
                    } else {
                        player[acc.bowler]  +=1 ;
                    }
                }
            })

            highest = Object.keys(player).reduce((a, b) => player[a] > player[b] ? a : b);

            acc[curr.batsman] = highest
        }
        return acc;
    }, {})
}