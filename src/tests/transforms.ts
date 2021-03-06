import * as csx from '../index';
import * as assert from 'assert';

describe('transform()', () => { 
    it('transform takes no arguments and returns none', () => {
        const value = csx.transform();
        assert(value, 'none');
    })
    it('transform takes one argument and returns it as a string', () => {
        const value = csx.transform(csx.scale(1));
        assert(value, 'scale(1)');
    })
    it('transform takes more than one argument and delimits it by a space', () => {
        const value = csx.transform(
            csx.translateX('20deg'),
            csx.rotate('0.5rem')
        );
        assert(value, 'translateX(20deg) rotate(0.5rem)');
    })
});
describe('matrix()', () => { 
    it('matrix is output to string', () => {
        const value = csx.matrix(0, 1, 2, 3, 4, 5);
        assert(value, 'matrix(0,1,2,3,4,5)');
    })
});
describe('matrix3d()', () => { 
    it('matrix3d is output to string', () => {
        const value = csx.matrix3d(0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5);
        assert(value, 'matrix3d(0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5)');
    })
});
describe('perspective()', () => { 
    it('perspective is output to string', () => {
        const value = csx.perspective(`200px`);
        assert(value, 'perspective(200px)');
    })
});
describe('rotate()', () => { 
    it('rotate is output to string', () => {
        const value = csx.rotate('20deg');
        assert(value, 'rotate(20deg)');
    })
});
describe('rotate3d()', () => { 
    it('rotate3d is output to string', () => {
        const value = csx.rotate3d(0, 0, '0.5turn');
        assert(value, 'rotate3d(0,0,0.5turn)');
    })
});
describe('rotateX()', () => { 
    it('rotateX is output to string', () => {
        const value = csx.rotateX('1turn');
        assert(value, 'rotateX(1turn)');
    })
});
describe('rotateY()', () => { 
    it('rotateY is output to string', () => {
        const value = csx.rotateY('45rad');
        assert(value, 'rotateY(45rad)');
    })
});
describe('rotateZ()', () => { 
    it('rotateZ is output to string', () => {
        const value = csx.rotateZ('90deg');
        assert(value, 'rotateZ(90deg)');
    })
});
describe('scale()', () => { 
    it('scale(xy) is output to string', () => {
        const value = csx.scale(1);
        assert(value, 'scale()');
    })

    it('scale(x,y) is output to string', () => {
        const value = csx.scale(1, 2);
        assert(value, 'scale(1,2)');
    })
});
describe('scale3d()', () => { 
    it('scale3d is output to string', () => {
        const value = csx.scale3d(0, 0, 2);
        assert(value, 'scale3d(0,0,2)');
    })
});
describe('scaleX()', () => { 
    it('scaleX is output to string', () => {
        const value = csx.scaleX(1.1);
        assert(value, 'scaleX(1.1)');
    })
});
describe('scaleY()', () => { 
    it('scaleY is output to string', () => {
        const value = csx.scaleY(1.1);
        assert(value, 'scaleY(1.1)');
    })
});
describe('scaleZ()', () => { 
    it('scaleZ is output to string', () => {
        const value = csx.scaleZ(1.1);
        assert(value, 'scaleZ(1.1)');
    })
});
describe('skew()', () => { 
    it('skew is output to string', () => {
        const value = csx.skew('0.5turn');
        assert(value, 'skew(0.5turn)');
    })
});
describe('skewX()', () => { 
    it('skewX is output to string', () => {
        const value = csx.skewX('0.5turn');
        assert(value, 'skewX(0.5turn)');
    })
});
describe('skewY()', () => { 
    it('skewY is output to string', () => {
        const value = csx.skewY('0.5turn');
        assert(value, 'skewY(0.5turn)');
    })
});
describe('translate()', () => { 
    it('translate(xy) is output to string', () => {
        const value = csx.translate('20px');
        assert(value, 'translate(20px)');
    })
    it('translate(x,y) is output to string', () => {
        const value = csx.translate('20px', '30px');
        assert(value, 'translate(20px,30px)');
    })
});
describe('translate3d()', () => { 
    it('translate3d is output to string', () => {
        const value = csx.translate3d(0, 0, '20em');
        assert(value, 'translate3d(0,0,20em)');
    })
});
describe('translateX()', () => { 
    it('translateX is output to string', () => {
        const value = csx.translateX('1rem');
        assert(value, 'translateX(1rem)');
    })
});
describe('translateY()', () => { 
    it('translateY is output to string', () => {
        const value = csx.translateY('1rem');
        assert(value, 'translateY(1rem)');
    })
});
describe('translateZ()', () => { 
    it('translateZ is output to string', () => {
        const value = csx.translateZ('1rem');
        assert(value, 'translateZ(1rem)');
    })
});