import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷'
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('')

    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator | undefined>(undefined);

    useEffect(() => {
        // TODO: calcular el subResultado
        setFormula(number);
    }, [number])

    const buildNumber = (numberString: string) => {

        // Verificar si ya existe el punto decimal
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            // Evaluar si es otro cero y no hay punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            // Evaluar si es diferente de createBottomTabNavigator, no hay punto y es el primer número
            if (numberString != '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            // Evitar el conjunto de puros ceros: 00000
            if (numberString === '0' && !number.includes('.')) {
                return;
            }

        }

        setNumber(number + numberString);

    }

    return {
        // Props
        formula,
        number,
        prevNumber,

        // Methods
        buildNumber
    }

}

