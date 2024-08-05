import { calculateComplexity, OtherStringUtils, toUpperCaseWithCb } from "../../app/doubles/OtherUtils"

//mocking modules
jest.mock('../../app/doubles/OtherUtils', ()=>({
    ...jest.requireActual('../../app/doubles/OtherUtils'),
    calculateComplexity: ()=>{return 10}
}));

jest.mock('uuid', ()=>({
    v4: ()=>'123'
}))

import * as OtherUtils from '../../app/doubles/OtherUtils';

describe('module tests', ()=>{


    test('calculate complexity', ()=>{
        const result = OtherUtils.calculateComplexity({} as any);
        expect(result).toBe(10);
    })

    test('keep other functions', ()=>{
        const result = OtherUtils.toUpperCase('abc');
        expect(result).toBe('ABC');
    })

    test('string with id', ()=>{
        const result = OtherUtils.toLowerCaseWithId('ABC');
        expect(result).toBe('abc123');
    })
})

//stubs
describe('OtherUtils test suite', () => {

    it('Calculates complexity', () => {
        const someInfo = {
            length: 5,
            extraInfo: {
                field1: 'someInfo',
                field2: 'someOtherInfo'
            }
        }

        const actual = calculateComplexity(someInfo as any);
        expect(actual).toBe(10);
    })
})

//Fakes
describe('OtherUtils test suite', () => {

    it('ToUpperCase - calls callback for invalid argument', () => {
        const actual = toUpperCaseWithCb('', () => { });
        expect(actual).toBeUndefined();
    })

    it('ToUpperCase - calls callback for valid argument', () => {
        const actual = toUpperCaseWithCb('abc', () => { });
        expect(actual).toBe('ABC');
    })



    it('Calculates complexity', () => {
        const someInfo = {
            length: 5,
            extraInfo: {
                field1: 'someInfo',
                field2: 'someOtherInfo'
            }
        }

        const actual = calculateComplexity(someInfo as any);
        expect(actual).toBe(10);
    })
})

//Mocks
describe('Tracking callbacks with Jest mocks', () => {

    const callBackMock = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('calls callback for invalid argument - track calls', () => {
        const actual = toUpperCaseWithCb('', callBackMock);
        expect(actual).toBeUndefined();
        expect(callBackMock).toHaveBeenCalledWith('Invalid argument!')
        expect(callBackMock).toHaveBeenCalledTimes(1);
    })

    it('calls callback for valid argument - track calls', () => {
        const actual = toUpperCaseWithCb('abc', callBackMock);
        expect(actual).toBe('ABC')
        expect(callBackMock).toHaveBeenCalledWith('called function with abc')
        expect(callBackMock).toHaveBeenCalledTimes(1);
    })
});
//mocks
describe('Tracking callbacks', () => {

    let cbArgs = [];
    let timesCalled = 0;

    function callBackMock(arg: string) {
        cbArgs.push(arg);
        timesCalled++;
    }

    afterEach(() => {
        // clearing tracking fields:
        cbArgs = [];
        timesCalled = 0;
    })

    it('calls callback for invalid argument - track calls', () => {
        const actual = toUpperCaseWithCb('', callBackMock);
        expect(actual).toBeUndefined();
        expect(cbArgs).toContain('Invalid argument!');
        expect(timesCalled).toBe(1);
    })

    it('calls callback for valid argument - track calls', () => {
        const actual = toUpperCaseWithCb('abc', callBackMock);
        expect(actual).toBe('ABC')
        expect(cbArgs).toContain('called function with abc');
        expect(timesCalled).toBe(1);
    })
})

//Spies
describe('OtherStringUtils tests with spies', () => {

    let sut: OtherStringUtils;

    beforeEach(() => {
        sut = new OtherStringUtils();
    });

    test('Use a spy to track calls', () => {
        const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
        sut.toUpperCase('asa');
        expect(toUpperCaseSpy).toHaveBeenCalledWith('asa');
    });

    test('Use a spy to track calls to other module', () => {
        const consoleLogSpy = jest.spyOn(console, 'log');
        sut.logString('abc');
        expect(consoleLogSpy).toHaveBeenCalledWith('abc');
    });

    test('Use a spy to replace the implementation of a method', () => {

        jest.spyOn(sut, 'callExternalService').mockImplementation(() => {
            console.log('calling mocked implementation!!!')
        });
        sut.callExternalService();
    });

});