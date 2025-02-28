function solution(s) {
    return s.split(" ")
            .map(str => 
                [...str].map((char, index) => 
                    index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
                ).join("")
            ).join(" ");
}
