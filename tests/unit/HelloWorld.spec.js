import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  

  it('always pass', () => {
    const msg = 'gg';
    expect(msg).equal('gg')
  });

  it('always fail', () => {
    const msg = 'gx';
    expect(msg).equal('gg')
  });
});
