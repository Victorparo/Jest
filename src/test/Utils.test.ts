import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils"

/**
 * @description utilizando montagem e desmontagem no teste, sequencia repetitiva
 * de inicialização da classe pode ser colocada no beforeEach
 */
describe('StringUtils tests', ()=>{

    let sut: StringUtils;

    //Montagem
    beforeEach(()=>{
        sut = new StringUtils();
        console.log('Setup')
    })
    //Desmontagem
    afterEach(()=>{
        // clearing mocks
        console.log('Teardown')
    })

    it('Should return correct upperCase', ()=>{
        const actual = sut.toUpperCase('abc');

        expect(actual).toBe('ABC');
        console.log('Actual test')
    })

    /**
     * @description testes de error
     */
    it('Should throw error on invalid argument - function', ()=>{
        function expectError() {
            const actual = sut.toUpperCase('');
        }            
        expect(expectError).toThrow();
        expect(expectError).toThrow('Invalid argument!');
    })

    it('Should throw error on invalid argument - arrow function', ()=>{      
        expect(()=>{
            sut.toUpperCase('');
        }).toThrow('Invalid argument!');
    })

    it('Should throw error on invalid argument - try catch block', (done)=>{             
        try {
            sut.toUpperCase('');
            done('GetStringInfo should throw error for invalid arg!')
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'Invalid argument!');
            done()
        }

    })

});

/**
 * @description os testes precisam ser estruturados 
 */
describe(" Utils test suite  ", () => {

    it(" should return uppercase of valid string ", () => {
        //arrage:
        const sut = toUpperCase
        const arg = 'abc'
        const expected = 'ABC'

        //act:
        const actual = sut(arg)

        // assert:
        expect(actual).toBe(expected)
    })

})

/**
 * @description os testes tem que ser separados e independentes 
 */
describe('getStringInfo for arg My-String should', ()=>{

    test('return right length', ()=>{
        const actual = getStringInfo('My-String');
        expect(actual.characters).toHaveLength(9);
    });
    test('return right lower case', ()=>{
        const actual = getStringInfo('My-String');
        expect(actual.lowerCase).toBe('my-string');
    });
    test('return right upper case', ()=>{
        const actual = getStringInfo('My-String');
        expect(actual.upperCase).toBe('MY-STRING');
    });
    test('return right characters', ()=>{
        const actual = getStringInfo('My-String');
        expect(actual.characters).toEqual(['M', 'y', '-','S', 't', 'r','i', 'n', 'g']);
        expect(actual.characters).toContain<string>('M');
        expect(actual.characters).toEqual(
            expect.arrayContaining(['S', 't', 'r','i', 'n', 'g', 'M', 'y', '-'])
        );
    });
    test('return defined extra info', ()=>{
        const actual = getStringInfo('My-String');
        expect(actual.extraInfo).toBeDefined();
    });

    test('return right extra info', ()=>{
        const actual = getStringInfo('My-String');
        expect(actual.extraInfo).toEqual({})
    });

});

/**
 * @description utilizado quando se quer testar mais de um payload e saida
 * ao mesmo tempo
 */
describe('ToUpperCase examples', ()=>{
    it.each([
        {input:'abc', expected: 'ABC'},
        {input:'My-String', expected: 'MY-STRING'},
        {input:'def', expected: 'DEF'}
    ])('$input toUpperCase should be $expected', ({input, expected})=>{
        const actual = toUpperCase(input);
        expect(actual).toBe(expected);
    });
})