const student = {
    firstName: 'João Victor',
    lastName: 'de Souza Bobroff',
    age: 24,
    haveCar: true,
    haveDriversLicense: true,
    school: 'Skull Dojo',
};

const fullName = `${student.firstName} ${student.lastName}`;

console.log('Olá, meu nome é', fullName, ', tenho', student.age, `anos e irei me tornar um DEV de elite com os melhores teachers da`, student.school);

if (student.age >= 18 && student.haveDriversLicense === true) {
    if (student.haveCar === true && student.age >= 18) {
        console.log(student.firstName, 'já pode dirigir seu carro! =D');
    } else {
        console.log(student.firstName, 'já pode dirigir, mas não seu carro, pois não tem =\'(');
    };
} else if (student.age >= 18 && student.haveDriversLicense != true) {
    console.log(student.firstName, 'poxa, que pena, você não tem carteira :\'(')
} else {
    console.log(student.firstName, 'cria vergonha, você pode até ter carro, mas você não é de maior, não tem carteira e por isso não pode dirigir.')
};

if (student.haveDriversLicense == true && student.age >= 18) {
    let x = 0
    while (student.age >= 18) {
        x++;
        student.age--;
    };
    if (x > 2){
        console.log('Há', x, 'anos atrás,', student.firstName, 'não tinha maioridade e não podia tirar a carteira para dirigir.');
    } else if (x > 1) {
        console.log('Apenas no ano passado', student.firstName, 'enfim chegou na maioridade e pôde tirar carteira para dirigir.');
    } else {
        console.log(student.firstName, 'é recém motorista, CUIDADO!');
    };
};
