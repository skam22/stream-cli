import { expect, test } from '@oclif/test';

describe.skip('config', () => {
    test.stdout()
        .command(['config:get'])
        .it('returns a table with api credentials', ctx => {
            expect(ctx.stdout).to.have.all.keys(['apiKey', 'apiSecret']);
        });
});
